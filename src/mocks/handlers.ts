// mocks/handlers.js
import { http, HttpResponse } from "msw";

interface Token {
  id: number;
  createdAt: string;
  name: string;
  avatar: string;
  price: number;
  tier: string;
  theme: string;
  author: string;
}

const TOKENS: Token[] = [
  {
    id: 1,
    name: "The DJ",
    avatar: "/the-dj.png",
    price: 1,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: 2,
    name: "The DJ",
    avatar: "",
    price: 2,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-02T00:00:00Z",
  },
  {
    id: 3,
    name: "The DJ",
    avatar: "",
    price: 3,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-03T00:00:00Z",
  },
  {
    id: 4,
    name: "The DJ",
    avatar: "",
    price: 4,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-04T00:00:00Z",
  },
  {
    id: 5,
    name: "The DJ",
    avatar: "",
    price: 5,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-05T00:00:00Z",
  },
  {
    id: 6,
    name: "The DJ",
    avatar: "",
    price: 6,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-06T00:00:00Z",
  },
  {
    id: 7,
    name: "The DJ",
    avatar: "",
    price: 7,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-07T00:00:00Z",
  },
  {
    id: 8,
    name: "The DJ",
    avatar: "",
    price: 8,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-08T00:00:00Z",
  },
  {
    id: 9,
    name: "The DJ",
    avatar: "",
    price: 9,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-09T00:00:00Z",
  },
  {
    id: 10,
    name: "The DJ",
    avatar: "",
    price: 10,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-10T00:00:00Z",
  },
  {
    id: 11,
    name: "The DJ",
    avatar: "",
    price: 11,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-11T00:00:00Z",
  },
  {
    id: 12,
    name: "The DJ",
    avatar: "",
    price: 12,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-12T00:00:00Z",
  },
  {
    id: 13,
    name: "The DJ",
    avatar: "",
    price: 13,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-13T00:00:00Z",
  },
  {
    id: 14,
    name: "The DJ",
    avatar: "",
    price: 14,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-14T00:00:00Z",
  },
  {
    id: 15,
    name: "The DJ",
    avatar: "",
    price: 15,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-15T00:00:00Z",
  },
  {
    id: 16,
    name: "The DJ",
    avatar: "",
    price: 16,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-16T00:00:00Z",
  },
  {
    id: 17,
    name: "The DJ",
    avatar: "",
    price: 17,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-17T00:00:00Z",
  },
  {
    id: 18,
    name: "The DJ",
    avatar: "",
    price: 18,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-18T00:00:00Z",
  },
  {
    id: 19,
    name: "The DJ",
    avatar: "",
    price: 19,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-19T00:00:00Z",
  },
  {
    id: 20,
    name: "The DJ",
    avatar: "",
    price: 20,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-20T00:00:00Z",
  },
  {
    id: 21,
    name: "The DJ",
    avatar: "",
    price: 21,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-21T00:00:00Z",
  },
  {
    id: 22,
    name: "The DJ",
    avatar: "",
    price: 22,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-22T00:00:00Z",
  },
  {
    id: 23,
    name: "The DJ",
    avatar: "",
    price: 23,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-23T00:00:00Z",
  },
  {
    id: 24,
    name: "The DJ",
    avatar: "",
    price: 24,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-24T00:00:00Z",
  },
  {
    id: 25,
    name: "The DJ",
    avatar: "",
    price: 25,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-25T00:00:00Z",
  },
  {
    id: 26,
    name: "The DJ",
    avatar: "",
    price: 26,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-26T00:00:00Z",
  },
  {
    id: 27,
    name: "The DJ",
    avatar: "",
    price: 27,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-27T00:00:00Z",
  },
  {
    id: 28,
    name: "The DJ",
    avatar: "",
    price: 28,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-28T00:00:00Z",
  },
  {
    id: 29,
    name: "The DJ",
    avatar: "",
    price: 29,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-29T00:00:00Z",
  },
  {
    id: 30,
    name: "The DJ",
    avatar: "",
    price: 30,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-01-30T00:00:00Z",
  },
  {
    id: 31,
    name: "The DJ",
    avatar: "",
    price: 31,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-01-31T00:00:00Z",
  },
  {
    id: 32,
    name: "The DJ",
    avatar: "",
    price: 32,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-02-01T00:00:00Z",
  },
  {
    id: 33,
    name: "The DJ",
    avatar: "",
    price: 33,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-02-02T00:00:00Z",
  },
  {
    id: 34,
    name: "The DJ",
    avatar: "",
    price: 34,
    tier: "Common",
    author: "Nhan Luong",
    theme: "rocknroll",
    createdAt: "2023-02-03T00:00:00Z",
  },
  {
    id: 35,
    name: "The DJ",
    avatar: "",
    price: 35,
    tier: "Common",
    author: "Nhan Luong",
    theme: "halloween",
    createdAt: "2023-02-04T00:00:00Z",
  },
];

export const handlers = [
  http.get("/token", ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get("limit"));
    const range = url.searchParams.get("range");
    const tier = url.searchParams.get("tier");
    const theme = url.searchParams.get("theme");
    const price = url.searchParams.get("price");
    const time = url.searchParams.get("time");

    console.log({ limit, range, tier, theme, price });

    let data = TOKENS;

    if (range) {
      const [min, max] = range.split(",");
      data = data.filter(
        (token) => token.price >= Number(min) && token.price <= Number(max)
      );
    }

    if (tier && tier !== "all") {
      data = data.filter((token) => token.tier === tier);
    }

    if (theme) {
      data = data.filter((token) => token.theme === theme);
    }

    if (time) {
      data = data.sort((a, b) =>
        time === "asc"
          ? a.createdAt.localeCompare(b.createdAt)
          : b.createdAt.localeCompare(a.createdAt)
      );
    }

    if (price) {
      data = data.sort((a, b) =>
        price === "asc" ? a.price - b.price : b.price - a.price
      );
    }

    data = data.slice(0, limit);

    return HttpResponse.json(data);
  }),
];
