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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Check,
  Copy,
  Delete,
  DeleteIcon,
  RefreshCw,
  TrashIcon,
  X,
} from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";
import axios from "axios";

export const DeleteServerModal = () => {
  let { onOpen, isOpen, onClose, type, data } = useModal();
  const [open, setOpen] = useState(isOpen);

  let isModalOpen = isOpen && type === "deleteServer";
  const { server } = data;
  const [loading, setLoading] = useState(false);

  const onNew = async () => {
    try {
      setLoading(true);
      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );
      onOpen("invite", { server: response.data });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Delete Server
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
            Do you sure want to delete this server?
          </Label>

          <DialogFooter className="flex items-center mt-4">
            <Button
              className="border-none outline-none bg-green-500 text-zinc-200 hover:bg-green-600"
              onClick={onClose}
            >
              Cancel
              <X className="w-4 h-4 ml-2" />
            </Button>
            <Button
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
