import Layout from '@/pages/Layout';
import getProduct from '@/libs/api/product/product-api';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '@/@types/product/product';
import ProductItem from '@/components/molecules/ProductItem';
import ProductTemplates from '@/components/templates/ProductTemplates';
import headphones from '@/public/img/img_headphones.png';

const ProductPage = () => {
  const { data, isLoading, isSuccess } = useQuery<IProduct[]>(['product'], getProduct);
  return (
    <Layout>
      {isSuccess ? (
        <ProductTemplates>
          <ProductTemplates.ProductHead>
            <ProductTemplates.ProductHead.TitleXXLarge title="상품 리스트" />
          </ProductTemplates.ProductHead>
          <ProductTemplates.ProductList
            data={data}
            direction="col"
            renderListItem={(item) => (
              <ProductItem key={item.id}>
                <ProductItem.ProductLargeImage imgSrc={headphones} imgAlt={item.name} />
                <ProductItem.TitleMedium title={item.name} />
                <ProductItem.TextMedium text={item.desc} className="product_desc" />
              </ProductItem>
            )}
          />
        </ProductTemplates>
      ) : null}
    </Layout>
  );
};

export default ProductPage;
