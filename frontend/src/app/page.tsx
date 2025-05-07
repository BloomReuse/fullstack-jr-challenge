"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/modules/home";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </main>
  );
}
