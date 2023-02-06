import Layout from '@/pages/Layout';
import Link from 'next/link';

const Exp = () => {
    return (
        <Layout>
            <nav>
                <Link href="/exp/product/transparent" legacyBehavior>
                    <a>product - transparent</a>
                </Link>
                <Link href="/exp/product/white" legacyBehavior>
                    <a>product - white</a>
                </Link>
                <Link href="/exp/product/row" legacyBehavior>
                    <a>product - row</a>
                </Link>
                <Link href="/exp/product/sell" legacyBehavior>
                    <a>product - sell</a>
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
