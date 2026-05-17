import React from 'react';
import { getPageImage, source } from '@/lib/source';
import { notFound, redirect } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { TOCItemType } from 'fumadocs-core/toc';
import {
  BasePageTemplate,
  GettingStartedTemplate,
  ApiReferenceTemplate,
  UserGuideTemplate,
  ContributingTemplate,
  type PageMetadata,
} from '@/components/page-templates';

function renderPageTemplate({
  metadata,
  slug,
  toc,
  children,
}: {
  metadata: PageMetadata;
  slug?: string[];
  toc?: TOCItemType[];
  children: React.ReactNode;
}) {
  const path = slug?.join('/') || '';
  
  if (metadata.category === 'getting-started' || path.startsWith('getting-started')) {
    return (
      <GettingStartedTemplate metadata={metadata} toc={toc}>
        {children}
      </GettingStartedTemplate>
    );
  }
  
  if (metadata.category === 'api' || path.startsWith('developer/api')) {
    return (
      <ApiReferenceTemplate metadata={metadata} toc={toc}>
        {children}
      </ApiReferenceTemplate>
    );
  }
  
  if (metadata.category === 'user-guide' || path.startsWith('user')) {
    return (
      <UserGuideTemplate metadata={metadata} toc={toc}>
        {children}
      </UserGuideTemplate>
    );
  }
  
  if (metadata.category === 'contributing' || path.startsWith('contributing')) {
    return (
      <ContributingTemplate metadata={metadata} toc={toc}>
        {children}
      </ContributingTemplate>
    );
  }
  
  return (
    <BasePageTemplate metadata={metadata} toc={toc}>
      {children}
    </BasePageTemplate>
  );
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
  
  return renderPageTemplate({
    metadata,
    slug: params.slug,
    toc: page.data.toc,
    children: (
      <MDX
        components={getMDXComponents({
          // this allows you to link to other pages with relative file paths
          a: createRelativeLink(source, page),
        })}
      />
    ),
  });
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
