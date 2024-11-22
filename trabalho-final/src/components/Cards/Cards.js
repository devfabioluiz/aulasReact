import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Cards = ({ image, description }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "1rem auto", boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Card Image"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
 