import Layout from '@/pages/Layout';
import Link from 'next/link';

const Exp = () => {
  return (
    <Layout>
      <nav>
        <Link href="/exp/board/information" legacyBehavior>
          <a>board - information</a>
        </Link>
        <Link href="/exp/board/news/" legacyBehavior>
          <a>board - news</a>
        </Link>
        <Link href="/exp/board/paragraph" legacyBehavior>
          <a>board - paragraph</a>
        </Link>
        <Link href="/exp/product" legacyBehavior>
          <a>product - product</a>
        </Link>
      </nav>
      <style jsx>{`
        nav a {
          display: block;
          padding: 10px 0;
          border-bottom: 1px solid #000;
        }
      `}</style>
    </Layout>
  );
};

export default Exp;
