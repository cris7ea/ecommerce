export const formatCurrency = (currency, price, locale = "en-US") =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(price);

export const camelize = (word) => {
  const letters = word.split("");
  letters[0] = letters[0].toUpperCase();
  return letters.join("");
};
