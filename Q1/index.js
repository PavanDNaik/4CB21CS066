const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const {
  COMPANY_CATAGROY_PROUCT_URL,
  TOKEN,
  COMPANIES,
  CATEGORIES,
} = require("./contants");
const { getProduct } = require("./retrieve");
const app = express();
app.use(cors());
const PORT = 5000;

const ALL_PRODUCTS = [];
try {
  axios
    .get(COMPANY_CATAGROY_PROUCT_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    .then((data) => console.log(data))
    .catch((e) => {
      console.log(e);
    });
} catch (e) {
  console.log(e);
}

async function getAllData() {
  for (let i = 0; i < COMPANIES.length; i++) {
    for (let j = 0; j < CATEGORIES.length; j++) {
      const response = await getProduct(COMPANIES[i], CATEGORIES[j]);
      if (response && response.length) {
        ALL_PRODUCTS = [...ALL_PRODUCTS, ...response];
      }
    }
  }
}

(async () => {
  await getAllData();
  for (let i = 0; i < ALL_PRODUCTS.length; i++) {
    ALL_PRODUCTS[i].productid = i;
  }
})();

console.log("---------------");
console.log(ALL_PRODUCTS);
app.get("/categories/:categoryname/products", async (req, res) => {
  const categoryname = req.params.categoryname;
  const n = req.query.n;
  console.log(n);
  console.log(categoryname);
  res.json("hii");
});

app.get("/categories/:categoryname/products/:productid", async (req, res) => {
  const { categoryname, productid } = req.params;
  const n = req.query.n;
  console.log(n);
  console.log(categoryname);
  console.log(productid);
  res.json("hii");
});

app.listen(PORT, () => {
  console.log("App running on port " + PORT);
});
