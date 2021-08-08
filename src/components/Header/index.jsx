import { HeaderStyled } from "./style";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
      </HeaderStyled>
    </>
  );
};

export default Header;
