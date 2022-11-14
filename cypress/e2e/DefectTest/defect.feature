Feature: サンプルテストケース

  Scenario: Googleの検索ページにアクセス
    When Google.comにアクセス
    Then タイトルにGoogleが表示されている。
    Then 存在しないテストケース