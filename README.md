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

<br><br>

## 備考

vscodeの拡張機能

以下で`xxx.feature`ファイルにハイライト可能

```
Snippets and Syntax Highlight for Gherkin (Cucumber)
```
