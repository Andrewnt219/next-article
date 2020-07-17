import styled from 'styled-components';
import Head from 'next/head';
import Button from '@material-ui/core/Button';
import { wrapper } from '../app/store';

import { add, countSelector } from '../features/countSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();
  return (
    <Page>
      <Head>
        <title key="title">Welcome to Dooee</title>
      </Head>

      <StyledButton color="secondary">{count}</StyledButton>
      <StyledButton
        color="primary"
        onClick={() => dispatch(add({ amount: 1 }))}
      >
        +1
      </StyledButton>
    </Page>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(add({ amount: 100 }));
  return {
    props: {},
  };
});

const Page = styled.div``;

const StyledButton = styled(Button)`
  text-transform: lowercase;
`;

export default Home;
