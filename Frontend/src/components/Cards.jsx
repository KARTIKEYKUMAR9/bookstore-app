import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-4">
      <div className="card w-86 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image ? item.image : `/geeta.jpg`}
            alt={item.name}
            className="h-96 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title truncate">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>

          {/* limit title/description to 2 lines */}
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {item.title}
          </p>

          <div className="card-actions justify-between items-end mt-auto">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
