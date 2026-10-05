const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const GAMES = [
  {
    id: 'neon-drift',
    name: 'Neon Drift',
    icon: '🏎️',
    description: 'A high-speed arcade racer where you dodge traffic, chain boosts, and beat the clock.',
    guide: [
      'Tap the accelerator to build speed.',
      'Shift lanes to avoid incoming traffic and pickups.',
      'Collect boost orbs to trigger turbo bursts.',
      'Finish each track before the timer hits zero.'
    ],
    controls: ['W / ↑ = accelerate', 'S / ↓ = brake', 'A / D or ← / → = steer', 'Space = boost'],
    category: 'Racing'
  },
  {
    id: 'pixel-dungeon',
    name: 'Pixel Dungeon',
    icon: '🗺️',
    description: 'Crawl through a maze of traps, treasure rooms, and monsters in a bite-sized roguelike challenge.',
    guide: [
      'Move room to room and watch for enemy patterns.',
      'Open treasure chests for power-ups and weapons.',
      'Use healing items when your health is low.',
      'Clear room objectives to unlock the exit.'
    ],
    controls: ['Arrow keys or WASD = move', 'E = interact', 'Q = use potion', 'Shift = dash'],
    category: 'Adventure'
  },
  {
    id: 'astro-hopper',
    name: 'Astro Hopper',
    icon: '🚀',
    description: 'Leap across moon platforms and avoid gravity traps while chasing a better score.',
    guide: [
      'Time your jumps to land on moving platforms.',
      'Collect stars to earn combo bonuses.',
      'Look for safe landing zones before falling into the void.',
      'Use short hops to control your momentum.'
    ],
    controls: ['Space = jump', 'A / D = move', 'W = hover boost', 'R = restart'],
    category: 'Platformer'
  },
  {
    id: 'meteor-smasher',
    name: 'Meteor Smasher',
    icon: '☄️',
    description: 'Blast incoming meteors before they hit your base in a reflex-heavy arcade defense minigame.',
    guide: [
      'Aim with your cursor and fire when meteors enter the red zone.',
      'Save bigger shots for multi-hit meteor clusters.',
      'Upgrade the cannon after each wave.',
      'Keep the shield alive as long as possible.'
    ],
    controls: ['Mouse = aim', 'Left click = fire', 'Space = rapid burst', 'E = upgrade'],
    category: 'Action'
  },
  {
    id: 'block-battle',
    name: 'Block Battle',
    icon: '🧱',
    description: 'A puzzle arena where you match blocks, fill lines, and survive escalating rounds.',
    guide: [
      'Stack shapes carefully to avoid gaps.',
      'Clear full rows to gain score multipliers.',
      'Use the hold feature to plan difficult sequences.',
      'Maintain a clean board to survive longer rounds.'
    ],
    controls: ['Arrow keys = move pieces', 'Z = rotate left', 'X = rotate right', '↓ = soft drop'],
    category: 'Puzzle'
  },
  {
    id: 'skyline-sprint',
    name: 'Skyline Sprint',
    icon: '🌆',
    description: 'Dash across rooftop lanes and collect coins while avoiding neon barriers and drones.',
    guide: [
      'Keep moving and react to changing rooftops.',
      'Take shortcuts only when the route is clear.',
      'Collect coin bursts for perfect run combos.',
      'Watch for drone patrol patterns.'
    ],
    controls: ['W / ↑ = jump', 'S / ↓ = slide', 'A / D = switch lanes', 'Shift = sprint'],
    category: 'Runner'
  }
];

function rewriteHtmlForProxy(html, baseUrl) {
  const proxyBase = '/proxy?url=';

  const rewriteUrl = (value) => {
    if (!value || /^(javascript:|data:|mailto:|tel:|#)/i.test(value)) return value;

    try {
      const absolute = new URL(value, baseUrl).toString();
      return `${proxyBase}${encodeURIComponent(absolute)}`;
    } catch {
      return value;
    }
  };

  const withAttributeRewrites = html.replace(/(src|href)=(["'])(.*?)\2/gi, (match, attr, quote, value) => {
    const rewritten = rewriteUrl(value);
    return `${attr}=${quote}${rewritten}${quote}`;
  });

  return withAttributeRewrites.replace(/url\(([^)]+)\)/gi, (match, rawValue) => {
    const cleaned = rawValue.replace(/["']/g, '').trim();
    const rewritten = rewriteUrl(cleaned);
    return `url(${rewritten})`;
  });
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/games', (req, res) => {
  res.json(GAMES);
});

app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing url query parameter.' });
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(targetUrl);
  } catch {
    return res.status(400).json({ error: 'Invalid URL.' });
  }

  if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
    return res.status(400).json({ error: 'Only http and https URLs are supported.' });
  }

  try {
    const response = await fetch(parsedUrl.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; BaconArcadeProxy/1.0; +https://example.com)'
      }
    });

    const contentType = response.headers.get('content-type') || 'text/html';
    const body = await response.text();

    if (!contentType.includes('text/html')) {
      res.set('Content-Type', contentType);
      return res.send(body);
    }

    const rewrittenHtml = rewriteHtmlForProxy(body, parsedUrl.toString());
    res.set('Content-Type', 'text/html; charset=utf-8');
    return res.send(rewrittenHtml);
  } catch (error) {
    console.error('Proxy fetch failed:', error);
    return res.status(502).json({ error: 'Proxy request failed.', details: error.message });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Bacon's Arcade is running on http://localhost:${port}`);
});
