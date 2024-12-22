"use client";
import ButtonIcon from "@/components/button";
import Card from "@/components/card";
import { useQuery } from "@/hooks/useQuery";
import fetcher from "@/utils/fetcher";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import useSWR from "swr";

const LayoutComponent = dynamic(() => import("@/components/layout"));
export default function Notes(props) {
  // const { data, isLoading } = useQuery({
  //   prefixUrl: "https://service.pace-unv.cloud/api/notes",
  // });

  const { data, error, isLoading } = useSWR('https://service.pace-unv.cloud/api/notes', fetcher, {
    revalidateOnFocus: true,
  })
  console.log('data',data)
  const router = useRouter();

  async function handleDelete(id) {
    try {
      let result = await fetch(
        `https://service.pace-unv.cloud/api/notes/delete/${id}`,
        {
          method: "DELETE",
        },
        para
      );
      console.log("result", result);
      if (result?.status === 200) {
        fetchData();
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  function handleNavigate() {
    router.push(`/notes/add`);
  }
  if (isLoading)
    return (
      <div className="flex h-screen flex-row justify-center items-center">
        <div className="border-8 border-x-emerald-500 border-teal-600 w-20 animate-spin h-20 rounded-full" />
      </div>
    );
  return (
    <>
      <LayoutComponent metaTitle={"Notes"} metaDescription={"belajar next js"}>
        <div className="flex flex-row justify-between my-4 gap-2">
          <div className="grid grid-cols-0 md:grid-cols-3 flex-1 gap-2">
            {data?.data?.map((note, index) => {
              return (
                <Card
                  note={note}
                  key={index}
                  onDelete={(id) => handleDelete(id)}
                />
              );
            })}
          </div>
          <div className="min-w-max">
            <ButtonIcon
              label="Add Notes"
              styleContainer="bg-blue-800/80"
              onClick={() => handleNavigate()}
            />
          </div>
        </div>
      </LayoutComponent>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     `https://dummyjson.com/todos?${new URLSearchParams({ limit: "10" })}`
//   );
//   const notes = await res.json();
//   return { props: { notes }, revalidate: 10 };
// }
