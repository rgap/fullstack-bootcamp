import { useState } from "react";
import { Footer, Header } from "./components";

export default function App() {

  const [name, setName] = useState("app")

  // puedo agregar mas funciones 
  const changeName = () => {
    const newName = prompt("Ingresa un nuevo nombre: ")
    setName(newName)
  }

  return (
    <>
      <Header />
      <h1>Mi primer componente {name}</h1>
      <button onClick={changeName}>Cambiar nombre</button>
      <Footer />
    </>
  );
}