import { ExternalContainer, InternalContainer } from "./style";

import Mask from "../../assets/required-mask.png";
import Towel from "../../assets/recommended-towel.png";
import Fountain from "../../assets/partial-fountain.png";
import LockRoom from "../../assets/forbidden-lockerroom.png";

const Card = () => {
  return (
    <>
      <ExternalContainer>
        <InternalContainer>
          <div className="isOpened">
            <p>Aberto</p>
          </div>
          <div className="title">
            <p>Vicente Linhares</p>
          </div>
          <div className="adress">
            <p>Rua Tibúrcio Cavalcante, 1885 - Meireles, Fortaleza, CE</p>
          </div>
          <div className="caption">
            <figure>
              <img src={Mask} alt="Mask" />
            </figure>
            <figure>
              <img src={Towel} alt="Towel" />
            </figure>
            <figure>
              <img src={Fountain} alt="Fountain" />
            </figure>
            <figure>
              <img src={LockRoom} alt="LockRoom" />
            </figure>
          </div>
          <div className="wknd1">
            <div>
              <p className="title">Seg. à Sex</p>
              <p>06h às 22h</p>
            </div>
            <div>
              <p className="title">Sáb</p>
              <p>09h às 18h</p>
            </div>
          </div>
          <div className="wknd2">
            <div>
              <p className="title">Dom.</p>
              <p>Fechada</p>
            </div>
          </div>
        </InternalContainer>
      </ExternalContainer>
    </>
  );
};

export default Card;
