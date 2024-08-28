import React from "react";
import "./LandingPage.css";
import logo from "../IMAGENS/LOGO/LOGOTIPO.webp";
import HeaderSocialMedia from "./HeaderSocialMedia/HeaderSocialMedia";
import SearchBar from "./SearchBar/SearchBar";
import SliderPass from "./SliderPass/SliderPass";
import UserProfile from "./UserProfile/UserProfile";
import { imageData } from "./imageData";
import { useLocation } from "react-router-dom";

function LandingPage() {
  const location = useLocation();
  const { user } = location.state || {};

  // Determine logo size based on screen width
  const logoSize = window.innerWidth < 1024 ? "105px" : "160px"; // 105px if width < 1024px, else 160px

  if (user == null) {
    return (
      <>
        <img
          className="logo"
          src={logo}
          alt="Logotipo"
          style={{ width: logoSize }}
        />

        {/* ESPAÇO PESQUISA */}
        <SearchBar user={user} />

        {/* ESPAÇO REDES SOCIAIS */}
        <HeaderSocialMedia />

        {/* ESPAÇO SLIDER */}
        <SliderPass lvl={50} imageData={imageData} />
      </>
    );
  } else {
    return (
      <>
        <img
          className="logo"
          src={logo}
          alt="Logotipo"
          style={{ width: logoSize }}
        />

        {/* ESPAÇO PESQUISA */}
        <SearchBar user={user} />

        {/* ESPAÇO REDES SOCIAIS */}
        <HeaderSocialMedia />

        {/* ESPAÇO USER */}
        <UserProfile user={user} />

        {/* ESPAÇO SLIDER */}
        <SliderPass lvl={user.Level} imageData={imageData} />
      </>
    );
  }
}

export default LandingPage;
