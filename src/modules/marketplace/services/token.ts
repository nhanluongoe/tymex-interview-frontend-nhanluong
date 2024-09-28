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
  authorAvatar: string;
}

export interface TokenParams {
  start: number;
  limit: number;
  range: [number, number];
  tier: string;
  theme: string;
  time: string;
  price: string;
  category: string;
}

export interface TokenResponse {
  data: Token[];
  limit: number;
  start: number;
}

export class TokenService {
  static async getTokens(urlParams: Partial<TokenParams>) {
    const {
      limit = 10,
      range = [0, Infinity],
      tier = "",
      theme = "",
      time = "",
      price = "",
      category = "",
      start = 0,
    } = urlParams;
    const URLparams = new URLSearchParams({
      start: start.toString(),
      limit: limit.toString(),
      range: range.join(","),
      tier,
      theme,
      time,
      price,
      category,
    });

    return http.get<TokenResponse>(`/token/?${URLparams.toString()}`);
  }
}
