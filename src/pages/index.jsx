import React, { useState, useEffect } from 'react';
import Home from '../templates/Home';

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
import OneBanner from "../components/OneBanner";
import BtnDownloadApp from "../components/BtnDownloadApp";
import SuggestionBanner from "../components/SuggestionBanner";
import SlideMarks from "../components/SlideMarks";
import ServicesBanner from "../components/ServicesBanner";

export default function index() {

  const [screenSize, setScreenSize] = useState(0)
  useEffect(() => {
    setScreenSize(window?.innerWidth)
    window.addEventListener('resize', () => {
      setScreenSize(window?.innerWidth)
    })

  }, [])

  return (
    <>
      <Home>
        {screenSize < 1025 ? (<HeaderMobile />) : (<HeaderDesktop />)}
        <MenuDesktop />
        <ShelfSports />
        <BannerSlide />
        <MoreWanted />
        <ListShelf products={productsData} title="Novidades que chegaram pra você" />
        <BannerAccessories />
        <ListShelf products={productsData} title="Tendências" />
        <ListShelf products={productsData} title="Mais vistos" />
        <OneBanner />
        <ListShelf products={productsData} title="Produtos que baixaram de preço" />
        <SuggestionBanner />
        <SlideMarks />
        <ServicesBanner />
        <ListShelf products={productsData} title="Mais populares" />
        <BtnDownloadApp />
        <Footer />
      </Home>
    </>
  );
}
