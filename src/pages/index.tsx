import React, { useState } from "react";
import { login } from "@src/features/authSlice";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { MainLayout } from "../components/layout/MainLayout";

const Home = () => {
  let test1 = "2";
  let test2 = "2";
  useEffect(() => {
    const test3 = test1 + test2;
  }, [test1]);

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
