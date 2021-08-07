import { SectionStyled, ContainerStyled } from "./style";

import { useUnits } from "../../providers/Units";

import Imagem from "../../assets/icon-hour.png";
import { useState } from "react";

const FilterUnit = () => {
  const { units } = useUnits();
  const [weekDays, setWeekDays] = useState("all");
  const [opened, setOpened] = useState(true);
  const unitsFiltered = opened
    ? units.filter((unit) => {
        return unit.opened === opened;
      })
    : units;

  const handleSearch = () => {
    console.log(weekDays);
    console.log(opened);
  };

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
                onClick={(e) => setWeekDays(e.target.value)}
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
                onClick={(e) => setWeekDays(e.target.value)}
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
                value="noite"
                onClick={(e) => setWeekDays(e.target.value)}
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
                value={opened}
                onChange={() => setOpened(!opened)}
              />
              <label for="closed">Exibir unidades fechadas</label>
            </div>
            <p>Resultados encontrados: {unitsFiltered.length}</p>
          </div>
          <div className="controlles">
            <div className="search">
              <div>
                <button onClick={handleSearch}>encontrar unidade</button>
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
      <div>
        {unitsFiltered.map((unit) => {
          return <li>{unit.title}</li>;
        })}
      </div>
    </>
  );
};

export default FilterUnit;
