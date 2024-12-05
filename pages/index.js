import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Content from "@/components/content";


export default function Home() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
