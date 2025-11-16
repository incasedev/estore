import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  );

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z
    .string()
    .min(3, "Product name is required and at least 3 characters."),
  slug: z
    .string()
    .min(3, "Product slug is required and at least 3 characters."),
  category: z
    .string()
    .min(3, "Category is required and at least 3 characters."),
  brand: z.string().min(2, "Brand is required and at least 2 characters."),
  description: z
    .string()
    .min(3, "Description is required and at least 10 characters."),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "At least one image is required."),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
