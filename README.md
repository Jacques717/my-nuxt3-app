# Nuxt 3 Product Catalog

A simple product catalog built with Nuxt 3 and GraphQL, displaying products fetched from a GraphQL backend.

## Prerequisites

Before you begin, ensure you have:
- Node.js installed (v16 or higher recommended)
- A GraphQL backend running on `http://localhost:4000/graphql`

## Setup

1. Install the project dependencies:

```bash
npm install
```

2. Install additional required packages:

```bash
npm install graphql graphql-tag @graphql-tools/schema graphql-request
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

Make sure your GraphQL backend is running on port 4000 before starting the application.

## Project Structure

- `pages/`
  - `index.vue` - Welcome page
  - `products.vue` - Products listing page
- `plugins/`
  - `graphql-client.js` - GraphQL client configuration
- `app.vue` - Main application layout

## Features

- Welcome page with navigation
- Products listing page that fetches data from GraphQL backend
- Responsive navigation between pages
- Clean, minimal UI

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Additional Information

For more details about Nuxt 3, check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction).
