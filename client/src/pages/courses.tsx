import Head from "next/head";

import { MainLayout } from "@src/components/layout/MainLayout";

const Courses = () => {
  return (
    <MainLayout>
      <Head>
        <title key="title">Discover Courses | Dooee</title>
        <meta
          name="description"
          content="Find all of your previous purchased courses. Start learning today"
        />
      </Head>
    </MainLayout>
  );
};

export default Courses;
