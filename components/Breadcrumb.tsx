"use client";
import Link from "next/link";
import React from "react";
import { FaHouse } from "react-icons/fa6";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  category?: string; // category is optional and can be a string
}

const toSentenceCase = (text: string | undefined) => {
  if (!text) return "";

  const formattedText = text.replace(/-/g, " ");
  return (
    formattedText.charAt(0).toUpperCase() + formattedText.slice(1).toLowerCase()
  );
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ category }) => {
  const currentPath = usePathname();
  const selected = toSentenceCase(category ?? currentPath?.split("/").pop());

  return (
    <div className="text-lg breadcrumbs pb-10 py-5 max-sm:text-base">
      <ul>
        <li>
          <Link href="/">
            <FaHouse className="mr-2" />
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop?outOfStock=true&inStock=true&rating=0&price=100000&sort=defaultSort&page=1">
            Shop
          </Link>
        </li>
        {currentPath.startsWith("/shop/") && (
          <li>
            <Link href={currentPath}>{selected}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumb;
