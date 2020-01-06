import React from 'react'
import styled from 'styled-components'
import { Location } from '@reach/router'
import { Link } from 'gatsby'

import startupImg from '../../../content/assets/startup.png'

interface LayoutProps {
  title: string
}

interface HeroProps {
  image?: string
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Location>
      {({ location }) => (
        <Wrapper>
          <Hero image={startupImg}>
            <span>{title}</span>
          </Hero>
          <NavigationExample>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/products">Products</Link>
            <Link to="/404">404</Link>
          </NavigationExample>
          {console.log(location)}
          <PageContent>{children}</PageContent>
          <Footer>
            © {new Date().getFullYear()}, Built with
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </Wrapper>
      )}
    </Location>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 40px auto 100px;
`

const Hero = styled.div<HeroProps>`
  background: url(${({ image }) => (image ? image : '')}) center center
    no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  max-width: 980px;
  height: 60vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavigationExample = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 980px;
  margin: 0 auto;
  width: 100%;
`

const PageContent = styled.main`
  width: 100%;
  max-width: 980px;
  margin: 32px auto;
  min-height: 50vh;
  height: 100%;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`
