import React from "react";
import { Provider } from "react-redux";
import StyledButton from './components/Aula 7/StyledButton'
import ProgressCircle from './components/Aula 7/ProgressCircle'
const App = () => {
  return (
    // nota: nao esquecer de adicionar npm i redux-react
    // este provider e Counter é explicado na Aula 7 - aula sobre Redux
    // <Provider store={store}>
    //   <Counter />
    // </Provider>

    // para a explicação da aula 7 - aula sobre material UI, pode acessar esse link: https://mui.com/material-ui/getting-started/installation/
    <div>
      <StyledButton />
      <ProgressCircle />
    </div>
  );
}

export default App
