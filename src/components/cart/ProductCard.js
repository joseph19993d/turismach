import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const ProductCard = ({ product, onAddToCart , images }) => {

    const [showElement, setShowElement] = useState(false);

    const handleShowClick = () => {
      setShowElement(!showElement);
    };

  return (
    <div className=" ">
        <div className='border p-4 m-4'>
            

            <div className='flex flex-row '>

                <div key='s' className="w-2/5  m-3 md:m-3 ">
                    <div className=''>
                        {
                        product.src
                        ? (
                        <div className='m-1'>
                            <button onClick={handleShowClick} >
                            {showElement 
                            ?(
                            <div className={`mt-4 ${showElement ? 'block' : 'hidden'}   p-4`}>
                                {
                                product.decription
                                ?('text de descripcion text de descripcion text de descripcion'
                                ):'no hay texto de descripcion'
                                }
                            </div>
                            ):
                            <Image
                                className="bg-blue-500  rounded rounded-duration-100"
                                src={product.src}
                                alt='Welcome image'
                                width={200}
                                height={300}
                            />}
                            </button>
                         
                        </div>
                        )

                        :<span> Imagen no disponible </span>
                        }
                    </div>
                </div>

                <div className="w-3/5  m-1">
                    <div>
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <button
                            onClick={() => onAddToCart(product)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;
