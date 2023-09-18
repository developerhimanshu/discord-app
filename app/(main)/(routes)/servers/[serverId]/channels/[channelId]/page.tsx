"use client";
import { useParams, useRouter } from "next/navigation";

const ChannelIdPage = () => {
  const params = useParams();
  return <div>ChannelIdPage!{params?.channelId}</div>;
};

export default ChannelIdPage;
