import { FC } from 'react';
import Header from '../Header';

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
