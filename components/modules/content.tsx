import React, { useState } from "react";
import { WrapContentModal } from "../../styles/styled";
import ContentModalItem from "./content_modal_item";

export default function ModalContent() {
  return (
    <WrapContentModal>
      <ContentModalItem />
    </WrapContentModal>
  );
}
