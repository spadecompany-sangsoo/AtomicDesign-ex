import Layout from '@/pages/Layout';
import getProduct from '@/libs/api/product/product-api';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '@/@types/product/product';
import ProductItem from '@/components/molecules/ProductItem';
import ProductTemplates from '@/components/templates/ProductTemplates';

const ProductPage = () => {
  const { data, isLoading, isSuccess } = useQuery<IProduct[]>(['product'], getProduct);
  return (
    <Layout>
      {isSuccess ? (
        <ProductTemplates>
          <ProductTemplates.ProductHead>
            <ProductTemplates.ProductHead.ProductTitle title="상품 리스트" />
          </ProductTemplates.ProductHead>
          <ProductTemplates.ProductList
            data={data}
            direction="col"
            renderListItem={(item) => <ProductItem item={item} key={item.id} type="white" />}
          />
        </ProductTemplates>
      ) : null}
    </Layout>
  );
};

export default ProductPage;
