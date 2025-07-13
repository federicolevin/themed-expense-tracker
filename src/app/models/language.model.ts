import { CategoryKey } from './expense.model';

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

    // Dashboard statistics
    totalMoneySpent: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    totalTransactions: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    expensesByCategory: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };
    recentTransactions: {
      harryPotter: string;
      starWars: string;
      peppaPig: string;
      simpsons: string;
      barbie: string;
    };

    // Categories
    categories: {
      harryPotter: Record<CategoryKey, string>;
      starWars: Record<CategoryKey, string>;
      peppaPig: Record<CategoryKey, string>;
      simpsons: Record<CategoryKey, string>;
      barbie: Record<CategoryKey, string>;
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

    // Tour translations
    tour: {
      welcome: {
        title: string;
        description: string;
      };
      settings: {
        title: string;
        description: string;
      };
      form: {
        title: string;
        description: string;
      };
      dashboard: {
        title: string;
        description: string;
      };
      list: {
        title: string;
        description: string;
      };
      finish: {
        title: string;
        description: string;
      };
      buttons: {
        next: string;
        previous: string;
        skip: string;
        finish: string;
        startTour: string;
      };
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
      totalMoneySpent: {
        harryPotter: 'Total Galleons Spent',
        starWars: 'Total Credits Spent',
        peppaPig: 'Total Money Spent',
        simpsons: 'Total Money Spent',
        barbie: 'Total Gems Spent'
      },
      totalTransactions: {
        harryPotter: 'Total Magical Transactions',
        starWars: 'Total Galactic Transactions',
        peppaPig: 'Total Fun Expenses',
        simpsons: 'Total Springfield Transactions',
        barbie: 'Total Fabulous Transactions'
      },
      expensesByCategory: {
        harryPotter: '🏪 Expenses by Magical Category',
        starWars: '🏪 Expenses by Galactic Category',
        peppaPig: '🎪 Expenses by Fun Category',
        simpsons: '🏪 Expenses by Springfield Category',
        barbie: '✨ Expenses by Fabulous Category'
      },
      recentTransactions: {
        harryPotter: '🕰️ Recent Magical Transactions',
        starWars: '🕰️ Recent Galactic Transactions',
        peppaPig: '🕰️ Recent Fun Transactions',
        simpsons: '🕰️ Recent Springfield Transactions',
        barbie: '🕰️ Recent Fabulous Transactions'
      },
      categories: {
        harryPotter: {
          [CategoryKey.FOOD]: '🍖 Food & Butterbeer',
          [CategoryKey.TRANSPORT]: '🚂 Magical Transportation',
          [CategoryKey.BOOKS_SUPPLIES]: '📚 Books & Supplies',
          [CategoryKey.ENTERTAINMENT]: '🎭 Entertainment & Quidditch',
          [CategoryKey.SERVICES]: '⚡ Magical Services',
          [CategoryKey.HEALTH]: '🏥 Healing & Potions',
          [CategoryKey.TRAVEL]: '✈️ Magical Travel',
          [CategoryKey.EDUCATION]: '🎓 Magical Education',
          [CategoryKey.OTHER]: '🔮 Other Magical Items'
        },
        starWars: {
          [CategoryKey.FOOD]: '🍖 Cantina & Food',
          [CategoryKey.TRANSPORT]: '🚀 Spaceship Transport',
          [CategoryKey.BOOKS_SUPPLIES]: '🔫 Weapons & Gear',
          [CategoryKey.ENTERTAINMENT]: '🎮 Holonet Entertainment',
          [CategoryKey.SERVICES]: '⚙️ Droid Services',
          [CategoryKey.HEALTH]: '💊 Medical & Bacta',
          [CategoryKey.TRAVEL]: '🌌 Hyperspace Travel',
          [CategoryKey.EDUCATION]: '📚 Jedi Training',
          [CategoryKey.OTHER]: '🔧 Other Equipment'
        },
        peppaPig: {
          [CategoryKey.FOOD]: '🍰 Snacks & Treats',
          [CategoryKey.TRANSPORT]: '🚌 Transport Fun',
          [CategoryKey.BOOKS_SUPPLIES]: '🧸 Toys & Games',
          [CategoryKey.ENTERTAINMENT]: '🎪 Fun Activities',
          [CategoryKey.SERVICES]: '🏥 Growing Up Care',
          [CategoryKey.HEALTH]: '💊 Healthy Things',
          [CategoryKey.TRAVEL]: '✈️ Holiday Adventures',
          [CategoryKey.EDUCATION]: '📚 Learning Time',
          [CategoryKey.OTHER]: '🎁 Other Goodies'
        },
        simpsons: {
          [CategoryKey.FOOD]: '🍩 Food & Duff Beer',
          [CategoryKey.TRANSPORT]: '🚗 Car & Transport',
          [CategoryKey.BOOKS_SUPPLIES]: '📺 Entertainment',
          [CategoryKey.ENTERTAINMENT]: '🎪 Krusty Land Fun',
          [CategoryKey.SERVICES]: '⚡ Nuclear Plant',
          [CategoryKey.HEALTH]: '🏥 Dr. Hibbert Care',
          [CategoryKey.TRAVEL]: '✈️ Family Vacations',
          [CategoryKey.EDUCATION]: '📚 School Supplies',
          [CategoryKey.OTHER]: '🔧 Other Springfield'
        },
        barbie: {
          [CategoryKey.FOOD]: '💄 Beauty & Fashion',
          [CategoryKey.TRANSPORT]: '🚗 Pink Transportation',
          [CategoryKey.BOOKS_SUPPLIES]: '👗 Shopping Sprees',
          [CategoryKey.ENTERTAINMENT]: '🎉 Fabulous Events',
          [CategoryKey.SERVICES]: '💅 Self Care',
          [CategoryKey.HEALTH]: '💊 Wellness & Health',
          [CategoryKey.TRAVEL]: '✈️ Dream Vacations',
          [CategoryKey.EDUCATION]: '📚 Girl Power Learning',
          [CategoryKey.OTHER]: '💖 Other Fabulous'
        }
      },
      languageSelector: {
        title: 'Choose Language',
        tooltip: 'Select your preferred language'
      },
      themeSelector: {
        title: 'Choose Theme',
        tooltip: 'Select your favorite theme'
      },
      tour: {
        welcome: {
          title: '🌟 Welcome to your Magical Expense Tracker! 🌟',
          description: 'I\'m going to show you how to use this super fun app to track your expenses!'
        },
        settings: {
          title: '⚙️ Settings Panel',
          description: 'Here you can change the color theme and language of the app. Try different combinations!'
        },
        form: {
          title: '📝 Add New Expenses',
          description: 'In this form you can add your expenses. Write what you bought, how much it cost, and select a category.'
        },
        dashboard: {
          title: '📊 Statistics Panel',
          description: 'Here you can see cool charts that show how you spend your money and in which categories.'
        },
        list: {
          title: '📋 Expense List',
          description: 'This is your complete list of expenses. You can edit or delete them if you made a mistake.'
        },
        finish: {
          title: '🚀 Ready to Start!',
          description: 'You now know all the features! You can start adding your expenses and see how the magic works.'
        },
        buttons: {
          next: 'Next',
          previous: 'Previous',
          skip: 'Skip Tour',
          finish: 'Finish',
          startTour: 'Start Tour'
        }
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
      totalMoneySpent: {
        harryPotter: 'Total de Galeones Gastados',
        starWars: 'Total de Créditos Gastados',
        peppaPig: 'Total de Dinero Gastado',
        simpsons: 'Total de Dinero Gastado',
        barbie: 'Total de Gemas Gastadas'
      },
      totalTransactions: {
        harryPotter: 'Total de Transacciones Mágicas',
        starWars: 'Total de Transacciones Galácticas',
        peppaPig: 'Total de Gastos Divertidos',
        simpsons: 'Total de Transacciones de Springfield',
        barbie: 'Total de Transacciones Fabulosas'
      },
      expensesByCategory: {
        harryPotter: '🏪 Gastos por Categoría Mágica',
        starWars: '🏪 Gastos por Categoría Galáctica',
        peppaPig: '🎪 Gastos por Categoría Divertida',
        simpsons: '🏪 Gastos por Categoría de Springfield',
        barbie: '✨ Gastos por Categoría Fabulosa'
      },
      recentTransactions: {
        harryPotter: '🕰️ Transacciones Mágicas Recientes',
        starWars: '🕰️ Transacciones Galácticas Recientes',
        peppaPig: '🕰️ Transacciones Divertidas Recientes',
        simpsons: '🕰️ Transacciones Recientes de Springfield',
        barbie: '🕰️ Transacciones Fabulosas Recientes'
      },
      categories: {
        harryPotter: {
          [CategoryKey.FOOD]: '🍖 Comida y Cerveza de Mantequilla',
          [CategoryKey.TRANSPORT]: '🚂 Transporte Mágico',
          [CategoryKey.BOOKS_SUPPLIES]: '📚 Libros y Suministros',
          [CategoryKey.ENTERTAINMENT]: '🎭 Entretenimiento y Quidditch',
          [CategoryKey.SERVICES]: '⚡ Servicios Mágicos',
          [CategoryKey.HEALTH]: '🏥 Sanación y Pociones',
          [CategoryKey.TRAVEL]: '✈️ Viajes Mágicos',
          [CategoryKey.EDUCATION]: '🎓 Educación Mágica',
          [CategoryKey.OTHER]: '🔮 Otros Artículos Mágicos'
        },
        starWars: {
          [CategoryKey.FOOD]: '🍖 Cantina y Comida',
          [CategoryKey.TRANSPORT]: '🚀 Transporte de Nave Espacial',
          [CategoryKey.BOOKS_SUPPLIES]: '🔫 Armas y Equipo',
          [CategoryKey.ENTERTAINMENT]: '🎮 Entretenimiento Holonet',
          [CategoryKey.SERVICES]: '⚙️ Servicios de Droides',
          [CategoryKey.HEALTH]: '💊 Médico y Bacta',
          [CategoryKey.TRAVEL]: '🌌 Viajes en Hiperespacio',
          [CategoryKey.EDUCATION]: '📚 Entrenamiento Jedi',
          [CategoryKey.OTHER]: '🔧 Otro Equipo'
        },
        peppaPig: {
          [CategoryKey.FOOD]: '🍰 Aperitivos y Golosinas',
          [CategoryKey.TRANSPORT]: '🚌 Transporte Divertido',
          [CategoryKey.BOOKS_SUPPLIES]: '🧸 Juguetes y Juegos',
          [CategoryKey.ENTERTAINMENT]: '🎪 Actividades Divertidas',
          [CategoryKey.SERVICES]: '🏥 Cuidado al Crecer',
          [CategoryKey.HEALTH]: '💊 Cosas Saludables',
          [CategoryKey.TRAVEL]: '✈️ Aventuras de Vacaciones',
          [CategoryKey.EDUCATION]: '📚 Tiempo de Aprendizaje',
          [CategoryKey.OTHER]: '🎁 Otras Cosas Buenas'
        },
        simpsons: {
          [CategoryKey.FOOD]: '🍩 Comida y Cerveza Duff',
          [CategoryKey.TRANSPORT]: '🚗 Auto y Transporte',
          [CategoryKey.BOOKS_SUPPLIES]: '📺 Entretenimiento',
          [CategoryKey.ENTERTAINMENT]: '🎪 Diversión en Krusty Land',
          [CategoryKey.SERVICES]: '⚡ Planta Nuclear',
          [CategoryKey.HEALTH]: '🏥 Cuidado del Dr. Hibbert',
          [CategoryKey.TRAVEL]: '✈️ Vacaciones Familiares',
          [CategoryKey.EDUCATION]: '📚 Útiles Escolares',
          [CategoryKey.OTHER]: '🔧 Otro Springfield'
        },
        barbie: {
          [CategoryKey.FOOD]: '💄 Belleza y Moda',
          [CategoryKey.TRANSPORT]: '🚗 Transporte Rosa',
          [CategoryKey.BOOKS_SUPPLIES]: '👗 Compras Masivas',
          [CategoryKey.ENTERTAINMENT]: '🎉 Eventos Fabulosos',
          [CategoryKey.SERVICES]: '💅 Cuidado Personal',
          [CategoryKey.HEALTH]: '💊 Bienestar y Salud',
          [CategoryKey.TRAVEL]: '✈️ Vacaciones de Ensueño',
          [CategoryKey.EDUCATION]: '📚 Aprendizaje de Poder Femenino',
          [CategoryKey.OTHER]: '💖 Otras Cosas Fabulosas'
        }
      },
      languageSelector: {
        title: 'Elegir Idioma',
        tooltip: 'Selecciona tu idioma preferido'
      },
      themeSelector: {
        title: 'Elegir Tema',
        tooltip: 'Selecciona tu tema favorito'
      },
      tour: {
        welcome: {
          title: '🌟 ¡Bienvenido a tu Rastreador de Gastos Mágico! 🌟',
          description: '¡Te voy a enseñar cómo usar esta aplicación súper divertida para llevar control de tus gastos!'
        },
        settings: {
          title: '⚙️ Panel de Configuración',
          description: 'Aquí puedes cambiar el tema de colores y el idioma de la aplicación. ¡Prueba diferentes combinaciones!'
        },
        form: {
          title: '📝 Agregar Nuevos Gastos',
          description: 'En este formulario puedes agregar tus gastos. Escribe qué compraste, cuánto costó y selecciona una categoría.'
        },
        dashboard: {
          title: '📊 Panel de Estadísticas',
          description: 'Aquí puedes ver gráficos geniales que muestran cómo gastas tu dinero y en qué categorías.'
        },
        list: {
          title: '📋 Lista de Gastos',
          description: 'Esta es tu lista completa de gastos. Puedes editarlos o eliminarlos si te equivocaste.'
        },
        finish: {
          title: '🚀 ¡Listo para Empezar!',
          description: '¡Ya conoces todas las funciones! Ahora puedes empezar a agregar tus gastos y ver cómo funciona la magia.'
        },
        buttons: {
          next: 'Siguiente',
          previous: 'Anterior',
          skip: 'Saltar Tour',
          finish: 'Finalizar',
          startTour: 'Iniciar Tour'
        }
      }
    }
  }
} as const;

export type LanguageId = keyof typeof LANGUAGES;
export type ThemeKey = 'harryPotter' | 'starWars' | 'peppaPig' | 'simpsons' | 'barbie';
