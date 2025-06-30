require('dotenv').config()

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // Carrega variáveis de ambiente
      config.env = {
        username: process.env.SAUCEDEMO_USERNAME,
        password: process.env.SAUCEDEMO_PASSWORD,
        invalidUserName: process.env.SAUCEDEMO_INVALIDUSERNAME,
        invalidPassWord: process.env.SAUCEDEMO_INVALIDPASSWORD
      };
      return config;
    },
    baseUrl: 'https://www.saucedemo.com/',
    testIsolation: false
  }
});