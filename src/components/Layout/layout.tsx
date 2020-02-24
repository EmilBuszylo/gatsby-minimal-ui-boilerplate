import React from 'react';
import { Link } from 'gatsby';
import {
  createHistory,
  LocationProvider,
  createMemorySource,
} from '@reach/router';

interface LayoutProps {
  title: string;
}

const source = createMemorySource('/');
const history = createHistory(source);

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <LocationProvider history={history}>
      <div>
        <header>
          <h1>{title}</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/products">Products</Link>
          <Link to="/404">404</Link>
        </nav>
        <article>{children}</article>
        <footer>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </LocationProvider>
  );
};
