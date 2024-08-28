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

  if (user == null) {
    return (
      <>
        <img className="logo" src={logo} alt="Logotipo" />

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
        <img className="logo" src={logo} alt="Logotipo" />

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
