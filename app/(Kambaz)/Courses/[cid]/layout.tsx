"use client";
import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { Button } from "react-bootstrap";
import { useState } from "react";


export default function CoursesLayout(
  { children }:  { children: ReactNode}) {
  const { cid } = useParams();
  const {courses} = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course:any) => course._id === cid);
  const [showSidebar, setShowSidebar] = useState(true);


 return (
      <div id="wd-courses">
      <h2 className="text-danger">
    <Button variant="link" className="text-danger p-0 border-0" 
    onClick={()=> setShowSidebar(!showSidebar)}><FaAlignJustify className="me-4 fs-4 mb-1" />
    </Button>
      {course?.name || "Course Not Found"}
      </h2>
       <hr />

  <div className="d-flex">
    <div className="d-none d-md-block">
      {showSidebar && <CourseNavigation cid={cid as string} />}

    </div>
    <div className="flex-fill">
      {children}
    </div>
    </div>

   </div>
);}
