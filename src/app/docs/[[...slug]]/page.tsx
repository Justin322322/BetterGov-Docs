import React from 'react';
import { getPageImage, source } from '@/lib/source';
import { notFound, redirect } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import {
  BasePageTemplate,
  GettingStartedTemplate,
  ApiReferenceTemplate,
  UserGuideTemplate,
  ContributingTemplate,
  type PageMetadata,
} from '@/components/page-templates';

/**
 * Select appropriate template based on page category or path
 */
function getPageTemplate(category?: string, slug?: string[]) {
  const path = slug?.join('/') || '';
  
  if (category === 'getting-started' || path.startsWith('getting-started')) {
    return GettingStartedTemplate;
  }
  
  if (category === 'api' || path.startsWith('developer/api')) {
    return ApiReferenceTemplate;
  }
  
  if (category === 'user-guide' || path.startsWith('user')) {
    return UserGuideTemplate;
  }
  
  if (category === 'contributing' || path.startsWith('contributing')) {
    return ContributingTemplate;
  }
  
  return BasePageTemplate;
}

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  
  // If accessing /docs directly (no slug), redirect to about page
  if (!params.slug || params.slug.length === 0) {
    redirect('/docs/about');
  }
  
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  
  // Extract metadata from page data
  const metadata: PageMetadata = {
    title: page.data.title,
    description: page.data.description,
    category: page.data.category,
    order: page.data.order,
    tags: page.data.tags,
    lastUpdated: page.data.lastUpdated,
    author: page.data.author,
    difficulty: page.data.difficulty,
    prerequisites: page.data.prerequisites,
    relatedPages: page.data.relatedPages,
    icon: page.data.icon,
  };
  
  // Select appropriate template
  const Template = getPageTemplate(metadata.category, params.slug);

  return (
    <Template metadata={metadata} toc={page.data.toc}>
      <MDX
        components={getMDXComponents({
          // this allows you to link to other pages with relative file paths
          a: createRelativeLink(source, page),
        })}
      />
    </Template>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: { params: Promise<{ slug?: string[] }> },
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
