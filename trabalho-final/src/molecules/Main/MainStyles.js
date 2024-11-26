// MainStyles.js

import { height, padding } from "@mui/system";

 {/*
  ANOTAÇÕES 
  O termo "hero-section" tornou-se um padrão na indústria, facilitando
   a comunicação entre designers e desenvolvedores. É usada também por alguns frameworks que possivelmente trabalharei.
      ele é comumente utilizado para referenciar a div que contém o conteúdo principal da página
  */}

const MainStyles = {

  // Main.js
  Main: {
  padding: 4,
  backgroundColor: '#333333',
  color: '#ffffff',
  marginBottom: 5,
  },


  // Hero Section
  heroSection: {
    backgroundColor: '#f5f5f5',
    padding: '40px',
    textAlign: 'center',
  },
  heroTitle: {
    fontWeight: 'bold',
    color: "red",
  },
  heroSubtitle: {
    marginTop: 2,
    color: "#333333",
  },
  heroButton: {
    marginTop: 4,
    backgroundColor: "#fff",
    color: "#1976d2",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },

  // Section Titles
  sectionTitle: {
    marginTop: 5,
    marginBottom: 5,
    textAlign: "center",
  },

  // Product Card
  productCard: {
    backgroundColor: "#fff",
    padding: 3,
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },
  productImage: {
    maxWidth: "100%",
    borderRadius: "8px",
  },
  productTitle: {
    marginTop: 2,
  },
  productDescription: {
    marginTop: 1,
  },

  // Diferencial Card
  diferencialCard: {
    backgroundColor: "#f5f5f5",
    padding: 3,
    borderRadius: "8px",
    textAlign: "center",
    height: "80%",
  },
  diferencialIcon: {
    fontSize: "2rem",
    color: "#333333",
  },
  diferencialTitle: {
    color: "#333333",
  },
  diferencialDescription: {
    marginTop: 1,
    color: "#333333",
  },
};

export default MainStyles;
