import Head from "next/head";

import { MainLayout } from "../components/layout/MainLayout";

const Search = () => {
  return (
    <MainLayout>
      <Head>
        <title key="title">Search | Dooee</title>
        <meta
          name="description"
          content="Search for any articles, dozen of filtering tools for the most accurate results"
        />
      </Head>
    </MainLayout>
  );
};

export default Search;
