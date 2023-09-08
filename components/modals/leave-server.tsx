"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import { LogOut, X } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const LeaveServerModal = () => {
  let { onOpen, isOpen, onClose, type, data } = useModal();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let isModalOpen = isOpen && type === "leaveServer";

  const { server } = data;

  const onClick = async () => {
    try {
      setLoading(true);
      await axios.patch(`/api/servers/${server?.id}/leave`);
      onClose();
      router.refresh();
      router.push("/");
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
            Leave Server
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <div className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
            Are you sure you want to leave{" "}
            <span className="font-semibold text-indigo-500">
              {server?.name}
            </span>{" "}
            ?
          </div>

          <DialogFooter className="flex items-center mt-4">
            <Button
              className="border-none outline-none bg-green-500 text-zinc-200 hover:bg-green-600"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
              <X className="w-4 h-4 ml-2" />
            </Button>
            <Button
              className="border-none outline-none bg-red-500
            hover:bg-red-600  text-zinc-200 "
              disabled={loading}
              onClick={onClick}
            >
              Leave
              <LogOut className="w-4 h-4 ml-2" />
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
