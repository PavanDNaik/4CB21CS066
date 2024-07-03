const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const { COMPANY_CATAGROY_PROUCT_URL, TOKEN } = require("./contants");
const app = express();
app.use(cors());
const PORT = 5000;

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

app.get("/categories/:categoryname/products", (req, res) => {
  const categoryname = req.params.categoryname;
  const n = req.query.n;
  console.log(n);
  console.log(categoryname);
  res.json("hii");
});

app.get("/categories/:categoryname/products/:productid", (req, res) => {
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
