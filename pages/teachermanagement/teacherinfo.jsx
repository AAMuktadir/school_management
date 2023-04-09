import { Loading } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useUser } from "../../context/UserContextProvider";
import Header from "../../components/Layout/header";
import { Table } from "@nextui-org/react";
import { pb } from "../../libs/pocketbase";

//modals
import Create_Teacher from "../../components/Modals/Create_Modals/Create_Teacher";
import Edit_Teacher from "../../components/Modals/Edit_Modals/Edit_Teacher";
import Delete_Teacher from "../../components/Modals/Delete_Modals/Delete_Teacher";

export default function TeacherInfo() {
  const [isLoading, setLoading] = useState(false);
  //modal states
  const [AddTeacherVisible, setAddTeacherVisible] = useState(false);
  const [EditTeacherVisible, setEditTeacherVisible] = useState(false);
  const [DeleteTeacherVisible, setDeleteTeacherVisible] = useState(false);
  const [SelectedTeacher, setSelecetedTeacher] = useState(null);
  const router = useRouter();
  const user = useUser();

  //modal functions
  //TODO - parameter teacher
  const EditTeacherModalHandler = () => {
    // setSelecetedTeacher(teacher);
    setEditTeacherVisible(true);
  };

  //TODO - parameter teacher
  const DeleteTeacherModalHandler = () => {
    // setSelecetedTeacher(teacher);
    setDeleteTeacherVisible(true);
  };

  useEffect(() => {}, []);

  if (user === false) {
    router.push("/login");
  }

  if (user === null || isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Head>
        <title>Teacher</title>
        <meta name="description" content="Overseas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title={"Teacher Information"}>
          <div className="">
            <button
              className="bg-green-700 text-white px-2 py-2 rounded"
              onClick={() => setAddTeacherVisible(true)}
            >
              ADD TEACHER
            </button>
          </div>
        </Header>
        <div className="p-5">
          <Table
            aria-label="Teacher"
            css={{
              height: "auto",
              minWidth: "100%",
              dropShadow: "none",
            }}
          >
            <Table.Header>
              <Table.Column>NAME</Table.Column>
              <Table.Column>DESIGNATION</Table.Column>
              <Table.Column>DEPARTMENT</Table.Column>
              <Table.Column>AGE</Table.Column>
              <Table.Column>OPTION</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key="1">
                <Table.Cell>Tony Reichert</Table.Cell>
                <Table.Cell>Senior Faculty</Table.Cell>
                <Table.Cell>CSE</Table.Cell>
                <Table.Cell>22</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-3">
                    <button
                      className="bg-blue-600 text-white px-2 py-1 rounded"
                      onClick={() => EditTeacherModalHandler()}
                    >
                      EDIT
                    </button>
                    <button
                      className="bg-red-600 text-white rounded px-2 py-1"
                      onClick={() => DeleteTeacherModalHandler()}
                    >
                      DELETE
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        {/* modals */}
        <div className="">
          <Create_Teacher
            visible={AddTeacherVisible}
            setVisible={setAddTeacherVisible}
          />
          <Edit_Teacher
            visible={EditTeacherVisible}
            setVisible={setEditTeacherVisible}
          />
          <Delete_Teacher
            visible={DeleteTeacherVisible}
            setVisible={setDeleteTeacherVisible}
          />
        </div>
      </main>
    </>
  );
}
