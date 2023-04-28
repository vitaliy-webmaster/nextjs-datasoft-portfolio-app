declare module 'next-page-transitions' {
  import { ComponentType } from 'react';

  interface PageTransitionProps {
    timeout?: number;
    classNames?: string;
    loadingDelayMs?: number;
    loadingIndicator?: JSX.Element;
    loadingClassNames?: string;
    loadingTimeout?: number;
    loadingComponent?: ComponentType<any>;
    loadingRouteKey?: string;
    skipInitialTransition?: boolean;
    animationDelay?: number;
    children?: React.ReactNode;
  }

  export const PageTransition: ComponentType<PageTransitionProps>;
}
