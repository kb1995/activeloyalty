"use client"

import cn from "classnames"

const CategoryFilters = ({ active, setActive, categories }) => {
  return (
    <div>
      <h2 className="text-al-eyebrow-small text-gray mb-4">Explore topics</h2>
      <div className="flex items-center gap-2.5 relative z-20">
        <button
          onClick={() => setActive("all")}
          className={cn(
            "text-al-eyebrow-small  duration-150 rounded-full px-4 py-2 uppercase border border-emerald font-semibold",
            {
              "bg-emerald text-latte": active === "all",
              "bg-latte-pale hover:text-latte hover:bg-emerald text-emerald": active !== "all",
            }
          )}
        >
          All
        </button>
        {categories.map((item) => {
          return (
            <button
              onClick={() => setActive(item.uid)}
              className={cn(
                "text-al-eyebrow-small  duration-150 rounded-full px-4 py-2 uppercase border border-emerald font-semibold",
                {
                  "bg-emerald text-latte": active === item.uid,
                  "bg-latte-pale hover:text-latte hover:bg-emerald text-emerald":
                    active !== item.uid,
                }
              )}
            >
              {item.uid}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryFilters
