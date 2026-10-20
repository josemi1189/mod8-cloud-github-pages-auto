import { InputAdornment, TextField } from "@mui/material";
import style from "./search.component.module.scss";
import { SearchIcon } from "../icons";
import React from "react";
import { useDebounce } from "use-debounce";
import { Close as CloseIcon } from "@mui/icons-material";

interface Props {
  handleFilterChange: (newFilter: string) => void;
  defaultValue?: string;
}
export const Search: React.FC<Props> = ({
  handleFilterChange,
  defaultValue,
}) => {
  const [value, setValue] = React.useState(defaultValue || "");
  const [filterDebounce] = useDebounce(value, 1000);

  React.useEffect(() => {
    handleFilterChange(filterDebounce);
  }, [filterDebounce]);
  return (
    <div className={style.search}>
      <TextField
        id="filter"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                onClick={() => setValue("")}
                position="end"
                className={style.clean}
              >
                <CloseIcon color="action" />
              </InputAdornment>
            ),
            className: style.input,
            size: "small",
            color: "success",
            onChange: (e) => setValue(e.currentTarget.value),
            value: value,
            placeholder: "Encuentra tus personajes",
          },
        }}
        variant="outlined"
        className={style.input}
      />
    </div>
  );
};
