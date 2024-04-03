const express = require("express");
const router = express.Router();

const Laptop = [
  {
    productName: "Laptop 8",
    price: 511,
    rating: 4.64,
    discount: 87,
    availability: "yes",
  },
  {
    productName: "Laptop 5",
    price: 7980,
    rating: 4.43,
    discount: 89,
    availability: "yes",
  },
  {
    productName: "Laptop 10",
    price: 7145,
    rating: 3.97,
    discount: 15,
    availability: "yes",
  },
  {
    productName: "Laptop 1",
    price: 8521,
    rating: 3.31,
    discount: 91,
    availability: "out-of-stock",
  },
  {
    productName: "Laptop 1",
    price: 2236,
    rating: 3.28,
    discount: 63,
    availability: "out-of-stock",
  },
  {
    productName: "Laptop 10",
    price: 4101,
    rating: 2.9,
    discount: 37,
    availability: "yes",
  },
  {
    productName: "Laptop 9",
    price: 1742,
    rating: 2.29,
    discount: 39,
    availability: "yes",
  },
  {
    productName: "Laptop 4",
    price: 1258,
    rating: 2.2,
    discount: 33,
    availability: "yes",
  },
  {
    productName: "Laptop 14",
    price: 9254,
    rating: 2.13,
    discount: 56,
    availability: "yes",
  },
  {
    productName: "Laptop 13",
    price: 1244,
    rating: 1.91,
    discount: 45,
    availability: "yes",
  },
];

router.get("/:categoryname/products/", (req, res) => {
  try {
    console.log("first");
    const catName = req.params.categoryname;
    if (catName == "Laptop") {
      res.json(Laptop);
    }
  } catch (error) {
    return error;
  }
});

module.exports = router;
