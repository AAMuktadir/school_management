import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090/");

//........................Users...................

//User Information update
export const updateUser = async (
  id,
  name,
  password,
  passwordConfirm,
  oldPassword
) => {
  try {
    const data = {
      name: name,
      password: password,
      passwordConfirm: passwordConfirm,
      oldPassword: oldPassword,
    };

    const record = await pb.collection("users").update(id, data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//..............Student.....................

//fetching all Students
export const getStudents = async () => {
  try {
    const records = await pb.collection("student").getFullList({
      sort: "-created",
    });

    return records;
  } catch (e) {
    console.log(e);
  }
};

//student update
export const updateStudent = async (
  id,
  name,
  student_id,
  grade,
  blood_group,
  age,
  address,
  guardian_name
) => {
  try {
    const data = {
      name: name,
      student_id: student_id,
      grade: grade,
      blood_group: blood_group,
      age: age,
      address: address,
      guardian_name: guardian_name,
    };

    const record = await pb.collection("student").update(id, data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//New Student Addition
export const createStudent = async (
  name,
  student_id,
  grade,
  blood_group,
  age,
  address,
  guardian_name
) => {
  try {
    const data = {
      name: name,
      student_id: student_id,
      grade: grade,
      blood_group: blood_group,
      age: age,
      address: address,
      guardian_name: guardian_name,
    };

    const record = await pb.collection("student").create(data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//Delete a single Student
export const deleteStudent = async (id) => {
  try {
    await pb.collection("student").delete(id);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

//........................Teacher...................

//fetching all Teachers
export const getTeachers = async () => {
  try {
    const records = await pb.collection("teacher").getFullList({
      sort: "-created",
    });

    return records;
  } catch (e) {
    console.log(e);
  }
};

//Teacher update
export const updateTeacher = async (
  id,
  name,
  departement,
  designation,
  age
) => {
  try {
    const data = {
      name: name,
      departement: departement,
      designation: designation,
      age: age,
    };

    const record = await pb.collection("teacher").update(id, data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//New Teacher Addition
export const createTeacher = async (name, departement, designation, age) => {
  try {
    const data = {
      name: name,
      departement: departement,
      designation: designation,
      age: age,
    };

    const record = await pb.collection("teacher").create(data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//Delete a single Teacher
export const deleteTeacher = async (id) => {
  try {
    await pb.collection("teacher").delete(id);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

//........................Courses...................

//Fetching all Courses
export const getCourses = async () => {
  try {
    const records = await pb.collection("course").getFullList({
      sort: "-created",
    });

    return records;
  } catch (e) {
    console.log(e);
  }
};

//Course details update
export const updateCourse = async (
  id,
  course_name,
  assigned_teacher, // type=array=[assigned_teacher]
  student_taken // type=array=[student_taken]
) => {
  try {
    const data = {
      course_name: course_name,
      assigned_teacher: assigned_teacher,
      student_taken: student_taken,
    };

    const record = await pb.collection("course").update(id, data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//New Course Addition
export const createCourse = async (
  course_name,
  assigned_teacher, // type=array=[assigned_teacher]
  student_taken // type=array=[student_taken]
) => {
  try {
    const data = {
      course_name: course_name,
      assigned_teacher: assigned_teacher,
      student_taken: student_taken,
    };

    const record = await pb.collection("course").create(data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//Delete a single Course
export const deleteCourse = async (id) => {
  try {
    await pb.collection("course").delete(id);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

//........................Students Attendance...................

//Fetching all Student attendance
export const getStudentAttendance = async () => {
  try {
    const records = await pb.collection("student_attendance").getFullList({
      sort: "-created",
    });

    return records;
  } catch (e) {
    console.log(e);
  }
};

//Student Attendance update
export const updateStudentAttendance = async (
  id,
  date, //date type variable
  student, // type=array=[student_taken]
  grade
) => {
  try {
    const data = {
      date: date,
      student: student,
      grade: grade,
    };

    const record = await pb.collection("student_attendance").update(id, data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//New Student attendance creation for another date
export const createStudentAttendance = async (
  date, //date type variable
  student, // type=array=[student_taken]
  grade
) => {
  try {
    const data = {
      date: date,
      student: student,
      grade: grade,
    };

    const record = await pb.collection("student_attendance").create(data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//........................Teacher Attendance...................

//Fetching all Teachers attendance
export const getTeacherAttendance = async () => {
  try {
    const records = await pb.collection("student_attendance").getFullList({
      sort: "-created",
    });

    return records;
  } catch (e) {
    console.log(e);
  }
};

//Fetching all Teachers attendance by date
export const teacherAttendanceByDate = async (date) => {
  try {
    const resultList = await pb
      .collection("teacher_attendance")
      .getList(1, 50, {
        filter: date,
      });
  } catch (e) {
    console.log(e);
  }
};

//Teachers attendance update
export const updateTeacherAttendance = async (
  id,
  date, //date type variable
  teacher // type=array=[student_taken]
) => {
  try {
    const data = {
      date: date,
      teacher: teacher,
    };

    const record = await pb.collection("teacher_attendance").update(id, data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//New Teachers attendance creation for another date
export const createTeacherAttendance = async (
  date, //date type variable
  teacher // type=array=[student_taken]
) => {
  try {
    const data = {
      date: date,
      teacher: teacher,
    };

    const record = await pb.collection("teacher_attendance").create(data);
    return record;
  } catch (e) {
    console.log(e);
  }
};

//........................Grade Sheet...................
