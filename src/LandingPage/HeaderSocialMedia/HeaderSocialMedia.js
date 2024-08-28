import React, { useState } from "react";
import twitchLogo from "../../IMAGENS/SOCIAIS/TWITCH.png";
import instagramLogo from "../../IMAGENS/SOCIAIS/INSTAGRAM.png";
import youtubeLogo from "../../IMAGENS/SOCIAIS/YOUTUBE.png";
import discordLogo from "../../IMAGENS/SOCIAIS/DISCORD.png";
import kofilogo from "../../IMAGENS/SOCIAIS/KOFI.png";
import menuIcon from "../../IMAGENS/SOCIAIS/MENU_ICON.png"; // Add an icon for the menu button

const HeaderSocialMedia = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-social-media">
      {/* Menu Button for smaller screens */}
      <button className="menu-button" onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" />
      </button>

      {/* Social Icons, visibility controlled by state */}
      <div className={`social-icons ${isMenuOpen ? "active" : ""}`}>
        <a
          href="https://ko-fi.com/perplera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={kofilogo} alt="Ko-Fi" />
        </a>
        <a
          href="https://www.twitch.tv/perplera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitchLogo} alt="Twitch" />
        </a>
        <a
          href="https://www.instagram.com/perplera/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCMx4pfgBpknZ8skpTw0pSpQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeLogo} alt="Youtube" />
        </a>
        <a
          href="https://discord.com/channels/427728031025463296/495154344900034564"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={discordLogo} alt="Discord" />
        </a>
      </div>
    </div>
  );
};

export default HeaderSocialMedia;
