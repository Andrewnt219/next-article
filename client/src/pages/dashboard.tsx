import Head from "next/head";

import { MainLayout } from "../components/layout/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <Head>
        <title key="title">Dashboard | Dooee</title>
        <meta
          name="description"
          content="Your personal dashboard, with your purchased courses, progress, achivement"
        />
      </Head>
    </MainLayout>
  );
};

export default Dashboard;
