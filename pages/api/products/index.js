import products from "../../../data/products.json";

export default function (req, res) {
  res.json(products);
}
