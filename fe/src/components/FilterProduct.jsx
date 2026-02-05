import { useLanguage } from "../context/LanguageContext";

// ====== CONSTANTS ======
const CATEGORY_OPTIONS = [
  { value: "cat_01" },
  { value: "cat_02" },
  { value: "cat_03" },
  { value: "cat_04" },
];

const PRICE_OPTIONS = [
  { value: "price_low" },
  { value: "price_medium" },
  { value: "price_high" },
  { value: "price_premium" },
];

// ====== COMPONENT ======
const FilterProduct = ({ filters, onChange }) => {
  const { t } = useLanguage();

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
    <div className="w-full rounded-t-2xl border-t-6 border-amber-500 bg-white px-8 py-4 text-(--color-primary) shadow-md">
      {/* Category */}
      <div className="mb-4">
        <div className="mb-2 font-medium">{t("categoryTitle")}</div>
        {CATEGORY_OPTIONS.map((item) => (
          <label key={item.value} className="flex items-center gap-2 pl-4">
            <input
              type="checkbox"
              checked={filters.categories.includes(item.value)}
              onChange={() => toggleItem("categories", item.value)}
            />
            {t(item.value)}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mb-4">
        <div className="mb-2 font-medium">{t("priceRangeTitle")}</div>
        {PRICE_OPTIONS.map((item) => (
          <label key={item.value} className="flex items-center gap-2 pl-4">
            <input
              type="checkbox"
              checked={filters.priceRanges.includes(item.value)}
              onChange={() => toggleItem("priceRanges", item.value)}
            />
            {t(item.value)}
          </label>
        ))}
      </div>

      {/* Sort */}
      <div>
        <div className="mb-2 font-medium">{t("sort")}</div>
        {[
          { label: t("priceLowToHigh"), value: "asc" },
          { label: t("priceHighToLow"), value: "desc" },
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
