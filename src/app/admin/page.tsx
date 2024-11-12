"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Film,
  Book,
  Mail,
  Users,
  Upload,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  booking_image,
  cms,
  courses_image,
  manage_image,
  newsletter,
  trending_hair,
  user_management,
  video_tutorials,
} from "@/assets/images";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  icon: Icon,
  content,
  link,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ElementType;
  content: React.ReactNode;
  link: string;
}) => {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={cn(
        "rounded-xl  bg-white dark:bg-gray-800 shadow-xl overflow-hidden hover:cursor-pointer",
        className
      )}
      onClick={() => router.push(link)}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Icon className="h-6 w-6 text-indigo-500" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs font-medium text-indigo-500 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300 px-2 py-1 rounded-full">
              Explore
            </span>
          </motion.div>
        </div>
        <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {description}
        </p>
      </div>
      <div className="w-full h-full">{content}</div>
    </motion.div>
  );
};

const ImageGallery = () => (
  <div className="overflow-hidden h-full">
    <Image
      src={manage_image}
      alt="Manage Images"
      height={0}
      width={0}
      sizes="100vw"
      className="w-full h-full object-cover"
    />
  </div>
);

const VideoPlayer = () => (
  <div className="overflow-hidden h-full">
    <Image
      src={video_tutorials}
      alt="Manage Images"
      height={0}
      width={0}
      sizes="100vw"
      className="w-full h-full object-cover"
    />
  </div>
);

export default function HairstylingDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      {/* <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Hairstyling Dashboard
      </h1> */}
      <BentoGrid className="md:auto-rows-[20rem]">
        <BentoGridItem
          title="Image Gallery"
          description="Browse and manage your image collection"
          icon={Camera}
          content={<ImageGallery />}
          className="md:col-span-2"
          link="/admin/media"
        />
        <BentoGridItem
          title="Video Tutorials"
          description="Access and organize your video content"
          icon={Film}
          content={<VideoPlayer />}
          link="video-tutorials"
        />
        <BentoGridItem
          title="Sanity CMS"
          description="Manage your content with ease"
          icon={Book}
          content={
            <div className="overflow-hidden h-full">
              <Image
                src={cms}
                alt="Manage Images"
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
          }
          link="/admin/sanity"
        />
        <BentoGridItem
          title="Newsletter"
          description="Create and send newsletters to your audience"
          icon={Mail}
          content={
            <div className="overflow-hidden h-full">
              <Image
                src={newsletter}
                alt="Manage Images"
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
          }
          link="/admin/newsletter"
        />
        <BentoGridItem
          title="User Management"
          description="Manage user accounts and permissions"
          icon={Users}
          content={
            <div className="overflow-hidden h-full">
              <Image
                src={user_management}
                alt="Manage Images"
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
          }
          link="/admin/users"
        />
        <BentoGridItem
          title="Manage Courses"
          description="Add new courses and tutorials"
          icon={Upload}
          content={
            <div className="overflow-hidden h-full">
              <Image
                src={courses_image}
                alt="Manage Images"
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-full object-cover lg:-mt-32"
              />
            </div>
          }
          link="/admin/courses"
        />
        <BentoGridItem
          title="Bookings"
          description="View and manage appointment bookings"
          icon={Calendar}
          content={
            <div className="overflow-hidden h-full">
              <Image
                src={booking_image}
                alt="Manage Images"
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-full object-cover -mt-24"
              />
            </div>
          }
          link="/admin/bookings"
        />
        <BentoGridItem
          title="Trending Styles"
          description="See what's hot in hairstyling"
          icon={TrendingUp}
          content={
            <div className="overflow-hidden h-full">
              <Image
                src={trending_hair}
                alt="Manage Images"
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
          }
          link="/admin/trending"
        />
        {/* <BentoGridItem
          title="Style Creator"
          description="Design and save new hairstyles"
          icon={Scissors}
          content={
            <div className="h-full flex items-center justify-center">
              <Scissors className="w-16 h-16 text-indigo-500" />
            </div>
          }
          className="md:col-span-2 md:row-span-2"
        /> */}
      </BentoGrid>
    </div>
  );
}
