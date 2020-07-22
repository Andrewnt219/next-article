import Head from "next/head";

import { MainLayout } from "@src/components/layout/MainLayout";

import { youtubeApi } from "@src/apis/youtube.api";
import { AxiosError } from "axios";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { SearchResponse } from "@src/@types/youtubeApi";

type Props = InferGetServerSidePropsType<typeof getServerSideProps> & {};
const Courses = ({ data }: Props) => {
  return (
    <MainLayout>
      <Head>
        <title key="title">Discover Courses | Dooee</title>
        <meta
          name="description"
          content="Find all of your previous purchased courses. Start learning today"
        />
      </Head>

      <p>{JSON.stringify(data)}</p>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: SearchResponse | string;
}> = async () => {
  const data = await getSearchResults("english");
  return {
    props: { data },
  };
};

async function getSearchResults(
  query: string
): Promise<SearchResponse | string> {
  try {
    const { data } = await youtubeApi.get<SearchResponse>("/search", {
      params: {
        q: query,
      },
    });

    return data;
  } catch (error) {
    return (error as AxiosError).message;
  }
}

export default Courses;
