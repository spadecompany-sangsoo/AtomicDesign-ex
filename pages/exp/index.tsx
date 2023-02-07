import Layout from '@/pages/Layout';
import Link from 'next/link';

const Exp = () => {
  return (
    <Layout>
      <nav>
        <Link href="/exp/product" legacyBehavior>
          <a>product</a>
        </Link>
      </nav>
      <style jsx>{`
        nav a {
          display: block;
        }
      `}</style>
    </Layout>
  );
};

export default Exp;
