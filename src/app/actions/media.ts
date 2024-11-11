"use server";

import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryResource {
  asset_id: string;
  public_id: string;
  folder: string;
  secure_url: string;
  resource_type: "image" | "video";
  format: string;
  created_at: string;
  width: number;
  height: number;
  url: string;
}

export async function getCloudinaryMedia(): Promise<CloudinaryResource[]> {
  try {
    // Get both images and videos
    const [imageResults, videoResults] = await Promise.all([
      cloudinary.api.resources({
        type: "upload",
        prefix: "vhaira/hair-images",
        resource_type: "image",
        max_results: 500,
      }),
      cloudinary.api.resources({
        type: "upload",
        prefix: "vhaira/hair-images",
        resource_type: "video",
        max_results: 500,
      }),
    ]);

    // Combine and format the results
    const allMedia = [
      ...imageResults.resources.map((resource: CloudinaryResource) => ({
        ...resource,
        resource_type: "image" as const,
      })),
      ...videoResults.resources.map((resource: CloudinaryResource) => ({
        ...resource,
        resource_type: "video" as const,
      })),
    ];

    // Sort by creation date (newest first)
    return allMedia.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  } catch (error) {
    console.error("Error fetching media from Cloudinary:", error);
    throw new Error("Failed to fetch media");
  }
}

export async function fetchAllMedia() {
  try {
    const media = await getCloudinaryMedia();
    return { success: true, data: media };
  } catch (error) {
    console.error("Error in fetchAllMedia:", error);
    return { success: false, error: "Failed to fetch media" };
  }
}

export async function deleteMediaItems(
  items: { public_id: string; resource_type: "image" | "video" }[]
) {
  try {
    const deletePromises = items.map((item) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(
          item.public_id,
          { resource_type: item.resource_type },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
      });
    });

    await Promise.all(deletePromises);
    return { success: true };
  } catch (error) {
    console.error("Error deleting media:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete media",
    };
  }
}
