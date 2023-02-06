import ProductWrap from '@/components/templates/ProductWrap';
import ProductList from '@/components/templates/ProductList';
import headphones from '@/public/img/img_headphones.png';
import Layout from '@/pages/Layout';

const row = () => {
    return (
        <Layout>
            {/*<ProductWrap direction="row">*/}
            {/*    {[1, 2, 3, 4, 5, 6].map((v, idx) => (*/}
            {/*        <ProductList*/}
            {/*            key={idx}*/}
            {/*            bg="white"*/}
            {/*            title="Apple AirPods Max - Space"*/}
            {/*            desc="Pro are sweat and water resistant for non-water sports and exercise. AirPods (3rd generation)"*/}
            {/*            imgSrc={headphones}*/}
            {/*            imgAlt="Apple AirPods Max - Space"*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</ProductWrap>*/}
        </Layout>
    );
};

export default row;
