import React from 'react';
import { FooterStyled, FooterContainer,FooterTitle,Applist } from './FooterStyle';
import { Typography, Box } from '@material-ui/core';


const Footer = () => {
    return (
      <FooterStyled>
        <FooterContainer>
          <Box sx={{maxWidth: '400px'}}>
            <FooterTitle>Quem somos</FooterTitle>
            <Typography variant={'body2'} sx={{mt: 2}}>
              E-Diarista te ajuda a encontrar um profissional perfeito para
              realizar a limpeza da sua casa. Garantimos a melhor profissional
              com total segurança e praticidade! São milhares de clientes
              satisfeitos por todo o pais.
            </Typography>
          </Box>
          <div>
            <FooterTitle>Baixe nossos aplicativos</FooterTitle>
            <Applist>
              <li>
                <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <img src={"/img/logos/app-store.png"} alt={"App Store"} />
                </a>
              </li>
              <li>
                <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                  <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
                </a>
              </li>
            </Applist>
          </div>
        </FooterContainer>
      </FooterStyled>
    );
};

export default Footer;