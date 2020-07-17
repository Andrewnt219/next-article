import { useRouter } from 'next/router';
import NextLink, { LinkProps } from 'next/link';
import MuiLink from '@material-ui/core/Link';
import { ReactElement, ReactNode } from 'react';

type ActiveLinkProps = LinkProps & {
  children: ReactNode;
};

function NavLink({ children, ...linkProps }: ActiveLinkProps): ReactElement {
  const router = useRouter();

  const style = {
    marginRight: 10,
    color: router.asPath === (linkProps.as ?? linkProps.href) ? 'red' : 'black',
  };

  return (
    <NextLink {...linkProps}>
      <MuiLink style={style}>{children}</MuiLink>
    </NextLink>
  );
}
export default NavLink;
