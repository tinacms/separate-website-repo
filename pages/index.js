import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  if (!data?.page) {
    return <h2>404</h2>;
  }

  return (
    <Layout>
      <TinaMarkdown content={data.page.body} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  try {
    const { data, query, variables } = await client.queries.page({
      relativePath: "home.mdx",
    });

    return {
      props: {
        data,
        query,
        variables,
        //myOtherProp: 'some-other-data',
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};
