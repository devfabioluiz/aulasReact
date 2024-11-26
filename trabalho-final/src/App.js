import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header";
import CarouselContainer from "./molecules/CarouselContainer/CarouselContainer";
import './components/Grid/Grid.js';
import GridExemplo from "./components/Grid/Grid.js";
import Main from "./molecules/Main/Main.js";


function App() {

  const exemploData = [
    { id: 1, image: "https://via.placeholder.com/150", description: "Imagem 1" },
    { id: 2, image: "https://via.placeholder.com/150", description: "Imagem 2" },
    { id: 3, image: "https://via.placeholder.com/150", description: "Imagem 3" },
  ];

  return (
    <>
      <Header />
      <CarouselContainer />
      <Main />
      <GridExemplo data={exemploData}/>
      <Footer />
    </>
  );
}

export default App;
