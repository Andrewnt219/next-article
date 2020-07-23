import { Theme } from '@material-ui/core';
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
