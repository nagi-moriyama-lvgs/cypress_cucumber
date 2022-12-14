# cypress_cucumber

## setup

### package install

```
% npm install --save-dev cypress
% npm install --save-dev @badeball/cypress-cucumber-preprocessor
% npm install --save-dev @cypress/browserify-preprocessor
% npm isntall --save-dev @types/cypress-cucumber-preprocessor
```

### config file

```ts
// cypess.config.ts

import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});

```

<br><br>

## 運用

`cypress/e2e`ディレクトリに以下のファイルを定義

- `xxx.ts`
- `xxx.feature`

### xxx.feature

Gherkin記法で記載。

これがテストケースになる。（[参考](https://qiita.com/hideshis/items/b853f2a0ff4769f24cfb)）

```feature
Feature: サンプルテストケース

  Scenario: Googleの検索ページにアクセス
    When Google.comにアクセス
    Then タイトルにGoogleが表示されている。

  Scenario: サーベイデリバリーを配信する。
    When サーベイデリバリーの配信日時に配信対象者に配信メールを送信する。
    Then サーベイデリバリーの実施ステータスを「未実施」から「実施中」に変更する。
       * 配信したサーベイデリバリーの実施ステータスを「実施中」に変更する。
       * 実施ステータスが「未実施」のサーベイデリバリーを 1 つ作成する。
```


### xxx.ts

Cypressのテストファイルの代わりになるもの。

`describe`や`it`の代わりに`Given`,`When`,`Then`で記載

```ts
import { When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

/**
 * Googleの検索ページにアクセス
 */
Before(() => {
  cy.log("before");
});

When("Google.comにアクセス", () => {
  cy.visit("https://www.google.com");
});

Then("タイトルにGoogleが表示されている。", () => {
  cy.contains("Google");
});
```

`feature`ファイルとテストファイルの`Step`(Given,When,Thenの総称)は必ず1:1で存在する必要がある。
| テスト成功時 | テスト欠損時 |
| --- | --- |
|<img width="414" alt="スクリーンショット 2022-11-14 17 46 45" src="https://user-images.githubusercontent.com/85160208/201618260-802f18e5-8df9-4019-ab38-47de8f1ffa55.png">| <img width="500" alt="スクリーンショット 2022-11-14 17 59 04" src="https://user-images.githubusercontent.com/85160208/201618389-e332dd54-33cc-4c9f-a3eb-88f89ca37cc0.png"> |


featureとテストが1:1でない場合はテストがfailする。


<br><br>

## 備考

vscodeの拡張機能

以下で`xxx.feature`ファイルにハイライト可能

```
Snippets and Syntax Highlight for Gherkin (Cucumber)
```
