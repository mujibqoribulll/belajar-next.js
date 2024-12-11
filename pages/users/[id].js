import Layout from "@/components/layout";
import { useRouter } from "next/router";

export default function UserByName() {
  const router = useRouter();
  const { id } = router.query;
  return <Layout>User by {id}</Layout>;
}
