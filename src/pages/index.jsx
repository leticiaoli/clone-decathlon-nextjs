import React, { useState, useEffect } from 'react';
import Home from '../templates/Home'

import HeaderDesktop from "../components/HeaderDesktop";
import HeaderMobile from "../components/HeaderMobile";
import ShelfSports from "../components/ShelfSports";
import BannerSlide from "../components/BannerSlide";
import MoreWanted from "../components/MoreWanted";
import MenuDesktop from "../components/MenuDesktop";
import BannerAccessories from "../components/BannerAccessories";
import Footer from "../components/Footer";
import ListShelf from "../components/ListShelf";
import productsData from "../mock/shelfMock.json";


export default function index() {
  
  const [screenSize, setScreenSize] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenSize(window?.innerWidth)
    })
   
  }, [])

  return (
    <>
      <Home>
        {screenSize > 1024 ? (<HeaderDesktop />) : (<HeaderMobile />) }
        
        <MenuDesktop />

        <ShelfSports />

        <BannerSlide />
        
        <MoreWanted />

        <ListShelf products={productsData} />

        <BannerAccessories />

        <Footer />
        
      </Home>
    </>
  );
}
