import React from "react";
import { Modal } from "@nextui-org/react";

export default function Delete_Teacher({ visible, setVisible }) {
  return (
    <>
      <Modal
        closeButton
        aria-labelledby={"Edit Teacher"}
        open={visible}
        onClose={() => setVisible(false)}
      >
        <Modal.Header>
          <span className="text-xl font-semibold">{"Delete Teacher"}</span>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <span>Do yout want to delete?</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="px-2 py-1 bg-red-600 text-white rounded">
            Yes
          </button>
          <button className="px-2 py-1 bg-gray-600 text-white rounded">
            No
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
