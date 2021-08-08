import { FooterStyled } from "./style";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <FooterStyled>
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
        <p>Todos os direitos reservados</p>
      </FooterStyled>
    </>
  );
};

export default Footer;
