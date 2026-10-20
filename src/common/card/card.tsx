import style from "./card.module.scss";

interface Props {
  urlImage: string;
  title: string;
}
export const Card: React.FC<Props> = ({ urlImage, title }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={`${import.meta.env.BASE_URL}${urlImage}`} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
    </div>
  );
};
