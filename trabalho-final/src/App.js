import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import CarouselContainer from "./pages/CarouselContainer";
import Footer from "./pages/Footer";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header />
      <CarouselContainer />
      <Main />
      <Form />
      <Footer />
    </>
  );
}

export default App;
