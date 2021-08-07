import { SectionStyled, ContainerStyled } from "./style";

import MaskRequired from "../../assets/required-mask.png";
import MaskRecommended from "../../assets/recommended-mask.png";
import TowelRequired from "../../assets/required-towel.png";
import TowelRecommended from "../../assets/recommended-towel.png";
import FountainPartial from "../../assets/partial-fountain.png";
import FountainForbidden from "../../assets/forbidden-fountain.png";
import LockerromRequired from "../../assets/required-lockerroom.png";
import LockerromPartial from "../../assets/partial-lockerroom.png";
import LockerromForbidden from "../../assets/forbidden-lockerroom.png";

const Caption = () => {
  return (
    <>
      <SectionStyled>
        <ContainerStyled>
          <div className="mascara">
            <p>Máscara</p>
            <div>
              <figure>
                <img src={MaskRequired} alt="Mask Required" />
              </figure>
              <figure>
                <img src={MaskRecommended} alt="Mask Required" />
              </figure>
            </div>
            <div>
              <p>Obrigatório</p>
              <p>Recomendado</p>
            </div>
          </div>
          <div className="toalha">
            <p>Toalha</p>
            <div>
              <figure>
                <img src={TowelRequired} alt="Mask Required" />
              </figure>
              <figure>
                <img src={TowelRecommended} alt="Mask Required" />
              </figure>
            </div>
            <div>
              <p>Obrigatório</p>
              <p>Recomendado</p>
            </div>
          </div>
          <div className="bebedouro">
            <p>Bebedouro</p>
            <div>
              <figure>
                <img src={FountainPartial} alt="Mask Required" />
              </figure>
              <figure>
                <img src={FountainForbidden} alt="Mask Required" />
              </figure>
            </div>
            <div>
              <p>Parcial</p>
              <p>Proibido</p>
            </div>
          </div>
          <div className="vestiario">
            <p>Bebedouro</p>
            <div>
              <figure>
                <img src={LockerromRequired} alt="Mask Required" />
              </figure>
              <figure>
                <img src={LockerromPartial} alt="Mask Required" />
              </figure>
              <figure>
                <img src={LockerromForbidden} alt="Mask Required" />
              </figure>
            </div>
            <div>
              <p>Liberado</p>
              <p>Parcial</p>
              <p>Fechado</p>
            </div>
          </div>
        </ContainerStyled>
      </SectionStyled>
    </>
  );
};

export default Caption;
