import Layout from '@/pages/Layout';
import getProduct from '@/libs/api/product/product-api';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '@/@types/product/product';
import ProductTemplates from '@/components/templates/ProductTemplates';
import ProductItem from '@/components/molecules/ProductItem';
import headphones from '@/public/img/img_headphones.png';
import icPlus from '@/public/icon/ic_plus.svg';
import React, { useState } from 'react';
import ModalTemplates from '@/components/templates/ModalTemplates';
import TextXXLarge from '@/components/atoms/Text/TextXXLarge';

const ProductSellPage = () => {
  const { data, isLoading, isSuccess } = useQuery<IProduct[]>(['product'], getProduct);
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<IProduct>();
  const icClick = () => {
    alert('icClick');
  };

  const btnSellHandler = (id: number) => {
    const selectItem = data?.find((item) => item.id === id);
    setIsOpen(true);
    setSelect(selectItem);
  };

  const btnConfirmHandler = () => {
    alert(`id: ${select?.id}, name: ${select?.name}, desc: ${select?.desc}`);
    setIsOpen(false);
  };

  const btnCancelHandler = () => {
    alert('Cancel');
    setIsOpen(false);
  };

  return (
    <Layout>
      {isSuccess ? (
        <>
          <ProductTemplates>
            <ProductTemplates.ProductHead>
              <ProductTemplates.ProductHead.TitleXXLarge title="상품 팔기" />
            </ProductTemplates.ProductHead>
            <ProductTemplates.ProductList
              data={data}
              direction="row"
              renderListItem={(item) => (
                <ProductItem key={item.id}>
                  <ProductItem.ProductLargeImage imgSrc={headphones} imgAlt={item.name} />
                  <ProductItem.TitleMedium title={item.name} />
                  <ProductItem.TextMedium text={item.desc} />
                  <ProductItem.TextXXLarge text={item.price} className={'price_sell'} />
                  <ProductItem.ProductButton>
                    <ProductItem.ProductButton.IconButton
                      icSize={'medium'}
                      icState={'default'}
                      icDsiabled={false}
                      icSrc={icPlus}
                      icAlt="plus icon"
                      icOnClick={icClick}
                    />
                    <ProductItem.ProductButton.Button
                      text="Sell"
                      btnSize={'fr_1'}
                      btnState={'default'}
                      btnDsiabled={false}
                      btnOnClick={() => btnSellHandler(item.id)}
                    />
                  </ProductItem.ProductButton>
                </ProductItem>
              )}
            />
          </ProductTemplates>
          <ModalTemplates isOpen={isOpen}>
            <ModalTemplates.ModalSell>
              <ModalTemplates.ModalSell.ModalSellTxt itemName={select?.name} />
              <ModalTemplates.ModalSell.ModalSellBtn>
                <ModalTemplates.ModalSell.ModalSellBtn.Button
                  text="cancel"
                  btnSize={'medium'}
                  btnState={'destructive'}
                  btnDsiabled={false}
                  btnOnClick={btnCancelHandler}
                />
                <ModalTemplates.ModalSell.ModalSellBtn.Button
                  text="Sell"
                  btnSize={'medium'}
                  btnState={'default'}
                  btnDsiabled={false}
                  btnOnClick={btnConfirmHandler}
                />
              </ModalTemplates.ModalSell.ModalSellBtn>
            </ModalTemplates.ModalSell>
          </ModalTemplates>
        </>
      ) : null}
    </Layout>
  );
};

export default ProductSellPage;
