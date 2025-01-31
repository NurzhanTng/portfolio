import { Layout } from '@/widgets/Layout';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark">
      <Layout className="w-full py-8 !flex !flex-row !items-center !justify-between">
        <span>2025 &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>{' '}
          by&nbsp;
          <Link to="/" className="underline underline-offset-2" target="_blank">
            Nurzhan Tangatarov
          </Link>
        </div>
        <Link to="/" className="underline underline-offset-2" target="_blank">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};
