"use client";

import React, { memo, useState } from "react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-masonry-css";
import MediaView from "./media-view";
import { CloudinaryResource, deleteMediaItems } from "@/app/actions/media";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Loader2, Trash } from "lucide-react";
import { toast } from "sonner";
import { useMediaStore } from "@/store/media";

type Props = {
  src: CloudinaryResource[];
  admin?: boolean;
};

const GalleryComponent = ({ src, admin }: Props) => {
  const { selectedMedia, setSelectedMedia } = useMediaStore();
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteMediaItems(selectedMedia);
      if (result.success) {
        setSelectedMedia([]);
        toast.success("Deletion Completed");
        router.refresh();
      } else {
        toast.error("Failed to delete media");
      }
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="relative">
      {selectedMedia.length > 0 && (
        <div className="sticky top-0 z-50 bg-background p-4 shadow-md mb-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" disabled={isDeleting}>
                {isDeleting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Trash className="mr-2 h-4 w-4" />
                )}
                Delete{" "}
                {`${selectedMedia.length} selected ${
                  selectedMedia.length > 1 ? "items" : "item"
                }`}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete {selectedMedia.length} selected
                  items. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-black border-0">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-500 text-white hover:bg-red-500"
                  onClick={handleDelete}
                >
                  {isDeleting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Deleting
                    </>
                  ) : (
                    "Delete"
                  )}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}

      <Masonry
        breakpointCols={{
          default: 4,
          1024: 3,
          1280: 4,
          700: 2,
          500: 1,
        }}
        className="flex w-auto"
        columnClassName="p-2"
      >
        {src.map((item) => (
          <MediaView
            key={item.public_id}
            src={item}
            className="mb-4 rounded-lg"
            admin={admin}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default memo(GalleryComponent);
