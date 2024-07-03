const COMPANY_CATAGROY_PROUCT_URL = (company, categories) => {
  return `http://20.244.56.144/test/companies/${company}/categories/${categories}/products?top=10&minPrice=1&maxPrice=10000`;
};

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5OTkwMTczLCJpYXQiOjE3MTk5ODk4NzMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjhmZDk0NWUzLWUzZTEtNDZiMi05OTQ3LTQ4ZmExYjA2ZTg2ZiIsInN1YiI6InBhd2FubmFpMzk2QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IlBQUFBQIiwiY2xpZW50SUQiOiI4ZmQ5NDVlMy1lM2UxLTQ2YjItOTk0Ny00OGZhMWIwNmU4NmYiLCJjbGllbnRTZWNyZXQiOiJXQm9GVlJCakxMTElJU1RwIiwib3duZXJOYW1lIjoiUGF2YW4gRCBOYWlrIiwib3duZXJFbWFpbCI6InBhd2FubmFpMzk2QGdtYWlsLmNvbSIsInJvbGxObyI6IjRDQjIxQ1MwNjYifQ._KeEjNcrNvkYd9GWcZofJuZKTtFdvUPKcxxKdYuRfWw";

const COMPANIES = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
const CATEGORIES = [
  "Phone",
  "Computer",
  "TV",
  "Earphone",
  "Tablet",
  "Charger",
  "Mouse",
  "Keypad",
  "Bluetooth",
  "Pendrive",
  "Remote",
  "Speaker",
  "Headset",
  "Laptop",
  "PC",
];

module.exports = { COMPANY_CATAGROY_PROUCT_URL, TOKEN, COMPANIES, CATEGORIES };
