"use client";

import { useEffect, useState } from "react";

import { CreateServer } from "@/components/modals/create-server";
import { InviteModal } from "@/components/modals/invite-modal";
import { DeleteServerModal } from "@/components/modals/delete-server-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal";
import { LeaveServerModal } from "@/components/modals/leave-server";
import { DeleteChannelModel } from "@/components/modals/delete-channel-modal ";
import { EditChannelModel } from "../modals/edit-channel-modal";

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
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteChannelModel />
      <EditChannelModel />
    </>
  );
};
