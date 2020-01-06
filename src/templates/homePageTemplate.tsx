import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

const HomePageTemplate: React.FC<{}> = props => {
  const siteTitle = 'Home Page'
  console.log(props)

  return (
    <Layout title={siteTitle}>
      <Seo title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <p>Welcome to your new Gatsby website. You are on your home page.</p>
      <p>
        This starter comes out of the box with styled components and Gatsby's
        default starter blog running on Netlify CMS.
      </p>
      <p>Now go build something great!</p>
    </Layout>
  )
}

export default HomePageTemplate

export const pageQuery = graphql`
  query IndexPage {
    mdx(id: { eq: "2995091f-088c-5268-9e60-cad086738ecb" }) {
      frontmatter {
        description
        pageTemplate
        title
      }
      fields {
        slug
      }
    }
  }
`
