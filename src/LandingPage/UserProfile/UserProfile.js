import React, { useEffect, useState } from "react";
import img from "./imagemPerfilDefault.png";

const UserProfile = ({ user }) => {
  const [profileImageUrl, setProfileImageUrl] = useState(img);
  const clientId = "nfvo4y07qbzb6semauov12pt4wqwsz";
  const clientSecret = "fhqga84mz1ewafeowv5ine94ou7yjz";
  const twitchTokenUrl = "https://id.twitch.tv/oauth2/token";
  const twitchUserApiUrl = "https://api.twitch.tv/helix/users";

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        // Passo 1: Get OAuth token
        const tokenResponse = await fetch(
          `${twitchTokenUrl}?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
          { method: "POST" }
        );

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // Passo 2: Fetch user data diretamente da Twitch API
        const userResponse = await fetch(`${twitchUserApiUrl}?login=${user.userName}`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Client-Id": clientId,
          },
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          if (userData.data.length > 0) {
            console.log(userData)
            setProfileImageUrl(userData.data[0].profile_image_url);
          }
        } else {
          console.error("Failed to fetch Twitch user data");
        }
      } catch (error) {
        console.error("Error fetching Twitch profile image:", error);
      }
    };

    fetchProfileImage();
  }, [user.userName]);
  
  return (
    <>
      <img className="user-profile" src={profileImageUrl} alt="User Profile"/>
      <p className="user-name">{user.userName}</p>

      <p className="user-level">Nível {user.level}</p>
    </>
  );
};

export default UserProfile;
