import { PropsWithChildren } from "react";

export const CenteredLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        padding: "3em",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "4em",
        height: "90vh",
      }}
    >
      {children}
    </div>
  );
};
