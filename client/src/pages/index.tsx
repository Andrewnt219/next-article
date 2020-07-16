import styled from 'styled-components';
import Head from 'next/head';
import Button from '@material-ui/core/Button';
import { wrapper } from '../app/store';

import { add, countSelector } from '../features/countSlice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const Home = () => {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();
  return (
    <Container>
      <Head>
        <title key="title">Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/other">
        <a>Other</a>
      </Link>
      <div>test</div>

      <StyledButton color="secondary">{count}</StyledButton>
      <StyledButton
        color="primary"
        onClick={() => dispatch(add({ amount: 1 }))}
      >
        +1
      </StyledButton>
    </Container>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(add({ amount: 100 }));
  return {
    props: {},
  };
});

const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
`;

const StyledButton = styled(Button)`
  text-transform: lowercase;
`;

export default Home;
