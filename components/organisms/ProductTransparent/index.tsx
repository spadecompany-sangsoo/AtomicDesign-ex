import LargeImage from '@/components/atoms/LargeImage';
import ProductDesc from '@/components/molecules/ProductDesc';
import { StaticImageData } from 'next/image';
import CardTransparent from '@/components/atoms/CardTransparent';

interface IProductTransparent {
    title: string;
    desc: string;
    imgSrc: HTMLImageElement | string | StaticImageData;
    imgAlt: string;
}

const ProductTransparent = ({
    title,
    desc,
    imgSrc,
    imgAlt,
}: IProductTransparent) => {
    return (
        <CardTransparent>
            <LargeImage imgSrc={imgSrc} imgAlt={imgAlt} />
            <ProductDesc title={title} desc={desc} />
        </CardTransparent>
    );
};

export default ProductTransparent;
