"use client"
//imports
import React, { useState } from "react";
import { House, Chat, ChatCircleText } from '@phosphor-icons/react';
import colors from 'tailwindcss/colors';
import Image from 'next/image'
import Link from "next/link";
import './style.css';
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";

import { TbChevronDown, TbMinusVertical } from 'react-icons/tb'
import ProductCard from '@/components/cart/ProductCard';
import Cart from '@/components/cart/Cart';

export default function Home() {

    //Variables iniciales
    const images = [
        { src: "/the-lagito-cartagena-de-indias-colombia.jpg" },
        { src: "/torreDelRelojFondo.png" },
        { src: "/barrio-getsemani.png" },
        { src: "/cartagena-noche.png" }
    ];

    const products = [
        { id: 1, name: 'Servicio 1', price: 10, src: "/chivaRumera.png", decription: 'text de descripcion text de descripcion text de descripcion' },
        { id: 2, name: 'Servicio 2', price: 20, src: "/isla.png", decription: '' },
        { id: 3, name: 'Servicio 3', price: 15, src: "/hisla5.png" },
    ];

    //funciones 1
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    const total = calculateTotal();

    return (
        //funciones 2


        //PAGINA
        <div>

            {/* BOTON FLOTANTE*/}
            <div className="fixed bottom-4 z-11 right-4 w-[100px] flex flex-row  bg-red-500 md:text-sm text-xs btn rounded-lg text-black px-1 py-2 ">

                <div className='right-3 top-3' style={{ userSelect: 'none' }}>
                    <ChatCircleText
                        size={25}
                        color={colors.slate[900]}
                    />
                </div>

                <Link href='#' className='flex justify-center items-center z-100'>
                    <span> Lets chat</span>

                </Link>

            </div>
            {/* HOME */}
            {/* BACKGRAUND */}

            <div className="flex flex-col bg-sky-100 ">


                <div>


                    {/* IMAGE CARUSELL */}

                    <div className="w-screen overflow-hidden relative">
                        <div className="  clip-hexagon  brightness-75">
                            <div className=" overflow-hidden flex flex-row justify-center  md:items-center  h-2/3  md:h-3/4s md:drop-shadow-3xl">


                                <ImageCarousel className="overflow-hidden" images={images} />

                                <div className=" absolute z-10   flex flex-col items-center justify-center mt-10    ">
                                    <div className=" bg-black bg-opacity-50   rounded w-full p-2 ">
                                        <h1 className="centralTextName font-serif  ">
                                            Turism mach
                                        </h1>
                                    </div>

                                    <Link href='#' className=' items-center font-bold btn bg-white bg-opacity-40 rounded-lg text-black p-2'>
                                        Book a trail
                                    </Link>

                                    


                                </div>  

                                {/* marco curbo */}
                                
                                <div className='wave relative flex justify-center items-center' preserveAspectRatio="none" >
                                    <div className="absolute -bottom-2  mb-4 z-100 ">
                                        <button className="relative backdrop-blur-sm overflow-hidden h-9 w-9 bg-black/75 hover:bg-red-500  text-white font-bold rounded-full flex items-center justify-center transition-all transform hove hover:scale-125">
                                            <div className="absolute duration-300 p-2 transform hover:translate-y-2 ">

                                                <TbChevronDown className='relative' size={40} color={colors.white} />
                                                <div className=" absolute pb-8 bottom-3 duration-300 transform hover:translate-y-6 z-100">
                                                    <TbMinusVertical size={40} color={colors.white} />

                                                </div>
                                            </div>
                                        </button>
                                    </div>

                                    <svg
                                        viewBox="0 0 500 150"
                                        preserveAspectRatio="none"
                                        style={{ height: '100%', width: '100%' }}
                                    >

                                        <path d="M0.00,49.98 C149.99,150.00 326.46,147.55 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#000000' }}></path>
                                    </svg>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>


                <div className="flex flex-row bg-black mt-auto mb-0 md:h-[250px] h-[200px]  ">

                    {/* Texto 1 */}
                    <div className=" flex flex-col text-left justify-center bg-black  whitespace-normal ml-10 pr-10 md:text-[40px] md:w-[200px]" >
                        <span>
                            Welcome
                        </span>
                        <span>
                            To Our Site
                        </span>


                    </div>
                    {/* Texto 2 */}
                    <div className=" flex flex-col text-left justify-center bg-black  whitespace-normal" >
                        The official page of your tourist city Cartagena de Indias,
                        where you will find the best services and tourist planes in a fast and comfortable way.
                    </div>
                </div>

                <div className=" mt-auto flex flex-col text-left justify-center items-center bg-black">
                    <Link href='#' className=' items-center md:text-sm text-xs btn rounded-lg text-with p-2'>
                        <span> {'< Read more >'}</span>
                    </Link>
                </div>

                <div className="bg-sky-300 mt-auto">
                    {/* 04 imagen de welcome de nuevo */}
                    04
                </div>


                {/* SHOPING */}
                <div className=" bg-black  mt-auto">
                    <div className="flex flex-wrap bg-black">
                        {/* IMAGEN */}
                        <div className="w-1/4 p-4">

                            <Image
                                className="bg-blue-500 hover:-translate-y-1 hover:scale-105   rounded-l-3xl hover:rounded-3xl rounded-duration-100"
                                src='/man-tourist-small.png'
                                alt='Welcome image'
                                width={500}
                                height={300}
                            />
                        </div>

                        {/* PRODUCTS */}
                        <div className="w-2/4">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                            ))}
                        </div>
                        {/* TOTAL PRODUCTS  */}
                        <div className=" w-1/4 ">
                            <div className=" border p-4 m-4 ">
                                <h2 className="text-xl font-semibold">Carrito de compras</h2>
                                <ul className="mt-2">
                                    {cart.map((item, index) => (
                                        <li key={index}>{item.name} - ${item.price}</li>
                                    ))}
                                </ul>
                                <p className="mt-4 font-semibold">Total: ${total}</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* SERVICES */}
                <div className="mt-auto flex flex-row text-left  bg-black ">
                    <div className="bg-red-500 bg-opacity-50 h-[200px] w-[100px]">
                        <span>
                            image
                        </span>
                    </div>
                    <div className="felx flex-col">
                        <div className="mt-0 top-0">
                            <span>
                                Our services
                            </span>
                        </div>
                        <div className="block felx flex-row">
                            <div className="felx flex-col md:text-sm text-xs">
                                <div>
                                    <span>les go to the party</span>
                                </div>
                                <div>
                                    <span>37.99 doll</span>
                                </div>
                            </div>

                            <div>
                                <Link href='#' className=' bg-red-500 items-center md:text-sm text-xs btn rounded-lg text-with p-2'>
                                    <span> Agregar al carrito</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                {/*  */}
                <div className="bg-sky-300 mt-auto">
                    06
                </div>

            </div>
        </div>
    )
}
