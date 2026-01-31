// ====== CONSTANTS ======
const CATEGORY_OPTIONS = [
  { label: "Thiệp cưới", value: "cat_01" },
  { label: "Thiệp sinh nhật", value: "cat_02" },
  { label: "Bao lì xì", value: "cat_03" },
  { label: "Danh thiếp", value: "cat_04" },
];

const PRICE_OPTIONS = [
  { label: "Dưới 50.000đ", value: "low" },
  { label: "50.000đ – 200.000đ", value: "medium" },
  { label: "200.000đ – 500.000đ", value: "high" },
  { label: "Trên 500.000đ", value: "premium" },
];

// ====== COMPONENT ======
const FilterProduct = ({ filters, onChange }) => {
  const toggleItem = (key, value) => {
    const list = filters[key];
    onChange({
      ...filters,
      [key]: list.includes(value)
        ? list.filter((i) => i !== value)
        : [...list, value],
    });
  };

  return (
    <div className="w-full rounded-2xl bg-white p-4 text-(--color-primary) shadow-md">
      <div className="mb-4 font-bold uppercase">Bộ lọc</div>

      {/* Category */}
      <div className="mb-4">
        <div className="mb-2 font-medium">Danh mục</div>
        {CATEGORY_OPTIONS.map((item) => (
          <label key={item.value} className="flex items-center gap-2 pl-4">
            <input
              type="checkbox"
              checked={filters.categories.includes(item.value)}
              onChange={() => toggleItem("categories", item.value)}
            />
            {item.label}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mb-4">
        <div className="mb-2 font-medium">Khoảng giá</div>
        {PRICE_OPTIONS.map((item) => (
          <label key={item.value} className="flex items-center gap-2 pl-4">
            <input
              type="checkbox"
              checked={filters.priceRanges.includes(item.value)}
              onChange={() => toggleItem("priceRanges", item.value)}
            />
            {item.label}
          </label>
        ))}
      </div>

      {/* Sort */}
      <div>
        <div className="mb-2 font-medium">Sắp xếp</div>
        {[
          { label: "Giá tăng dần", value: "asc" },
          { label: "Giá giảm dần", value: "desc" },
        ].map((item) => (
          <label key={item.value} className="flex items-center gap-2 pl-4">
            <input
              type="radio"
              checked={filters.sort === item.value}
              onChange={() => onChange({ ...filters, sort: item.value })}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
