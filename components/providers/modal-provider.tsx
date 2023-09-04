"use client";

import { useEffect, useState } from "react";

import { CreateServer } from "@/components/modals/create-server";
import { InviteModal } from "@/components/modals/invite-modal";
import { DeleteServerModal } from "@/components/modals/delete-server-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";

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
      <EditServerModal />
      <DeleteServerModal />
    </>
  );
};
