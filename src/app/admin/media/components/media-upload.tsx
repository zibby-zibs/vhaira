"use client";

import React, { useState, useCallback } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

type Props = {
  onUploadComplete?: (urls: string[]) => void;
};

type UploadingFile = {
  file: File;
  progress: number;
  url?: string;
};

type FileWithPreview = UploadingFile;

const MediaPreview = ({ file }: { file: FileWithPreview }) => {
  if (file.url) {
    // Check if the file is a video
    if (file.file.type.startsWith("video/")) {
      return (
        <video
          src={file.url}
          className="w-20 h-20 object-cover rounded-md"
          controls={false} // Optional: add controls if you want
          muted
          loop
        />
      );
    }
    // For images
    return (
      <img
        src={file.url}
        alt={file.file.name}
        className="w-20 h-20 object-cover rounded-md"
      />
    );
  }

  // Loading state
  return (
    <div className="relative h-20 flex items-center justify-center">
      <Progress value={file.progress} className="w-28" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Loader2 className="h-5 w-5 text-primary animate-spin" />
      </div>
    </div>
  );
};

const MediaUpload = ({ onUploadComplete }: Props) => {
  const router = useRouter();
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) => ({ file, progress: 0 }));
      setUploadingFiles((prev) => [...prev, ...newFiles]);

      const uploadPromises = newFiles.map(async (uploadingFile) => {
        const formData = new FormData();
        formData.append("file", uploadingFile.file);
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
        );
        formData.append(
          "cloud_name",
          process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!
        );
        formData.append("folder", "vhaira/hair-images");

        try {
          // Determine resource type based on file mime type
          const resourceType = uploadingFile.file.type.startsWith("video/")
            ? "video"
            : "image";

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          if (!response.ok) throw new Error("Upload failed");

          const data = await response.json();
          setUploadingFiles((prev) =>
            prev.map((f) =>
              f.file === uploadingFile.file
                ? { ...f, progress: 100, url: data.secure_url }
                : f
            )
          );
          return data.secure_url;
        } catch (error) {
          console.error("Upload error:", error);
          setUploadingFiles((prev) =>
            prev.map((f) =>
              f.file === uploadingFile.file
                ? { ...f, error: "Upload failed" }
                : f
            )
          );
          throw error;
        }
      });

      const urls = await Promise.all(uploadPromises);
      const successfulUrls = urls.filter((url): url is string => url !== null);
      onUploadComplete?.(successfulUrls);
      router.refresh();
    },
    [onUploadComplete]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "video/*": [],
    },
    multiple: true,
  });

  const removeUploadedFile = (fileToRemove: File) => {
    setUploadingFiles((prev) => prev.filter((f) => f.file !== fileToRemove));
  };

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? "border-primary bg-primary/10"
            : "border-gray-300 hover:border-primary"
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag &apos;n&apos; drop some images here, or click to select files
        </p>
      </div>

      {uploadingFiles.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-4">
          {uploadingFiles.map((file, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-end">
                {/* <span className="text-sm font-medium text-gray-700 truncate max-w-[calc(100%-2rem)]">
                  {file.file.name}
                </span> */}
                <Button
                  variant={"destructive"}
                  size="icon"
                  onClick={() => removeUploadedFile(file.file)}
                  className="text-gray-500 hover:text-gray-700 absolute top-0 right-0 h-auto w-auto p-1"
                >
                  <X className="h-6 w-6 text-white" />
                  <span className="sr-only">Remove file</span>
                </Button>
              </div>
              <MediaPreview file={file} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaUpload;
