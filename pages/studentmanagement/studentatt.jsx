import PocketBase from "pocketbase";
import { Loading } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useUser } from "../../context/UserContextProvider";
import Header from "../../components/Layout/header";

export default function StudentAttendance() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const user = useUser();

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
        <title>Student Attendance</title>
        <meta name="description" content="Overseas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title={"Student Attendance"}>
          <div className=""></div>
        </Header>
        <div className="p-5">
          <h1>Here we can see all the Student Attendance</h1>
        </div>
      </main>
    </>
  );
}
