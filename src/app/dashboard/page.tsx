import type { Metadata } from 'next';
import Dashboard from './Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
};

const Page = () => {
  return <Dashboard />;
};

export default Page;
