import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

import { IndexPageQuery } from '../../types/graphql-types'

interface IndexPageProps {
  data: IndexPageQuery
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const pageContent = data.mdx

  return (
    <Layout title={pageContent.frontmatter.title}>
      <Seo
        title="Home"
        keywords={[
          `blog`,
          `pagination`,
          `searcher`,
          `gatsby`,
          `javascript`,
          `react`,
        ]}
      />
      <MDXRenderer>{pageContent.body}</MDXRenderer>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    mdx(id: { eq: "2995091f-088c-5268-9e60-cad086738ecb" }) {
      body
      frontmatter {
        title
      }
    }
  }
`
