import Layout from '@/pages/Layout';
import ProductWrap from '@/components/templates/ProductWrap';
import getProduct from '@/libs/api/product/product-api';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/@types/product/product';

const Index = () => {
  const { data, isLoading } = useQuery<Product[]>(['product'], getProduct);
  return <Layout>{data ? <ProductWrap data={data} direction="col" type="sell" /> : null}</Layout>;
};

export default Index;
