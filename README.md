This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

your-app/
├── .next/
├── node_modules/
├── public/
│ ├── favicon.ico
│ └── logo.svg
├── src/
│ ├── components/
│ │ ├── Common/
│ │ │ ├── Button/
│ │ │ ├── Input/
│ │ │ └── ...
│ │ └── Feature/
│ │ ├── FeatureComponentA/
│ │ └── FeatureComponentB/
│ ├── hooks/
│ │ ├── useCustomHookA.js
│ │ └── useCustomHookB.js
│ ├── lib/
│ │ ├── api/
│ │ │ ├── graphql.js (Apollo Client setup)
│ │ │ └── rest.js (REST API setup, if needed)
│ │ ├── utils/
│ │ │ ├── formatDate.js
│ │ │ └── ...
│ │ └── constants.js
│ ├── pages/
│ │ ├── \_app.js
│ │ ├── index.js
│ │ └── [dynamic].js
│ ├── styles/
│ │ ├── globals.css
│ │ └── theme.js (if using a theming library)
│ └── tests/
│ ├── components/
│ └── integration/
├── .babelrc
├── .eslintrc
├── .gitignore
├── next.config.js
├── package.json
└── README.md
