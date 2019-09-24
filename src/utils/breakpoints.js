import breakpoints from '../constants/breakpoints';

export default breakpoint =>
  `@media screen and (min-width: ${breakpoints[breakpoint]}px)`;
