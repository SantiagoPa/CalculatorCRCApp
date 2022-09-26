import { MenuOutlined } from "@mui/icons-material";
import FitbitIcon from "@mui/icons-material/Fitbit";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100%)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            noWrap
            variant="h1"
            sx={{ fontSize: "1.4rem", fontWeight: 800 }}
          >
            Calculadora CRC
          </Typography>

          <FitbitIcon color="secondary" />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
