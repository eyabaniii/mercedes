import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Individuel = () => {
  const { id } = useParams();
  const [prix, setprix] = useState();
  const [titre, settitre] = useState();
  const [image, setimage] = useState();
  const [description, setdescription] = useState();
  const [collection, setcollection] = useState({});
  let navigate = useNavigate();
  const [ope, setope] = useState(false);
  const [upid, setupid] = useState();

  const oneget = () => {
    axios.get(`http://localhost:3000/collection/${id}`).then((res) => {
      setcollection(res.data);
      
        
      console.log(res.data);
    });
  };
  useEffect(() => {
    oneget();
  }, []);
  const delcollection = (id) => {
    axios
      .delete(`http://localhost:3000/collection/${id}`)
      .then((res) => alert("the article is deleted"));
    navigate("/");
  };
  const upcollection = (id) => {
    axios
      .put(`http://localhost:3000/collection/${upid}`, {
        image: image,
        description: description,
        titre: titre,
        prix: prix,
      })
      .then((res) => console.log("the article is updated"));
    window.location.reload();
  };
  return (
    <div className="idcollection">
      <Navbar />
      <div className="id1">
        <div className="pr1">
          <h1>{collection.titre}</h1>
          <h2>{collection.prix}</h2>
        </div>

        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <img
                  src={collection.image}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <img src={collection.i2} className="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <img src={collection.i1} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            id="pp"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              id="pp"
              className="carousel-control-prev-icon"
              aria-hidden="true"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </span>
            <span className="visually-hidden" id="pp">
              Previous
            </span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              id="pp"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="id22">
          <p>{collection.description}</p>
          <div className="pr2">
            <button onClick={() => delcollection(collection.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="red"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
              </svg>
            </button>
            <button
              onClick={() => {
                setope(true);
                setdescription(collection.description);
                setimage(collection.image);
                settitre(collection.titre);
                setprix(collection.prix);
                setupid(collection.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                color="green"
                className="bi bi-pen-fill"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
              </svg>
            </button>
            <button>
              <svg
                color="red"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </button>
            <button>
              <svg
                color="green"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>
            </button>
          </div>
          <div className={`forma ${ope ? "open" : ""} `}>
            <form className="fff" onSubmit={() => upcollection(upid)}>
              <h1>Mise à jour</h1>
              <div className="x" onClick={() => setope(false)}>
                X
              </div>
              <input
                type="text"
                value={image}
                onChange={(id) => setimage(id.target.value)}
              />
              <input
                type="text"
                value={prix}
                onChange={(id) => setprix(id.target.value)}
              />
              <input
                type="text"
                value={titre}
                onChange={(id) => settitre(id.target.value)}
              />
              <input
                type="text"
                value={description}
                onChange={(id) => setdescription(id.target.value)}
              />
              <button type="submit">Mettre à jour</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Individuel;
