import Head from "next/head";

import { MainLayout } from "../components/layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title key="title">Welcome to Dooee</title>
        <meta
          name="description"
          content="Welcome to Dooee, an online platforms with hundreds of English courses, IELTS courses, TOELF courses, and so much more"
        />
      </Head>
    </MainLayout>
  );
};

export default Home;
