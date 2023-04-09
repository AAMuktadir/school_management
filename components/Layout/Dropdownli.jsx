import Link from "next/link";
import React from "react";
import { GrFormNext } from "react-icons/gr";

export default function Dropdownli({ title }) {
  return (
    <>
      <li className="">
        <div className="py-2 flex justify-between items-center cursor-pointer">
          <span>{title}</span>
          <GrFormNext />
        </div>
        <ul className="pl-5">
          <Link
            href={"/course"}
            className="py-2 flex justify-between items-center"
          >
            <span>akash</span>
            <GrFormNext />
          </Link>
        </ul>
      </li>
    </>
  );
}
