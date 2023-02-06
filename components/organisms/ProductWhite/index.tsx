import LargeImage from '@/components/atoms/LargeImage';
import ProductDesc from '@/components/molecules/ProductDesc';
import { StaticImageData } from 'next/image';
import CardWhite from '@/components/atoms/CardWhite';

interface IProductWhite {
    title: string;
    desc: string;
    imgSrc: HTMLImageElement | string | StaticImageData;
    imgAlt: string;
}

const ProductWhite = ({ title, desc, imgSrc, imgAlt }: IProductWhite) => {
    return (
        <CardWhite>
            <LargeImage imgSrc={imgSrc} imgAlt={imgAlt} />
            <ProductDesc title={title} desc={desc} />
        </CardWhite>
    );
};

export default ProductWhite;
