"use client";
import { ListGroup, ListGroupItem ,Row, Col} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import SubAssignmentControlButton from "./SubAssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { FaCaretDown } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import Link from "next/link";
import * as db from "../../../Database";
import { useParams } from "next/navigation";
export default function Assignments() {
  const assignments = db.assignments;
  const {cid} = useParams();
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
  {assignments
    .filter((assignments: any) => assignments.course === cid )
    .map((assignments: any) => (
      <ListGroupItem key={assignments._id} className="wd-lesson p-3 ps-1">
  <Row className="align-items-center">
    <Col xs="auto">
      <BsGripVertical className="me-2 fs-3" />
      <LuNotebookPen className="me-1" />
    </Col>
    <Col>
      <Link href={`/Courses/${cid}/Assignments/${assignments._id}`} className="wd-assignment-link fw-bold text-secondary text-decoration-none">
        {assignments.title}
      </Link>
      <div className="text-muted small" >
      <span className="text-danger">
        Multiple Modules </span>| <b>Not available until</b> {assignments.availableFrom} |</div>
        <div className="text-muted small">
        <b>Due</b> {assignments.dueDate} | {assignments.points} pts
      </div>
    </Col>
    <Col xs="auto">
      <SubAssignmentControlButton />
    </Col>
  </Row>
  </ListGroupItem>
    ))}

  </ListGroup>
  </ListGroupItem>
     

      </ListGroup>
     
    
    </div>
);}
