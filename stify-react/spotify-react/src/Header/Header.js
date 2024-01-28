import React from "react";
import './Header.css';

const Header = () => {
    return (
        <nav class="sidebar__navigation">
            <div class="logo">
                <a href="">
                    <img src="./src/assets/icons/logo-spotify.png" alt="Logo" />
                </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        <span class="fa fa-home"></span>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="fa fa-search"></span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}