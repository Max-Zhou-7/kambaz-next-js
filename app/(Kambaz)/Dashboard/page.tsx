
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardBody, CardImg, CardText, CardTitle, Button, Row, Col, FormControl,} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import {v4 as uuidv4} from "uuid";
import * as db from "../Database";
import {RootState} from "../store";
import { enrollCourse, unenrollCourse, toggleShowAllCourses, setEnrollments } from "./reducer";
import type { Course, Enrollment, User } from "../Database";


export default function Dashboard() {
 const { courses } = useSelector((state: RootState) => state.coursesReducer as { courses: Course[] });
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as { currentUser: User | null };
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer) as { enrollments: Enrollment[] };
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);
  
    const [course, setCourse] = useState<Course>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });

  if (!currentUser) {
  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <p>Please log in to view your courses.</p>
    </div>
  );
}

 const role = currentUser.role; 
  const enrolledCourses = courses.filter((c: Course) =>
    enrollments.some(
      (enrollment: Enrollment) =>
        enrollment.user === currentUser._id &&
        enrollment.course === c._id
    )
  );  
  const isEnrolled = (courseId: string)=>{
    return enrollments.some(
      (enrollment: Enrollment) =>     
        enrollment.user === currentUser._id &&
        enrollment.course === courseId
    );
  };

  const handleEnroll = (courseId: string) => {
    if (currentUser) {
      const newEnrollment: Enrollment = {
        _id: uuidv4(),
        user: currentUser._id,
        course: courseId,
      };
      dispatch(enrollCourse(newEnrollment));
    }
  };

  const handleUnenroll = (courseId: string) => {
    if (currentUser) {
      const enrollmentToRemove = enrollments.find(
        (enrollment: Enrollment) =>
          enrollment.user === currentUser._id &&
          enrollment.course === courseId
      );  
      if (enrollmentToRemove) {
        dispatch(unenrollCourse(enrollmentToRemove._id));
      }
    }
  };



  const toggleCoursesView = () => {
    setShowAllCourses(!showAllCourses);
  };

  const enrolledCount = courses.length;
  return (
    role === "FACULTY" ? (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addNewCourse(course))} > Add </button>
                          <button className="btn btn-warning float-end me-2"
                onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update </button>
      </h5>
      <br />
      <FormControl value={course.name} className="mb-2"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description} rows={3} as="textarea" 
                   onChange={(e) => setCourse({ ...course, description: e.target.value }) }
      />

      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="row row-cols-1 row-cols-md-5 g-4">
          {enrolledCourses
          .map((c:Course) => (
            <Col 
            key ={c._id}
            className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${c._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src={c.image || "/images/reactjs.jpg"} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {c.description} </CardText>
                    <Button variant="primary"> Go </Button>

                                <button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(c._id));
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>
                                <button id="wd-edit-course-click"
  onClick={(event) => {
    event.preventDefault();
    setCourse(c);
  }}
  className="btn btn-warning me-2 float-end" >
  Edit
</button>

                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>)
:(

// Non FACULTY View

    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center mb-3">
    <h1 id="wd-dashboard-title" className="mb-0">Dashboard</h1>
    <Button variant="primary" onClick={toggleCoursesView} id="wd-view-enrollments-click">
      Enrollments
    </Button>
  </div>
      <hr />  
      <div className = "wd-indent">
      <h2> Published Courses ({enrolledCount}) </h2>
      
      <hr/>
      {showAllCourses ? (

        // ENROLL MODE

<Row xs={1} md={5} className="row row-cols-1 row-cols-md-5 g-4">
          {courses
          .map((c:Course) => (
            <Col 
            key ={c._id}
            className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <div
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src={c.image || "/images/reactjs.jpg"} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {c.description} </CardText>
                    {/* <Button variant="primary"> Go </Button> */}
                  { isEnrolled(c._id) ? (
                                <button onClick={(event) => {
                      event.preventDefault();
                      handleUnenroll(c._id);
                    }} className="btn btn-danger float-end w-50 py-1 mb-2 "
                    id="wd-unenroll-course-click">
                    Unenroll
            </button>) : (
              <button onClick={(event) => {
                event.preventDefault();
                handleEnroll(c._id);
              }} className="btn btn-success float-end w-50 py-1 mb-2"
              id="wd-enroll-course-click">
                Enroll
              </button>
            )}

                  </CardBody>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      ):



      (


 <Row xs={1} md={5} className="row row-cols-1 row-cols-md-5 g-4">
          {enrolledCourses
          .map((c:Course) => (
            <Col 
            key ={c._id}
            className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${c._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src={c.image || "/images/reactjs.jpg"} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {c.description} </CardText>
                    {/* <Button variant="primary"> Go </Button> */}
                  {/* { isEnrolled(c._id) ? (
                                <button onClick={(event) => {
                      event.preventDefault();
                      handleUnenroll(c._id);
                    }} className="btn btn-danger float-end w-50 py-1 mb-2 "
                    id="wd-unenroll-course-click">
                    Unenroll
            </button>) : (
              <button onClick={(event) => {
                event.preventDefault();
                handleEnroll(c._id);
              }} className="btn btn-success float-end w-50 py-1 mb-2"
              id="wd-enroll-course-click">
                Enroll
              </button>
            )} */}

                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>

      )}
    </div>
</div>

));}
