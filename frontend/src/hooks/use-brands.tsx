"use client";

import { BACKEND_URL } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

const useBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const response = await fetch(BACKEND_URL + "/brand");
      return response.json();
    },
  });
};

export default useBrands;
