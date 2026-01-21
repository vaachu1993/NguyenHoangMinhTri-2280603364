// cau 1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// cau 2
const products = [
  new Product(1, "Playstation 5", 12950000, 15, "Console", true),
  new Product(2, "Nintendo Switch OLED", 7400000, 12, "Console", true),
  new Product(3, "MacBook Pro M3", 45000000, 5, "Laptops", true),
  new Product(4, "AirPods Pro", 6500000, 20, "Accessories", true),
  new Product(5, "Apple Watch", 12000000, 0, "Accessories", false),
  new Product(6, "Logitech Mouse", 1500000, 15, "Accessories", true),
];

//cau 3
const namePriceList = products.map((p) => ({
  name: p.name,
  price: p.price,
}));

console.log(namePriceList);

//cau 4
const inStockProducts = products.filter((p) => p.quantity > 0);

console.log(inStockProducts);

//cau 5
const hasExpensiveProduct = products.some((p) => p.price > 30000000);

console.log(hasExpensiveProduct);

//cau 6
const allAccessoriesAvailable = products
  .filter((p) => p.category == "Accessories")
  .every((p) => p.isAvailable == true);

console.log(allAccessoriesAvailable);

// cau 7 
const totalInventoryValue = products.reduce(
    (total, p) => total + p.price * p.quantity, 0
);

console.log(totalInventoryValue);

//cau 8
for (const product of products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

//cau 9 
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

//cau 10
const sellingAndInStockNames = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);

console.log(sellingAndInStockNames);
