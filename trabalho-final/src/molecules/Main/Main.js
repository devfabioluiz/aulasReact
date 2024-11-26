import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Mainstyles from "./MainStyles";

const produtos = [
  {
    imagem: "https://picsum.photos/300/200",
    titulo: "Produto 1",
    descricao: "Descrição do produto 1",
  },
  {
    imagem: "https://picsum.photos/300/200",
    titulo: "Produto 2",
    descricao: "Descrição do produto 2",
  },
  {
    imagem: "https://picsum.photos/300/200",
    titulo: "Produto 3",
    descricao: "Descrição do produto 3",
  },
];

const Main = () => {
  return (
    <Box  sx={Mainstyles.Main}>
      {/* Seção 1: Hero Section */}
      <Box sx={Mainstyles.heroSection}>
        <Typography variant="h3" sx={Mainstyles.heroTitle}>
          Bem-vindo à Carioca Sport!
        </Typography>
        <Typography variant="h6" sx={Mainstyles.heroSubtitle}>
          Qualidade e inovação no mundo do esporte.
        </Typography>
        <Button variant="contained" sx={Mainstyles.heroButton}>
          Conheça nossos produtos
        </Button>
      </Box>

      {/* Seção 2: Produtos Destaque */}
      <Typography variant="h4" sx={Mainstyles.sectionTitle}>
        Nossos Produtos Destaque
      </Typography>
      <Grid container spacing={4}>
        {produtos.map((produto, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={Mainstyles.productCard}>
              <img
                src={produto.imagem}
                alt={produto.titulo}
                style={Mainstyles.productImage}
              />
              <Typography variant="h6" sx={Mainstyles.productTitle}>
                {produto.titulo}
              </Typography>
              <Typography variant="body2" sx={Mainstyles.productDescription}>
                {produto.descricao}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Seção 3: Diferenciais */}
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" sx={Mainstyles.sectionTitle}>
          Por que escolher a Carioca Sport?
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              titulo: "Qualidade",
              texto: "Nossos uniformes são confeccionados com tecidos de alta performance, proporcionando conforto e durabilidade. Desfrute de cores vibrantes e um acabamento impecável que valoriza sua equipe.",
              icone: <AutoAwesomeIcon sx={Mainstyles.diferencialIcon} />,
            },
            {
              titulo: "Inovação",
              texto: "Inove o visual da sua equipe com o nosso simulador online! Crie uniformes personalizados com design moderno e exclusivo, escolhendo entre uma variedade de modelos e cores. Acompanhe todas as etapas da criação do seu uniforme de forma simples e intuitiva.",
              icone: <LightbulbIcon sx={Mainstyles.diferencialIcon} />,
            },
            {
              titulo: "Atendimento",
              texto: "Atendimento personalizado e eficiente para te auxiliar em todas as etapas do processo. Nossa equipe está pronta para tirar suas dúvidas e garantir a sua satisfação.",
              icone: <ContactSupportIcon sx={Mainstyles.diferencialIcon} />,
            },
          ].map((diferencial, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box sx={Mainstyles.diferencialCard}>
                <Typography variant="h2">{diferencial.icone}</Typography>
                <Typography variant="h4" sx={Mainstyles.diferencialTitle}>
                  {diferencial.titulo}
                </Typography>
                <Typography
                  variant="body2"
                  sx={Mainstyles.diferencialDescription}
                >
                  {diferencial.texto}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;
