import { Loading } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useUser } from "../../context/UserContextProvider";
import Header from "../../components/Layout/header";

export default function TeacherAttendance() {
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
        <title>Teacher Attendance</title>
        <meta name="description" content="Overseas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title={"Teacher Attendance"}>
          <div className=""></div>
        </Header>
        <div className="p-5">
          <h1 className="mb-5">Find Attendance sheet by date</h1>
          <form className="flex w-fit gap-5">
            <input type="date" className="border p-2" />
            <input
              type="submit"
              className="bg-blue-600 text-white px-3 py-2 rounded"
            />
          </form>
          <div className="mt-5">
            <form action="" className="flex gap-5">
              <select
                name=""
                defaultValue={"Select Teacher"}
                className="p-2 border"
              >
                <option value="Select Teacher" disabled>
                  Select Teacher
                </option>
                <option value="Akash">Akash</option>
                <option value="Akash">Sayem</option>
                <option value="Akash">Muktadir</option>
              </select>
              <input
                type="submit"
                className="px-3 py-2 bg-green-600 text-white rounded"
                value={"Make it as Present"}
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
