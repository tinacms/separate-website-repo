This is a [Tina CMS](https://tina.io/) project.

## Create the content repository

Well start with a simple `.mdx` file, from the root of this repo run:

```
mkdir -p ../tina-demo-content/content/pages && touch ../tina-demo-content/content/pages/home.mdx && echo "Hello" >> ../tina-demo-content/content/pages/home.mdx
```

## Local Development

Install the project's dependencies:

```
yarn install
```

Run the project locally:

```
yarn dev
```

## Visit the page in edit mode

Open [http://localhost:3000/admin/index.html](http://localhost:3000/admin/index.html)

From here you can add more fields to you content models in `.tina/config.js`. [Visit the docs](https://tina.io/docs/schema/) to learn more about content modeling.

## Deploying your content repo

Since your content is in a separate repo, we'll want to use _that_ repo to connect to Tina Cloud.

Initialize Git in your content repo and push it to Github. From there [connect to Tina Cloud](https://tina.io/docs/tina-cloud/dashboard/projects/)

Once that's done, [create a token](https://tina.io/docs/tina-cloud/dashboard/projects/#read-only-tokens) for the `main` branch, or use `*` to allow all branches.

Switch back to this repo (your "website repo") and set up an `.env` file to use when connecting to Tina Cloud

```
cp .env.example .env
```

When you run `tinacms build`, it will use those credentials to connect to Tina Cloud rather than the local server:

```bash
yarn build
```

## Learn More

To learn more about Tina, take a look at the following resources:

- [Tina Docs](https://tina.io/docs)
- [Getting starter guide](https://tina.io/guides/tina-cloud/starter/overview/)

You can check out [Tina Github repository](https://github.com/tinacms/tinacms) - your feedback and contributions are welcome!

## [Deploy on Vercel](https://tina.io/guides/tina-cloud/add-tinacms-to-existing-site/deployment/)
