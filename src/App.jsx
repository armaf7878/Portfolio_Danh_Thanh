import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Science+Gothic:wght@100..900&display=swap');
      </style>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}