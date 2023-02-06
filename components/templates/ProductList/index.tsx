import { ReactNode } from 'react';
import ProductWhite from '@/components/organisms/ProductWhite';
import ProductTransparent from '@/components/organisms/ProductTransparent';
import { StaticImageData } from 'next/image';

interface IProduct {
    bg?: string;
    title: string;
    desc: string;
    imgSrc: HTMLImageElement | string | StaticImageData;
    imgAlt: string;
}

const ProductList = ({ bg, title, desc, imgSrc, imgAlt }: IProduct) => {
    return (
        <>
            {bg === 'white' ? (
                <ProductWhite
                    title={title}
                    desc={desc}
                    imgSrc={imgSrc}
                    imgAlt={imgAlt}
                />
            ) : (
                <ProductTransparent
                    title={title}
                    desc={desc}
                    imgSrc={imgSrc}
                    imgAlt={imgAlt}
                />
            )}
        </>
    );
};

export default ProductList;
