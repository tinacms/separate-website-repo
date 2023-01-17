import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../../.tina/__generated__/client";

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Layout>
      <h1>{data.post.title}</h1>
      <hr />
      <p>{data.post.body}</p>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.postConnection();
  const paths = data.postConnection.edges.map(({ node }) => {
    return { params: { slug: node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: params.slug + ".md",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};
