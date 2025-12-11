export const formatPrice = (value) => {
  if (!value && value !== 0) return "";

  return value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};
