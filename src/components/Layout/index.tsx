import { SEO } from 'components/SEO';
import { Sidebar } from 'components/Sidebar';
import { ReactNode } from 'react';
import { Wrapper } from './styles';

interface LayoutProps {
  children?: ReactNode;
  titleSEO?: string;
}

export function Layout({ children, titleSEO }: LayoutProps) {
  return (
    <Wrapper>
      <SEO title={titleSEO} />
      <Sidebar />
      {children}
    </Wrapper>
  );
}
