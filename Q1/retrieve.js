const { COMPANY_CATAGROY_PROUCT_URL } = require("./contants");

const getProduct = async (company, categories) => {
  const res = await axios.get(
    COMPANY_CATAGROY_PROUCT_URL(company, categories),
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  console.log(res);
  return [];
};

module.exports = { getProduct };
