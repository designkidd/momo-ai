# 🎉 版本 1.5.0 更新：集成 Readability + Markdown

## 新功能

### ✨ 智能內容提取
- 集成 **Mozilla Readability**（Firefox 閱讀模式使用的技術）
- 自動識別網頁主要內容區域
- 智能過濾導航欄、廣告、側邊欄、footer 等雜亂元素

### 📝 Markdown 轉換
- 使用 **Turndown.js** 將內容轉換為 Markdown 格式
- 支持 GitHub Flavored Markdown (GFM)：表格、代碼塊、刪除線等
- Markdown 格式對 AI 更友好，可節省 10-30% token

## 工作原理

```
網頁 → 移除隱藏元素 → Readability 提取主內容 → 
Turndown 轉 Markdown → 傳給 AI
```

## 使用方法

1. **啟用新功能**：
   - 打開設定頁面（齒輪圖標）
   - 找到「引用頁面內容設定」
   - 選擇「排除導覽欄」模式（默認）

2. **測試效果**：
   - 打開任意新聞/部落格/文檔網站
   - 點擊「引用頁面」按鈕
   - 在 Console 中查看日誌：
     ```
     [Readability] Starting intelligent content extraction...
     [Readability] Article extracted: {...}
     [Readability] Converted to Markdown, length: XXXX
     ```

3. **對比測試**：
   - 「排除導覽欄」：使用 Readability + Markdown（推薦）
   - 「整個頁面」：使用舊方法（包含所有元素）
   - 「自訂 CSS」：使用自訂選擇器

## 優勢

### vs 舊的「排除導覽欄」
- ✅ **更智能**：不依賴手動配置的 CSS 選擇器
- ✅ **更準確**：Mozilla 技術經過數千網站測試
- ✅ **更通用**：適用於絕大多數網站結構

### vs 「整個頁面」
- ✅ **更乾淨**：自動移除無關內容
- ✅ **更省 token**：Markdown 格式更簡潔
- ✅ **AI 更易理解**：結構化的 Markdown

## 虛擬滾動網站

Amazon、Twitter、Reddit 等網站仍使用「智能滾動模式」：
- 逐步滾動頁面
- 實時捕獲可見內容
- 適合動態加載的網站

## 技術細節

- **Readability.js**：~50KB，Mozilla 開發
- **Turndown.js**：~30KB，HTML → Markdown 轉換
- **Turndown GFM Plugin**：~20KB，GitHub Flavored Markdown 支持
- **總計**：約 100KB

## 測試建議

推薦測試網站：
1. 新聞網站（例如：Medium、CNN）
2. 技術部落格（例如：Dev.to）
3. 文檔網站（例如：MDN、GitHub README）
4. 電商網站產品頁面

## 已知限制

- 某些高度定制化的網站可能提取不完整
- 如遇問題，可切換到「整個頁面」或「自訂 CSS」模式

