"use client"
import React, { useState } from "react";
import { House } from '@phosphor-icons/react';
import colors from 'tailwindcss/colors';
import './style.css';

export default function nav() {

    const [activeHomeLink, setActiveHomeLink] = useState(null);

    const handleLinkHomeClick = (index) => {
        setActiveHomeLink(index);
        setActiveTravelLink(null);
    };

    const [activeTravelLink, setActiveTravelLink] = useState(null);

    const handleLinkTravelClick = (index) => {
        setActiveTravelLink(index);
        setActiveHomeLink(null);
    };

    return (
        <main>
            <div>
                <div className="navigation flex justify-center mt-5">
                    <ul>
                        <li className="list-item relative group">
                            <a
                                href="#"
                                className={`nav-link ${activeHomeLink === 0 ? 'active' : ''}`}
                                onClick={() => handleLinkHomeClick(0)}
                            >
                                <span className="icon">
                                    <House color={colors.slate[500]} size={55} />
                                </span>
                            </a>
                            {/* <div className="absolute inset-y-0 left-0 w-2 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
                        </li>
                        <li className="list-item relative group">
                            <a
                                href="#"
                                className={`nav-link ${activeTravelLink === 0 ? 'active' : ''}`}
                                onClick={() => handleLinkTravelClick(0)}
                            >
                                <span className="icon">
                                    <House color={colors.slate[500]} size={55} />
                                </span>
                            </a>
                            {/* <div className="absolute inset-y-0 left-0 w-2 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
                        </li>
                       
                        {/* Agrega más elementos <li> aquí si es necesario */}
                    </ul>
                </div>
            </div>
        </main>
    );
}
