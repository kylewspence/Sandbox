type Product = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateTotalSalesWithTax(
  products: Product[],
  taxRate: number
): number {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const taxAmount = (totalSales * taxRate) / 100;
  const total = totalSales + taxAmount;
  return parseFloat(total.toFixed(2));
}
