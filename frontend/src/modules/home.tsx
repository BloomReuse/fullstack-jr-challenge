"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import useBrands from "@/hooks/use-brands";

export default function Home() {
  const { data: brands } = useBrands();
  console.log(brands);

  return (
    <div>
      <h1>Desafío Dev Bloom Reuse 2025</h1>
      <div>
        <h2>Brands</h2>
        <ul>
          {brands?.map((brand: any) => (
            <li key={brand.id}>
              <a href={`/brand/${brand.id}`}>{brand.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
