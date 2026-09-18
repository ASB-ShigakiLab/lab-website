# Shigaki Lab Website

志垣俊介氏の研究紹介サイト。Home / Members / Research / Publication / Contact / Recruit がそれぞれ独立したページになっており、日英切り替えに対応しています。

## ファイル構成

```
index.html            Home（トップページ）
members.html          Members
research.html         Research
publications.html     Publications
contact.html          Contact
recruit.html          Recruit
assets/style.css       全ページ共通のスタイル
assets/site.js         言語切り替え・モバイルナビ用スクリプト
members/shigaki.html   志垣俊介氏の個人ページ（学歴・職歴・受賞歴など）
members/sekiwa.html    関和諒子氏の個人ページ（学歴・職歴・受賞歴など）
```

ナビゲーションの各項目（ホーム・メンバー・業績・研究・連絡先・募集）をクリックすると、それぞれ別のページに遷移します。Members ページの名前をクリックすると、さらに個人ページに遷移します。

## GitHub Pagesでの公開手順

1. GitHub で新しいリポジトリを作成します（例: `sshigaki.github.io` または任意の名前）。
2. このフォルダ一式（6つの`.html`ファイル、`assets/`、`members/`、`README.md`）をリポジトリのルート（一番上の階層）に追加し、コミット＆プッシュします。フォルダ構成は必ずそのまま保ってください。
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
5. 数分待つと、`https://<ユーザー名>.github.io/<リポジトリ名>/`（リポジトリ名が `<ユーザー名>.github.io` の場合は `https://<ユーザー名>.github.io/`）でサイトが公開されます。

**ブラウザで確認する場合の注意**：`index.html`をダブルクリックして開くだけでは、`assets/style.css`が読み込めず装飾が効かない表示になることがあります。必ず、`index.html`と`assets`フォルダ・`members`フォルダが同じ場所にまとまった状態で開いてください（ZIPでまとめて展開するのが確実です）。

## 内容について（要確認・要編集の箇所）

- **Members ページ**: 志垣俊介氏・関和諒子氏を掲載しています。他にメンバーがいる場合は、`members.html` にカードを追加し、`members/` フォルダに同様の個人ページ（`shigaki.html` をコピーして編集）を作成してください。
- **関和諒子氏の個人ページ（`members/sekiwa.html`）**: 学歴・受賞歴が未入力です。情報をいただければ追記します。
- **Recruit ページ**: 暫定的な文章です。募集要項（対象、待遇、応募方法など）が決まり次第、`recruit.html` の文章を差し替えてください。
- **Contact ページの住所**: 国立情報学研究所の代表所在地を記載しています。部屋番号や内線番号などがあれば追記してください。

## 画像について

研究紹介の画像は、元のJimdoサイト（image.jimcdn.com）にホストされている画像を直接読み込んでいます。長期的な安定運用のためには、画像をダウンロードしてこのリポジトリ内（例: `images/` フォルダ）に置き、各ページの `<img src="...">` を相対パスに変更することをおすすめします。

## カスタマイズ

- 配色・フォントなどのデザインは `assets/style.css` の `:root` に定義した CSS変数（`--ink`, `--paper`, `--amber`, `--teal` など）で、全ページまとめて調整できます。
- 日本語／英語の文章はそれぞれ `class="t-ja"` / `class="t-en"` を持つ要素に分かれています。文言の修正はこの2種類の要素を対応させながら行ってください。
- ナビゲーションは各ページの `<header class="site-nav">` 内にあります。項目を増減する場合は、6ページすべてで同じ変更をしてください。
