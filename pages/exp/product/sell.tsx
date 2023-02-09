import Layout from '@/pages/Layout';
import getProduct from '@/libs/api/product/product-api';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '@/@types/product/product';
import ProductItemSell from '@/components/molecules/ProductItemSell';
import ProductTemplates from '@/components/templates/ProductTemplates';

const ProductSellPage = () => {
  const { data, isLoading, isSuccess } = useQuery<IProduct[]>(['product'], getProduct);
  return (
    <Layout>
      {isSuccess ? (
        <ProductTemplates>
          <ProductTemplates.ProductHead>
            <ProductTemplates.ProductHead.ProductTitle title="상품 팔기" />
          </ProductTemplates.ProductHead>
          <ProductTemplates.ProductList
            data={data}
            direction="row"
            renderListItem={(item) => <ProductItemSell item={item} key={item.id} />}
          />
        </ProductTemplates>
      ) : null}
    </Layout>
  );
};

export default ProductSellPage;
