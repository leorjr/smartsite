import { ExternalContainer, InternalContainer } from "./style";

import MaskRequired from "../../assets/required-mask.png";
import MaskRecommended from "../../assets/recommended-mask.png";
import TowelRecommended from "../../assets/recommended-towel.png";
import TowelRequired from "../../assets/required-towel.png";
import FountainPartial from "../../assets/partial-fountain.png";
import FountainForbidden from "../../assets/forbidden-fountain.png";
import LockRoomForbidden from "../../assets/forbidden-lockerroom.png";
import LockRoomPartial from "../../assets/partial-lockerroom.png";
import LockRoomRequired from "../../assets/required-lockerroom.png";

const Card = ({
  opened,
  title,
  adress,
  schedules,
  mask,
  towel,
  fountain,
  locker_room,
}) => {
  return (
    <>
      <ExternalContainer>
        <InternalContainer>
          <div className="isOpened">
            <p style={opened ? { color: "#4fc641" } : { color: "#DD3A33" }}>
              {opened ? "Aberto" : "Fechado"}
            </p>
          </div>
          <div className="title">
            <p>{title.replace("D&#8217;", " ")}</p>
          </div>
          <div className="adress">
            <p>
              {adress
                ? adress
                    .replace("<p>", "")
                    .replace("</p>", "")
                    .replace("&#8211;", "")
                    .replace("<br>", " ")
                    .replace("<span>")
                    .replace("</span>")
                    .replace("<p>", "")
                    .replace("</p>", "")
                    .replace("<strong>", "")
                    .replace("</strong>", "")
                    .replace("undefined", "")
                : ""}
            </p>
          </div>
          <div className="caption">
            <figure>
              {mask === "required" ? (
                <img src={MaskRequired} alt="MaskRequired" />
              ) : (
                <img src={MaskRecommended} alt="MaskRecommended" />
              )}
            </figure>
            <figure>
              {towel === "recommended" ? (
                <img src={TowelRecommended} alt="TowelRecommended" />
              ) : (
                <img src={TowelRequired} alt="TowelRequired" />
              )}
            </figure>
            <figure>
              {fountain === "partial" ? (
                <img src={FountainPartial} alt="FountainPartial" />
              ) : (
                <img src={FountainForbidden} alt="FountainForbidden" />
              )}
            </figure>
            <figure>
              {locker_room === "forbidden" ? (
                <img src={LockRoomForbidden} alt="LockRoomForbidden" />
              ) : locker_room === "partial" ? (
                <img src={LockRoomPartial} alt="LockRoomPartial" />
              ) : (
                <img src={LockRoomRequired} alt="LockRoomRequired" />
              )}
            </figure>
          </div>
          <div className="wknd1">
            <div>
              <p className="title">{schedules[0].weekdays}</p>
              <p>{schedules[0].hour}</p>
            </div>
            <div>
              <p className="title">{schedules[1].weekdays}</p>
              <p>{schedules[1].hour}</p>
            </div>
          </div>
          <div className="wknd2">
            <div>
              <p className="title">{schedules[2].weekdays}</p>
              <p>{schedules[2].hour}</p>
            </div>
          </div>
        </InternalContainer>
      </ExternalContainer>
    </>
  );
};

export default Card;
