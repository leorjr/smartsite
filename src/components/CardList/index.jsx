import { ExternalContainer, InternalContainer } from "./style";

import Card from "../Card";

const CardList = ({ units }) => {
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
