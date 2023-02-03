// import { Button } from "@chakra-ui/react";
import React from "react";
import { ButtonStyled } from "../../components/elements/Button/styled";
import { ModalAmountReceive } from "./components/modules/AmountReceiveModal";
import {useDisclosure  } from "./components/modules/AmountReceiveModal/hooks";


export const HomePage= (): JSX.Element =>{
   const {isOpen , onClose, onOpen} = useDisclosure()
  return (
    <>
      <ButtonStyled onClick={onOpen}>Open Modal</ButtonStyled>
      <ButtonStyled onClick={onClose}>Close Modal</ButtonStyled>
      <ModalAmountReceive 
        isOpen={isOpen} 
        onClose={onClose}
        onOpen={onOpen}
      />
    </>
  );
}
