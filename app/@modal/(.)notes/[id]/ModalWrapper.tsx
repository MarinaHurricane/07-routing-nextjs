"use client";

import { useRouter } from "next/navigation";

export default function ModalClose({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div
      onClick={(e) => {
        if ((e.target as HTMLElement).dataset.close) {
          router.back();
        }
      }}
    >
      {children}
    </div>
  );
}
