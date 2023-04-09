import React from "react";
import { Modal } from "@nextui-org/react";

export default function Edit_Teacher({ visible, setVisible }) {
  return (
    <>
      <Modal
        closeButton
        aria-labelledby={"Edit Teacher"}
        open={visible}
        onClose={() => setVisible(false)}
      >
        <Modal.Header>
          <span className="text-xl font-semibold">{"Edit Teacher"}</span>
        </Modal.Header>
        <Modal.Body>
          <form className="flex flex-col gap-2">
            <input
              type="text"
              name=""
              placeholder="Name"
              className="px-2 py-1 border rounded"
            />
            <input
              type="text"
              name=""
              placeholder="Designation"
              className="px-2 py-1 border rounded"
            />
            <input
              type="text"
              name=""
              placeholder="Department"
              className="px-2 py-1 border rounded"
            />
            <input
              type={"number"}
              name=""
              placeholder="age"
              className="px-2 py-1 border rounded"
            />
            <input
              type="submit"
              className="bg-green-700 text-white px-2 py-1 mt-5"
            />
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
