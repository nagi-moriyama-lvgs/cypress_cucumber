import {
  When,
  Then,
  Before,
  Given,
} from "@badeball/cypress-cucumber-preprocessor";

/**
 * Googleの検索ページにアクセス
 */
Before(() => {
  cy.log("before");
});

Given("Googleのサービスが稼働していること", () => {
  cy.log("google稼働中");
});

When("Google.comにアクセス", () => {
  cy.visit("https://www.google.com");
});

Then("タイトルにGoogleが表示されている。", () => {
  cy.contains("Google");
});
