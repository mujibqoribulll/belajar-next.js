import Layout from "@/components/layout";
import { useEffect } from "react";

export default function Home() {
  async function fetchAlldata() {
    try {
      let response = await fetch("api/hello");
      let result = await response.json();
      console.log('result', result)
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchAlldata();
  }, []);

  return (
    <>
      <Layout metaTitle={"Home"} metaDescription={"belajar next js"}>
        Content
      </Layout>
    </>
  );
}
