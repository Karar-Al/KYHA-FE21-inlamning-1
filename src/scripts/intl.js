// Intl https://www.youtube.com/watch?v=acemrBKuDqw

const intl = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "SEK",
})

export function formatToCurrency(price) {
  return intl.format(price);
}
