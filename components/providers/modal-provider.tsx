"use client";

import { useEffect, useState } from "react";

import { CreateServer } from "@/components/modals/create-server";
import { InviteModal } from "@/components/modals/invite-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <>
      <CreateServer />
      <InviteModal />
    </>
  );
};
