import { type ReactNode } from 'react';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { type TOCItemType } from 'fumadocs-core/server';
import { Breadcrumb } from '@/components/navigation';
import { cn } from '@/lib/utils';
import { BookIcon, UserIcon, BetterGovLogo } from '@/components/icons';

/**
 * Enhanced metadata interface for documentation pages
 */
export interface PageMetadata {
  title: string;
  description?: string;
  category?: string;
  order?: number;
  tags?: string[];
  lastUpdated?: string;
  author?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  relatedPages?: string[];
  icon?: string;
}

/**
 * Base page template props
 */
interface BasePageTemplateProps {
  metadata: PageMetadata;
  toc?: TOCItemType[];
  full?: boolean;
  children: ReactNode;
  className?: string;
}



/**
 * Page metadata header component
 */
function PageHeader({ metadata }: { metadata: PageMetadata }) {
  // Map icon names to components
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    BetterGovLogo,
    BookIcon,
    UserIcon,
  };
  
  const IconComponent = metadata.icon ? iconMap[metadata.icon] : null;
  
  return (
    <div className="mb-6 space-y-4">
      <Breadcrumb />
      
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          {IconComponent && (
            <IconComponent className="h-12 w-12 flex-shrink-0" aria-hidden="true" />
          )}
          <DocsTitle className="text-3xl font-bold">{metadata.title}</DocsTitle>
        </div>
        
        {metadata.description && (
          <DocsDescription className="text-lg text-muted-foreground">
            {metadata.description}
          </DocsDescription>
        )}
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {metadata.author && (
            <span>By {metadata.author}</span>
          )}
          {metadata.lastUpdated && (
            <span>Updated {new Date(metadata.lastUpdated).toLocaleDateString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Page footer with related content
 */
function PageFooter({ metadata }: { metadata: PageMetadata }) {
  const hasFooterContent = metadata.prerequisites?.length || metadata.relatedPages?.length;
  
  if (!hasFooterContent) return null;
  
  return (
    <div className="mt-12 pt-8 border-t space-y-6">
      {metadata.prerequisites && metadata.prerequisites.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
          <ul className="space-y-1">
            {metadata.prerequisites.map((prereq, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                • {prereq}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {metadata.relatedPages && metadata.relatedPages.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Related Pages</h3>
          <ul className="space-y-1">
            {metadata.relatedPages.map((page, index) => (
              <li key={index} className="text-sm">
                <a
                  href={page}
                  className="text-primary hover:underline"
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/**
 * Base documentation page template
 * Provides consistent layout and metadata handling for all documentation pages
 */
export function BasePageTemplate({
  metadata,
  toc,
  full = false,
  children,
  className,
}: BasePageTemplateProps) {
  return (
    <div className={cn('max-w-none', className)}>
      <DocsPage toc={toc} full={full}>
        <PageHeader metadata={metadata} />
        <DocsBody className="prose prose-slate max-w-none dark:prose-invert">
          {children}
        </DocsBody>
        <PageFooter metadata={metadata} />
      </DocsPage>
    </div>
  );
}

/**
 * Getting Started page template
 * Optimized for onboarding and setup documentation
 */
export function GettingStartedTemplate({
  metadata,
  toc,
  children,
}: Omit<BasePageTemplateProps, 'className'>) {
  return (
    <BasePageTemplate
      metadata={metadata}
      toc={toc}
      className="getting-started-page"
    >
      {children}
    </BasePageTemplate>
  );
}

/**
 * API Reference page template
 * Optimized for technical API documentation
 */
export function ApiReferenceTemplate({
  metadata,
  toc,
  children,
}: Omit<BasePageTemplateProps, 'className'>) {
  return (
    <BasePageTemplate
      metadata={metadata}
      toc={toc}
      className="api-reference-page"
    >
      <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 m-0">
          <BookIcon className="h-4 w-4 flex-shrink-0" />
          <span><strong>API Reference:</strong> Complete documentation with examples and parameters.</span>
        </div>
      </div>
      {children}
    </BasePageTemplate>
  );
}

/**
 * User Guide page template
 * Optimized for end-user tutorials and guides
 */
export function UserGuideTemplate({
  metadata,
  toc,
  children,
}: Omit<BasePageTemplateProps, 'className'>) {
  return (
    <BasePageTemplate
      metadata={metadata}
      toc={toc}
      className="user-guide-page"
    >
      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-2 text-sm text-green-800 dark:text-green-200 m-0">
          <UserIcon className="h-4 w-4 flex-shrink-0" />
          <span><strong>User Guide:</strong> Step-by-step instructions for using BetterGov features.</span>
        </div>
      </div>
      {children}
    </BasePageTemplate>
  );
}

/**
 * Contributing page template
 * Optimized for contributor guidelines and development docs
 */
export function ContributingTemplate({
  metadata,
  toc,
  children,
}: Omit<BasePageTemplateProps, 'className'>) {
  return (
    <BasePageTemplate
      metadata={metadata}
      toc={toc}
      className="contributing-page"
    >
      {children}
    </BasePageTemplate>
  );
}