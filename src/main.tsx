import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@routes/index.tsx";
import "./styles/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@libs/react-query.ts";

async function enableMocking() {
  const { worker } = await import("./mocks/browser.ts");
  return worker.start();
}

enableMocking().then(() =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  )
);
