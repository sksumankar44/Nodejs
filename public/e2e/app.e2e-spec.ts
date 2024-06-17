import { browser, element, by } from "protractor";

describe("QuickStart E2E Tests", function () {
  let expectedMsg = "Hello Angular";

  beforeEach(function () {
    browser.get("");
  });

  it("should display: " + expectedMsg, function () {
    expect(element(by.css("h1")).getText()).toEqual(expectedMsg);
  });
});
import { browser, element, by } from "protractor";

describe("QuickStart E2E Tests", function () {
  let expectedMsg = "Hello Angular";

  beforeEach(async function () {
    await browser.get(""); // Use an appropriate URL or path
  });

  it(`should display: ${expectedMsg}`, async function () {
    const text = await element(by.css("h1")).getText();
    expect(text).toEqual(expectedMsg);
  });
});
