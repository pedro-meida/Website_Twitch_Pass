import React from "react";
import twitchLogo from "../../IMAGENS/SOCIAIS/TWITCH.png";
import instagramLogo from "../../IMAGENS/SOCIAIS/INSTAGRAM.png";
import youtubeLogo from "../../IMAGENS/SOCIAIS/YOUTUBE.png";
import discordLogo from "../../IMAGENS/SOCIAIS/DISCORD.png";
import kofilogo from "../../IMAGENS/SOCIAIS/KOFI.png";

const HeaderSocialMedia = () => {
  return (
    <div className="social-icons">
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
      {/* Adicione mais redes sociais conforme necessário */}
    </div>
  );
};

export default HeaderSocialMedia;
