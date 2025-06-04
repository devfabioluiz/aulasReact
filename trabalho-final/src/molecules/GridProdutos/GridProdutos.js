import React, { useState, useEffect } from "react";
import Cards from "../../Moleculas/Cards/Cards"; 
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import GridProdutosStyle from "./GridProdutosStyles"; 

const GridProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true); // Adiciona estado para loading para o Usuário não ficar sem nada para olhar

  // Fetch de dados
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images.json"
    )
      .then((response) => response.json())
      .then((response) => {
        setProdutos(response.data);
        setLoading(false); // Define como carregado
      })
      .catch((error) => console.log("Erro ao buscar produtos", error));
  }, []);

  if (loading) {
    return (
      <Box sx={GridProdutosStyle.loaderContainer}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box sx={GridProdutosStyle.container}>
      <Grid container spacing={3}>
        {produtos.map((produto, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={GridProdutosStyle.gridItem}>
            <Cards 
              image={produto.sizes.xs} 
              description={`Produto ${index + 1}`} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridProdutos;
