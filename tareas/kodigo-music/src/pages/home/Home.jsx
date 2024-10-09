import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="navbar-bg">
        <header className="header-container contenedor">
          <section className="logo">
            <img src="/kodigo-music.png" alt="Kodigo Music" />
            <h1>Kodigo Music</h1>
          </section>

          <section className="barra-busqueda">
            <input type="text" placeholder="Escribe tu búsqueda aquí..." aria-label="Buscar" />
            <Link to="javascript:void(0)">
              <button>Buscar</button>
            </Link>
          </section>

          <nav className="nav-container">
            <Link to="javascript:void(0)">
              <button>Mi cuenta</button>
            </Link>
            <Link to="/auth">
              <button>Salir</button>
            </Link>
          </nav>
        </header>
      </div>
      <main className="contenedor">
        <h2>Playlists para codear</h2>
        <div className="lista-albums">
          <div className="album">
            <Link to="javascript:void(0)">
              <img src="/bites.jpeg" alt="Bites" style={{ width: "20vw", height: "auto" }} />
              <h3>Bites</h3>
            </Link>
          </div>
          <div className="album">
            <Link to="javascript:void(0)">
              <img
                src="/hacking-music.jpeg"
                alt="Hacking music"
                style={{ width: "20vw", height: "auto" }}
              />
              <h3>Hacking music</h3>
            </Link>
          </div>
          <div className="album">
            <Link to="javascript:void(0)">
              <img
                src="/been-a-fine-day.jpeg"
                alt="Been a fine day"
                style={{ width: "20vw", height: "auto" }}
              />
              <h3>Been a fine day</h3>
            </Link>
          </div>
        </div>
        <h2>Los inmortales</h2>
        <div className="lista-albums">
          <div className="album">
            <Link to="javascript:void(0)">
              <img
                src="//e.snmc.io/i/300/w/3a362e736aa2c8e3e9e2672b01c5fd04/12188855"
                alt="The Beatles - Abbey Road"
              />

              <h3>The Beatles - Abbey Road</h3>
            </Link>
          </div>
          <div className="album">
            <Link to="javascript:void(0)">
              <img
                src="//e.snmc.io/i/300/w/86d4e5bbfc3c3bd5f792d9b9969572b9/11486295"
                alt="Michael Jackson - Thriller"
              />
              <h3>Michael Jackson - Thriller</h3>
            </Link>
          </div>
          <div className="album">
            <Link to="javascript:void(0)">
              <img
                src="//e.snmc.io/i/300/w/393e991d1d736c5cb086841ef0b5b907/12206378"
                alt="Pink Floyd - The Dark Side of the Moon"
              />
              <h3>Pink Floyd - The Dark Side of the Moon</h3>
            </Link>
          </div>
        </div>
      </main>
      <div className="navbar-bg">
        <footer className="contenedor">
          <p>&reg; Kodigo Music 2024 - All rights reserved</p>
        </footer>
      </div>
    </>
  );
};
