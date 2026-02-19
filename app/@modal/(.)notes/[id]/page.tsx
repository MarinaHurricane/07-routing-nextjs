import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";

interface NotePreviewProps {
  params: Promise<{ id: string }>;
 
}

export default async function NotePreview({ params }: NotePreviewProps) {

  const { id }  = await params;
  const note = await fetchNoteById(id);
  console.log(note);

  return (
    <Modal>
      <NoteDetailsClient id={note.id} />
    </Modal>
  );
}



