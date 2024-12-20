import React, { useContext } from 'react'; // Ensure useContext is imported
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                {/* Add a fallback for the image */}
                <img 
                    className='hover:scale-110 transition ease-in-out' 
                    src={image && image.length > 0 ? image[0] : 'fallback-image-url.jpg'} 
                    alt={name} 
                />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    );
};

export default ProductItem;
