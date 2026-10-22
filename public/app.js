'use strict';

let bouquets = [];

const I18N = {
  he: {
    navBouquets:'זרי פרחים',
    navEvents:'חתונות ואירועים',
    navWorkshops:'סדנאות',
    navAbout:'עלינו',
    navContact:'יצירת קשר',
    cartShort:'סל',
    order:'להזמנה',

    heroEyebrow:'סטודיו לפרחים · ישראל',
    heroTitle:'פרחים לרגעים יפים.',
    chooseBouquet:'לבחירת זר',
    customBouquet:'זר בהתאמה אישית',
    deliveryLine:'✦ משלוח באותו היום · תל אביב ומרכז הארץ',

    collection:'קולקציה',
    findFlowers:'מצאו את הפרחים שלכם',
    catalogIntro:'זרים וקומפוזיציות קלילות וטבעיות, לאירוע או פשוט כי מתחשק.',

    customOrder:'הזמנה אישית',
    somethingSpecial:'מחפשים משהו מיוחד?',
    customText:'ספרו לנו על הפרחים, האווירה, התקציב והאירוע — וניצור זר במיוחד עבורכם.',
    whatsapp:'כתבו לנו ב-WhatsApp →',

    workshopsEyebrow:'סדנאות',
    createFlowers:'יוצרים עם פרחים',
    workshopsText:'סדנאות אינטימיות, יופי בתהליך וקצת זמן לעצמכם.',
    schedule:'לפרטים ולתאריכים',

    meetTati:'הכירו את TATI',
    aboutTitle:'פרחים הם הדרך שלי לדבר על רגשות',
    aboutText1:'כל זר נשזר בעבודת יד: פרחים עונתיים, קווים טבעיים, פלטה רכה ותשומת לב לפרטים.',
    aboutText2:'בלי עומס. רק צורה, אוויר ואופי.',

    reviews:'ביקורות',
    reviewsTitle:'הלקוחות שלנו אוהבים',
    review1:'“הזר היה אפילו יפה יותר ממה שדמיינתי.”',
    review2:'“עדין, רענן ומיוחד באמת.”',
    review3:'“הכול — מהתקשורת ועד האריזה — היה מושלם.”',

    contactTitle:'להזמנת פרחים',
    area:'תל אביב · מרכז הארץ',
    sameDay:'משלוח באותו היום להזמנות עד 14:00',
    namePlaceholder:'השם שלכם',
    phonePlaceholder:'טלפון',
    messagePlaceholder:'מה תרצו להזמין?',
    sendRequest:'שליחת פנייה',

    yourOrder:'ההזמנה שלכם',
    cartTitle:'סל',
    cartEmpty:'הסל עדיין ריק',
    cartEmptySmall:'הוסיפו זר והוא יופיע כאן.',
    total:'סה״כ',
    checkout:'להשלמת הזמנה',

    checkoutEyebrow:'השלמת הזמנה',
    deliveryPayment:'משלוח ותשלום',
    nameLabel:'שם *',
    phoneLabel:'טלפון *',
    cityLabel:'עיר *',
    addressLabel:'כתובת *',
    cityPlaceholder:'תל אביב',
    addressPlaceholder:'רחוב, מספר בית, דירה',
    dateLabel:'תאריך משלוח',
    timeLabel:'שעה',
    anyTime:'כל שעה נוחה',
    noteLabel:'הערות להזמנה',
    notePlaceholder:'טקסט לכרטיס, קוד כניסה, בקשות מיוחדות לזר…',
    securePayment:'תשלום מאובטח',
    securePaymentText:'פרטי הכרטיס מוזנים בעמוד המאובטח של ספק התשלום ואינם עוברים דרך אתר TATI Flowers.',
    proceedPayment:'מעבר לתשלום',

    all:'הכול',
    everyday:'ליום-יום',
    love:'אהבה',
    event:'אירועים',
    wedding:'חתונות',
    composition:'סידורים',
    gift:'מתנות',
    other:'אחר',
    featured:'בחירת TATI',
    from:'החל מ-',
    addToCart:'הוספה לסל',
    inCart:'בסל',
    defaultDescription:'זר עונתי שנשזר בעבודת יד.',
    categoryEmpty:'אין עדיין זרים בקטגוריה הזו.',
    catalogUpdating:'הקטלוג מתעדכן',
    catalogLoading:'טוענים את הזרים העדכניים מ-Google Sheets…',

    emptyCartToast:'הסל עדיין ריק',
    addedFavorite:'נוסף למועדפים',
    removedFavorite:'הוסר מהמועדפים',
    addedCart:'הזר נוסף לסל',
    decrease:'הפחתה',
    increase:'הוספה',
    remove:'הסרה',
    bouquet:'זר',

    creatingOrder:'יוצרים את ההזמנה וקישור התשלום המאובטח…',
    checkoutError:'לא ניתן להשלים את ההזמנה',
    sending:'שולחים…',
    sendError:'שגיאה בשליחה',
    sentThanks:'תודה! הפנייה נשלחה 🌿',
    paymentSuccess:'התשלום עבר בהצלחה. תודה!',
    paymentFailure:'התשלום לא עבר. נסו שוב.',
    paymentCancel:'התשלום בוטל — הסל נשמר.',
    catalogUnavailable:'הקטלוג אינו זמין',
    catalogCsvError:'השרת עדיין לא הצליח לקרוא את קובץ ה-CSV שפורסם ב-Google Sheets. בדקו שהטבלה מפורסמת כ-CSV ורעננו את הדף.',
    catalogLoadError:'לא ניתן לטעון את הקטלוג.',

    title:'TATI Flowers | זרי פרחים ומשלוחים בישראל',
    description:'TATI Flowers — זרי פרחים בעיצוב אישי, סידורי פרחים, פרחים לחתונות וסדנאות. משלוחים בתל אביב ובמרכז הארץ.',
    storeLocation:'מיקום החנות',
    openMap:'פתיחה ב-Google Maps'
  },

  en: {
    navBouquets:'Bouquets',
    navEvents:'Weddings & Events',
    navWorkshops:'Workshops',
    navAbout:'About',
    navContact:'Contact',
    cartShort:'Cart',
    order:'Order',

    heroEyebrow:'FLORAL STUDIO · ISRAEL',
    heroTitle:'Flowers for beautiful moments.',
    chooseBouquet:'Choose a bouquet',
    customBouquet:'Custom bouquet',
    deliveryLine:'✦ Same-day delivery · Tel Aviv & Central Israel',

    collection:'COLLECTION',
    findFlowers:'Find your flowers',
    catalogIntro:'Light, natural arrangements for special occasions and everyday moments.',

    customOrder:'CUSTOM ORDER',
    somethingSpecial:'Looking for something special?',
    customText:'Tell us about the flowers, mood, budget and occasion — we’ll create a bouquet especially for you.',
    whatsapp:'Message us on WhatsApp →',

    workshopsEyebrow:'WORKSHOPS',
    createFlowers:'Create with flowers',
    workshopsText:'Intimate workshops, the beauty of the process and a little time for yourself.',
    schedule:'See workshop dates',

    meetTati:'MEET TATI',
    aboutTitle:'Flowers are my way of speaking about feelings',
    aboutText1:'Every bouquet is made by hand with seasonal flowers, natural lines, a soft palette and attention to detail.',
    aboutText2:'Nothing excessive. Just shape, air and character.',

    reviews:'REVIEWS',
    reviewsTitle:'Loved by our customers',
    review1:'“The bouquet was even more beautiful than I imagined.”',
    review2:'“So delicate, fresh and truly unique.”',
    review3:'“Everything — from communication to packaging — was perfect.”',

    contactTitle:'Order flowers',
    area:'Tel Aviv · Central Israel',
    sameDay:'Same-day delivery for orders placed before 2:00 PM',
    namePlaceholder:'Your name',
    phonePlaceholder:'Phone',
    messagePlaceholder:'What would you like to order?',
    sendRequest:'Send request',

    yourOrder:'YOUR ORDER',
    cartTitle:'Cart',
    cartEmpty:'Your cart is empty',
    cartEmptySmall:'Add a bouquet and it will appear here.',
    total:'Total',
    checkout:'Checkout',

    checkoutEyebrow:'CHECKOUT',
    deliveryPayment:'Delivery & payment',
    nameLabel:'Name *',
    phoneLabel:'Phone *',
    cityLabel:'City *',
    addressLabel:'Address *',
    cityPlaceholder:'Tel Aviv',
    addressPlaceholder:'Street, house, apartment',
    dateLabel:'Delivery date',
    timeLabel:'Time',
    anyTime:'Any convenient time',
    noteLabel:'Order notes',
    notePlaceholder:'Card message, entry code, bouquet preferences…',
    securePayment:'Secure payment',
    securePaymentText:'Card details are entered on the payment provider’s secure page and never pass through the TATI Flowers website.',
    proceedPayment:'Proceed to payment',

    all:'All',
    everyday:'Everyday',
    love:'Love',
    event:'Events',
    wedding:'Weddings',
    composition:'Arrangements',
    gift:'Gifts',
    other:'Other',
    featured:'TATI Pick',
    from:'From ',
    addToCart:'Add to cart',
    inCart:'In cart',
    defaultDescription:'A seasonal bouquet, handcrafted with care.',
    categoryEmpty:'There are no bouquets in this category yet.',
    catalogUpdating:'Catalog is updating',
    catalogLoading:'Loading the latest bouquets from Google Sheets…',

    emptyCartToast:'Your cart is empty',
    addedFavorite:'Added to favorites',
    removedFavorite:'Removed from favorites',
    addedCart:'Bouquet added to cart',
    decrease:'Decrease',
    increase:'Increase',
    remove:'Remove',
    bouquet:'Bouquet',

    creatingOrder:'Creating your order and secure payment link…',
    checkoutError:'Unable to place the order',
    sending:'Sending…',
    sendError:'Unable to send',
    sentThanks:'Thank you! Your request was sent 🌿',
    paymentSuccess:'Payment successful. Thank you!',
    paymentFailure:'Payment failed. Please try again.',
    paymentCancel:'Payment cancelled — your cart was saved.',
    catalogUnavailable:'Catalog unavailable',
    catalogCsvError:'The server could not read the published Google Sheets CSV yet. Make sure the sheet is published as CSV and refresh the page.',
    catalogLoadError:'Unable to load the catalog.',

    title:'TATI Flowers | Bouquets & Flower Delivery in Israel',
    description:'TATI Flowers — handcrafted bouquets, floral arrangements, wedding flowers and workshops. Flower delivery in Tel Aviv and Central Israel.',
    storeLocation:'Store location',
    openMap:'Open in Google Maps'
  },

  ru: {
    navBouquets:'Букеты',
    navEvents:'Свадьбы & события',
    navWorkshops:'Мастер-классы',
    navAbout:'О нас',
    navContact:'Контакты',
    cartShort:'Корзина',
    order:'Заказать',

    heroEyebrow:'FLORAL STUDIO · ISRAEL',
    heroTitle:'Цветы для красивых моментов.',
    chooseBouquet:'Выбрать букет',
    customBouquet:'Свой букет',
    deliveryLine:'✦ Доставка день в день · Tel Aviv & Central Israel',

    collection:'КОЛЛЕКЦИЯ',
    findFlowers:'Найди свои цветы',
    catalogIntro:'Лёгкие, живые композиции для повода и без.',

    customOrder:'ИНДИВИДУАЛЬНЫЙ ЗАКАЗ',
    somethingSpecial:'Что-то особенное?',
    customText:'Расскажите о цветах, настроении, бюджете и поводе — мы соберём букет специально для вас.',
    whatsapp:'Написать в WhatsApp →',

    workshopsEyebrow:'WORKSHOPS',
    createFlowers:'Создавай с цветами',
    workshopsText:'Камерные мастер-классы, красота процесса и немного времени для себя.',
    schedule:'Узнать расписание',

    meetTati:'MEET TATI',
    aboutTitle:'Цветы — мой способ говорить о чувствах',
    aboutText1:'Каждый букет собирается вручную: сезонные цветы, естественные линии, мягкая палитра и внимание к деталям.',
    aboutText2:'Без перегруженности. Только форма, воздух и характер.',

    reviews:'ОТЗЫВЫ',
    reviewsTitle:'Любят наши клиенты',
    review1:'“Букет оказался ещё красивее, чем я представляла.”',
    review2:'“Очень нежно, свежо и действительно необычно.”',
    review3:'“Всё — от общения до упаковки — было прекрасно.”',

    contactTitle:'Заказать цветы',
    area:'Tel Aviv · Central Israel',
    sameDay:'Same-day delivery для заказов до 14:00',
    namePlaceholder:'Ваше имя',
    phonePlaceholder:'Телефон',
    messagePlaceholder:'Что хотите заказать?',
    sendRequest:'Отправить заявку',

    yourOrder:'ВАШ ЗАКАЗ',
    cartTitle:'Корзина',
    cartEmpty:'Корзина пока пустая',
    cartEmptySmall:'Добавьте букет — он появится здесь.',
    total:'Итого',
    checkout:'Оформить заказ',

    checkoutEyebrow:'ОФОРМЛЕНИЕ',
    deliveryPayment:'Доставка и оплата',
    nameLabel:'Имя *',
    phoneLabel:'Телефон *',
    cityLabel:'Город *',
    addressLabel:'Адрес *',
    cityPlaceholder:'Tel Aviv',
    addressPlaceholder:'Улица, дом, квартира',
    dateLabel:'Дата доставки',
    timeLabel:'Время',
    anyTime:'Любое удобное',
    noteLabel:'Пожелания к заказу',
    notePlaceholder:'Текст открытки, код домофона, пожелания к букету…',
    securePayment:'Безопасная оплата',
    securePaymentText:'Данные карты вводятся на защищённой странице платёжного провайдера и не проходят через сайт TATI Flowers.',
    proceedPayment:'Перейти к оплате',

    all:'Все',
    everyday:'На каждый день',
    love:'Любовь',
    event:'События',
    wedding:'Свадебные',
    composition:'Композиции',
    gift:'Подарки',
    other:'Другое',
    featured:'Выбор TATI',
    from:'от ',
    addToCart:'В корзину',
    inCart:'В корзине',
    defaultDescription:'Сезонный букет, собранный вручную.',
    categoryEmpty:'В этой категории пока нет букетов.',
    catalogUpdating:'Каталог обновляется',
    catalogLoading:'Загружаем актуальные букеты из Google Sheets…',

    emptyCartToast:'Корзина пока пустая',
    addedFavorite:'Добавлено в избранное',
    removedFavorite:'Убрано из избранного',
    addedCart:'Букет добавлен в корзину',
    decrease:'Уменьшить',
    increase:'Увеличить',
    remove:'Удалить',
    bouquet:'Букет',

    creatingOrder:'Создаём заказ и безопасную ссылку на оплату…',
    checkoutError:'Не удалось оформить заказ',
    sending:'Отправляем…',
    sendError:'Ошибка отправки',
    sentThanks:'Спасибо! Заявка отправлена 🌿',
    paymentSuccess:'Оплата прошла. Спасибо!',
    paymentFailure:'Оплата не прошла. Попробуйте ещё раз.',
    paymentCancel:'Оплата отменена — корзина сохранена.',
    catalogUnavailable:'Каталог недоступен',
    catalogCsvError:'Сервер пока не смог прочитать опубликованный CSV Google Sheets. Проверьте, что таблица опубликована в интернете в формате CSV, и обновите страницу.',
    catalogLoadError:'Не удалось загрузить каталог.',

    title:'TATI Flowers | Bouquets & Flower Delivery in Israel',
    description:'TATI Flowers — авторские букеты, цветочные композиции, свадебная флористика и мастер-классы. Доставка цветов по Тель-Авиву и центральному Израилю.',
    storeLocation:'Расположение магазина',
    openMap:'Открыть в Google Maps'
  },

  fr: {
    navBouquets:'Bouquets',
    navEvents:'Mariages & événements',
    navWorkshops:'Ateliers',
    navAbout:'À propos',
    navContact:'Contact',
    cartShort:'Panier',
    order:'Commander',

    heroEyebrow:'STUDIO FLORAL · ISRAËL',
    heroTitle:'Des fleurs pour de beaux moments.',
    chooseBouquet:'Choisir un bouquet',
    customBouquet:'Bouquet sur mesure',
    deliveryLine:'✦ Livraison le jour même · Tel Aviv & Centre d’Israël',

    collection:'COLLECTION',
    findFlowers:'Trouvez vos fleurs',
    catalogIntro:'Des bouquets et compositions naturels et légers, pour une occasion ou simplement pour le plaisir.',

    customOrder:'COMMANDE SUR MESURE',
    somethingSpecial:'Envie de quelque chose de spécial ?',
    customText:'Parlez-nous des fleurs, de l’ambiance, du budget et de l’occasion — nous créerons un bouquet spécialement pour vous.',
    whatsapp:'Écrivez-nous sur WhatsApp →',

    workshopsEyebrow:'ATELIERS',
    createFlowers:'Créez avec les fleurs',
    workshopsText:'Des ateliers intimistes, le plaisir de créer et un peu de temps pour soi.',
    schedule:'Voir les dates des ateliers',

    meetTati:'DÉCOUVREZ TATI',
    aboutTitle:'Les fleurs sont ma façon de parler des émotions',
    aboutText1:'Chaque bouquet est réalisé à la main avec des fleurs de saison, des lignes naturelles, une palette douce et une attention portée aux détails.',
    aboutText2:'Sans surcharge. Seulement la forme, l’air et le caractère.',

    reviews:'AVIS',
    reviewsTitle:'Nos clients nous aiment',
    review1:'“Le bouquet était encore plus beau que je ne l’imaginais.”',
    review2:'“Très délicat, frais et vraiment unique.”',
    review3:'“Tout était parfait — de la communication à l’emballage.”',

    contactTitle:'Commander des fleurs',
    area:'Tel Aviv · Centre d’Israël',
    sameDay:'Livraison le jour même pour les commandes passées avant 14h00',
    namePlaceholder:'Votre nom',
    phonePlaceholder:'Téléphone',
    messagePlaceholder:'Que souhaitez-vous commander ?',
    sendRequest:'Envoyer la demande',

    yourOrder:'VOTRE COMMANDE',
    cartTitle:'Panier',
    cartEmpty:'Votre panier est vide',
    cartEmptySmall:'Ajoutez un bouquet et il apparaîtra ici.',
    total:'Total',
    checkout:'Commander',

    checkoutEyebrow:'COMMANDE',
    deliveryPayment:'Livraison & paiement',
    nameLabel:'Nom *',
    phoneLabel:'Téléphone *',
    cityLabel:'Ville *',
    addressLabel:'Adresse *',
    cityPlaceholder:'Tel Aviv',
    addressPlaceholder:'Rue, numéro, appartement',
    dateLabel:'Date de livraison',
    timeLabel:'Heure',
    anyTime:'Toute heure convient',
    noteLabel:'Notes de commande',
    notePlaceholder:'Message pour la carte, code d’entrée, préférences pour le bouquet…',
    securePayment:'Paiement sécurisé',
    securePaymentText:'Les informations de carte sont saisies sur la page sécurisée du prestataire de paiement et ne transitent jamais par le site TATI Flowers.',
    proceedPayment:'Passer au paiement',

    all:'Tout',
    everyday:'Tous les jours',
    love:'Amour',
    event:'Événements',
    wedding:'Mariages',
    composition:'Compositions',
    gift:'Cadeaux',
    other:'Autre',
    featured:'Choix TATI',
    from:'À partir de ',
    addToCart:'Ajouter',
    inCart:'Dans le panier',
    defaultDescription:'Bouquet de saison réalisé à la main.',
    categoryEmpty:'Il n’y a pas encore de bouquets dans cette catégorie.',
    catalogUpdating:'Mise à jour du catalogue',
    catalogLoading:'Chargement des bouquets depuis Google Sheets…',

    emptyCartToast:'Votre panier est vide',
    addedFavorite:'Ajouté aux favoris',
    removedFavorite:'Retiré des favoris',
    addedCart:'Bouquet ajouté au panier',
    decrease:'Diminuer',
    increase:'Augmenter',
    remove:'Supprimer',
    bouquet:'Bouquet',

    creatingOrder:'Création de votre commande et du lien de paiement sécurisé…',
    checkoutError:'Impossible de finaliser la commande',
    sending:'Envoi…',
    sendError:'Erreur lors de l’envoi',
    sentThanks:'Merci ! Votre demande a été envoyée 🌿',
    paymentSuccess:'Paiement réussi. Merci !',
    paymentFailure:'Le paiement a échoué. Veuillez réessayer.',
    paymentCancel:'Paiement annulé — votre panier a été conservé.',
    catalogUnavailable:'Catalogue indisponible',
    catalogCsvError:'Le serveur ne peut pas encore lire le fichier CSV publié dans Google Sheets. Vérifiez que le tableau est publié au format CSV puis actualisez la page.',
    catalogLoadError:'Impossible de charger le catalogue.',

    title:'TATI Flowers | Bouquets & livraison de fleurs en Israël',
    description:'TATI Flowers — bouquets artisanaux, compositions florales, fleurs de mariage et ateliers. Livraison de fleurs à Tel Aviv et dans le centre d’Israël.',
    storeLocation:'Notre boutique',
    openMap:'Ouvrir dans Google Maps'
  }
};

const CATEGORY_KEYS = {
  everyday:'everyday',
  love:'love',
  event:'event',
  wedding:'wedding',
  wedding_bouquet:'wedding',
  composition:'composition',
  gift:'gift'
};

const BUILTIN_PRODUCT_TRANSLATIONS = {
  'pink-lower': {
    he:{ description:'זר עדין בגוונים ורודים' },
    en:{ description:'Delicate bouquet in pink tones' },
    fr:{ description:'Bouquet délicat dans des tons roses' }
  },

  'white-garden': {
    he:{ description:'זר אוורירי בגווני לבן ושמנת' },
    en:{ description:'Airy bouquet in white and cream tones' },
    fr:{ description:'Bouquet aérien dans des tons blancs et crème' }
  },

  'wedding-01': {
    he:{ description:'זר כלה אלגנטי בגוונים לבנים' },
    en:{ description:'Elegant bridal bouquet in white tones' },
    fr:{ description:'Bouquet de mariée élégant dans des tons blancs' }
  }
};

const savedCart = readStorage('tati-cart-v2', {});
const savedLang = localStorage.getItem('tati-language');

const state = {
  filter: 'all',
  lang: ['he','en','ru','fr'].includes(savedLang) ? savedLang : 'he',
  cart: new Map(
    Object.entries(savedCart).map(([id, qty]) => [
      id,
      Number(qty) || 1
    ])
  ),
  favorites: new Set(
    readStorage('tati-favorites', [])
  )
};

const $ = selector => document.querySelector(selector);

const el = {
  products: $('#products'),
  categories: $('.categories'),

  bagCount: $('#bagCount'),
  openCart: $('#openCart'),
  closeCart: $('#closeCart'),

  cartDrawer: $('#cartDrawer'),
  cartBackdrop: $('#cartBackdrop'),
  cartItems: $('#cartItems'),
  cartEmpty: $('#cartEmpty'),
  cartFooter: $('#cartFooter'),

  cartTotal: $('#cartTotal'),
  checkoutBtn: $('#checkoutBtn'),

  menuButton: $('.menu-btn'),
  nav: $('.nav'),

  toast: $('#toast'),
  contactForm: $('#contactForm'),

  checkoutBackdrop: $('#checkoutBackdrop'),
  checkoutModal: $('#checkoutModal'),
  closeCheckout: $('#closeCheckout'),
  checkoutForm: $('#checkoutForm'),
  checkoutTotal: $('#checkoutTotal'),
  checkoutButtonTotal: $('#checkoutButtonTotal'),
  checkoutStatus: $('#checkoutStatus'),

  languageDropdown: $('#languageDropdown'),
  languageCurrent: $('#languageCurrent'),
  currentLanguageLabel: $('#currentLanguageLabel'),
  languageMenu: $('#languageMenu')
};

let toastTimer;

function t(key) {
  return I18N[state.lang]?.[key] ??
    I18N.en[key] ??
    key;
}

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveState() {
  try {
    localStorage.setItem(
      'tati-cart-v2',
      JSON.stringify(Object.fromEntries(state.cart))
    );

    localStorage.setItem(
      'tati-favorites',
      JSON.stringify([...state.favorites])
    );

    localStorage.setItem(
      'tati-language',
      state.lang
    );
  } catch {}
}

function getBouquet(id) {
  return bouquets.find(b => b.id === id);
}

function money(value) {
  const locales = {
    he: 'he-IL',
    en: 'en-US',
    ru: 'ru-RU',
    fr: 'fr-FR'
  };

  return `₪${Number(value).toLocaleString(
    locales[state.lang] || 'en-US'
  )}`;
}

function cartCount() {
  return [...state.cart.values()]
    .reduce((sum, q) => sum + q, 0);
}

function cartTotal() {
  return [...state.cart]
    .reduce(
      (sum, [id, q]) =>
        sum + (getBouquet(id)?.price || 0) * q,
      0
    );
}

function cartPayload() {
  return [...state.cart]
    .map(([id, quantity]) => ({
      id,
      quantity
    }));
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(
      /[&<>'"]/g,
      char => ({
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        "'":'&#39;',
        '"':'&quot;'
      })[char]
    );
}

function safeImage(value) {
  const url = String(value || '').trim();

  return /^https?:\/\//i.test(url)
    ? url.replace(/['"()\\]/g, encodeURIComponent)
    : '';
}

function localizedProduct(product) {
  const suffix = {
    he: 'He',
    en: 'En',
    ru: 'Ru',
    fr: 'Fr'
  }[state.lang] || 'En';

  const builtIn =
    BUILTIN_PRODUCT_TRANSLATIONS[product.id]?.[state.lang] || {};

  const name =
    product[`name${suffix}`] ||
    builtIn.name ||
    product.name ||
    '';

  const description =
    product[`description${suffix}`] ||
    builtIn.description ||
    product.description ||
    '';

  return {
    ...product,
    displayName: name,
    displayDescription: description
  };
}

function categoryLabel(category) {
  const key = String(category || '').toLowerCase();

  return t(
    CATEGORY_KEYS[key] || 'other'
  );
}

function applyLanguage() {
  const rtl = state.lang === 'he';

  document.documentElement.lang = state.lang;
  document.documentElement.dir = rtl ? 'rtl' : 'ltr';

  document.body.classList.toggle('rtl', rtl);

  document.title = t('title');

  const metaDescription =
    document.querySelector('meta[name="description"]');

  if (metaDescription) {
    metaDescription.content = t('description');
  }

  document
    .querySelectorAll('[data-i18n]')
    .forEach(node => {
      node.textContent = t(node.dataset.i18n);
    });

  document
    .querySelectorAll('[data-i18n-placeholder]')
    .forEach(node => {
      node.placeholder =
        t(node.dataset.i18nPlaceholder);
    });

  const languageLabels = {
    he: 'עב',
    en: 'EN',
    ru: 'RU',
    fr: 'FR'
  };

  if (el.currentLanguageLabel) {
    el.currentLanguageLabel.textContent =
      languageLabels[state.lang] || 'EN';
  }

  el.languageMenu
    ?.querySelectorAll('[data-lang]')
    .forEach(button => {
      button.classList.toggle(
        'active',
        button.dataset.lang === state.lang
      );
    });

  if (el.menuButton) {
    const labels = {
      he: 'תפריט',
      en: 'Menu',
      ru: 'Меню',
      fr: 'Menu'
    };

    el.menuButton.setAttribute(
      'aria-label',
      labels[state.lang] || 'Menu'
    );
  }

  if (el.openCart) {
    const labels = {
      he: 'פתיחת סל הקניות',
      en: 'Open cart',
      ru: 'Открыть корзину',
      fr: 'Ouvrir le panier'
    };

    el.openCart.setAttribute(
      'aria-label',
      labels[state.lang] || 'Open cart'
    );
  }

  if (el.closeCart) {
    const labels = {
      he: 'סגירת סל הקניות',
      en: 'Close cart',
      ru: 'Закрыть корзину',
      fr: 'Fermer le panier'
    };

    el.closeCart.setAttribute(
      'aria-label',
      labels[state.lang] || 'Close cart'
    );
  }

  if (el.closeCheckout) {
    const labels = {
      he: 'סגירת טופס ההזמנה',
      en: 'Close checkout',
      ru: 'Закрыть оформление',
      fr: 'Fermer la commande'
    };

    el.closeCheckout.setAttribute(
      'aria-label',
      labels[state.lang] || 'Close checkout'
    );
  }

  renderProducts();
  renderCart();
}

function setLanguage(lang) {
  if (!I18N[lang] || lang === state.lang) {
    return;
  }

  state.lang = lang;

  saveState();
  applyLanguage();
}

function renderCategories() {
  if (!el.categories) return;

  const categories = [
    ...new Set(
      bouquets
        .map(b => b.category)
        .filter(Boolean)
    )
  ];

  const valid =
    state.filter === 'all' ||
    categories.includes(state.filter);

  if (!valid) {
    state.filter = 'all';
  }

  el.categories.innerHTML = [
    `<button data-filter="all" class="${state.filter === 'all' ? 'active' : ''}">${escapeHtml(t('all'))}</button>`,

    ...categories.map(category =>
      `<button data-filter="${escapeHtml(category)}" class="${state.filter === category ? 'active' : ''}">${escapeHtml(categoryLabel(category))}</button>`
    )
  ].join('');
}

function productTemplate(raw) {
  const b = localizedProduct(raw);

  const fav = state.favorites.has(b.id);
  const qty = state.cart.get(b.id) || 0;

  const image = safeImage(b.image);

  const imageStyle = image
    ? ` style="background-image:url('${image}')"`
    : '';

  return `
    <article
      class="product-card${b.featured ? ' is-featured' : ''}"
      data-product-id="${escapeHtml(b.id)}"
    >
      <div
        class="product-image${image ? '' : ' no-image'}"
        ${imageStyle}
        role="img"
        aria-label="${escapeHtml(t('bouquet'))} ${escapeHtml(b.displayName)}"
      >
        ${
          b.featured
            ? `<span class="featured-badge">${escapeHtml(t('featured'))}</span>`
            : ''
        }

        <button
          class="heart${fav ? ' is-active' : ''}"
          type="button"
          data-action="favorite"
          data-id="${escapeHtml(b.id)}"
          aria-pressed="${fav}"
        >
          ${fav ? '♥' : '♡'}
        </button>
      </div>

      <h3>${escapeHtml(b.displayName)}</h3>

      <p>
        ${escapeHtml(
          b.displayDescription ||
          t('defaultDescription')
        )}
      </p>

      <div class="product-row">
        <span class="price" dir="ltr">
          ${escapeHtml(t('from'))}${money(b.price)}
        </span>

        <button
          class="add${qty ? ' is-added' : ''}"
          type="button"
          data-action="cart"
          data-id="${escapeHtml(b.id)}"
        >
          ${
            qty
              ? `${escapeHtml(t('inCart'))} · ${qty}`
              : escapeHtml(t('addToCart'))
          }
        </button>
      </div>
    </article>
  `;
}

function renderProducts(message = '') {
  renderCategories();

  if (!el.products) return;

  if (message && !bouquets.length) {
    el.products.innerHTML = `
      <div class="catalog-status">
        <h3>${escapeHtml(t('catalogUpdating'))}</h3>
        <p>${escapeHtml(message)}</p>
      </div>
    `;

    return;
  }

  const items = bouquets.filter(
    b =>
      state.filter === 'all' ||
      b.category === state.filter
  );

  el.products.innerHTML = items.length
    ? items.map(productTemplate).join('')
    : `
      <div class="catalog-empty">
        <p>${escapeHtml(t('categoryEmpty'))}</p>
      </div>
    `;
}

function renderCart() {
  if (!el.cartItems) return;

  const items = [...state.cart]
    .map(([id, quantity]) => ({
      ...getBouquet(id),
      quantity
    }))
    .filter(i => i.id)
    .map(localizedProduct);

  el.cartItems.innerHTML = items
    .map(
      b => `
        <article class="cart-item">
          <img
            src="${
              safeImage(b.image) ||
              'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23f2e7e1%22/%3E%3C/svg%3E'
            }"
            alt="${escapeHtml(b.displayName)}"
          >

          <div>
            <h3>${escapeHtml(b.displayName)}</h3>

            <p>
              ${escapeHtml(
                b.displayDescription ||
                t('defaultDescription')
              )}
            </p>

            <strong dir="ltr">
              ${money(b.price * b.quantity)}
            </strong>

            <div class="qty">
              <button
                data-qty="-1"
                data-id="${escapeHtml(b.id)}"
                aria-label="${escapeHtml(t('decrease'))}"
              >
                −
              </button>

              <span>${b.quantity}</span>

              <button
                data-qty="1"
                data-id="${escapeHtml(b.id)}"
                aria-label="${escapeHtml(t('increase'))}"
              >
                +
              </button>
            </div>
          </div>

          <button
            class="cart-remove"
            data-remove="${escapeHtml(b.id)}"
            aria-label="${escapeHtml(t('remove'))} ${escapeHtml(b.displayName)}"
          >
            ×
          </button>
        </article>
      `
    )
    .join('');

  const empty = items.length === 0;

  el.cartEmpty.hidden = !empty;
  el.cartFooter.hidden = empty;

  el.cartTotal.textContent = money(cartTotal());
  el.bagCount.textContent = String(cartCount());

  if (el.checkoutTotal) {
    el.checkoutTotal.textContent =
      money(cartTotal());
  }

  if (el.checkoutButtonTotal) {
    el.checkoutButtonTotal.textContent =
      money(cartTotal());
  }
}

function toast(message) {
  clearTimeout(toastTimer);

  el.toast.textContent = message;
  el.toast.classList.add('show');

  toastTimer = setTimeout(
    () => el.toast.classList.remove('show'),
    2200
  );
}

function setCart(id, nextQty) {
  if (!getBouquet(id)) return;

  if (nextQty <= 0) {
    state.cart.delete(id);
  } else {
    state.cart.set(
      id,
      Math.min(20, nextQty)
    );
  }

  saveState();
  renderProducts();
  renderCart();
}

function openCart() {
  renderCart();

  el.cartBackdrop.hidden = false;

  requestAnimationFrame(() =>
    el.cartBackdrop.classList.add('show')
  );

  el.cartDrawer.classList.add('open');

  el.cartDrawer.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.classList.add(
    'modal-open'
  );
}

function closeCart() {
  el.cartDrawer.classList.remove('open');

  el.cartDrawer.setAttribute(
    'aria-hidden',
    'true'
  );

  el.cartBackdrop.classList.remove('show');

  setTimeout(() => {
    el.cartBackdrop.hidden = true;

    if (
      !el.checkoutModal?.classList.contains('open')
    ) {
      document.body.classList.remove(
        'modal-open'
      );
    }
  }, 320);
}

function openCheckout() {
  if (!state.cart.size) {
    return toast(t('emptyCartToast'));
  }

  closeCart();
  renderCart();

  el.checkoutStatus.textContent = '';
  el.checkoutBackdrop.hidden = false;

  requestAnimationFrame(() =>
    el.checkoutBackdrop.classList.add('show')
  );

  el.checkoutModal.classList.add('open');

  el.checkoutModal.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.classList.add(
    'modal-open'
  );

  setTimeout(
    () =>
      el.checkoutForm.elements.name?.focus(),
    350
  );
}

function closeCheckout() {
  if (!el.checkoutModal) return;

  el.checkoutModal.classList.remove('open');

  el.checkoutModal.setAttribute(
    'aria-hidden',
    'true'
  );

  el.checkoutBackdrop?.classList.remove(
    'show'
  );

  setTimeout(() => {
    if (el.checkoutBackdrop) {
      el.checkoutBackdrop.hidden = true;
    }

    document.body.classList.remove(
      'modal-open'
    );
  }, 320);
}


/* =========================
   LANGUAGE DROPDOWN
========================= */

el.languageCurrent?.addEventListener(
  'click',
  () => {
    const open =
      el.languageDropdown.classList.toggle(
        'open'
      );

    el.languageCurrent.setAttribute(
      'aria-expanded',
      String(open)
    );
  }
);

el.languageMenu?.addEventListener(
  'click',
  e => {
    const button =
      e.target.closest('[data-lang]');

    if (!button) return;

    setLanguage(button.dataset.lang);

    el.languageDropdown.classList.remove(
      'open'
    );

    el.languageCurrent.setAttribute(
      'aria-expanded',
      'false'
    );
  }
);

document.addEventListener(
  'click',
  e => {
    if (
      el.languageDropdown &&
      !el.languageDropdown.contains(e.target)
    ) {
      el.languageDropdown.classList.remove(
        'open'
      );

      el.languageCurrent?.setAttribute(
        'aria-expanded',
        'false'
      );
    }
  }
);


/* =========================
   CATEGORIES
========================= */

el.categories?.addEventListener(
  'click',
  e => {
    const button =
      e.target.closest('[data-filter]');

    if (!button) return;

    state.filter =
      button.dataset.filter;

    renderProducts();
  }
);


/* =========================
   PRODUCTS
========================= */

el.products?.addEventListener(
  'click',
  e => {
    const button =
      e.target.closest(
        'button[data-action]'
      );

    if (!button) return;

    const { id, action } =
      button.dataset;

    if (action === 'favorite') {
      if (state.favorites.has(id)) {
        state.favorites.delete(id);
      } else {
        state.favorites.add(id);
      }

      saveState();
      renderProducts();

      toast(
        state.favorites.has(id)
          ? t('addedFavorite')
          : t('removedFavorite')
      );
    }

    if (action === 'cart') {
      setCart(
        id,
        (state.cart.get(id) || 0) + 1
      );

      toast(t('addedCart'));
    }
  }
);


/* =========================
   CART
========================= */

el.cartItems?.addEventListener(
  'click',
  e => {
    const remove =
      e.target.closest('[data-remove]');

    if (remove) {
      return setCart(
        remove.dataset.remove,
        0
      );
    }

    const qty =
      e.target.closest('[data-qty]');

    if (qty) {
      setCart(
        qty.dataset.id,
        (state.cart.get(qty.dataset.id) || 0) +
          Number(qty.dataset.qty)
      );
    }
  }
);

el.openCart?.addEventListener(
  'click',
  openCart
);

el.closeCart?.addEventListener(
  'click',
  closeCart
);

el.cartBackdrop?.addEventListener(
  'click',
  closeCart
);

el.checkoutBtn?.addEventListener(
  'click',
  openCheckout
);

el.closeCheckout?.addEventListener(
  'click',
  closeCheckout
);

el.checkoutBackdrop?.addEventListener(
  'click',
  closeCheckout
);


/* =========================
   MOBILE NAVIGATION
========================= */

el.menuButton?.addEventListener(
  'click',
  () => {
    const open =
      el.nav.classList.toggle('open');

    el.menuButton.setAttribute(
      'aria-expanded',
      String(open)
    );
  }
);

el.nav?.addEventListener(
  'click',
  e => {
    if (e.target.matches('a')) {
      el.nav.classList.remove('open');

      el.menuButton?.setAttribute(
        'aria-expanded',
        'false'
      );
    }
  }
);


/* =========================
   ESCAPE
========================= */

document.addEventListener(
  'keydown',
  e => {
    if (e.key !== 'Escape') return;

    closeCart();
    closeCheckout();

    el.languageDropdown?.classList.remove(
      'open'
    );

    el.languageCurrent?.setAttribute(
      'aria-expanded',
      'false'
    );
  }
);


/* =========================
   ERROR TRANSLATION
========================= */

function localizeKnownError(message) {
  const m = String(message || '');

  const known = {
    'Корзина пуста': {
      he:'הסל ריק',
      en:'Your cart is empty',
      ru:'Корзина пуста',
      fr:'Votre panier est vide'
    },

    'Укажите имя': {
      he:'נא להזין שם',
      en:'Please enter your name',
      ru:'Укажите имя',
      fr:'Veuillez saisir votre nom'
    },

    'Проверьте номер телефона': {
      he:'נא לבדוק את מספר הטלפון',
      en:'Please check the phone number',
      ru:'Проверьте номер телефона',
      fr:'Veuillez vérifier le numéro de téléphone'
    },

    'Проверьте email': {
      he:'נא לבדוק את כתובת האימייל',
      en:'Please check the email address',
      ru:'Проверьте email',
      fr:'Veuillez vérifier votre adresse e-mail'
    },

    'Укажите город': {
      he:'נא להזין עיר',
      en:'Please enter a city',
      ru:'Укажите город',
      fr:'Veuillez saisir une ville'
    },

    'Укажите адрес доставки': {
      he:'נא להזין כתובת למשלוח',
      en:'Please enter a delivery address',
      ru:'Укажите адрес доставки',
      fr:'Veuillez saisir une adresse de livraison'
    }
  };

  return (
    known[m]?.[state.lang] ||
    m
  );
}


/* =========================
   CHECKOUT
========================= */

el.checkoutForm?.addEventListener(
  'submit',
  async e => {
    e.preventDefault();

    const submit =
      el.checkoutForm.querySelector(
        '[type="submit"]'
      );

    const data =
      Object.fromEntries(
        new FormData(el.checkoutForm)
      );

    submit.disabled = true;
    submit.classList.add('loading');

    el.checkoutStatus.textContent =
      t('creatingOrder');

    try {
      const response =
        await fetch(
          '/api/checkout',
          {
            method:'POST',

            headers:{
              'content-type':
                'application/json'
            },

            body:JSON.stringify({
              cart:cartPayload(),
              customer:data,
              language:state.lang
            })
          }
        );

      const result =
        await response.json();

      if (
        !response.ok ||
        !result.ok
      ) {
        throw new Error(
          localizeKnownError(
            result.error ||
            t('checkoutError')
          )
        );
      }

      localStorage.setItem(
        'tati-last-order',
        result.orderId
      );

      window.location.href =
        result.paymentUrl;

    } catch (error) {
      el.checkoutStatus.textContent =
        localizeKnownError(
          error.message
        ) ||
        t('checkoutError');

      submit.disabled = false;
      submit.classList.remove(
        'loading'
      );
    }
  }
);


/* =========================
   CONTACT FORM
========================= */

el.contactForm?.addEventListener(
  'submit',
  async e => {
    e.preventDefault();

    const status =
      el.contactForm.querySelector(
        '.form-status'
      );

    const submit =
      el.contactForm.querySelector(
        'button'
      );

    submit.disabled = true;

    status.textContent =
      t('sending');

    try {
      const data =
        Object.fromEntries(
          new FormData(el.contactForm)
        );

      const response =
        await fetch(
          '/api/contact',
          {
            method:'POST',

            headers:{
              'content-type':
                'application/json'
            },

            body:JSON.stringify({
              ...data,
              language:state.lang
            })
          }
        );

      const result =
        await response.json();

      if (
        !response.ok ||
        !result.ok
      ) {
        throw new Error(
          localizeKnownError(
            result.error ||
            t('sendError')
          )
        );
      }

      status.textContent =
        t('sentThanks');

      el.contactForm.reset();

    } catch (error) {
      status.textContent =
        localizeKnownError(
          error.message
        ) ||
        t('sendError');

    } finally {
      submit.disabled = false;
    }
  }
);


/* =========================
   REVEAL ANIMATION
========================= */

const observer =
  'IntersectionObserver' in window
    ? new IntersectionObserver(
        entries =>
          entries.forEach(entry => {
            if (
              entry.isIntersecting
            ) {
              entry.target.classList.add(
                'visible'
              );

              observer.unobserve(
                entry.target
              );
            }
          }),
        {
          threshold:.12
        }
      )
    : null;

document
  .querySelectorAll('.reveal')
  .forEach(node =>
    observer
      ? observer.observe(node)
      : node.classList.add('visible')
  );


/* =========================
   PAYMENT RETURN
========================= */

function handlePaymentReturn() {
  const params =
    new URLSearchParams(
      location.search
    );

  const status =
    params.get('payment');

  const order =
    params.get('order');

  if (!status) return;

  if (status === 'success') {
    state.cart.clear();

    saveState();
    renderProducts();
    renderCart();

    toast(
      `${t('paymentSuccess')} ${order || ''}`.trim()
    );
  }

  if (status === 'failure') {
    toast(
      t('paymentFailure')
    );
  }

  if (status === 'cancel') {
    toast(
      t('paymentCancel')
    );
  }

  history.replaceState(
    {},
    '',
    location.pathname +
      location.hash
  );
}


/* =========================
   LOAD CATALOG
========================= */

async function loadCatalog() {
  renderProducts(
    t('catalogLoading')
  );

  try {
    const response =
      await fetch(
        `/api/products?refresh=1&t=${Date.now()}`,
        {
          cache:'no-store'
        }
      );

    const result =
      await response.json();

    if (
      !response.ok ||
      !result.ok ||
      !Array.isArray(
        result.products
      )
    ) {
      throw new Error(
        result.error ||
        t('catalogUnavailable')
      );
    }

    if (
      String(
        result.source || ''
      ).startsWith('fallback')
    ) {
      throw new Error(
        t('catalogCsvError')
      );
    }

    bouquets =
      result.products
        .filter(
          item =>
            item &&
            item.id &&
            item.name &&
            Number(item.price) > 0
        )
        .sort(
          (a, b) =>
            Number(
              b.featured || 0
            ) -
              Number(
                a.featured || 0
              ) ||
            Number(
              a.sort || 9999
            ) -
              Number(
                b.sort || 9999
              )
        );

    const validIds =
      new Set(
        bouquets.map(
          item => item.id
        )
      );

    [...state.cart.keys()]
      .forEach(id => {
        if (!validIds.has(id)) {
          state.cart.delete(id);
        }
      });

    [...state.favorites]
      .forEach(id => {
        if (!validIds.has(id)) {
          state.favorites.delete(id);
        }
      });

    saveState();
    renderProducts();
    renderCart();

  } catch (error) {
    console.warn(
      'Catalog load failed:',
      error
    );

    bouquets = [];
    state.cart.clear();

    saveState();

    renderProducts(
      error.message ||
      t('catalogLoadError')
    );

    renderCart();
  }

  handlePaymentReturn();
}


/* =========================
   START
========================= */

applyLanguage();
loadCatalog();