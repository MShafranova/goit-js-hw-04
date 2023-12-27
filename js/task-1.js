function isEnoughCapacity(products, containerSize) {
  let totalAmount = 0;
  const productsValues = Object.values(products);
  for (const number of productsValues) {
    totalAmount += number;
  }
  return totalAmount <= containerSize;
}