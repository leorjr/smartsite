import { SectionStyled, ContainerStyled } from "./style";
import Imagem from "../../assets/icon-hour.png";
import CardList from "../../components/CardList";
import { useState } from "react";
import locations from "../../db/locations.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Caption from "../../components/Caption";

const Home = () => {
  //Utilizando dados mock do JSON por conta de que algumas vezes a API ficava indisponível mas,
  //existe o context que solicita os dados  da mesma, caso queiram consultar.
  const [units] = useState(locations.locations);
  const [weekDays, setWeekDays] = useState();
  const [opened, setOpened] = useState(true);
  const [filtrados, setFiltrados] = useState([]);

  const tratarHorario = (unit, limit) => {
    if (unit.opened !== true) {
      return false;
    }
    let horario = unit.schedules[0].hour;
    horario = horario
      .replace(" ", "")
      .replace(" ", "")
      .replace("h", "")
      .replace("h", "")
      .split("às");

    console.log(horario);

    let hour = [];

    for (let i = 0; i < horario.length; i++) {
      hour.push(parseInt(horario[i]));
    }

    console.log(hour);

    //verificar se existe
    if (limit <= 12) {
      if (hour[1] <= limit) {
        return true;
      }
    }

    if (limit <= 18) {
      if (hour[1] <= limit) {
        return true;
      }
    }

    if (limit <= 23) {
      if (hour[1] <= limit) {
        return true;
      }
    }
  };

  const handleSearch = () => {
    let filtragem;

    if (weekDays === undefined) {
      filtragem = units;
    }

    if (weekDays === "manha") {
      filtragem = units.filter((unit) => {
        return tratarHorario(unit, 12) === true;
      });
    }

    if (weekDays === "tarde") {
      filtragem = units.filter((unit) => {
        return tratarHorario(unit, 18) === true;
      });
    }

    if (weekDays === "noite") {
      filtragem = units.filter((unit) => {
        return tratarHorario(unit, 23) === true;
      });
    }

    setFiltrados(filtragem);
  };

  const handleClear = () => {
    setOpened(false);
    setFiltrados([]);
  };

  return (
    <>
      <Header />
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
              <label for="noite">Noite</label>
            </div>
            <p>18:01 às 23:00</p>
          </div>
          <div className="filter">
            <div>
              <input
                type="checkbox"
                id="closed"
                name="closed"
                checked={opened}
                value={opened}
                onChange={() => setOpened(!opened)}
              />
              <label for="closed">Exibir unidades fechadas</label>
            </div>
            <p>Resultados encontrados: {filtrados.length}</p>
          </div>
          <div className="controlles">
            <div className="search">
              <div>
                <button onClick={handleSearch}>encontrar unidade</button>
              </div>
            </div>
            <div className="clean">
              <div>
                <button onClick={handleClear}>Limpar</button>
              </div>
            </div>
          </div>
        </ContainerStyled>
      </SectionStyled>
      <Caption />
      <CardList units={filtrados} />
      <Footer />
    </>
  );
};

export default Home;
