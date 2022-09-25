import { Grid } from "@mui/material";
import { FormCRC } from "./FormCRC";

export const ViewResult = () => {
  return (
    <Grid container  direction="row" justifyContent="center" alignItems="center">
      <Grid item>
        <FormCRC />
      </Grid>
    </Grid>
  );
};
