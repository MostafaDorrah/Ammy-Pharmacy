import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import UpdateIcon from "@mui/icons-material/Update";
import Navbar_admin from "../components/Navbar_admin";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import AddFolder from "../components/AddFolder";
import Addcost from "../components/Addcost";
import Removecost from "../components/Removecost";
import Removepro from "../components/Removepro";
import Searchcost from "../components/Searchcost";

function TabPanel(props) {
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar_admin />
      <Box sx={{ width: "100%" }} className="min-h-screen">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ marginLeft: 45 }}
          >
            <Tab
              icon={<PersonAddAltIcon />}
              label="ADD New Employee"
              {...a11yProps(0)}
            />
            <Tab
              icon={<PersonRemoveIcon />}
              label="Remove Customer"
              {...a11yProps(1)}
            />
            <Tab
              icon={<AddBusinessIcon />}
              label="ADD Product"
              {...a11yProps(2)}
            />
            <Tab
              icon={<RemoveRedEyeIcon />}
              label="View Customer"
              {...a11yProps(3)}
            />
            <Tab
              icon={<UpdateIcon />}
              label="Update Product"
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Addcost />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Removecost />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AddFolder />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Searchcost />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Removepro />
        </TabPanel>
      </Box>
      <div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
