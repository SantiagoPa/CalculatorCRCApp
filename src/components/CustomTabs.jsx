import { useContext, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AppContext } from "../context";
import { NotationPolynomial } from "./";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const CustomTabs = () => {
  const [value, setValue] = useState(0);

  const { data } = useContext(AppContext);

  const handleChange = (event, newValue) => {
    setValue((prev) => (prev = newValue));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="CRC" {...a11yProps(0)} />
          {data.validate && <Tab label="Validacion" {...a11yProps(1)} />}
        </Tabs>
      </Box>

      <TabPanel value={value} index={0} >
        <Box component="div">
          <Box component="div">
            Polinomio D: {" "} <NotationPolynomial polynomial={data?.DPolynomial} />
          </Box>
          <Box component="div">
            Polinomio G: {" "} <NotationPolynomial polynomial={data?.GPolynomial} />
            <Typography sx={{ mt: 2, fontWeight: 800 }} >Division</Typography>
          </Box>
          <Typography sx={{ mt: 4 }} component="pre">
            {data?.trace}
          </Typography>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Box component="div">
          Polinomio TX:{" "}
          <NotationPolynomial polynomial={data?.validate?.TXPolynomial} />
        </Box>
        <Box component="div">
          Polinomio G: <NotationPolynomial polynomial={data?.GPolynomial} />
          <Typography sx={{ mt: 2, fontWeight: 800 }}>Division</Typography>

        </Box>
        <Typography sx={{ mt: 4 }} component="pre">
          {data?.validate?.trace}
        </Typography>
      </TabPanel>
    </Box>
  );
};
