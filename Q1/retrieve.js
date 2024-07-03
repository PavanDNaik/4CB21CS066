const { default: axios } = require("axios");
const { COMPANY_CATAGROY_PROUCT_URL, TOKEN } = require("./contants");

const getProduct = async (company, categories) => {
  console.log(COMPANY_CATAGROY_PROUCT_URL(company, categories));
  const res = await axios.get(
    COMPANY_CATAGROY_PROUCT_URL(company, categories),
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  if (res.data) {
    return res.data;
  }
  return [];
};
module.exports = { getProduct };
