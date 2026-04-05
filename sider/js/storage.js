/* js/storage.js — Storage abstraction with auto-cleanup
   Depends on: nothing (standalone) */

'use strict';

const StorageHelper = {
  /* Max sessions before auto-cleanup triggers */
  MAX_SESSIONS: 200,
  /* Sessions older than this (ms) are candidates for cleanup */
  SESSION_MAX_AGE_MS: 90 * 24 * 60 * 60 * 1000, // 90 days

  /* ── Session persistence ── */
  async loadSessions() {
    try {
      const { sessions } = await chrome.storage.local.get('sessions');
      return Array.isArray(sessions) ? sessions : [];
    } catch (e) {
      console.error('[Storage] loadSessions failed:', e);
      return [];
    }
  },

  async saveSessions(sessions) {
    try {
      await chrome.storage.local.set({ sessions });
    } catch (e) {
      console.error('[Storage] saveSessions failed:', e);
      // If quota exceeded, try cleanup then retry
      if (e.message?.includes('QUOTA_BYTES')) {
        console.warn('[Storage] Quota exceeded, running cleanup...');
        const cleaned = this.cleanupSessions(sessions);
        await chrome.storage.local.set({ sessions: cleaned });
      }
    }
  },

  /* ── Auto-cleanup: remove old/empty sessions when limit exceeded ── */
  cleanupSessions(sessions) {
    if (!Array.isArray(sessions) || sessions.length <= this.MAX_SESSIONS) return sessions;

    const now = Date.now();
    const cutoff = now - this.SESSION_MAX_AGE_MS;

    // Sort by last activity (most recent first)
    const sorted = [...sessions].sort((a, b) => {
      const aTime = a.updatedAt || a.createdAt || 0;
      const bTime = b.updatedAt || b.createdAt || 0;
      return bTime - aTime;
    });

    // Keep recent sessions, remove old empty ones first
    const keep = [];
    const removeCandidates = [];

    for (const s of sorted) {
      const lastActive = s.updatedAt || s.createdAt || 0;
      const messageCount = s.messages?.filter(m => m.role !== 'system').length || 0;

      if (lastActive < cutoff && messageCount <= 1) {
        // Old and empty/minimal — candidate for removal
        removeCandidates.push(s);
      } else {
        keep.push(s);
      }
    }

    // If still over limit, trim oldest from keep list
    if (keep.length > this.MAX_SESSIONS) {
      const excess = keep.splice(this.MAX_SESSIONS);
      console.log(`[Storage] Trimmed ${excess.length} oldest sessions`);
    }

    if (removeCandidates.length > 0) {
      console.log(`[Storage] Cleaned up ${removeCandidates.length} old/empty sessions`);
    }

    return keep;
  },

  /* ── Prompts (sync storage) ── */
  async loadPrompts() {
    try {
      const { prompts, selectedPromptId } = await chrome.storage.sync.get(['prompts', 'selectedPromptId']);
      return { prompts: prompts || null, selectedPromptId: selectedPromptId || null };
    } catch (e) {
      console.error('[Storage] loadPrompts failed:', e);
      return { prompts: null, selectedPromptId: null };
    }
  },

  async savePrompts(prompts, selectedPromptId) {
    try {
      await chrome.storage.sync.set({ prompts, selectedPromptId });
    } catch (e) {
      console.error('[Storage] savePrompts failed:', e);
    }
  },

  /* ── Provider configs (local storage) ── */
  async loadProviderConfigs() {
    try {
      const { providerConfigs, customModels, activeProvider } =
        await chrome.storage.local.get(['providerConfigs', 'customModels', 'activeProvider']);
      return { providerConfigs, customModels, activeProvider };
    } catch (e) {
      console.error('[Storage] loadProviderConfigs failed:', e);
      return {};
    }
  },

  /* ── Generic get/set wrappers ── */
  async get(keys) {
    return chrome.storage.local.get(keys);
  },

  async set(data) {
    return chrome.storage.local.set(data);
  },

  async getSync(keys) {
    return chrome.storage.sync.get(keys);
  },

  async setSync(data) {
    return chrome.storage.sync.set(data);
  }
};
