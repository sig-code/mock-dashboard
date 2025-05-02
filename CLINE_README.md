# Mock Dashboard - Cline設定ガイド

## 概要

このリポジトリは、React + TypeScript + Viteを使用したモックダッシュボードプロジェクトです。Clineアシスタントが効果的にサポートできるよう、`.clinerules.json`ファイルで設定を行っています。

## Cline設定の詳細

### パーソナリティ設定

```json
"personality": {
  "language": "japanese",
  "formality": "casual",
  "emoji": true
}
```

- カジュアルな話し方
- 絵文字を使用

### プロジェクト設定

```json
"project": {
  "type": "react-typescript-vite",
  "structure": "single-package",
  "buildTool": "vite",
  "packageManager": "pnpm"
}
```

- React + TypeScript + Viteプロジェクト
- 単一パッケージ構造
- ビルドツール: Vite
- パッケージマネージャー: pnpm

### Git設定

```json
"git": {
  "workflow": "github-flow",
  "commitMessageFormat": "<emoji> <title>",
  "commitTypes": [
    { "type": "feat", "emoji": "🚀", "description": "新機能追加" },
    { "type": "fix", "emoji": "🐞", "description": "バグ修正" },
    { "type": "docs", "emoji": "📝", "description": "ドキュメント変更" },
    { "type": "style", "emoji": "💄", "description": "UIやスタイルの変更" },
    { "type": "enhancement", "emoji": "📈", "description": "機能改善・リファクタリング" },
    { "type": "test", "emoji": "✅", "description": "テスト追加・修正" },
    { "type": "chore", "emoji": "🔧", "description": "ビルドやツールの変更、雑多な作業" }
  ],
  "branchStrategy": {
    "main": "master",
    "feature": "*"
  }
}
```

- GitHub Flowワークフロー
- コミットメッセージ形式: `<絵文字> <タイトル>`
- コミットタイプと対応する絵文字
- ブランチ戦略: masterをメインブランチとし、機能開発は任意の名前のブランチで行う

### 監視設定

```json
"monitoring": {
  "watchFiles": true,
  "excludedPaths": ["fondesk-occ-next"],
  "autoCommitSuggestion": true
}
```

- ファイル変更の監視を有効化
- 除外パス: fondesk-occ-next
- 自動コミットメッセージ提案を有効化

### GitHub設定

```json
"github": {
  "descriptionPrefix": "(Cline)"
}
```

- GitHubのディスクリプションに「(Cline)」というプレフィックスを付ける

### 出力設定

```json
"output": {
  "markdown": {
    "tempPath": "./tmp",
    "obsidianPath": "/Users/t_mashimo/Library/Mobile Documents/iCloud~md~obsidian/Documents/root/"
  }
}
```

- Markdown出力の一時パス: ./tmp
- Obsidian出力パス: /Users/t_mashimo/Library/Mobile Documents/iCloud~md~obsidian/Documents/root/

## 使用方法

1. プロジェクトの変更を行う際、Clineアシスタントが自動的にファイル変更を監視します
2. 変更内容に基づいて、適切なコミットメッセージを提案します
3. GitHub Flowに沿った開発をサポートします
4. Markdownやobsidianへの出力が必要な場合は、指定されたパスに出力されます

## コマンド

```bash
# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# リント
pnpm lint

# プレビュー
pnpm preview
```
