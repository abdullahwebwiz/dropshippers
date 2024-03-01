import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import style from "./faqs.module.css";
import Title from "../title/title";
const FAQS = () => {
  return (
    <div className={style.main}>
      <Title color={"o"} title={"FAQs 💬"} />
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            backgroundColor: "#f85606",
            color: "white",
            fontWeight: "600",
            border: "2px solid white",
          }}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#ede9e8", color: "purple" }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            backgroundColor: "#f85606",
            color: "white",
            fontWeight: "600",
            border: "2px solid white",
          }}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#ede9e8", color: "purple" }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            backgroundColor: "#f85606",
            color: "white",
            fontWeight: "600",
            border: "2px solid white",
          }}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#ede9e8", color: "purple" }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            backgroundColor: "#f85606",
            color: "white",
            fontWeight: "600",
            border: "2px solid white",
          }}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#ede9e8", color: "purple" }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            backgroundColor: "#f85606",
            color: "white",
            fontWeight: "600",
            border: "2px solid white",
          }}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ backgroundColor: "#ede9e8", color: "purple" }}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default FAQS;
