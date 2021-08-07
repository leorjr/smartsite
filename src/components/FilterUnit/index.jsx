import { SectionStyled, ContainerStyled } from "./style";

import { useOpened } from "../../providers/Opened";

import Imagem from "../../assets/icon-hour.png";

const FilterUnit = () => {
  // const { opened, setOpened } = useOpened();

  return (
    <>
      <SectionStyled>
        <ContainerStyled>
          <div className="icon">
            <div>
              <figure>
                <img src={Imagem} alt="icon-hour" />
              </figure>
              <p>Horário</p>
            </div>
          </div>
          <div className="title">
            <p>Qual período quer treinar?</p>
          </div>
          <div className="option1">
            <div>
              <input
                type="radio"
                id="manha"
                name="weekdays"
                value="manha"
                // onClick={(e) => setWeekdays(e.target.value)}
              />
              <label for="manha">Manhã</label>
            </div>
            <p>06:00 às 12:00</p>
          </div>
          <div className="option2">
            <div>
              <input
                type="radio"
                id="tarde"
                name="weekdays"
                value="tarde"
                // onClick={(e) => setWeekdays(e.target.value)}
              />
              <label for="tarde">Tarde</label>
            </div>
            <p>12:01 às 18:00</p>
          </div>
          <div className="option3">
            <div>
              <input
                type="radio"
                id="Noite"
                name="weekdays"
                value="Noite"
                // onClick={(e) => setWeekdays(e.target.value)}
              />
              <label for="Noite">Noite</label>
            </div>
            <p>18:01 às 23:00</p>
          </div>
          <div className="filter">
            <div>
              <input
                type="checkbox"
                id="closed"
                name="closed"
                // value={opened}
                // onChange={() => setOpened(!opened)}
              />
              <label for="closed">Exibir unidades fechadas</label>
            </div>
            <p>Resultados encontrados: 0</p>
          </div>
          <div className="controlles">
            <div className="search">
              <div>
                <button>encontrar unidade</button>
              </div>
            </div>
            <div className="clean">
              <div>
                <button>Limpar</button>
              </div>
            </div>
          </div>
        </ContainerStyled>
      </SectionStyled>
    </>
  );
};

export default FilterUnit;

/* 

        <div>
          <h2>Qual período quer treinar?</h2>
          <div>
            <div>
              <input
                type="radio"
                id="manha"
                name="weekdays"
                value="manha"
                // onClick={(e) => setWeekdays(e.target.value)}
              />
              <label for="manha">Manhã</label>
            </div>
            <div>
              <input
                type="radio"
                id="tarde"
                name="weekdays"
                value="tarde"
                // onClick={(e) => setWeekdays(e.target.value)}
              />
              <label for="tarde">Tarde</label>
            </div>
            <div>
              <input
                type="radio"
                id="Noite"
                name="weekdays"
                value="Noite"
                // onClick={(e) => setWeekdays(e.target.value)}
              />
              <label for="Noite">Noite</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="checkbox"
                id="closed"
                name="closed"
                // value={opened}
                // onChange={() => setOpened(!opened)}
              />
              <label for="closed">Exibir unidades fechadas</label>
            </div>
            <p>Resultados encontrados: 0</p>
          </div>
          <div>
            {/* <button onClick={handleClick}>Encontrar Unidade</button> 
          </div>
        </div>

*/
