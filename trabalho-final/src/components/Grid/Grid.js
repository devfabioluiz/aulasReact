import React from "react";
import Grid from "@mui/material/Grid"; //chamando a biblioteca
import GridStyles from "./GridStyles";
import { Card,CardContent,CardMedia,Typography, Grid2 } from "@mui/material";


const GridExemplo = ({data}) => {
    return(
      
    <Grid2 classname = "container" container spacing={3} sx={GridStyles.container}>
         {/* serve como um contenedor principal  para organizar os filhos. Ele define o comportamento geral do layout, como espaçamento entre os itens e alinhamento. */}
        {data.map((item) => (
            <Grid2 classname = "item" item xs={12} sm={6} md={4} key={item.id} sx={GridStyles.item}>
             <Card>
                 {/* CardMedia exibe a imagem   sx={}*/}
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.description}
              sx={GridStyles.image}
            />
            <CardContent>
              {/* Título ou descrição */}
              <Typography variant="h6" sx={GridStyles.title}>{item.description}</Typography>
            </CardContent>
             </Card>
            </Grid2>
        ))}
    </Grid2>

    )

}


export default GridExemplo;