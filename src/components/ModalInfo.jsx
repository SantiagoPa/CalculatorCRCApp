import { useContext } from "react";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import DataObjectIcon from "@mui/icons-material/DataObject";

import { AppContext } from "../context";
import { NotationPolynomial, CustomTabs } from "./";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: { sm: "80%", md: 700 },
  transform: "translate(-50%, -50%)",
  borderRadius: ".5rem",
  bgcolor: "background.paper",
  border: "2px solid #262254",
  boxShadow: 24,
  p: 4,
};

export const ModalInfo = () => {
  const { isOpenModal, data, value, setValue } = useContext(AppContext);

  const handleClose = () => {
    setValue((prev) => (prev = { ...value, isOpenModal: false }));
  };

  return (
    <Modal
      open={isOpenModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid
        sx={style}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Typography variant="h6" component="h2">
          Informacion del resultado
        </Typography>
        <Grid
          item
          component="div"
          justifyContent="center"
          alignItems="center"
          direction="column"
          sx={{
            height: 250,
            overflowY: "auto",
            p: 2,
            backgroundColor: "background.default",
            borderRadius: ".5rem",
            color: "primary.main",
          }}
          gap={2}
        > 
          <CustomTabs />
         
        </Grid>
        <Grid container justifyContent="space-between">
          <DataObjectIcon color="primary" />
          <Button onClick={handleClose} color="error" variant="outlined">
            Cerrar
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};
