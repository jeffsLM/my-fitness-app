import 'styled-components';
import { ThemeType } from './src/styles/theme';

//typeof copy characteristics from Theme
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
