import styled from "styled-components";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import { wrapper } from "../app/store";

import { add, countSelector } from "../features/countSlice";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../components/layout/MainLayout";

const Home = () => {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();
  return (
    <MainLayout>
      <Head>
        <title key="title">Welcome to Dooee</title>
        <meta
          name="description"
          content="Welcome to Dooee, an online platforms with hundreds of English courses, IELTS courses, TOELF courses, and so much more"
        />
      </Head>

      <p style={{ color: "#f44336" }}>color test</p>

      <StyledButton color="secondary">{count}</StyledButton>
      <StyledButton
        color="primary"
        onClick={() => dispatch(add({ amount: 1 }))}
      >
        +1
      </StyledButton>
    </MainLayout>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(add({ amount: 100 }));
  return {
    props: {},
  };
});

const StyledButton = styled(Button)`
  text-transform: lowercase;
`;

export default Home;
