"use client";

import { BACKEND_URL } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

const useBrand = (brandId: string) => {
  return useQuery({
    queryKey: ["brand", brandId],
    queryFn: () => fetch(BACKEND_URL + "/brand/" + brandId),
    enabled: !!brandId,
  });
};

export default useBrand;
