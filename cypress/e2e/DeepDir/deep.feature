Feature: サンプルテストケース

  Scenario: Googleの検索ページにアクセス
    Given Googleのサービスが稼働していること
    When Google.comにアクセス
    Then タイトルにGoogleが表示されている。

  Scenario: サーベイデリバリーを配信する。
    When サーベイデリバリーの配信日時に配信対象者に配信メールを送信する。
    Then サーベイデリバリーの実施ステータスを「未実施」から「実施中」に変更する。
       * 配信したサーベイデリバリーの実施ステータスを「実施中」に変更する。
       * 実施ステータスが「未実施」のサーベイデリバリーを 1 つ作成する。