import { defineConfig } from "tinacms";

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch: "main",
  // Relative to the _root_ of your repo
  localContentPath: "../../demo-content-repo",
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Page Content",
        name: "page",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            name: "body",
            label: "Main Content",
            type: "rich-text",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return undefined;
          },
        },
      },
      {
        label: "Blog Posts",
        name: "post",
        path: "content/post",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
          },
          {
            type: "string",
            label: "Blog Post Body",
            name: "body",
            isBody: true,
            ui: {
              component: "textarea",
            },
          },
        ],
        ui: {
          router: ({ document }) => {
            return `/posts/${document._sys.filename}`;
          },
        },
      },
    ],
  },
});

export default config;
