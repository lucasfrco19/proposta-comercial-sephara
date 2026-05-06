"use client";

import * as React from "react";
import { motion, type PanInfo } from "framer-motion";

export type TestimonialPosition = "front" | "middle" | "back";

export type TestimonialCardProps = {
  handleShuffle: () => void;
  testimonial: string;
  position: TestimonialPosition;
  id: number;
  author: string;
  role?: string;
  avatar?: string;
};

export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  id,
  author,
  role,
  avatar,
}: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? 2 : position === "middle" ? 1 : 0,
      }}
      animate={{
        rotate: position === "front" ? "-4deg" : position === "middle" ? "0deg" : "4deg",
        x: position === "front" ? "0%" : position === "middle" ? "16%" : "32%",
        scale: position === "front" ? 1 : position === "middle" ? 0.96 : 0.92,
      }}
      drag
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={(_, info: PanInfo) => {
        dragRef.current = info.point.x;
      }}
      onDragEnd={(_, info: PanInfo) => {
        if (dragRef.current - info.point.x > 120) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[390px] w-[280px] select-none place-content-center space-y-5 overflow-hidden rounded-2xl border border-white/14 bg-white/[0.06] p-6 text-white shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:h-[430px] sm:w-[320px] ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      {avatar ? (
        <img
          src={avatar}
          alt={`Avatar de ${author}`}
          className="pointer-events-none mx-auto h-24 w-24 rounded-full border border-white/20 bg-white/10 object-cover sm:h-28 sm:w-28"
        />
      ) : (
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-white/16 bg-white/[0.07] text-3xl font-semibold text-[#d6b8ff] sm:h-28 sm:w-28">
          {author.slice(0, 1)}
        </div>
      )}
      <span className="text-center text-base italic leading-7 text-white/74 sm:text-lg sm:leading-8">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-semibold text-[#d6b8ff]">
        {author}
      </span>
      {role && (
        <span className="-mt-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-white/42">
          {role}
        </span>
      )}
    </motion.div>
  );
}
