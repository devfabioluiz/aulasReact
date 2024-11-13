import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import CarouselContainer from "./pages/CarouselContainer/CarouselContainer";

function App() {
  return (
    <>
      <Header />
      <CarouselContainer />
      <Main />
      <Footer />
    </>
  );
}

export default App;
