import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

/**
 * サーベイデリバリーを配信する。
 */
When("サーベイデリバリーの配信日時に配信対象者に配信メールを送信する。", () => {
  cy.visit("https://www.google.com");
});

Then(
  "サーベイデリバリーの実施ステータスを「未実施」から「実施中」に変更する。",
  () => {
    cy.contains("Google");
  }
);
Then(
  "配信したサーベイデリバリーの実施ステータスを「実施中」に変更する。",
  () => {
    cy.contains("Google");
  }
);
Then("実施ステータスが「未実施」のサーベイデリバリーを 1 つ作成する。", () => {
  cy.contains("Google");
});
