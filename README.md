# 🐹 Momo AI

**Friendly AI Chat Sidebar** — 在任何網頁中與多種 AI 模型即時對話的 Chrome 擴充功能。

## 功能

- 支援 11+ AI 供應商（OpenAI、Google Gemini、DeepSeek、Qwen、Ollama、LM Studio、OpenRouter、NVIDIA 等）
- 側邊欄聊天介面
- 浮球快速啟動
- 網頁內容擷取與引用
- 聯網搜尋（Google、DuckDuckGo、Brave、Tavily、SearXNG）
- 圖片上傳與理解
- 思考模式（Thinking / Reasoning）
- 語音朗讀（TTS）
- 自訂系統提示詞
- 聊天記錄管理
- 多語言介面（繁中 / 簡中 / English）
- 快捷鍵支援

## 安裝

1. 下載或 clone 此專案
2. 開啟 Chrome，前往 `chrome://extensions/`
3. 開啟「開發人員模式」
4. 點擊「載入未封裝項目」，選擇 `sider/` 資料夾
5. 點擊工具列上的 Momo 圖示開始使用

## 專案結構

```
sider/              # Chrome 擴充功能原始碼
├── manifest.json   # MV3 manifest
├── background.js   # Service worker
├── sidepanel.*     # 側邊欄 UI
├── options.*       # 設定頁面
├── assets/         # 圖示、i18n 翻譯
├── js/             # 核心模組
└── libs/           # 第三方函式庫
docs/               # 說明文件網站
```

## 授權

MIT License
