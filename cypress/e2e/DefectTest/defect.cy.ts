import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe("サンプル", () => {
  When("I visit google.com", () => {
    cy.visit("https://www.google.com");
  });

  Then("タイトルにGoogleが表示されている。", () => {
    cy.contains("Google");
  });
});
