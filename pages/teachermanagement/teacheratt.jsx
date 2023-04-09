import { Loading } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useUser } from "../../context/UserContextProvider";
import Header from "../../components/Layout/header";
import { Badge } from "@nextui-org/react";
import moment from "moment";

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
            <input
              type="date"
              className="border p-2"
              defaultValue={moment().format("YYYY-MM-DD")}
            />
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
                value={"Present"}
              />
            </form>
            <div className="mt-5 bg-gray-100 w-1/2 rounded p-5">
              <span className="text-md font-semibold">
                Date - {moment().format("DD-MM-YYYY")}
              </span>
            </div>
            <div className="bg-gray-100 mt-5 w-1/2 p-5 rounded flex gap-4 flex-wrap">
              <Badge
                css={{ border: "none" }}
                color={"primary"}
                size={"lg"}
                variant={"default"}
              >
                Hossain Shariar Akash
                <button className="absolute -right-1 -top-1 bg-red-600 rounded-full w-4 h-4 text-xs text-white">
                  x
                </button>
              </Badge>
              <Badge
                css={{ border: "none" }}
                color={"primary"}
                size={"lg"}
                variant={"default"}
              >
                Shamsul Malek
                <button className="absolute -right-1 -top-1 bg-red-600 rounded-full w-4 h-4 text-xs text-white">
                  x
                </button>
              </Badge>
              <Badge
                css={{ border: "none" }}
                color={"primary"}
                size={"lg"}
                variant={"default"}
              >
                Abdullah Al Muktadir
                <button className="absolute -right-1 -top-1 bg-red-600 rounded-full w-4 h-4 text-xs text-white">
                  x
                </button>
              </Badge>
              <Badge
                css={{ border: "none" }}
                color={"primary"}
                size={"lg"}
                variant={"default"}
              >
                Rikfat Karim
                <button className="absolute -right-1 -top-1 bg-red-600 rounded-full w-4 h-4 text-xs text-white">
                  x
                </button>
              </Badge>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
