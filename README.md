## Gatsby minimal boilerplate for quick start

### Preface

When I wanted start my new gatsby project, lost a lot of time searching a matching template for my needs.

[On gatsby starters page](https://www.gatsbyjs.org/starters/?v=2) are amazing templates with much features.
Unfortunately didn't find what I need it means:

- Typescript;
- cms (netlify, strapi etc.);
- styled-components;
- pagination;
- searcher;
- **No UI Library!!!**;

My search inspired me to create my own Gatsby starter with all above features.
My primary goal was as little as possible redundant styles which most users will be removing.

### General feature:

- **No UI Library!!!**
- Typescript and auto generate types with ([gatsby-plugin-graphql-codegen](https://www.gatsbyjs.org/packages/gatsby-plugin-graphql-codegen/)) helps;
- [Netlify CMS](https://www.netlifycms.org/) support. I plan add other cms handling;
- [styled-components](https://www.styled-components.com/);
- Blog posts and shop products taxonomy;
- [pagination](https://www.gatsbyjs.org/packages/gatsby-paginate/);
- [searcher with elasticlunr](https://www.gatsbyjs.org/packages/@gatsby-contrib/gatsby-plugin-elasticlunr-search/);

### How to develop

- Install dependencies with `yarn` or `npm` install

- Run the development server `yarn start` or `npm run start`

### Roadmap of project:

[Roadmap: https://trello.com/b/lzc2ebfZ/gatsby-minimal-boilerplate](https://trello.com/b/lzc2ebfZ/gatsby-minimal-boilerplate)

### Example

Example of app is deployed from branch `demo` with [Netlify](https://www.netlify.com/) helps.

Link to example: [gatsby-minimal-ui-boilerplate.netlify.com/](https://gatsby-minimal-ui-boilerplate.netlify.com/)
