import Layout from "@/pages/Layout";
import ProductWrap from "@/components/templates/ProductWrap";
import {useEffect, useState} from "react";

const Templates = () => {
    const [product, setProduct] = useState(null);
    const getProduct = async () => {
        const response = await fetch('/api/product');
        const json = await response.json();
        setProduct(json);
    }
    useEffect(() => {
        getProduct();
    }, []);

    console.log(product);
    return <Layout>
        <ProductWrap direction="col" />
    </Layout>
}

export default Templates;