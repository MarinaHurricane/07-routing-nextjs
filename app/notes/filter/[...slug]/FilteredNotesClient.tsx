'use client'

import { fetchNotes } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import NoteList from "@/components/NoteList/NoteList";
import { Note } from "@/types/note";

export default function FilteredNotesClient() {
    const { slug } = useParams<{ slug: string[] }>();
    const selectedCategory = slug[0] || "all";

    const category = selectedCategory === "all"? undefined : selectedCategory;

    const { data } = useQuery({
        queryKey: ["notes", { category }],
        queryFn: () => fetchNotes(1, "", category),
        refetchOnMount: false,
    });

    const notes = data?.notes || [];

    return (
        <NoteList notes={notes}/>
    )
}