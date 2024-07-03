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
const fs = require("fs");
const app = express();
app.use(cors());
const PORT = 5000;

let ALL_PRODUCTS = {};
// try {
//   axios
//     .get(COMPANY_CATAGROY_PROUCT_URL, {
//       headers: {
//         Authorization: `Bearer ${TOKEN}`,
//       },
//     })
//     .then((data) => console.log(data))
//     .catch((e) => {
//       console.log(e);
//     });
// } catch (e) {
//   console.log(e);
// }

let k = 0;
async function getAllData() {
  for (let i = 0; i < COMPANIES.length; i++) {
    for (let j = 0; j < CATEGORIES.length; j++) {
      const response = await getProduct(COMPANIES[i], CATEGORIES[j]);
      if (response && response.length) {
        for (let l = 0; l < response.length; l++) {
          response[i].productid = k++;
        }
        if (!ALL_PRODUCTS[COMPANIES[i]]) {
          ALL_PRODUCTS[COMPANIES[i]] = {};
        }
        ALL_PRODUCTS[COMPANIES[i]][CATEGORIES[j]] = response;
      }
    }
  }
}

(async () => {
  getAllData().then(() => {
    fs.writeFileSync("./product.json", JSON.stringify(ALL_PRODUCTS));
    // fs.readFileSync();
  });
})();

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
