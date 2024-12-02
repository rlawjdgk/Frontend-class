import React from "react";
import Bookpage from "@/app/book/[id]/page";
import Modal from "@/components/modal";

const Page = (props: any) => {
  return (
    <div>
      가로채기 성공{" "}
      <Modal>
        <Bookpage {...props} />
      </Modal>
    </div>
  );
};

export default Page;
