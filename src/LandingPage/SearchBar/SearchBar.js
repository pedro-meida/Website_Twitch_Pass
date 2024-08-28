import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission and fetch user data
  const getUser = async (e) => {
    e.preventDefault();

    if (!data.trim()) {
      toast.warn("Nenhum Utilizador fornecido.");
      navigate("/", { state: { user: null } });
      return;
    }

    try {
      const response = await axios.get(
        `https://perplera.pt/getUser.php?username=${data}`
      );

      const userData = response.data;

      // Check if the response contains an error or user not found
      if (userData.error) {
        toast.error(userData.error); // Show error notification if user not found
        navigate("/", { state: { user: null } });
      } else {
        navigate("/", { state: { user: userData } });
      }
    } catch (error) {
      console.error(
        "Error fetching user data:",
        error.response ? error.response.data : error.message
      );
      toast.error("Erro ao buscar dados do utilizador."); // Show error notification if request fails
    }
  };

  return (
    <>
      <div className="search-bar">
        <form onSubmit={getUser}>
          <input
            type="text"
            name="userName"
            placeholder="Pesquisar..."
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default SearchBar;
