"use client";
import { FormControl,
          FormLabel,
          Col,
          Row,
          FormSelect,
          FormCheck,
          InputGroup

 } from "react-bootstrap";

import { SlCalender } from "react-icons/sl";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name</b></label><br/><br/>
      <FormControl id="wd-name" defaultValue="A1" className="mb-3" />
      <Row className="mb-3" controlId="textarea2">
        <Col sm={20}>
<FormControl   as="textarea" style={{ height: "100px" }} 
id="wd-description"
       placeholder=" The assignment is available online Submit a link to the landing page of"
      />
      </Col>
      </Row>


            <Row className="mb-3" controlId="points">
              <FormLabel column sm={2}> Points </FormLabel>
            <Col sm={10}>

      
            <FormControl id="wd-points" defaultValue={100} />
            </Col>
            </Row>


            <Row className="mb-3" controlId="AssignmentGroup">
              <Col sm ={2}>
            <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
            </Col>
     <Col sm={10}>
            <FormSelect id="wd-group">
              <option value= "ASSIGNMENTS">ASSIGNMENTS</option>
              <option value= "QUIZ">QUIZ</option>
               <option value= "PROJECT">PROJECT</option>
              </FormSelect>
              </Col>
</Row>

      <Row className="mb-3">
        <Col sm={12}>
      <Row className="mb-3">
        <FormLabel column sm={2} htmlFor="wd-display-grade-as">Display Grade as</FormLabel>
        <Col sm={10}>
          <FormSelect id="wd-display-grade-as">
            <option value="PERCENTAGE">Percentage</option>
            <option value="DECIMAL">Decimal</option>
          </FormSelect>
        </Col>
      </Row>
      <Row className="mb-3 ">
<Col sm ={2}>
              <FormLabel column sm={10} htmlFor="wd-submission-type">Submission Type</FormLabel>
              </Col>
              <Col sm={10}>
      <div className="border rounded p-3 mb-3">


        <Col sm={10}>
          <FormSelect id="wd-submission-type">
            <option value="ONLINE">Online</option>
          </FormSelect>
        </Col>


      <FormLabel className="mt-3 mb-2"><b>Online Entry Options</b></FormLabel>
      <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" className="mb-2" />
      <FormCheck type="checkbox" id="wd-website-url" label="Website URL" className="mb-2" />
      <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" className="mb-2" />
      <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" className="mb-2" />
      <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" className="mb-2" />
</div>
</Col>
</Row>
      </Col>
      </Row>
      <Row className="mb-3 ">
<Col sm ={2}>
              <FormLabel htmlFor="wd-assign-to">Assign</FormLabel>
                            </Col>
              <Col sm={10}>
    <div className="border rounded p-3 mb-3">
      <FormLabel className="mt-3 mb-2"><b>Assign to</b></FormLabel>
      <Row className="mb-3">

        <Col sm={10}>
          <FormControl id="wd-assign-to" defaultValue="Everyone" />
        </Col>
      </Row>


<FormLabel className="mt-3 mb-2"><b>Due</b></FormLabel>
      <Row className="mb-3">

        <Col sm={10}>
            <InputGroup>
            <FormControl  id="wd-due-date" defaultValue="2024-05-13" />
            <InputGroup.Text><SlCalender /></InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>


      <Row className="mb-3">
    <Col sm={6}>
    <FormLabel className="mb-2"><b>Available from</b></FormLabel>
        
          <InputGroup>
            <FormControl  id="wd-available-from" defaultValue="2024-05-06" />
            <InputGroup.Text><SlCalender /></InputGroup.Text>
          </InputGroup>
        </Col>

    <Col sm={6}>
      <FormLabel className="mb-2"><b>Until</b></FormLabel>
    
          <InputGroup>
  
            <FormControl  id="wd-available-until" defaultValue="2024-05-20" />
            <InputGroup.Text><SlCalender /></InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
</div>
</Col>
</Row>
      <div style={{ textAlign: "right" }}>
        <button id="wd-cancel" className="btn btn-secondary me-2">Cancel</button>
        <button id="wd-save" className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}