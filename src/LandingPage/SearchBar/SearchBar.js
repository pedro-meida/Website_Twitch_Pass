import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

const SearchBar = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const getUser = async (e) => {
    e.preventDefault();

    // Prevent fetch request if input is empty
    if (!data.trim()) {
      toast.warn("Nenhum Utilizador fornecido.");
      navigate('/', { state: { user: null } });
      return;
    }

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(`http://localhost:5122/api/User/${data}`, requestOptions);
      
      // If response is not ok, stop further processing
      if (!response.ok) {
        toast.error("Utilizador não encontrado.");
        
        return;
      }

      const userData = await response.json();

      console.log(userData);
      
      navigate('/', { state: { user: userData } });

    } catch (err) {
      console.log("Error:", err.message);
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
