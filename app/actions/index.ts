"use server";

import { revalidateTag } from "next/cache";

export async function deleteWishItem(id: string) {
  await fetch(`http://ec2-3-66-85-50.eu-central-1.compute.amazonaws.com:3001/api/wishlist/${id}`, {
    method: "DELETE",
  });
}
