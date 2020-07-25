import Head from "next/head";

import { MainLayout } from "@src/components/layout/MainLayout";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { EverythingApiResponse } from "@src/@types/newsapi";
import { fetchNews } from "./api/search";

type Props = InferGetServerSidePropsType<typeof getServerSideProps> & {};
const Menu = ({ data }: Props) => {
  return (
    <MainLayout>
      <Head>
        <title key="title">Discover Courses | Dooee</title>
        <meta
          name="description"
          content="Find all of your previous purchased courses. Start learning today"
        />
      </Head>
      {JSON.stringify(data)};
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: EverythingApiResponse | string;
}> = async () => {
  const data = await fetchNews("english");
  return {
    props: { data },
  };
};

// async function getSearchResults(
//   query: string
// ): Promise<SearchResponse | string> {
//   try {
//     const { data } = await youtubeApi.get<SearchResponse>("/search", {
//       params: {
//         q: query + " tutorial",
//       },
//     });

//     return data;
//   } catch (error) {
//     return (error as AxiosError).message;
//   }
// }

export default Menu;
