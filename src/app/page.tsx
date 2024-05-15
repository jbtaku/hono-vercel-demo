import { client } from "@/lib/hono";
import React from "react";

export const runtime = "edge";

async function Page() {
  const res = await client.api.posts.$post({ json: { name: "TAKUMI" } });
  const result = await res.json();

  return <div>{result.name}</div>;
}

export default Page;
