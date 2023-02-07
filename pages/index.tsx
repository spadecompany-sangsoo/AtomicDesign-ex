import Layout from '@/pages/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Layout>
        <nav>
          <Link href="/exp" legacyBehavior>
            <a>exp</a>
          </Link>
        </nav>
      </Layout>
    </>
  );
}
