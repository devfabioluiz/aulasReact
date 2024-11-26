import React from "react";
import { AppBar, Toolbar, Box, Typography, IconButton, Button, Link } from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";
import "./Header.css"; // Import your CSS file once
import headerStyles from "./HeaderStyles.js"; // Import your custom styles
import logo from "../../assets/logo.webp";

const Header = () => {
  return (
    <AppBar className="header" sx={headerStyles.appBar}>
      <Toolbar className="header-top" sx={headerStyles.toolbar}>
        <Box className="logo" sx={headerStyles.logo}>
          <img src={logo} alt="Carioca Logo" />
        </Box>

        {/* Contatos e redes sociais */}
        <Box className="contacts" sx={headerStyles.contacts}>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </IconButton>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </IconButton>
          <Typography variant="body2">21.9 9995-6202 </Typography>
          <Typography variant="body2">21.9 9995-3526</Typography>
        </Box>

        {/* Navegação */}
        <Box className="nav" sx={headerStyles.nav}>
          <Button href="#simulador" className="nav-item active" sx={headerStyles.navItem}>
            Simulador
          </Button>
          <Button href="#produtos" className="nav-item" sx={headerStyles.navItem}>
            Nossos Produtos
          </Button>
          <Button href="#passo-a-passo" className="nav-item" sx={headerStyles.navItem}>
            Passo a Passo
          </Button>
          <Button href="#portfolio" className="nav-item" sx={headerStyles.navItem}>
            Portfólio
          </Button>
          <Button href="#contato" className="nav-item" sx={headerStyles.navItem}>
            Contato
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;