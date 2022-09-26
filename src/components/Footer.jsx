import { Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Grid
      component="footer"
      sx={{
        my: 5,
        p: 5,
        width: "100vw",
        backgroundColor: "primary.main",
        color: "#fff",
        borderRadius: ".5rem",
      }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      container
    >
      <Typography sx={{ fontWeight: 800 }}>Universidad de Cordoba</Typography>
      <Typography variant="body2">
        &copy; Santiago Padilla & Carlos Castro, All rights reserved
      </Typography>
    </Grid>
  );
};
