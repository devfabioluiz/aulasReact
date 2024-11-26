const GridStyles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between', // Espaçamento horizontal entre os itens
      padding: '16px', // Espaçamento interno
      gap: 1, // Distância entre os grids
      backgroundColor: '#333333', // Fundo geral do grid
    },
    item: {
      display: 'flex',
      aspectRatio: '3 / 2', // Adiciona proporção fixa (largura/altura)
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px', // Espaçamento interno no item
      backgroundColor: '#ffffff', // Fundo do card
      borderRadius: '8px', // Arredondamento
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra sutil
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // Transições ao interagir
      '&:hover': {
        transform: 'scale(1.05)', // Efeito de zoom no hover
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra maior no hover
      },
    },
    image: {
      borderRadius: '4px', // Arredonda um pouco as bordas
      objectFit: 'cover', // descobr que melhora o preenchimento da imagem
      width: '100%',
      height: '140px', // Altura fixada
    },
    title: {
      marginTop: '8px',
      fontWeight: 'bold',
      textAlign: 'center', // Centraliza o título
      color: '#edeef1', // Cor do texto
    },
  };
  
  export default GridStyles;