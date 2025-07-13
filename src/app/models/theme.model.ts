export interface Theme {
  id: string;
  name: string;
  emoji: string;
  currency: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    cardBackground: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    danger: string;
  };
  fonts: {
    primary: string;
    decorative: string;
  };
}

export const THEMES: Record<string, Theme> = {
  'harry-potter': {
    id: 'harry-potter',
    name: 'Harry Potter',
    emoji: '⚡',
    currency: 'G',
    colors: {
      primary: '#ffd700',
      secondary: '#8b4513',
      accent: '#daa520',
      background: 'linear-gradient(135deg, #0f0f23 0%, #2d1b69 50%, #0f0f23 100%)',
      cardBackground: 'linear-gradient(135deg, rgba(25, 25, 112, 0.95), rgba(72, 61, 139, 0.95))',
      textPrimary: '#f4f4f4',
      textSecondary: '#e6e6fa',
      border: '#8b4513',
      success: '#228b22',
      warning: '#daa520',
      danger: '#dc143c'
    },
    fonts: {
      primary: "'Cinzel', 'Times New Roman', serif",
      decorative: "'Cinzel Decorative', serif"
    }
  },
  'star-wars': {
    id: 'star-wars',
    name: 'Star Wars',
    emoji: '🌟',
    currency: 'CR',
    colors: {
      primary: '#ffe81f',
      secondary: '#000000',
      accent: '#ff6b6b',
      background: 'linear-gradient(135deg, #000814 0%, #001d3d 50%, #000814 100%)',
      cardBackground: 'linear-gradient(135deg, rgba(0, 8, 20, 0.95), rgba(0, 29, 61, 0.95))',
      textPrimary: '#ffffff',
      textSecondary: '#ffd23f',
      border: '#ffe81f',
      success: '#00d4aa',
      warning: '#ff9f43',
      danger: '#ff3838'
    },
    fonts: {
      primary: "'Orbitron', 'Arial', sans-serif",
      decorative: "'Orbitron', sans-serif"
    }
  },
  'peppa-pig': {
    id: 'peppa-pig',
    name: 'Peppa Pig',
    emoji: '🐷',
    currency: '£',
    colors: {
      primary: '#ff69b4',
      secondary: '#98fb98',
      accent: '#ffb6c1',
      background: 'linear-gradient(135deg, #ffe4e1 0%, #ffd1dc 50%, #ffe4e1 100%)',
      cardBackground: 'linear-gradient(135deg, rgba(255, 192, 203, 0.9), rgba(255, 182, 193, 0.9))',
      textPrimary: '#8b0000',
      textSecondary: '#dc143c',
      border: '#ff69b4',
      success: '#32cd32',
      warning: '#ffa500',
      danger: '#ff1493'
    },
    fonts: {
      primary: "'Comic Sans MS', 'Trebuchet MS', cursive",
      decorative: "'Comic Sans MS', cursive"
    }
  },
  'simpsons': {
    id: 'simpsons',
    name: 'The Simpsons',
    emoji: '🍩',
    currency: '$',
    colors: {
      primary: '#ffd700',
      secondary: '#87ceeb',
      accent: '#ff6347',
      background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 50%, #87ceeb 100%)',
      cardBackground: 'linear-gradient(135deg, rgba(255, 255, 0, 0.9), rgba(255, 215, 0, 0.9))',
      textPrimary: '#8b4513',
      textSecondary: '#2f4f4f',
      border: '#ffd700',
      success: '#32cd32',
      warning: '#ff8c00',
      danger: '#dc143c'
    },
    fonts: {
      primary: "'Trebuchet MS', 'Arial', sans-serif",
      decorative: "'Trebuchet MS', sans-serif"
    }
  },
  'barbie': {
    id: 'barbie',
    name: 'Barbie',
    emoji: '💖',
    currency: '💎',
    colors: {
      primary: '#ff1493',
      secondary: '#ff69b4',
      accent: '#ffc0cb',
      background: 'linear-gradient(135deg, #ff1493 0%, #ff69b4 50%, #ffc0cb 100%)',
      cardBackground: 'linear-gradient(135deg, rgba(255, 20, 147, 0.8), rgba(255, 105, 180, 0.8))',
      textPrimary: '#ffffff',
      textSecondary: '#ffffff',
      border: '#ffffff',
      success: '#ff69b4',
      warning: '#ffa500',
      danger: '#dc143c'
    },
    fonts: {
      primary: "'Dancing Script', 'Brush Script MT', cursive",
      decorative: "'Dancing Script', cursive"
    }
  }
} as const;

export type ThemeId = keyof typeof THEMES;
