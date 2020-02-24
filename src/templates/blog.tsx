import React from 'react';
import { Link, graphql } from 'gatsby';
import { LocationProvider } from '@reach/router';

import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';
import { PaginationElement } from '../components/Pagination';

import { Unnamed_1_Query, SitePageContext } from '../../types/graphql-types';

interface BlogProps {
  data: Unnamed_1_Query;
  pageContext: SitePageContext;
}

const Blog: React.FC<BlogProps> = ({ pageContext, data }) => {
  const { group, index, first, last } = pageContext;
  const previousUrl = index - 1 == 1 ? '/blog' : `/blog/${index - 1}`;
  const nextUrl = `/blog/${index + 1}`;

  const siteTitle = data.site.siteMetadata.title;
  return (
    <LocationProvider>
      {locationContext => (
        <Layout title={siteTitle}>
          <Seo title="All posts" location={locationContext.location.pathname} />
          <div>
            {group.map(({ node }) => {
              return (
                <Link key={node.fields.slug} to={`/blog${node.fields.slug}`}>
                  <small>{node.frontmatter.date}</small>
                  <h3>{node.frontmatter.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </Link>
              );
            })}
            <div>
              <PaginationElement
                test={first}
                url={previousUrl}
                text="Previous page"
              />
              <PaginationElement test={last} url={nextUrl} text="Next page" />
            </div>
          </div>
        </Layout>
      )}
    </LocationProvider>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
