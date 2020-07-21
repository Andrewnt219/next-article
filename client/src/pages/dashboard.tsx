import styled from "styled-components";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import { wrapper } from "../app/store";

import { add, asyncCount, countSelector } from "../features/countSlice";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../components/layout/MainLayout";

const Dashboard = () => {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();
  return (
    <MainLayout>
      <Head>
        <title key="title">Dashboard | Dooee</title>
        <meta
          name="description"
          content="Your personal dashboard, with your purchased courses, progress, achivement"
        />
      </Head>

      <StyledButton color="secondary">{count}</StyledButton>
      <StyledButton
        color="primary"
        onClick={() => dispatch(add({ amount: 1 }))}
      >
        +1
      </StyledButton>
      <StyledButton color="primary" onClick={() => dispatch(asyncCount(1))}>
        +1 async
      </StyledButton>
    </MainLayout>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(add({ amount: 200 }));
  // store.dispatch(asyncCount(200));
  return {
    props: {},
  };
});

const StyledButton = styled(Button)`
  text-transform: lowercase;
`;

export default Dashboard;
