import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [] as { user: string; course: string }[],
  showAllCourses: false,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload }) => {
      state.enrollments = payload;
    },
    enrollCourse: (state, { payload: { userId, courseId } }) => {
      const exists = state.enrollments.find(
        (e) => e.user === userId && e.course === courseId
      );
      if (!exists) {
        state.enrollments.push({ user: userId, course: courseId });
      }
    },
    unenrollCourse: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId)
      );
    },
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
  },
});

export const { setEnrollments, enrollCourse, unenrollCourse, toggleShowAllCourses } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;