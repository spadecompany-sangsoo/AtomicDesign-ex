import Layout from '@/pages/Layout';
import Link from 'next/link';

const Exp = () => {
  return (
    <Layout>
      <nav>
        <Link href="/exp/board/information" legacyBehavior>
          <a>information</a>
        </Link>
        <Link href="/exp/board/news/" legacyBehavior>
          <a>news</a>
        </Link>
        <Link href="/exp/board/paragraph" legacyBehavior>
          <a>paragraph</a>
        </Link>
        <Link href="/exp/dialog" legacyBehavior>
          <a>dialog</a>
        </Link>
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
