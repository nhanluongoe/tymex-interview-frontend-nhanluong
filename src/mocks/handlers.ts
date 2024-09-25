// mocks/handlers.js
import { http, HttpResponse } from "msw";

interface Token {
  id: number,
  name: string,
  avatar: string,
  price: number,
  tier: string,
  author: string,
}

const TOKENS: Token[] = [
  {
    id: 1,
    name: "The DJ",
    avatar: "/the-dj.png",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 2,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 3,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 4,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 5,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 6,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 7,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 8,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 9,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 10,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 11,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 12,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 13,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 14,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 15,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 16,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 17,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 18,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 19,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 20,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 21,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 22,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 23,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 24,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 25,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 26,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 27,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 28,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 29,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 30,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 31,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 32,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  },
  {
    id: 33,
    name: "The DJ",
    avatar: "",
    price: 2.75,
    tier: "Common",
    author: "Nhan Luong"
  }
];

export const handlers = [
  http.get("/token", () => {
    return HttpResponse.json(TOKENS);
  }),
];
