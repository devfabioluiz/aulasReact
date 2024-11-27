// GridProdutosStyle.js
const GridProdutosStyle = {
    container: {
      flexGrow: 1,
      padding: 3,
      backgroundColor: "#f5f5f5",
      marginBottom: 5,
    },
    gridItem: {
      display: "flex",
      justifyContent: "center", // Centraliza os cards 
      alignItems: "center",
    },
    loaderContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh", // Ocupa metade da tela verticalmente enquanto carrega
    },
  };
  
  export default GridProdutosStyle;
  