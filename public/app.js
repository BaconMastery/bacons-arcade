* {
  box-sizing: border-box;
}

:root {
  --bg-1: #0b1020;
  --bg-2: #111b2c;
  --panel: rgba(18, 25, 39, 0.9);
  --panel-strong: rgba(10, 15, 26, 0.96);
  --line: rgba(125, 142, 179, 0.24);
  --text: #edf4ff;
  --muted: #a3b0c8;
  --accent: #7dd3fc;
  --accent-2: #a78bfa;
  --accent-3: #f472b6;
  --success: #34d399;
  --warning: #fbbf24;
  --shadow: 0 22px 55px rgba(5, 8, 15, 0.56);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(125, 211, 252, 0.16), transparent 22%),
    linear-gradient(135deg, var(--bg-1), var(--bg-2));
  color: var(--text);
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

button, input {
  font: inherit;
}

.app-shell {
  width: min(1320px, 100%);
  min-height: 860px;
  background: rgba(7, 11, 19, 0.72);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  border-radius: 26px;
  backdrop-filter: blur(16px);
  overflow: hidden;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  background: rgba(14, 21, 36, 0.9);
  border-bottom: 1px solid var(--line);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent-3), var(--accent-2));
  color: white;
  font-size: 1.6rem;
  font-weight: 800;
  box-shadow: 0 10px 30px rgba(167, 139, 250, 0.45);
}

.eyebrow {
  margin: 0 0 6px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.68rem;
  font-weight: 700;
}

h1, h2, h3 {
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.04em;
}

.topnav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-tab {
  appearance: none;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-radius: 999px;
  padding: 10px 18px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-tab:hover,
.nav-tab.active {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.2), rgba(167, 139, 250, 0.2));
  border-color: rgba(125, 211, 252, 0.5);
}

.main-panel {
  padding: 28px;
}

.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 22px;
}

.game-card {
  background: linear-gradient(180deg, rgba(21, 30, 47, 0.98), rgba(12, 18, 31, 0.98));
  border: 1px solid var(--line);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.game-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 18px 12px;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.15), rgba(167, 139, 250, 0.12));
  border-bottom: 1px solid var(--line);
}

.game-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 2rem;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.7), rgba(167, 139, 250, 0.7));
}

.game-tag {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.game-body {
  padding: 18px;
}

.game-body h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.game-description {
  color: var(--muted);
  line-height: 1.55;
  margin-bottom: 18px;
}

.details-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 12px;
  margin-bottom: 16px;
}

.details-box h4 {
  margin: 0 0 8px;
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}

.details-box ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.7;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.favorite-btn {
  flex: 1;
  appearance: none;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #061120;
  font-weight: 800;
  padding: 11px 14px;
  cursor: pointer;
}

.favorite-btn.is-favorite {
  background: linear-gradient(135deg, #fbbf24, #f97316);
}

.browser-shell {
  background: rgba(14, 18, 28, 0.85);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 18px;
}

.browser-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
}

.browser-bar input {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--text);
  padding: 14px 16px;
}

.browser-bar button {
  appearance: none;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--success), var(--accent));
  color: #071521;
  font-weight: 800;
  padding: 0 18px;
  cursor: pointer;
}

.browser-viewport {
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  background: white;
  min-height: 720px;
}

#browser-frame {
  width: 100%;
  min-height: 720px;
  border: 0;
  background: white;
}

.empty-state {
  background: rgba(255, 255, 255, 0.03);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  padding: 24px;
  color: var(--muted);
  text-align: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

@media (max-width: 760px) {
  body {
    padding: 12px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .browser-bar {
    flex-direction: column;
  }
}
