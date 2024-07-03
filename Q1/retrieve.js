const { default: axios } = require("axios");
const { COMPANY_CATAGROY_PROUCT_URL, TOKEN } = require("./contants");

const getProduct = async (company, categories) => {
  try {
    const res = await axios.get(
      COMPANY_CATAGROY_PROUCT_URL(company, categories),
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (e) {
    return [];
  }
  return [];
};
module.exports = { getProduct };
