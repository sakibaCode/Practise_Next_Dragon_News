import React from "react";
import Link from "next/link";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h1 className="text-2xl mb-4">All Categories</h1>

      <ul>
        {categories?.news_category?.map((category) => (
          <li
            key={category.category_id}
            className={`rounded-md font-bold text-center text-md transition ${
              activeId === category.category_id ? "bg-slate-500" : ""
            }`}
          >
            <Link href={`/category/${category.category_id}`} className="block p-2 ">
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;