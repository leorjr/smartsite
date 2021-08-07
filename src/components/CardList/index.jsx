import { ExternalContainer, InternalContainer } from "./style";

import Card from "../Card";

import locations from "../../db/locations.json";
import { useState } from "react";

const CardList = () => {
  const [units] = useState(locations.locations);

  return (
    <>
      <ExternalContainer>
        <InternalContainer>
          {units.map((unit) => {
            return (
              <Card
                opened={unit.opened}
                title={unit.title}
                adress={unit.content}
                schedules={
                  unit.schedules ? unit.schedules : "Não constam dados"
                }
                mask={unit.mask}
                towel={unit.towel}
                fountain={unit.fountain}
                locker_room={unit.locker_room}
              />
            );
          })}
        </InternalContainer>
      </ExternalContainer>
    </>
  );
};

export default CardList;
