import { useState } from "react";
import { LoginFormComponent } from "./components/LoginFormComponent";
import { RegisterFormComponent } from "./components/RegisterFormComponent";
import "../../assets/css/Session.css";

export const Session = () => {
  const [typeForm, setTypeForm] = useState("login");
  return (
    <>
      <div className="navbar-bg">
        <header className="header-container contenedor">
          <section className="logo">
            <img src="/kodigo-music.png" alt="Kodigo Music" />
            <h1>Kodigo Music</h1>
          </section>
          <section className="nav-container">
            <button
              id="login-btn"
              class="auth-toggle"
              onClick={() => {
                setTypeForm("login");
              }}
            >
              Iniciar sesion
            </button>
            <button
              id="register-btn"
              class="auth-toggle"
              onClick={() => {
                setTypeForm("register");
              }}
            >
              Registrarse
            </button>
          </section>
        </header>
      </div>
      <main className="contenedor auth-container">
        <section className="auth-form-container">
          {typeForm === "login" ? <LoginFormComponent /> : <RegisterFormComponent />}
        </section>

        <section className="promocion-km">
          <h2>La inspiración que necesitas para rekodificar el futuro</h2>
          <div className="km-grid">
            <img src="/music-1.jpg" alt="Programming" className="km-img" />
            <img src="/music-2.jpg" alt="Listening to music" className="km-img" />
            <img src="/music-3.jpg" alt="Headphones" className="km-img" />
            <img src="/music-4.jpg" alt="Girl delighted with music" className="km-img" />
          </div>
        </section>
      </main>

      <div className="navbar-bg">
        <footer className="contenedor">
          <p>&reg; Kodigo Music 2024 - All rights reserved</p>
        </footer>
      </div>
    </>
  );
};
