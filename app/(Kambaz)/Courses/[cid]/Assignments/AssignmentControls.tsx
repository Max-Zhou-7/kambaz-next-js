"use client";
import { Button, InputGroup, FormControl} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

// import GreenCheckmark from "./GreenCheckmark";
// import { MdDoNotDisturbAlt } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function AssignmentControls() {
  return (

    <div id="wd-assignments-controls" className="text-nowrap">


      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Assignment</Button>
    <Button variant = "secondary" size = "lg" className="me-1 float-end" id="wd-add-assignment-group-btn"> 
         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />     Group</Button>
 
    <InputGroup className="me-1 "  style={{ width: "250px" }}>
        <InputGroup.Text className="fs-1 p-2"><HiMagnifyingGlass /> </InputGroup.Text>
   <FormControl placeholder="Search..." id="wd-search-assignment" />
</InputGroup>


 </div>

  );
}