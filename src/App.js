import Home from "./Components/Home/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import NavBar from "./Components/Navbar/NavBar";
import Contact from "./Components/Contact/Contact";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "aa34ce28-1761-4f6f-905b-50a736bac761";
  (function () {
    let d = document;
    let s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
