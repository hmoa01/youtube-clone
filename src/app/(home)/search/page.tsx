import { DEFAULT_LIMIT } from "@/constants";
import { SearchView } from "@/modules/search/ui/views/search-view";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic"; // Force dynamic rendering for this page

interface SearchPageProps {
  searchParams: Promise<{
    query: string | undefined;
    categoryId?: string | undefined;
  }>;
}

const Page = async ({ searchParams }: SearchPageProps) => {
  const { query, categoryId } = await searchParams;

  void trpc.categories.getMany.prefetch();
  void trpc.search.getMany.prefetch({
    query,
    categoryId,
    limit: DEFAULT_LIMIT,
  });

  void trpc.categories.getMany.prefetch(); // Prefetch categories data

  return (
    <HydrateClient>
      <SearchView query={query} categoryId={categoryId} />
    </HydrateClient>
  );
};

export default Page;
