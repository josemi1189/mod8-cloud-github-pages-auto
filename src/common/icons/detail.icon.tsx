type Colors = "info";
interface Props {
  color?: Colors;
}
/**
 * @param color? "info"
 */
export const DetailIcon: React.FC<Props> = ({ color }): React.JSX.Element => {
  let fill = "currentColor";
  if (color === "info") {
    fill = "#42912c";
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M20 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 14H5v-2h6zm8-4H5v-2h14zm0-4H5V7h14z"
      />
    </svg>
  );
};
