// import { fetchNotes } from "@/lib/api";
// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import NotesClient from "../../Notes.client";

// interface FilterPageProps {
//     params: Promise<{ slug: string[] }>
// }

// export default async function FilterPage( { params }: FilterPageProps) {
//     const { slug } = await params;
//     const category = slug[0];

//     const queryClient = new QueryClient();

//     await queryClient.prefetchQuery({
//         queryKey: ["notes", { category }],
//         queryFn: () => fetchNotes(1, "", category),
//     });

//     return (
//         <>
//         <HydrationBoundary state={dehydrate(queryClient)}>
//             <NotesClient />
//         </HydrationBoundary>
//         </>
//     )
// }

import { fetchNotes } from  "@/lib/api";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";


export default async function Notelist() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient />
      </HydrationBoundary>
    </>
  );
}




