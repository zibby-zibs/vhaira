"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Loader2, Trash } from "lucide-react";
import { CloudinaryResource, deleteMediaItems } from "@/app/actions/media";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useMediaStore } from "@/store/media";
import { useRouter } from "next/navigation";
import { useLongPress } from "use-long-press";

type Props = {
  src: CloudinaryResource;
  className?: string;
};

const MediaView = ({ src, className = "" }: Props) => {
  const router = useRouter();
  const { selectedMedia, setSelectedMedia } = useMediaStore();
  const [showDialog, setShowDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const fileExtension = src?.resource_type;
  const imageTypes = fileExtension === "image";
  const videoTypes = fileExtension === "video";
  const isSelected = selectedMedia.some(
    (item) => item.public_id === src.public_id
  );

  const handleSingleDelete = async (
    id: string,
    resourceType: "image" | "video"
  ) => {
    setIsDeleting(true);
    try {
      await deleteMediaItems([{ public_id: id, resource_type: resourceType }]);
      toast.success("Deletion Completed");
    } catch (error) {
      console.log("Error deleting media", error);
      toast.error("Failed to delete media");
    } finally {
      setIsDeleting(false);
      router.refresh();
    }
  };

  const handleCheckboxChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string,
    resourceType: "image" | "video"
  ) => {
    const newSelectedMedia = isSelected
      ? selectedMedia.filter((item) => item.public_id !== id)
      : [...selectedMedia, { public_id: id, resource_type: resourceType }];

    setSelectedMedia(newSelectedMedia);
  };

  const bind = useLongPress(
    (e) => {
      handleCheckboxChange(
        e as React.MouseEvent<HTMLButtonElement>,
        src.public_id,
        src.resource_type
      );
    },
    {
      threshold: 500, // Time in ms to trigger long press
      cancelOnMovement: true,
    }
  );
  if (!src) return null;

  const mediaContent = imageTypes ? (
    <div className="relative group" {...bind()}>
      <div className="absolute top-2 flex justify-between gap-2 z-10 w-full p-2">
        <Checkbox
          checked={isSelected}
          onClick={(e) =>
            handleCheckboxChange(e, src.public_id, src.resource_type)
          }
          className="bg-white data-[state=checked]:bg-red-500 border-0 h-7 w-7"
        />
        <Button
          variant="destructive"
          size="icon"
          onClick={() => handleSingleDelete(src.public_id, src.resource_type)}
        >
          {isDeleting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Trash className="h-4 w-4" />
          )}
        </Button>
      </div>
      <Image
        src={src.secure_url}
        alt="Media content"
        width={500}
        height={500}
        className={`object-cover ${className}`}
      />
    </div>
  ) : videoTypes ? (
    <div className="relative group">
      <div className="absolute top-2 p-2 flex gap-2 justify-between items-center z-10 w-full">
        <Checkbox
          checked={isSelected}
          onClick={(e) =>
            handleCheckboxChange(e, src.public_id, src.resource_type)
          }
          className="bg-white data-[state=checked]:bg-red-500 border-0 h-7 w-7"
        />
        <Button
          variant="destructive"
          size="icon"
          onClick={() => handleSingleDelete(src.public_id, src.resource_type)}
        >
          {isDeleting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Trash className="h-4 w-4" />
          )}
        </Button>
      </div>
      <video
        controls
        className={`w-full ${className} `}
        // poster={`../../assets/images/thumb.png`}
      >
        <source src={src.secure_url} type={`video/${src.format}`} />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    <div>Unsupported media type</div>
  );

  return (
    <>
      {mediaContent}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete {src.public_id}. This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-black border-0">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 text-white hover:bg-red-500">
              {isDeleting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default MediaView;
