import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { LocationProvider } from '@reach/router';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { PaginationElement } from '../components/Pagination';

import { SitePageContext } from '../../types/graphql-types';

interface BlogProps {
  pageContext: SitePageContext;
}

const Blog: React.FC<BlogProps> = ({ pageContext }) => {
  const { group, index, first, last } = pageContext;
  const previousUrl = index - 1 == 1 ? '/blog' : `/blog/${index - 1}`;
  const nextUrl = `/blog/${index + 1}`;

  return (
    <LocationProvider>
      {locationContext => (
        <Layout title={'Blog'}>
          <Seo title="All posts" location={locationContext.location.pathname} />
          <div>
            {group.map(({ node }) => {
              return (
                <BlogPostLink
                  key={node.fields.slug}
                  to={`/blog${node.fields.slug}`}
                >
                  <small>{node.frontmatter.date}</small>
                  <h3>{node.frontmatter.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </BlogPostLink>
              );
            })}
            <Pagination>
              <PaginationElement
                test={first}
                url={previousUrl}
                text="Previous page"
              />
              <PaginationElement test={last} url={nextUrl} text="Next page" />
            </Pagination>
          </div>
        </Layout>
      )}
    </LocationProvider>
  );
};

export default Blog;

const BlogPostLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
