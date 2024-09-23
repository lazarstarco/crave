"use server";

import { revalidateTag } from "next/cache";

export async function deleteWishItem(id: string) {
  await fetch(`http://ec2-3-79-230-202.eu-central-1.compute.amazonaws.com:3001/api/wishlist/${id}`, {
    method: "DELETE",
  });
}
