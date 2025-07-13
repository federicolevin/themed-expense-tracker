export interface Theme {
  id: string;
  name: string;
  emoji: string;
  appTitle: string;
  appSubtitle: string;
  currency: string;
  categories: readonly string[];
  labels: {
    formTitle: string;
    dashboardTitle: string;
    listTitle: string;
    amountLabel: string;
    addButton: string;
    clearAllButton: string;
    clearAllConfirm: string;
    deleteButton: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    descriptionError: string;
    amountError: string;
    categoryLabel: string;
    categoryPlaceholder: string;
    categoryError: string;
    dateLabel: string;
    dateError: string;
  };
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
    appTitle: '⚡ Gringotts Expense Ledger ⚡',
    appSubtitle: 'Track your galleons, sickles, and knuts with magical precision',
    currency: 'G',
    categories: [
      '🍖 Food & Butterbeer',
      '🚂 Magical Transportation',
      '📚 Books & Supplies',
      '🎭 Entertainment & Quidditch',
      '⚡ Magical Services',
      '🏥 Healing & Potions',
      '✈️ Magical Travel',
      '🎓 Magical Education',
      '🔮 Other Magical Items'
    ],
    labels: {
      formTitle: '📜 Record New Magical Expense',
      dashboardTitle: '🏦 Gringotts Vault Overview',
      listTitle: '📋 Recent Magical Transactions',
      amountLabel: 'Amount (Galleons)',
      addButton: '⚡ Add to Ledger',
      clearAllButton: '🗑️ Clear All',
      clearAllConfirm: '🧙‍♂️ Are you sure you want to clear all magical transactions? This powerful spell cannot be undone! ⚡',
      deleteButton: 'Banish this expense',
      descriptionLabel: '✨ Description of Expense',
      descriptionPlaceholder: 'Enter magical expense description...',
      descriptionError: '🚫 Description is required, young wizard!',
      amountError: '🚫 Valid amount is required for Gringotts records!',
      categoryLabel: '🏪 Magical Category',
      categoryPlaceholder: 'Select a magical category...',
      categoryError: '🚫 Category selection is required by Ministry law!',
      dateLabel: '📅 Date of Transaction',
      dateError: '🚫 Date is required for magical records!'
    },
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
    appTitle: '🌟 Galactic Credits Tracker 🌟',
    appSubtitle: 'May the funds be with you - Track your galactic expenses',
    currency: 'CR',
    categories: [
      '🍖 Cantina & Food',
      '🚀 Spaceship Transport',
      '🔫 Weapons & Gear',
      '🎮 Holonet Entertainment',
      '⚙️ Droid Services',
      '💊 Medical & Bacta',
      '🌌 Hyperspace Travel',
      '📚 Jedi Training',
      '🔧 Other Equipment'
    ],
    labels: {
      formTitle: '🚀 Record New Galactic Expense',
      dashboardTitle: '🌌 Empire Credits Overview',
      listTitle: '📊 Recent Galactic Transactions',
      amountLabel: 'Amount (Credits)',
      addButton: '🌟 Add to Database',
      clearAllButton: '🗑️ Clear All',
      clearAllConfirm: 'Are you sure you want to clear all galactic transactions? This action cannot be undone!',
      deleteButton: 'Delete this expense',
      descriptionLabel: '📝 Description of Expense',
      descriptionPlaceholder: 'Enter galactic expense description...',
      descriptionError: 'Description is required for Empire records!',
      amountError: 'Valid credit amount is required!',
      categoryLabel: '🏪 Galactic Category',
      categoryPlaceholder: 'Select a galactic category...',
      categoryError: 'Category selection is required!',
      dateLabel: '📅 Date of Transaction',
      dateError: 'Date is required for database!'
    },
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
    appTitle: '🐷 Peppa\'s Muddy Puddle Bank 🐷',
    appSubtitle: 'Oink oink! Track your pocket money like Peppa',
    currency: '£',
    categories: [
      '🍰 Snacks & Treats',
      '🚌 Transport Fun',
      '🧸 Toys & Games',
      '🎪 Fun Activities',
      '🏥 Growing Up Care',
      '💊 Healthy Things',
      '✈️ Holiday Adventures',
      '📚 Learning Time',
      '🎁 Other Goodies'
    ],
    labels: {
      formTitle: '🎈 Record New Fun Expense',
      dashboardTitle: '🏠 Peppa\'s Money Overview',
      listTitle: '📝 Recent Fun Expenses',
      amountLabel: 'Amount (Pounds)',
      addButton: '🐷 Add to Piggy Bank',
      clearAllButton: '🗑️ Clear All',
      clearAllConfirm: 'Are you sure you want to clear all your pocket money records?',
      deleteButton: 'Remove this expense',
      descriptionLabel: '📝 What did you buy?',
      descriptionPlaceholder: 'Tell us about your fun expense...',
      descriptionError: 'You need to tell us what you bought!',
      amountError: 'How much did it cost? Please enter an amount!',
      categoryLabel: '🎪 Fun Category',
      categoryPlaceholder: 'What kind of fun was it?',
      categoryError: 'Please pick a category for your expense!',
      dateLabel: '📅 When did you buy it?',
      dateError: 'When did this happen? Please pick a date!'
    },
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
    appTitle: '🍩 Springfield Expense-o-Matic 🍩',
    appSubtitle: 'D\'oh! Keep track of your money like Homer with donuts',
    currency: '$',
    categories: [
      '🍩 Food & Duff Beer',
      '🚗 Car & Transport',
      '📺 Entertainment',
      '🎪 Krusty Land Fun',
      '⚡ Nuclear Plant',
      '🏥 Dr. Hibbert Care',
      '✈️ Family Vacations',
      '📚 School Supplies',
      '🔧 Other Springfield'
    ],
    labels: {
      formTitle: '🍩 Record New Springfield Expense',
      dashboardTitle: '🏠 Homer\'s Money Overview',
      listTitle: '📊 Recent Springfield Expenses',
      amountLabel: 'Amount (Dollars)',
      addButton: '📝 Add to List',
      clearAllButton: '🗑️ Clear All',
      clearAllConfirm: 'D\'oh! Are you sure you want to clear all expenses?',
      deleteButton: 'Delete this expense',
      descriptionLabel: '📝 What did you spend on?',
      descriptionPlaceholder: 'Enter your Springfield expense...',
      descriptionError: 'D\'oh! You need to describe what you bought!',
      amountError: 'D\'oh! How much did it cost? Enter a valid amount!',
      categoryLabel: '🏪 Springfield Category',
      categoryPlaceholder: 'Pick a category, dude...',
      categoryError: 'D\'oh! You gotta pick a category!',
      dateLabel: '📅 When did you buy it?',
      dateError: 'D\'oh! When did this happen? Pick a date!'
    },
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
    appTitle: '💖 Barbie\'s Fabulous Finance 💖',
    appSubtitle: 'Life in plastic, it\'s fantastic! Track your glamorous expenses',
    currency: '💎',
    categories: [
      '💄 Beauty & Fashion',
      '🚗 Pink Transportation',
      '👗 Shopping Sprees',
      '🎉 Fabulous Events',
      '💅 Self Care',
      '💊 Wellness & Health',
      '✈️ Dream Vacations',
      '📚 Girl Power Learning',
      '💖 Other Fabulous'
    ],
    labels: {
      formTitle: '💖 Record New Fabulous Expense',
      dashboardTitle: '✨ Barbie\'s Fab Financial Overview',
      listTitle: '💅 Recent Fabulous Expenses',
      amountLabel: 'Amount (Gems)',
      addButton: '💖 Add to Collection',
      clearAllButton: '🗑️ Clear All',
      clearAllConfirm: 'Are you sure you want to clear all your fabulous expenses?',
      deleteButton: 'Remove this expense',
      descriptionLabel: '💅 What fabulous thing did you buy?',
      descriptionPlaceholder: 'Describe your fabulous expense...',
      descriptionError: 'Girl, you need to tell us what you bought!',
      amountError: 'How much did this fabulousness cost? Enter an amount!',
      categoryLabel: '✨ Fabulous Category',
      categoryPlaceholder: 'What kind of fabulousness was this?',
      categoryError: 'Pick a fabulous category, girl!',
      dateLabel: '📅 When did you get it?',
      dateError: 'When did this fabulous purchase happen? Pick a date!'
    },
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
