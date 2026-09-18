# Shigaki Lab Website

志垣俊介氏の研究紹介サイト（Home / Members / Research / Publication / Contact / Recruit、日英切り替え対応）。

## ファイル構成

```
index.html            トップページ（Home / Members / Research / Publication / Contact / Recruit）
assets/style.css       全ページ共通のスタイル
assets/site.js         言語切り替え・モバイルナビ用スクリプト
members/shigaki.html   志垣俊介氏の個人ページ（学歴・職歴・受賞歴など）
members/sekiwa.html    関和諒子氏の個人ページ（学歴・職歴・受賞歴など）
```

Members セクションの名前をクリックすると、それぞれの個人ページに遷移します。

## GitHub Pagesでの公開手順

1. GitHub で新しいリポジトリを作成します（例: `sshigaki.github.io` または任意の名前）。
2. このフォルダ一式（`index.html`, `assets/`, `members/`, `README.md`）をリポジトリのルート（一番上の階層）に追加し、コミット＆プッシュします。フォルダ構成は上記のまま保ってください。
   ```bash
   git init
   git add .
   git commit -m "Add lab website"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```
3. リポジトリの **Settings → Pages** を開きます。
4. "Build and deployment" の **Source** を `Deploy from a branch` に設定し、Branch を `main` / `/(root)` に指定して **Save** します。
5. 数分待つと、`https://<ユーザー名>.github.io/<リポジトリ名>/` （リポジトリ名が `<ユーザー名>.github.io` の場合は `https://<ユーザー名>.github.io/`）でサイトが公開されます。

## 内容について（要確認・要編集の箇所）

サイトは https://sshigaki.jimdofree.com/ の内容（Home / Profile / Research / Publications）をもとに作成しましたが、以下は元サイトに情報がなかったため、暫定的な内容を入れています。実際の内容に差し替えてください。

- **Members セクション**: 志垣俊介氏・関和諒子氏を掲載しています。他にメンバーがいる場合は、`index.html` の Members セクションにカードを追加し、`members/` フォルダに同様の個人ページ（`shigaki.html` をコピーして編集）を作成してください。
- **関和諒子氏の個人ページ（`members/sekiwa.html`）**: 学歴・受賞歴が未入力です。情報をいただければ追記します（このままでも「準備中」と表示されるだけで、サイトとしては問題なく機能します）。
- **Recruit セクション**: 暫定的な文章です。募集要項（対象、待遇、応募方法など）が決まり次第、`<!-- ============ RECRUIT ============ -->` セクションの文章を差し替えてください。
- **Contact セクションの住所**: 国立情報学研究所の代表所在地を記載しています。部屋番号や内線番号などがあれば追記してください。

## 画像について

研究紹介の画像は、元のJimdoサイト（image.jimcdn.com）にホストされている画像を直接読み込んでいます。長期的な安定運用のためには、画像をダウンロードしてこのリポジトリ内（例: `images/` フォルダ）に置き、`index.html` 内の `<img src="...">` を相対パスに変更することをおすすめします。

## カスタマイズ

- 配色・フォントなどのデザインは `index.html` の `<style>` 内、`:root` に定義した CSS変数（`--ink`, `--paper`, `--amber`, `--teal` など）で調整できます。
- 日本語／英語の文章はそれぞれ `class="t-ja"` / `class="t-en"` を持つ要素に分かれています。文言の修正はこの2種類の要素を対応させながら行ってください。
