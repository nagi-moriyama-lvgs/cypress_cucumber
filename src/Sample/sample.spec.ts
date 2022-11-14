import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit google.com", () => {
  cy.visit("https://www.google.com");
});

Then("タイトルにGoogleが表示されている。", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});
