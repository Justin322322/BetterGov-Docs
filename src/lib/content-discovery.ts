import { source } from './source';
import { type InferPageType } from 'fumadocs-core/source';

export type PageType = InferPageType<typeof source>;

/**
 * Content discovery utilities for BetterGov documentation
 * Implements content routing logic and page relationships
 */

/**
 * Get all pages in a specific category
 */
export function getPagesByCategory(category: string): PageType[] {
  return source.getPages().filter(page => 
    page.data.category === category || 
    page.url.startsWith(`/docs/${category}`)
  );
}

/**
 * Get pages by tag
 */
export function getPagesByTag(tag: string): PageType[] {
  return source.getPages().filter(page => 
    page.data.tags?.includes(tag)
  );
}

/**
 * Get pages by difficulty level
 */
export function getPagesByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): PageType[] {
  return source.getPages().filter(page => 
    page.data.difficulty === difficulty
  );
}

/**
 * Get related pages based on tags and category
 */
export function getRelatedPages(currentPage: PageType, limit: number = 5): PageType[] {
  const allPages = source.getPages();
  const currentTags = currentPage.data.tags || [];
  const currentCategory = currentPage.data.category;
  
  // Score pages based on relevance
  const scoredPages = allPages
    .filter(page => page.url !== currentPage.url) // Exclude current page
    .map(page => {
      let score = 0;
      
      // Same category gets higher score
      if (page.data.category === currentCategory) {
        score += 3;
      }
      
      // Shared tags increase score
      const pageTags = page.data.tags || [];
      const sharedTags = currentTags.filter(tag => pageTags.includes(tag));
      score += sharedTags.length * 2;
      
      // Same difficulty level gets bonus
      if (page.data.difficulty === currentPage.data.difficulty) {
        score += 1;
      }
      
      return { page, score };
    })
    .filter(({ score }) => score > 0) // Only include pages with some relevance
    .sort((a, b) => b.score - a.score) // Sort by relevance score
    .slice(0, limit) // Limit results
    .map(({ page }) => page);
  
  return scoredPages;
}

/**
 * Get navigation context for a page (previous/next)
 */
export function getPageNavigation(currentPage: PageType): {
  previous?: PageType;
  next?: PageType;
} {
  const categoryPages = getPagesByCategory(currentPage.data.category || '')
    .sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
  
  const currentIndex = categoryPages.findIndex(page => page.url === currentPage.url);
  
  return {
    previous: currentIndex > 0 ? categoryPages[currentIndex - 1] : undefined,
    next: currentIndex < categoryPages.length - 1 ? categoryPages[currentIndex + 1] : undefined,
  };
}

/**
 * Search pages by title, description, and tags
 * Optimized for metadata-based search (faster than full-text)
 */
export function searchPages(query: string): PageType[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  return source.getPages().filter(page => {
    const titleMatch = page.data.title.toLowerCase().includes(searchTerm);
    const descriptionMatch = page.data.description?.toLowerCase().includes(searchTerm);
    const tagMatch = page.data.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
    const categoryMatch = page.data.category?.toLowerCase().includes(searchTerm);
    
    return titleMatch || descriptionMatch || tagMatch || categoryMatch;
  });
}

/**
 * Advanced search with filters and sorting
 */
export function advancedSearch(options: {
  query?: string;
  tags?: string[];
  category?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  sortBy?: 'title' | 'date' | 'relevance';
}): PageType[] {
  let results = source.getPages();
  
  // Apply filters
  if (options.query) {
    results = searchPages(options.query);
  }
  
  if (options.tags?.length) {
    results = results.filter(page => 
      options.tags!.some(tag => page.data.tags?.includes(tag))
    );
  }
  
  if (options.category) {
    results = results.filter(page => page.data.category === options.category);
  }
  
  if (options.difficulty) {
    results = results.filter(page => page.data.difficulty === options.difficulty);
  }
  
  // Apply sorting
  if (options.sortBy === 'title') {
    results.sort((a, b) => a.data.title.localeCompare(b.data.title));
  }
  
  return results;
}

/**
 * Get page statistics
 */
export function getContentStats() {
  const pages = source.getPages();
  
  const stats = {
    total: pages.length,
    byCategory: {} as Record<string, number>,
    byDifficulty: {} as Record<string, number>,
    byTag: {} as Record<string, number>,
  };
  
  pages.forEach(page => {
    // Count by category
    const category = page.data.category || 'uncategorized';
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
    
    // Count by difficulty
    const difficulty = page.data.difficulty || 'unspecified';
    stats.byDifficulty[difficulty] = (stats.byDifficulty[difficulty] || 0) + 1;
    
    // Count by tags
    page.data.tags?.forEach(tag => {
      stats.byTag[tag] = (stats.byTag[tag] || 0) + 1;
    });
  });
  
  return stats;
}

/**
 * Get recently updated pages
 */
export function getRecentlyUpdatedPages(limit: number = 10): PageType[] {
  return source.getPages()
    .filter(page => page.data.lastUpdated)
    .sort((a, b) => {
      const dateA = new Date(a.data.lastUpdated!);
      const dateB = new Date(b.data.lastUpdated!);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, limit);
}

/**
 * Validate content structure
 */
export function validateContentStructure(): {
  valid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  const pages = source.getPages();
  
  // Check for pages without titles
  const pagesWithoutTitles = pages.filter(page => !page.data.title);
  if (pagesWithoutTitles.length > 0) {
    issues.push(`${pagesWithoutTitles.length} pages missing titles`);
  }
  
  // Check for pages without descriptions
  const pagesWithoutDescriptions = pages.filter(page => !page.data.description);
  if (pagesWithoutDescriptions.length > 0) {
    issues.push(`${pagesWithoutDescriptions.length} pages missing descriptions`);
  }
  
  // Check for orphaned pages (no category)
  const orphanedPages = pages.filter(page => !page.data.category);
  if (orphanedPages.length > 0) {
    issues.push(`${orphanedPages.length} pages without categories`);
  }
  
  return {
    valid: issues.length === 0,
    issues,
  };
}