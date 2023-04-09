import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090/");

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

    return True;
  } catch (e) {
    console.log(e);
    return false;
  }
};
