import { Box, Grid } from "@mui/material";
import { ViewResult, NavBar, Footer, ModalInfo } from "../components";

const drawerWidth = 240;

export const CalculatorPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <Grid
        container
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          height: "100vh",
        }}
      > 
        <ViewResult />
        <ModalInfo />
        <Footer />
      </Grid>
    </Box>
  );
};
