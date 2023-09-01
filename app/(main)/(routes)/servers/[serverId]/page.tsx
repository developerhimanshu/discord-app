"use client";

import { useParams } from "next/navigation";
const ServerIdPage = () => {
  const params = useParams();
  return <div>Server Id Page {params.serverId}</div>;
};

export default ServerIdPage;
