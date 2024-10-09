// import "./assets/css/App.css";
import { Session } from "./pages/session/Session";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Activamos la biblioteca react-router-dom */}
      <BrowserRouter>
        {/* Definimos las rutas adentro de esta etiqueta */}
        <Routes>
          {/* Definimos las rutas */}
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Session />} />
          <Route path="/" element={<Session />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
