require("dotenv").config();
import { config as baseConfig } from "./wdio.conf";

export const config = {
  ...baseConfig,

  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  services: ["sauce"],
  region: "eu",

  capabilities: [
    {
      browserName: "chrome",
      platformName: "Windows 11",
      browserVersion: "latest",
      "goog:chromeOptions": {
        args: [
          "--disable-infobars",
          "--disable-notifications",
          "--disable-credentials-enable-service",
          "--disable-save-password-bubble",
          "--disable-autofill-keyboard-accessory-view",
          "--disable-autofill",
        ],
      },
      "sauce:options": {
        name: "Chrome test on SauceLabs",
        build: "saucedemo-build-001",
      },
    },
  ],

  // Run with Edge
  // capabilities: [
  //   {
  //     browserName: "MicrosoftEdge",
  //     platformName: "Windows 11",
  //     browserVersion: "latest",
  //     "ms:edgeOptions": {
  //       args: [
  //         "--disable-infobars",
  //         "--disable-notifications",
  //         "--disable-credentials-enable-service",
  //         "--disable-save-password-bubble",
  //         "--disable-autofill-keyboard-accessory-view",
  //         "--disable-autofill",
  //       ],
  //     },
  //     "sauce:options": {
  //       name: "Edge test on SauceLabs",
  //       build: "saucedemo-build-001",
  //     },
  //   }
  // ],


  maxInstances: 1,
};
