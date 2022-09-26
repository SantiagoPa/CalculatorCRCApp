import { Grid, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import { useEffect } from "react";

export const InfoData = ({ data }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const R = data?.validate?.R;
    let temp;
    if (R) {
      temp = [...R];
    }

    if(temp) {
      temp.includes("1")
        ? setError((prev) => (prev = true))
        : setError((prev) => (prev = false));
    }

  }, [data?.validate?.R]);

  return (
    <>
      <Typography
        variant="body1"
        sx={{ color: "#fff", fontSize: { sm: "1.5rem", md: "2rem" } }}
      >
        D:{" "}
        <Typography
          component="span"
          sx={{ fontWeight: 800, fontSize: { sm: "1.5rem", md: "2rem" } }}
        >
          {data.D}
        </Typography>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#fff", fontSize: { sm: "1.5rem", md: "2rem" } }}
      >
        CRC:{" "}
        <Typography
          component="span"
          sx={{ fontWeight: 800, fontSize: { sm: "1.5rem", md: "2rem" } }}
        >
          {data.CRC}
        </Typography>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#fff", fontSize: { sm: "1.5rem", md: "2rem" } }}
      >
        TX:{" "}
        <Typography
          component="span"
          sx={{ fontWeight: 800, fontSize: { sm: "1.5rem", md: "2rem" } }}
        >
          {data.TX}
        </Typography>
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#fff", fontSize: { sm: "1.5rem", md: "2rem" } }}
      >
        Cociente:{" "}
        <Typography
          component="span"
          sx={{ fontWeight: 800, fontSize: { sm: "1.5rem", md: "2rem" } }}
        >
          {data.result}
        </Typography>
      </Typography>{" "}
      {/* END CRCR   */}
      {data.validate ? (
        <Grid
          container
          direction="column"
          gap={1}
          sx={{ mt: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container justifyContent="center" alignItems="center" gap={1}>
            <Typography
              sx={{
                fontSize: { sm: "1.5rem", md: "2rem" },
                fontWeight: 800,
              }}
              color={error && "error"}
            >
              Validacion
            </Typography>
            {error ? <CancelIcon color="error" /> : <VerifiedIcon />}
          </Grid>
          <Typography
            variant="body1"
            color={error && "error"}
            sx={{ fontSize: { sm: "1.5rem", md: "2rem" } }}
          >
            R:{" "}
            <Typography
              component="span"
              color={error && "error"}
              sx={{ fontWeight: 800, fontSize: { sm: "1.5rem", md: "2rem" } }}
            >
              {data.validate.R}
            </Typography>
          </Typography>{" "}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};
