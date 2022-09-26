import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context";
import { FormCRC } from "./FormCRC";
import { InfoData } from "./InfoData";

export const ViewResult = () => {
  const { isOpenModal, data, value, setValue } = useContext(AppContext);

  const handleOpenModal = () => {
    setValue(
      (prev) =>
        (prev = {
          ...value,
          isOpenModal: true,
        })
    );
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      // alignItems="center"
      sx={{ mt: { sm: "6rem", md: "8rem" } }}
      gap={3}
    >
      <Grid item>
        <FormCRC />
      </Grid>
      <Grid item>
        <Grid
          container
          component="div"
          sx={{
            backgroundColor: "#262254",
            color: "#fff",
            p: { sm: 8, md: 12 },
            borderRadius: ".5em",
          }}
          direction="column"
        >
          {!!data ? (
            <InfoData data={data} />
          ) : (
            <Typography
              variant="body1"
              sx={{ color: "#fff", fontSize: { sm: "1.5rem", md: "2rem" } }}
            >
              Resultado
            </Typography>
          )}

          <Button
            disabled={!data}
            onClick={() => handleOpenModal()}
            sx={{ color: "#fff", my: 2 }}
          >
            Ver mas...
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
