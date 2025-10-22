# o-pch.github.io

このリポジトリは GitHub Pages でホストする React + Vite ベースのサイトです。

開発とビルド:

1. 依存関係をインストールします:

```bash
npm install
```

2. ローカル開発サーバを起動します:

```bash
npm run dev
```

3. 本番用ビルド（出力は `docs/` に配置されます — GitHub Pages の `main` ブランチ `docs/` を公開する設定に合わせています）:

```bash
npm run build
```

4. ビルド成果物をローカルで確認するには:

```bash
npm run preview
```

注意点:

- GitHub Pages で `main/docs` を公開するように設定してください（リポジトリ Settings -> Pages）。
- `vite.config.js` は `base: './'` と `build.outDir = 'docs'` に設定しており、相対パスでの配信に対応しています。

既存の静的ファイル（もし残っていれば）やダウンロードアーカイブは `docs/` にビルド時にコピーされるように設定していません。必要であれば `public/` ディレクトリを作成して静的アセット（zip ファイルなど）を置いておくと、ビルド後に `docs/` に自動でコピーされます。

ライセンス: 任意。自由に編集して使用してください。

---

## 手動でビルドして GitHub Pages に公開する手順 (PowerShell)

以下はローカルでビルドして `docs/` を GitHub に push する最小手順です。`vite.config.js` は `build.outDir = 'docs'` に設定済みである必要があります。

1. 依存関係をインストール（初回のみ）:

```powershell
cd 'C:\files\gbdk\o-pch.github.io'
npm install
```

2. 本番ビルド（`docs/` に成果物が作成されます）:

```powershell
npm run build
```

3. （任意）`docs/.nojekyll` を作成して Jekyll 処理を無効化したい場合:

```powershell
if (!(Test-Path docs/.nojekyll)) { New-Item docs/.nojekyll -ItemType File }
```

4. `docs/` をコミットして push:

```powershell
git add docs
git commit -m "Deploy: build site to docs/"
git push origin main
```

5. GitHub のリポジトリ設定 → Pages で公開先を `main` ブランチ / `docs` フォルダに設定します（初回のみ）。

注意:
- 静的なダウンロードファイル（zip など）は `public/` ディレクトリに置くと、ビルド時に `docs/` にコピーされます。既にリポジトリに配置したいファイルがある場合は `docs/` に直接配置してコミットすることも可能です。
- 自動化したい場合は GitHub Actions を設定すると push 時に自動ビルド・デプロイできます。

