import { useContext, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "../hooks";
import { AppContext } from "../context";
import {
  calcCRC,
  getPolynomialArray,
  xOrOperation,
} from "../helper/calculatorCRC";

export const FormCRC = () => {
  const [error, setError] = useState({ errorD: false, errorG: false });
  const { errorD, errorG } = error;

  const { data, value, setValue } = useContext(AppContext);
  const { form, reset, handleInputChange, setForm } = useForm({
    D: "",
    G: "",
    MTX: "",
  });
  const { D, G, MTX } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.D === "" || form.G === "") {
      setError(
        (prev) =>
          (prev = {
            ...error,
            errorD: true,
            errorG: true,
          })
      );
      return;
    }

    setError(
      (prev) =>
        (prev = {
          ...error,
          errorD: false,
          errorG: false,
        })
    );
    const DPolynomial = getPolynomialArray(form.D);
    const GPolynomial = getPolynomialArray(form.G);
    const { trace, D, TX, result, CRC } = calcCRC(form.D, form.G);

    setForm(
      (prev) =>
        (prev = {
          ...form,
          MTX: TX,
        })
    );

    setValue(
      (prev) =>
        (prev = {
          ...value,
          data: {
            DPolynomial,
            GPolynomial,
            D,
            CRC,
            TX,
            result,
            trace,
          },
        })
    );
    // reset();
  };

  const handleValidation = () => {
    const valueTX = MTX || data.TX;
    const { R, trace } = xOrOperation(valueTX, form.G);
    const TXPolynomial = getPolynomialArray(valueTX);

    setValue(
      (prev) =>
        (prev = {
          ...value,
          data: {
            ...data,
            validate: {
              R,
              trace,
              TXPolynomial,
            },
          },
        })
    );
  };

  const handleReset = () => {
    setValue(
      (prev) =>
        (prev = {
          ...value,
          data: null,
          isOpenModal: false,
        })
    );
    reset();
  };

  return (
    <Box component="div">
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          my: 4,
          color: "primary.main",
          fontSize: { sm: "1.5rem", md: "1.8rem", lg: "2rem" },
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
              name="D"
              error={errorD}
              value={D}
              onChange={(e) => handleInputChange(e)}
              placeholder="11100110011"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="G"
              name="G"
              error={errorG}
              value={G}
              onChange={(e) => handleInputChange(e)}
              placeholder="100001"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Modificar TX"
              disabled={!data}
              name="MTX"
              value={MTX}
              onChange={(e) => handleInputChange(e)}
              placeholder="1110011001101"
              variant="outlined"
            />
          </Grid>
          <Grid container gap={2} justifyContent="center">
            <Button type="submit" variant="contained">
              Calcular
            </Button>
            <Button
              onClick={handleValidation}
              variant="outlined"
              disabled={!data}
            >
              Validar
            </Button>
            <Button
              onClick={handleReset}
              variant="outlined"
              disabled={!data?.validate}
            >
              Resetear
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
