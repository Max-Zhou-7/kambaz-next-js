"use client";
import { ListGroup, ListGroupItem ,Row, Col} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import SubAssignmentControlButton from "./SubAssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { FaCaretDown } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import Link from "next/link";
export default function Assignments() {
  return (
    <div>
      <AssignmentControls /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
<div className="wd-title p-3 ps-2 bg-secondary d-flex">

        <BsGripVertical className="me-2 fs-3" />  
        <FaCaretDown className="me-1 fs-20" />
        <b>ASSIGNMENTS</b> 
        <AssignmentControlButtons />
</div>
<ListGroup className="wd-lessons rounded-0">
<ListGroupItem className="wd-lesson p-3 ps-1">
  <Row className="align-items-center">
    <Col xs="auto">
      <BsGripVertical className="me-2 fs-3" />
      <LuNotebookPen className="me-1" />
    </Col>
    <Col>
      <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold text-secondary text-decoration-none">
        A1
      </Link>
      <div className="text-muted small" >
      <span className="text-danger">
        Multiple Modules </span>| <b>Not available until</b> May 6 at 12:00am |</div>
        <div className="text-muted small">
        <b>Due</b> May 13 at 11:59pm | 100 pts
      </div>
    </Col>
    <Col xs="auto">
      <SubAssignmentControlButton />
    </Col>
  </Row>
  </ListGroupItem>
  <ListGroupItem className="wd-lesson p-3 ps-1">
  <Row className="align-items-center">
    <Col xs="auto">
      <BsGripVertical className="me-2 fs-3" />
      <LuNotebookPen className="me-1"
       />
    </Col>
    <Col> <Link href="/Courses/1234/Assignments/123"
            className="wd-assignment-link
             fw-bold text-secondary text-decoration-none" >
      A2 
        </Link><div className="text-muted small" >
      <span className="text-danger">
        Multiple Modules </span>| <b>Not available until</b> May 13 at 12:00am |</div>
        <div className="text-muted small">
        <b>Due</b> May 20 at 11:59pm | 100 pts
      </div>
    </Col>
    <Col xs="auto">
      <SubAssignmentControlButton />
    </Col>
  </Row>
  </ListGroupItem>
<ListGroupItem className="wd-lesson p-3 ps-1">
  <Row className="align-items-center">
    <Col xs="auto">
      <BsGripVertical className="me-2 fs-3" />
      <LuNotebookPen className="me-1" />
    </Col>
    <Col> <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link
              fw-bold text-secondary text-decoration-none" >
        A3
          </Link><div className="text-muted small" >
      <span className="text-danger">
        Multiple Modules </span>| <b>Not available until</b> May 20 at 12:00am |</div>
        <div className="text-muted small">
        <b>Due</b> May 27 at 11:59pm | 100 pts
      </div>
    </Col> 
    <Col xs="auto">
      <SubAssignmentControlButton />
    </Col>
  </Row>

</ListGroupItem>
  </ListGroup>
  </ListGroupItem>
     

      </ListGroup>
     
    
    </div>
);}
