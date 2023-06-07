import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Order({item,number}) {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="ml-5 ">
      <h3 className="mb-3 font-extrabold">Order {number}</h3>{" "}
      <div>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Total :
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.Total}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Order ID :
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.id_user}</Typography>address
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Address :
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.address}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Pay Methode :
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.Payment_Method}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Visa :
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.Visa}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* <Paper>
        <Typography>Total : {item.total}</Typography>
        <Typography>Order ID : {item.id_user}</Typography>
        <Typography>Address : {item.address}</Typography>
        <Typography>Pay Methode : {item.methode}</Typography>
      </Paper> */}
    </div>
  );
}

export default Order