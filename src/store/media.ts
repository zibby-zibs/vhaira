import { create } from "zustand";

interface MediaStore {
  selectedMedia: { public_id: string; resource_type: "image" | "video" }[];
  setSelectedMedia: (
    media: { public_id: string; resource_type: "image" | "video" }[]
  ) => void;
}

export const useMediaStore = create<MediaStore>((set) => ({
  selectedMedia: [],
  setSelectedMedia: (media) => set({ selectedMedia: media }),
}));
