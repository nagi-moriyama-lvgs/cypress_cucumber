Feature: サンプル

  Scenario: Googleの検索ページにアクセス
    When I visit google.com
    Then タイトルにGoogleが表示されている。