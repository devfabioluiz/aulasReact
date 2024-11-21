// src/components/Header/HeaderStyles.js

const headerStyles = {
    appBar: {
    background: "#dcdcdc",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      height: "109.6px",
      paddingBottom: "5px",
        borderBottom: "1px solid #ccc",
    },

    toolbar: {

      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
      height: "107.6px",
    },

    logo: {
        
    display: "flex",
    alignItems: "center", // Centraliza verticalmente
    justifyContent: "center", // Centraliza horizontalmente
    height: "100%", // Garante que ocupe a altura total do AppBar

      img: {
        height: "60px",
        padding: "0 30px",
      },
    },

    contacts: {
      position: "absolute",
      top: "10px",
      right: "10px",
      display: "flex",
      gap: "10px",
      a: {
        color: "#333",
        textDecoration: "none",
      },
      i: {
        fontSize: "1.2em",
      },
    },
    nav: {
      display: "flex",
      gap: "15px",
      alignSelf: "flex-end",
      marginLeft: "auto",
      marginBottom: "10px",
    },
    navItem: {
      color: "#333",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "14px",
      "&.active": {
        color: "red",
      },
    },
  };
  
  export default headerStyles;
  