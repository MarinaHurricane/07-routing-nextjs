import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
// import Modal from "@/components/Modal/Modal";
import NotePreviewClient from "./NotePreview.client";


interface NotePreviewProps {
  params: Promise<{ id: string }>;
}

export default async function NotePreview({ params }: NotePreviewProps) {

  const { id }  = await params;
  // const note = await fetchNoteById(id);
  // console.log(note);

    const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
      <HydrationBoundary state={dehydrate(queryClient)}>
 <NotePreviewClient id={id}/>
      </HydrationBoundary>
  );
}



