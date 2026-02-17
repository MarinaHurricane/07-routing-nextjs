import { fetchNotes } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import FilteredNotesClient from "./FilteredNotesClient";

interface FilterPageProps {
    params: Promise<{ slug: string[] }>
}

export default async function FilterPage( { params }: FilterPageProps) {
    const { slug } = await params;
    const category = slug[0];

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["notes", { category }],
        queryFn: () => fetchNotes(1, "", category),
    });

    return (
        <>
        <HydrationBoundary state={dehydrate(queryClient)}>
            <FilteredNotesClient />
        </HydrationBoundary>
        </>
    )
}

