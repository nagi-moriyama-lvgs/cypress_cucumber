Feature: サンプル

  Scenario: Googleの検索ページにアクセス
    Given I visit google.com
    Then タイトルにGoogleが表示されている。