"use client"
//imports
import React, { useState } from "react";
import { House, Chat, ChatCircleText } from '@phosphor-icons/react';
import colors from 'tailwindcss/colors';
import Image from 'next/image'
import Link from "next/link";
import './style.css';
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";

export default function Home() {
    //Variables iniciales
    const images = [
        { src: "/the-lagito-cartagena-de-indias-colombia.jpg" },
        { src: "/torreDelRelojFondo.png" },
        { src: "/barrio-getsemani.png" },
        {src:"/cartagena-noche.png"}
      ];

    return(
        //funciones 
        <div>

            <div className="fixed bottom-4 z-11 right-4 w-[100px] flex flex-row  bg-red-500 md:text-sm text-xs btn rounded-lg text-black px-1 py-2 ">
                
                <div className='right-3 top-3' style={{ userSelect: 'none' }}>
                    <ChatCircleText
                        size={25}
                        color={colors.slate[900]}
                    />
                </div>

                <Link href='#' className='flex justify-center items-center'>
                    <span> Lets chat</span>

                </Link>
                
            </div>

            <div className="flex flex-col bg-sky-100 ">

                <div >
                {/* CARUSELL */}

                    <div className='.navbar flex items-center justify-center bg-red-500  '>
                        navBar
                    </div>

                    <div className=" flex flex-row justify-center max-w-6x1 w-full  md:rounded-3xl md:items-center md:mb-20 h-[200px]  md:h-[520px] md:drop-shadow-3xl w-full ">

                        <ImageCarousel images={images} />

                        <div className=" absolute z-10   flex flex-col items-center justify-center mt-10    ">
                            <div className=" bg-black bg-opacity-50   rounded w-full p-2 ">
                                <h1 className="centralTextName font-serif  ">
                                    Turism match
                                </h1>
                            </div>
                            
                            <Link href='#' className=' items-center font-bold btn bg-white bg-opacity-40 rounded-lg text-black p-2'>
                                Book a trail  
                            </Link>
                        </div>
                        
                    </div>
                </div>
                
                
                <div className="flex flex-row bg-black mt-auto mb-0 md:h-[250px] h-[200px]  ">
                    
                    <div className=" flex flex-col text-left justify-center bg-black  whitespace-normal ml-10 pr-10 md:text-[40px] md:w-[200px]" >
                    
                            <span>
                            Welcome 
                            </span>
                            <span>
                            To Our Site 
                            </span>

                        
                    </div>
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
                    04 imagen de welcome de nuevo
                </div>

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

                <div className="bg-sky-300 mt-auto">
                    06
                </div>

            </div>
        </div>
    )
}
