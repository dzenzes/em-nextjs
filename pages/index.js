import Layout from "../components/Layout";

const Index = ({ name, version, ...props }) => {
  return (
    <Layout pageTitle={name}>
      <h1 className="title">Welcome to my blog!</h1>
      <p className="version">{version}</p>
      <main>Posts go here!</main>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const packageJson = await import(`../package.json`);

  return {
    props: {
      name: packageJson.name,
      version: packageJson.version,
    },
  };
}
