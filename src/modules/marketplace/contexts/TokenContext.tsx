import { createContext, useContext, useState } from "react";
import { Token, TokenParams, TokenService } from "../services/token";
import { Optional, useQuery } from "@tanstack/react-query";

type Filters = Optional<TokenParams, "limit">;

interface TokenContextType {
  tokens: Token[];
  handleFiltersChange: (filters: Filters) => void;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export function TokenProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    limit: 10,
    range: [0, Infinity],
    tier: "",
    time: "",
    theme: "",
    price: "",
  });

  const { data } = useQuery({
    queryKey: [
      "tokens",
      filters.price,
      filters.theme,
      filters.tier,
      filters.range,
      filters.time,
    ],
    queryFn: () => TokenService.getTokens({ ...filters }),
  });

  const tokens = data?.data || [];

  return (
    <TokenContext.Provider value={{ tokens, handleFiltersChange: setFilters }}>
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
