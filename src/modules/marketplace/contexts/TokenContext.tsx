import { useInfiniteQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import { Token, TokenParams, TokenService } from "../services/token";

type Filters = Partial<TokenParams>;

interface TokenContextType {
  tokens: Token[];
  filters: Filters;
  handleFiltersChange: (filters: Filters) => void;
  resetFilters: () => void;
  fetchNextPage: () => void;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

const initialFilters: Filters = {
  range: [0, Infinity],
  tier: "",
  time: "",
  theme: "",
  price: "",
  category: "",
  query: "",
};

export function TokenProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: [
      "tokens",
      filters.price,
      filters.theme,
      filters.tier,
      filters.range,
      filters.time,
      filters.category,
      filters.query,
    ],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      return TokenService.getTokens({
        ...filters,
        start: pageParam,
        limit: 20,
      });
    },
    getNextPageParam: (lastPage) => {
      return lastPage.data.start + lastPage.data.limit;
    },
  });

  const handleFiltersChange = (filters: Filters) => {
    setFilters((f) => ({ ...f, ...filters }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const tokens = data?.pages.flatMap((page) => page.data.data) || [];

  return (
    <TokenContext.Provider
      value={{
        filters,
        tokens,
        handleFiltersChange,
        resetFilters,
        fetchNextPage,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
}
