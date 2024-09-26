import http from "@libs/axios";

export interface Token {
  id: number;
  name: string;
  avatar: string;
  price: number;
  tier: string;
  createdAt: string;
  theme: string;
  author: string;
}

export interface TokenParams{
  limit: number;
  range: [number, number];
  tier: string;
  theme: string;
  time: string;
  price: string;
}

export class TokenService {
  static async getTokens(urlParams: Partial<TokenParams>) {
    const {
      limit = 10,
      range = [],
      tier = "",
      theme = "",
      time = "",
      price = "",
    } = urlParams;
    const URLparams = new URLSearchParams({
      limit: limit.toString(),
      range: range?.join(","),
      tier,
      theme,
      time,
      price,
    });

    return http.get<Token[]>(`/token/?${URLparams.toString()}`);
  }
}
