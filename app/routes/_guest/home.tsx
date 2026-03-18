import { useLoaderData } from "react-router";
import { Welcome } from "../../welcome/welcome";
import type { Route } from "./+types/layout";

export default function Home() {
  return <Welcome />;
}
