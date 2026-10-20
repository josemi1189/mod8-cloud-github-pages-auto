import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import {
  Close as CloseIcon,
  Circle as CircleIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
} from "@mui/icons-material";

import style from "./details-card.module.scss";
import { Results } from "../character-list.vm";

interface Props {
  data: Results;
  onClose: () => void;
}

export const DetailsCard: React.FC<Props> = ({ data, onClose }) => {
  return (
    <div className={style.container}>
      <Card className={style.details}>
        <CardActionArea onClick={onClose} sx={{ padding: "1em" }}>
          <CloseIcon color="action" />
        </CardActionArea>
        <CardContent className={style.content}>
          <CardMedia
            component="img"
            src={data.image}
            alt={data.name}
            sx={{
              width: "180px",
              height: "180px",
              padding: "5px",
              borderRadius: "10px",
            }}
          />

          <div className={style.data}>
            <div className={style.name}>{data.name}</div>
            <div
              style={{ display: "flex", flexDirection: "row", gap: "0.5em" }}
            >
              <CircleIcon
                color={data.status === "Alive" ? "success" : "warning"}
                fontSize="small"
              />
              {`${data.status} - ${data.species}`}
              {data.gender === "Male" ? (
                <MaleIcon color="primary" />
              ) : (
                <FemaleIcon color="secondary" />
              )}
            </div>
            {data.type !== "" && (
              <div>
                <span>Tipo</span>
                <span>{data.type}</span>
              </div>
            )}
            {data.location.name !== "" && (
              <div className={style.item}>
                <span>Última localización conocida</span>
                <span>{data.location.name}</span>
              </div>
            )}
            <div>Aparece en {data.episode.length} episodios.</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
