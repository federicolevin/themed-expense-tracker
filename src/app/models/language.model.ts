export interface Language {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  translations: {
    // App level
    appTitle: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    appSubtitle: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };

    // Form labels
    formTitle: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    dashboardTitle: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    listTitle: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };

    // Common labels
    amountLabel: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    addButton: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    clearAllButton: string;
    clearAllConfirm: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    deleteButton: string;

    // Form fields
    descriptionLabel: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    descriptionPlaceholder: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    descriptionError: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    amountError: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    categoryLabel: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    categoryPlaceholder: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    categoryError: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    dateLabel: string;
    dateError: string;

    // Categories
    categories: {
      harryPotter: readonly string[];
      starWars: readonly string[];
      peppaPig: readonly string[];
      simpsons: readonly string[];
      barbie: readonly string[];
    };

    // Language selector
    languageSelector: {
      title: string;
      tooltip: string;
    };

    // Theme selector
    themeSelector: {
      title: string;
      tooltip: string;
    };
  };
}

export const LANGUAGES: Record<string, Language> = {
  en: {
    id: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    translations: {
      appTitle: {
        harryPotter: '⚡ Gringotts Expense Ledger ⚡',
        starWars: '🌟 Galactic Credits Tracker 🌟',
        peppaPig: '🐷 Peppa\'s Muddy Puddle Bank 🐷',
        simpsons: '🍩 Springfield Expense-o-Matic 🍩',
        barbie: '💖 Barbie\'s Fabulous Finance 💖'
      },
      appSubtitle: {
        harryPotter: 'Track your galleons, sickles, and knuts with magical precision',
        starWars: 'May the funds be with you - Track your galactic expenses',
        peppaPig: 'Oink oink! Track your pocket money like Peppa',
        simpsons: 'D\'oh! Keep track of your money like Homer with donuts',
        barbie: 'Life in plastic, it\'s fantastic! Track your glamorous expenses'
      },
      formTitle: {
        harryPotter: '📜 Record New Magical Expense',
        starWars: '🚀 Record New Galactic Expense',
        peppaPig: '🎈 Record New Fun Expense',
        simpsons: '🍩 Record New Springfield Expense',
        barbie: '💖 Record New Fabulous Expense'
      },
      dashboardTitle: {
        harryPotter: '🏦 Gringotts Vault Overview',
        starWars: '🌌 Empire Credits Overview',
        peppaPig: '🏠 Peppa\'s Money Overview',
        simpsons: '🏠 Homer\'s Money Overview',
        barbie: '✨ Barbie\'s Fab Financial Overview'
      },
      listTitle: {
        harryPotter: '📋 Recent Magical Transactions',
        starWars: '📊 Recent Galactic Transactions',
        peppaPig: '📝 Recent Fun Expenses',
        simpsons: '📊 Recent Springfield Expenses',
        barbie: '💅 Recent Fabulous Expenses'
      },
      amountLabel: {
        harryPotter: 'Amount (Galleons)',
        starWars: 'Amount (Credits)',
        peppaPig: 'Amount (Pounds)',
        simpsons: 'Amount (Dollars)',
        barbie: 'Amount (Gems)'
      },
      addButton: {
        harryPotter: '⚡ Add to Ledger',
        starWars: '🌟 Add to Database',
        peppaPig: '🐷 Add to Piggy Bank',
        simpsons: '📝 Add to List',
        barbie: '💖 Add to Collection'
      },
      clearAllButton: '🗑️ Clear All',
      clearAllConfirm: {
        harryPotter: '🧙‍♂️ Are you sure you want to clear all magical transactions? This powerful spell cannot be undone! ⚡',
        starWars: 'Are you sure you want to clear all galactic transactions? This action cannot be undone!',
        peppaPig: 'Are you sure you want to clear all your pocket money records?',
        simpsons: 'D\'oh! Are you sure you want to clear all expenses?',
        barbie: 'Are you sure you want to clear all your fabulous expenses?'
      },
      deleteButton: 'Delete this expense',
      descriptionLabel: {
        harryPotter: '✨ Description of Expense',
        starWars: '📝 Description of Expense',
        peppaPig: '📝 What did you buy?',
        simpsons: '📝 What did you spend on?',
        barbie: '💅 What fabulous thing did you buy?'
      },
      descriptionPlaceholder: {
        harryPotter: 'Enter magical expense description...',
        starWars: 'Enter galactic expense description...',
        peppaPig: 'Tell us about your fun expense...',
        simpsons: 'Enter your Springfield expense...',
        barbie: 'Describe your fabulous expense...'
      },
      descriptionError: {
        harryPotter: '🚫 Description is required, young wizard!',
        starWars: 'Description is required for Empire records!',
        peppaPig: 'You need to tell us what you bought!',
        simpsons: 'D\'oh! You need to describe what you bought!',
        barbie: 'Girl, you need to tell us what you bought!'
      },
      amountError: {
        harryPotter: '🚫 Valid amount is required for Gringotts records!',
        starWars: 'Valid credit amount is required!',
        peppaPig: 'How much did it cost? Please enter an amount!',
        simpsons: 'D\'oh! How much did it cost? Enter a valid amount!',
        barbie: 'How much did this fabulousness cost? Enter an amount!'
      },
      categoryLabel: {
        harryPotter: '🏪 Magical Category',
        starWars: '🏪 Galactic Category',
        peppaPig: '🎪 Fun Category',
        simpsons: '🏪 Springfield Category',
        barbie: '✨ Fabulous Category'
      },
      categoryPlaceholder: {
        harryPotter: 'Select a magical category...',
        starWars: 'Select a galactic category...',
        peppaPig: 'What kind of fun was it?',
        simpsons: 'Pick a category, dude...',
        barbie: 'What kind of fabulousness was this?'
      },
      categoryError: {
        harryPotter: '🚫 Category selection is required by Ministry law!',
        starWars: 'Category selection is required!',
        peppaPig: 'Please pick a category for your expense!',
        simpsons: 'D\'oh! You gotta pick a category!',
        barbie: 'Pick a fabulous category, girl!'
      },
      dateLabel: 'Date',
      dateError: 'Date is required!',
      categories: {
        harryPotter: [
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
        starWars: [
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
        peppaPig: [
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
        simpsons: [
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
        barbie: [
          '💄 Beauty & Fashion',
          '🚗 Pink Transportation',
          '👗 Shopping Sprees',
          '🎉 Fabulous Events',
          '💅 Self Care',
          '💊 Wellness & Health',
          '✈️ Dream Vacations',
          '📚 Girl Power Learning',
          '💖 Other Fabulous'
        ]
      },
      languageSelector: {
        title: 'Choose Language',
        tooltip: 'Select your preferred language'
      },
      themeSelector: {
        title: 'Choose Theme',
        tooltip: 'Select your favorite theme'
      }
    }
  },
  es: {
    id: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    translations: {
      appTitle: {
        harryPotter: '⚡ Libro de Gastos de Gringotts ⚡',
        starWars: '🌟 Rastreador de Créditos Galácticos 🌟',
        peppaPig: '🐷 Banco de Charcos de Peppa 🐷',
        simpsons: '🍩 Gasto-Mátic de Springfield 🍩',
        barbie: '💖 Finanzas Fabulosas de Barbie 💖'
      },
      appSubtitle: {
        harryPotter: 'Rastrea tus galeones, sickles y knuts con precisión mágica',
        starWars: 'Que los fondos te acompañen - Rastrea tus gastos galácticos',
        peppaPig: '¡Oink oink! Rastrea tu dinero de bolsillo como Peppa',
        simpsons: '¡D\'oh! Lleva la cuenta de tu dinero como Homer con donas',
        barbie: '¡La vida en plástico es fantástica! Rastrea tus gastos glamorosos'
      },
      formTitle: {
        harryPotter: '📜 Registrar Nuevo Gasto Mágico',
        starWars: '🚀 Registrar Nuevo Gasto Galáctico',
        peppaPig: '🎈 Registrar Nuevo Gasto Divertido',
        simpsons: '🍩 Registrar Nuevo Gasto de Springfield',
        barbie: '💖 Registrar Nuevo Gasto Fabuloso'
      },
      dashboardTitle: {
        harryPotter: '🏦 Resumen de la Bóveda de Gringotts',
        starWars: '🌌 Resumen de Créditos del Imperio',
        peppaPig: '🏠 Resumen de Dinero de Peppa',
        simpsons: '🏠 Resumen de Dinero de Homer',
        barbie: '✨ Resumen Financiero Fabuloso de Barbie'
      },
      listTitle: {
        harryPotter: '📋 Transacciones Mágicas Recientes',
        starWars: '📊 Transacciones Galácticas Recientes',
        peppaPig: '📝 Gastos Divertidos Recientes',
        simpsons: '📊 Gastos Recientes de Springfield',
        barbie: '💅 Gastos Fabulosos Recientes'
      },
      amountLabel: {
        harryPotter: 'Cantidad (Galeones)',
        starWars: 'Cantidad (Créditos)',
        peppaPig: 'Cantidad (Libras)',
        simpsons: 'Cantidad (Dólares)',
        barbie: 'Cantidad (Gemas)'
      },
      addButton: {
        harryPotter: '⚡ Agregar al Libro',
        starWars: '🌟 Agregar a la Base de Datos',
        peppaPig: '🐷 Agregar a la Alcancía',
        simpsons: '📝 Agregar a la Lista',
        barbie: '💖 Agregar a la Colección'
      },
      clearAllButton: '🗑️ Limpiar Todo',
      clearAllConfirm: {
        harryPotter: '🧙‍♂️ ¿Estás seguro de que quieres limpiar todas las transacciones mágicas? ¡Este poderoso hechizo no se puede deshacer! ⚡',
        starWars: '¿Estás seguro de que quieres limpiar todas las transacciones galácticas? ¡Esta acción no se puede deshacer!',
        peppaPig: '¿Estás seguro de que quieres limpiar todos tus registros de dinero de bolsillo?',
        simpsons: '¡D\'oh! ¿Estás seguro de que quieres limpiar todos los gastos?',
        barbie: '¿Estás seguro de que quieres limpiar todos tus gastos fabulosos?'
      },
      deleteButton: 'Eliminar este gasto',
      descriptionLabel: {
        harryPotter: '✨ Descripción del Gasto',
        starWars: '📝 Descripción del Gasto',
        peppaPig: '📝 ¿Qué compraste?',
        simpsons: '📝 ¿En qué gastaste?',
        barbie: '💅 ¿Qué cosa fabulosa compraste?'
      },
      descriptionPlaceholder: {
        harryPotter: 'Ingresa la descripción del gasto mágico...',
        starWars: 'Ingresa la descripción del gasto galáctico...',
        peppaPig: 'Cuéntanos sobre tu gasto divertido...',
        simpsons: 'Ingresa tu gasto de Springfield...',
        barbie: 'Describe tu gasto fabuloso...'
      },
      descriptionError: {
        harryPotter: '🚫 ¡La descripción es requerida, joven mago!',
        starWars: '¡La descripción es requerida para los registros del Imperio!',
        peppaPig: '¡Necesitas decirnos qué compraste!',
        simpsons: '¡D\'oh! ¡Necesitas describir qué compraste!',
        barbie: '¡Chica, necesitas decirnos qué compraste!'
      },
      amountError: {
        harryPotter: '🚫 ¡Se requiere una cantidad válida para los registros de Gringotts!',
        starWars: '¡Se requiere una cantidad válida de créditos!',
        peppaPig: '¿Cuánto costó? ¡Por favor ingresa una cantidad!',
        simpsons: '¡D\'oh! ¿Cuánto costó? ¡Ingresa una cantidad válida!',
        barbie: '¿Cuánto costó esta fabulosidad? ¡Ingresa una cantidad!'
      },
      categoryLabel: {
        harryPotter: '🏪 Categoría Mágica',
        starWars: '🏪 Categoría Galáctica',
        peppaPig: '🎪 Categoría Divertida',
        simpsons: '🏪 Categoría de Springfield',
        barbie: '✨ Categoría Fabulosa'
      },
      categoryPlaceholder: {
        harryPotter: 'Selecciona una categoría mágica...',
        starWars: 'Selecciona una categoría galáctica...',
        peppaPig: '¿Qué tipo de diversión fue?',
        simpsons: 'Elige una categoría, amigo...',
        barbie: '¿Qué tipo de fabulosidad fue esto?'
      },
      categoryError: {
        harryPotter: '🚫 ¡La selección de categoría es requerida por la ley del Ministerio!',
        starWars: '¡La selección de categoría es requerida!',
        peppaPig: '¡Por favor elige una categoría para tu gasto!',
        simpsons: '¡D\'oh! ¡Tienes que elegir una categoría!',
        barbie: '¡Elige una categoría fabulosa, chica!'
      },
      dateLabel: 'Fecha',
      dateError: '¡La fecha es requerida!',
      categories: {
        harryPotter: [
          '🍖 Comida y Cerveza de Mantequilla',
          '🚂 Transporte Mágico',
          '📚 Libros y Suministros',
          '🎭 Entretenimiento y Quidditch',
          '⚡ Servicios Mágicos',
          '🏥 Sanación y Pociones',
          '✈️ Viajes Mágicos',
          '🎓 Educación Mágica',
          '🔮 Otros Artículos Mágicos'
        ],
        starWars: [
          '🍖 Cantina y Comida',
          '🚀 Transporte de Nave Espacial',
          '🔫 Armas y Equipo',
          '🎮 Entretenimiento Holonet',
          '⚙️ Servicios de Droides',
          '💊 Médico y Bacta',
          '🌌 Viajes en Hiperespacio',
          '📚 Entrenamiento Jedi',
          '🔧 Otro Equipo'
        ],
        peppaPig: [
          '🍰 Aperitivos y Golosinas',
          '🚌 Transporte Divertido',
          '🧸 Juguetes y Juegos',
          '🎪 Actividades Divertidas',
          '🏥 Cuidado al Crecer',
          '💊 Cosas Saludables',
          '✈️ Aventuras de Vacaciones',
          '📚 Tiempo de Aprendizaje',
          '🎁 Otras Cosas Buenas'
        ],
        simpsons: [
          '🍩 Comida y Cerveza Duff',
          '🚗 Auto y Transporte',
          '📺 Entretenimiento',
          '🎪 Diversión en Krusty Land',
          '⚡ Planta Nuclear',
          '🏥 Cuidado del Dr. Hibbert',
          '✈️ Vacaciones Familiares',
          '📚 Útiles Escolares',
          '🔧 Otro Springfield'
        ],
        barbie: [
          '💄 Belleza y Moda',
          '🚗 Transporte Rosa',
          '👗 Compras Masivas',
          '🎉 Eventos Fabulosos',
          '💅 Cuidado Personal',
          '💊 Bienestar y Salud',
          '✈️ Vacaciones de Ensueño',
          '📚 Aprendizaje de Poder Femenino',
          '💖 Otras Cosas Fabulosas'
        ]
      },
      languageSelector: {
        title: 'Elegir Idioma',
        tooltip: 'Selecciona tu idioma preferido'
      },
      themeSelector: {
        title: 'Elegir Tema',
        tooltip: 'Selecciona tu tema favorito'
      }
    }
  }
} as const;

export type LanguageId = keyof typeof LANGUAGES;
export type ThemeKey = 'harryPotter' | 'starWars' | 'peppaPig' | 'simpsons' | 'barbie';
