import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import ModalHeader from "../components/modules/header";
import { WrapBody, WrapModal } from "../styles/styled";
import ModalContent from "../components/modules/content";

const ModalForm = () => {
  return (
    <WrapBody>
      <WrapModal>
        <ModalHeader />
        <ModalContent />
      </WrapModal>
    </WrapBody>
  );
};

export default function Home() {
  return <ModalForm/>
}
