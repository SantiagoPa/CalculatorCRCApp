import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "../hooks";

export const FormCRC = () => {
  const { form, reset, handleInputChange } = useForm({ D: "", G: "", r: "" });
  const { D, G, r } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    reset();
  };

  return (
    <Box component='div'>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          my: 4,
          width: 700
        }}
      >
        Calculadora CRC
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container justifyContent="center" gap={2}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            gap={2}
            direction="column"
          >
            <TextField
              id="outlined-basic"
              label="D"
              value={D}
              onChange={handleInputChange("D")}
              placeholder="11100110011"
              variant="outlined"
              sx={{
                borderBlockColor: "#fff",
              }}
            />
            <TextField
              id="outlined-basic"
              label="G"
              value={G}
              onChange={handleInputChange("G")}
              placeholder="100001"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="r"
              value={r}
              onChange={handleInputChange("r")}
              placeholder="00000"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="outlined">
              Calcular CRC
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
