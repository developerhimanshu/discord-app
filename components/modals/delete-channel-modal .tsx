"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";

import { Button } from "@/components/ui/button";
import { TrashIcon, X } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import qs from "query-string";

export const DeleteChannelModel = () => {
  let { onOpen, isOpen, onClose, type, data } = useModal();

  let isModalOpen = isOpen && type === "deleteChannel";
  const { server, channel } = data;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onClick = async () => {
    try {
      setLoading(true);

      const url = qs.stringifyUrl({
        url: `/api/channels/${channel?.id}`,
        query: {
          serverId: server?.id,
        },
      });
      await axios.delete(url);
      onClose();
      router.refresh();
      router.push(`/servers/${server?.id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Channel
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <DialogDescription className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70 text-center">
            Are you sure you want to do this?
            <br />
            <span className="text-indigo-500 font-semibold">
              #{channel?.name}
            </span>{" "}
            will be permanently deleted.
          </DialogDescription>

          <DialogFooter className="flex  justify-between mt-4 ">
            <Button
              disabled={loading}
              className="border-none outline-none bg-green-500 text-zinc-200 hover:bg-green-600"
              onClick={onClose}
            >
              Cancel
              <X className="w-4 h-4 ml-2" />
            </Button>
            <Button
              disabled={loading}
              onClick={onClick}
              className="border-none outline-none bg-red-500
            hover:bg-red-600  text-zinc-200 "
            >
              Delete
              <TrashIcon className="w-4 h-4 ml-2" />
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
