import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { PropertyProps } from "@/interfaces";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Home from "./index";

export default function App() {
  const [query, setQuery] = useState("");
  const filtered: PropertyProps[] = PROPERTYLISTINGSAMPLE.filter(
    (item: PropertyProps) =>
      item.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <Layout query={query} setQuery={setQuery} filtered={filtered}>
      <Home query={query} setQuery={setQuery} filtered={filtered} />
    </Layout>
  );
}
