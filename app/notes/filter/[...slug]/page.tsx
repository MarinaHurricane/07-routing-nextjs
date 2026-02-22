import { fetchNotes } from "@/lib/api";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

interface NoteListProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ page?: string; query?: string }>;
}

export default async function Notelist({
  params,
  searchParams,
}: NoteListProps) {
  const { slug } = await params;
  const { page, query } = await searchParams;

  const category = slug?.[0];
  const currentPage = Number(page ?? 1);
  const searchQuery = query ?? "";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", currentPage, searchQuery, category],
    queryFn: () =>
      fetchNotes(
        currentPage,
        searchQuery,
        category === "all" ? undefined : category,
      ),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient
          initialPage={currentPage}
          searchQuery={searchQuery}
          category={category}
        />
      </HydrationBoundary>
    </>
  );
}
