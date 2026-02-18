 'use client'

import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

// interface NotePreviewProps {
//   params: Promise<{ id: string }>;
//   onClose: () => void;
// }

// export default async function NotePreview({ params }: NotePreviewProps) {
//   const router = useRouter();

//   const handleClose = () => {
//     router.back();
//   };
//   const { id }  = await params;
//   const note = await fetchNoteById(id);

//   return (
//     <Modal >
//       <NoteDetailsClient id={note.id} />
//     </Modal>
//   );
// }



interface NotePreviewProps {
  params: { id: string };
}

export default function NotePreview({ params }: NotePreviewProps) {
//   const router = useRouter();
  const { id } = params;

  const { data: note, isLoading } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (!note) return <p>Note not found</p>;

  return (
    <Modal onClose={() => console.log('smile')}>
      <NoteDetailsClient id={note.id} />
    </Modal>
  );
}

