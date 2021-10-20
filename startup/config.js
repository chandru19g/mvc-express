const dotenv = require("dotenv");

dotenv.config();

const { PORT, HOST, HOST_URL } = process.env;

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
};
