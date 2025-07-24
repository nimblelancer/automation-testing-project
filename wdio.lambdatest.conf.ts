require("dotenv").config();
import { config as baseConfig } from "./wdio.conf";
import { browser } from "@wdio/globals";
import type { Browser } from "webdriverio";

export const config: WebdriverIO.Config = {
  ...baseConfig,

  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,

  services: [],

  capabilities: [
    {
      browserName: "chrome",
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
      "LT:Options": {
        platformName: "Windows 11",
        build: "LambdaTest Demo",
        name: "Simple Chrome Test",
      },
    },
  ],

  hostname: "hub.lambdatest.com",
  port: 443,
  path: "/wd/hub",
  protocol: "https",

  afterTest: async function (test, context, { error, passed }) {
    const status = passed ? "passed" : "failed";
    const b = browser as Browser;

    await b.execute(`lambda-status=${status}`);
    await b.execute(`lambda-name=${test.title}`);
  },
};
