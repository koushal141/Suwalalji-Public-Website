import products from "../../../data/products.json";

export default function handler(req, res) {
  const { id } = req.query;
  const product = products.find((fil) => fil._id === id);
  if (product) res.json(product);
  else res.json(null);
}
