import Head from "next/head";

import { MainLayout } from "../components/layout/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <Head>
        <title key="title">How it works | Dooee</title>
        <meta
          name="description"
          content="This is why Dooee is your best online platform for studying english"
        />
      </Head>
    </MainLayout>
  );
};

export default About;
