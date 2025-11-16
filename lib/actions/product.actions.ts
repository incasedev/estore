"use server";
import { prisma } from "@/db/prisma";
import { convertToPlainOject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return convertToPlainOject(data);
}

// Get single product but it's slug
export async function getProdcutBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
