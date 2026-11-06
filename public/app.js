'use strict';



let bouquets = [];



const I18N = {

  he: {

    navBouquets: 'זרי פרחים',
    navCatalog: 'קטלוג',

    navEvents: 'חתונות ואירועים',

    navWorkshops: 'סדנאות',

    navAbout: 'עלינו',

    navContact: 'יצירת קשר',

    cartShort: 'סל',

    order: 'להזמנה',



    heroEyebrow: 'סטודיו לפרחים · ישראל',

    heroTitle: 'פרחים לרגעים יפים.',

    chooseBouquet: 'לבחירת זר',

    customBouquet: 'זר בהתאמה אישית',

    deliveryLine: '✦ משלוח באותו היום · תל אביב ומרכז הארץ',



    collection: 'קולקציה',

    findFlowers: 'מצאו את הפרחים שלכם',

    catalogIntro: 'זרים וקומפוזיציות קלילות וטבעיות, לאירוע או פשוט כי מתחשק.',



    customOrder: 'הזמנה אישית',

    somethingSpecial: 'מחפשים משהו מיוחד?',

    customText: 'ספרו לנו על הפרחים, האווירה, התקציב והאירוע — וניצור זר במיוחד עבורכם.',

    whatsapp: 'כתבו לנו ב-WhatsApp →',



    workshopsEyebrow: 'סדנאות',

    createFlowers: 'יוצרים עם פרחים',

    workshopsText: 'סדנאות אינטימיות, יופי בתהליך וקצת זמן לעצמכם.',

    schedule: 'לפרטים ולתאריכים',



    meetTati: 'הכירו את TATI',

    aboutTitle: 'פרחים הם הדרך שלי לדבר על רגשות',

    aboutText1: 'כל זר נשזר בעבודת יד: פרחים עונתיים, קווים טבעיים, פלטה רכה ותשומת לב לפרטים.',

    aboutText2: 'בלי עומס. רק צורה, אוויר ואופי.',



    reviews: 'ביקורות',

    reviewsTitle: 'הלקוחות שלנו אוהבים',

    review1: '“הזר היה אפילו יפה יותר ממה שדמיינתי.”',

    review2: '“עדין, רענן ומיוחד באמת.”',

    review3: '“הכול — מהתקשורת ועד האריזה — היה מושלם.”',



    contactTitle: 'להזמנת פרחים',

    area: 'תל אביב · מרכז הארץ',

    sameDay: 'משלוח באותו היום בהתאם לזמן ההכנה ולשעות הפעילות',

    namePlaceholder: 'השם שלכם',

    phonePlaceholder: 'טלפון',

    messagePlaceholder: 'מה תרצו להזמין?',

    sendRequest: 'שליחת פנייה',



    yourOrder: 'ההזמנה שלכם',

    cartTitle: 'סל',

    cartEmpty: 'הסל עדיין ריק',

    cartEmptySmall: 'הוסיפו זר והוא יופיע כאן.',

    total: 'סה״כ',

    checkout: 'להשלמת הזמנה',



    checkoutEyebrow: 'השלמת הזמנה',

    deliveryPayment: 'משלוח ותשלום',

    nameLabel: 'שם *',

    phoneLabel: 'טלפון *',

    cityLabel: 'עיר *',

    chooseCity: 'בחרו עיר',

    addressLabel: 'כתובת *',

    cityPlaceholder: 'תל אביב',

    addressPlaceholder: 'רחוב, מספר בית, דירה',

    dateLabel: 'תאריך משלוח',

    timeLabel: 'שעה',

    anyTime: 'כל שעה נוחה',

    noteLabel: 'הערות להזמנה',

    notePlaceholder: 'טקסט לכרטיס, קוד כניסה, בקשות מיוחדות לזר…',

    securePayment: 'תשלום מאובטח',

    securePaymentText: 'פרטי הכרטיס מוזנים בעמוד המאובטח של ספק התשלום ואינם עוברים דרך אתר TATI Flowers.',

    proceedPayment: 'מעבר לתשלום',



    all: 'הכול',
    bouquetCategory: 'זרים',
    monoCategory: 'זרים מפרח אחד',
    pottedCategory: 'עציצים',
    homeCategory: 'עיצוב ומתנות לבית',

    everyday: 'ליום-יום',

    love: 'אהבה',

    event: 'אירועים',

    wedding: 'חתונות',

    composition: 'סידורים',

    gift: 'מתנות',

    other: 'אחר',

    featured: 'בחירת TATI',

    from: 'החל מ-',

    addToCart: 'הוספה לסל',

    inCart: 'בסל',

    defaultDescription: 'זר עונתי שנשזר בעבודת יד.',

    categoryEmpty: 'אין עדיין זרים בקטגוריה הזו.',

    catalogUpdating: 'הקטלוג מתעדכן',

    catalogLoading: 'טוענים את הזרים העדכניים מ-Google Sheets…',



    emptyCartToast: 'הסל עדיין ריק',

    addedFavorite: 'נוסף למועדפים',

    removedFavorite: 'הוסר מהמועדפים',

    addedCart: 'הזר נוסף לסל',

    decrease: 'הפחתה',

    increase: 'הוספה',

    remove: 'הסרה',

    bouquet: 'זר',



    creatingOrder: 'יוצרים את ההזמנה וקישור התשלום המאובטח…',

    checkoutError: 'לא ניתן להשלים את ההזמנה',

    sending: 'שולחים…',

    sendError: 'שגיאה בשליחה',

    sentThanks: 'תודה! הפנייה נשלחה 🌿',

    paymentSuccess: 'התשלום עבר בהצלחה. תודה!',

    paymentFailure: 'התשלום לא עבר. נסו שוב.',

    paymentCancel: 'התשלום בוטל — הסל נשמר.',

    catalogUnavailable: 'הקטלוג אינו זמין',

    catalogCsvError: 'השרת עדיין לא הצליח לקרוא את קובץ ה-CSV שפורסם ב-Google Sheets. בדקו שהטבלה מפורסמת כ-CSV ורעננו את הדף.',

    catalogLoadError: 'לא ניתן לטעון את הקטלוג.',



    title: 'TATI Flowers | זרי פרחים ומשלוחים בישראל',

    description: 'TATI Flowers — זרי פרחים בעיצוב אישי, סידורי פרחים, פרחים לחתונות וסדנאות. משלוחים בתל אביב ובמרכז הארץ.',

    storeLocation: 'מיקום החנות',

    openMap: 'פתיחה ב-Google Maps',



    deliveryOption: 'משלוח',

    deliveryFeeLabel: 'בחרו עיר',

    pickupOption: 'איסוף עצמי',

    pickupFree: 'חינם',

    pickupAddressTitle: 'כתובת לאיסוף',

    chooseSize: 'בחרו גודל',

    chooseFlowerCount: 'מספר פרחים',

    flowersLabel: 'פרחים',


    seoDeliveryTitle: 'פרחים טריים ומתנות עם משלוח בתל אביב וגוש דן',
    seoDeliveryIntro1: 'רוצים לשמח אדם קרוב, להפתיע מישהו או לשלוח פרחים כבר היום? TATI Flowers נמצאת בתל אביב ומציעה משלוח של זרים טריים וסידורי פרחים בתל אביב ובאזור גוש דן.',
    seoDeliveryIntro2: 'כל זר נשזר בעבודת יד לפני המשלוח, עם תשומת לב לטריות הפרחים, לשילובי הצבעים ולעיצוב.',

    seoGiftTitle: 'כל מה שצריך למתנה יפה',
    seoGiftText1: 'ב-TATI Flowers תוכלו לבחור זרים מעוצבים, זרים מונוכרומטיים, סידורי פרחים, שוקולד, ממתקים ומארזי מתנה.',
    seoGiftText2: 'אפשר לבחור אפשרות מוכנה או ליצור איתנו קשר כדי להרכיב מתנה אישית.',

    seoAreaTitle: 'משלוחי פרחים בגוש דן',
    seoAreaText1: 'אנחנו מבצעים משלוחים לתל אביב ויפו, חולון, בת ים, רמת גן, גבעתיים, בני ברק, ראשון לציון, פתח תקווה, הרצליה וערים נוספות במרכז הארץ.',
    seoAreaText2: 'עלות המשלוח מחושבת אוטומטית לפי העיר שנבחרת במהלך ההזמנה.',

    seoHowTitle: 'איך מזמינים?',
    seoHowStep1: 'בחרו זר או סידור פרחים מהקטלוג.',
    seoHowStep2: 'הזינו עיר, כתובת ושעת משלוח מועדפת.',
    seoHowStep3: 'שלמו על ההזמנה אונליין.',
    seoHowText: 'אנחנו נכין את ההזמנה ונדאג שהפרחים יגיעו יפים ומסודרים בקפידה.',

    availabilityNote: 'הרכב הזר עשוי להשתנות מעט בהתאם לזמינות העונתית של הפרחים. במידת הצורך, פרחים מסוימים יוחלפו באפשרויות דומות ככל האפשר בסגנון, בצבע ובערך.',

    seoInternationalText: 'מזמינים מחו״ל? אפשר לבצע הזמנה אונליין מכל מקום בעולם, ואנחנו נדאג למסור את הפרחים ליקרים לכם בישראל.',

    deliveryTimingTitle: 'זמן קבלת ההזמנה',

    earliestOption: 'הזמן הקרוב ביותר',

    scheduleLoading: 'מחשבים את הזמן הקרוב ביותר…',

    scheduledOption: 'בחירת תאריך ושעה',

    scheduledHint: 'אפשר להזמין מראש',

    preparationNotice: 'זמן ההכנה המינימלי להזמנה הוא שעה וחצי.',

    deliveryEstimateNote: 'זמן המשלוח משוער ועשוי להשתנות מעט בהתאם לכתובת ולמצב התנועה.',

    noSlots: 'אין זמנים זמינים לתאריך הזה',

  },



  en: {

    navBouquets: 'Bouquets',
    navCatalog: 'Catalog',

    navEvents: 'Weddings & Events',

    navWorkshops: 'Workshops',

    navAbout: 'About',

    navContact: 'Contact',

    cartShort: 'Cart',

    order: 'Order',



    heroEyebrow: 'FLORAL STUDIO · ISRAEL',

    heroTitle: 'Flowers for beautiful moments.',

    chooseBouquet: 'Choose a bouquet',

    customBouquet: 'Custom bouquet',

    deliveryLine: '✦ Same-day delivery · Tel Aviv & Central Israel',



    collection: 'COLLECTION',

    findFlowers: 'Find your flowers',

    catalogIntro: 'Light, natural arrangements for special occasions and everyday moments.',



    customOrder: 'CUSTOM ORDER',

    somethingSpecial: 'Looking for something special?',

    customText: 'Tell us about the flowers, mood, budget and occasion — we’ll create a bouquet especially for you.',

    whatsapp: 'Message us on WhatsApp →',



    workshopsEyebrow: 'WORKSHOPS',

    createFlowers: 'Create with flowers',

    workshopsText: 'Intimate workshops, the beauty of the process and a little time for yourself.',

    schedule: 'See workshop dates',



    meetTati: 'MEET TATI',

    aboutTitle: 'Flowers are my way of speaking about feelings',

    aboutText1: 'Every bouquet is made by hand with seasonal flowers, natural lines, a soft palette and attention to detail.',

    aboutText2: 'Nothing excessive. Just shape, air and character.',



    reviews: 'REVIEWS',

    reviewsTitle: 'Loved by our customers',

    review1: '“The bouquet was even more beautiful than I imagined.”',

    review2: '“So delicate, fresh and truly unique.”',

    review3: '“Everything — from communication to packaging — was perfect.”',



    contactTitle: 'Order flowers',

    area: 'Tel Aviv · Central Israel',

    sameDay: 'Same-day delivery subject to preparation time and store hours',

    namePlaceholder: 'Your name',

    phonePlaceholder: 'Phone',

    messagePlaceholder: 'What would you like to order?',

    sendRequest: 'Send request',



    yourOrder: 'YOUR ORDER',

    cartTitle: 'Cart',

    cartEmpty: 'Your cart is empty',

    cartEmptySmall: 'Add a bouquet and it will appear here.',

    total: 'Total',

    checkout: 'Checkout',



    checkoutEyebrow: 'CHECKOUT',

    deliveryPayment: 'Delivery & payment',

    nameLabel: 'Name *',

    phoneLabel: 'Phone *',

    cityLabel: 'City *',

    chooseCity: 'Choose a city',

    addressLabel: 'Address *',

    cityPlaceholder: 'Tel Aviv',

    addressPlaceholder: 'Street, house, apartment',

    dateLabel: 'Delivery date',

    timeLabel: 'Time',

    anyTime: 'Any convenient time',

    noteLabel: 'Order notes',

    notePlaceholder: 'Card message, entry code, bouquet preferences…',

    securePayment: 'Secure payment',

    securePaymentText: 'Card details are entered on the payment provider’s secure page and never pass through the TATI Flowers website.',

    proceedPayment: 'Proceed to payment',



    all: 'All',
    bouquetCategory: 'Bouquets',
    monoCategory: 'Mono Bouquets',
    pottedCategory: 'Potted Plants',
    homeCategory: 'Home & Decor',

    everyday: 'Everyday',

    love: 'Love',

    event: 'Events',

    wedding: 'Weddings',

    composition: 'Arrangements',

    gift: 'Gifts',

    other: 'Other',

    featured: 'TATI Pick',

    from: 'From ',

    addToCart: 'Add to cart',

    inCart: 'In cart',

    defaultDescription: 'A seasonal bouquet, handcrafted with care.',

    categoryEmpty: 'There are no bouquets in this category yet.',

    catalogUpdating: 'Catalog is updating',

    catalogLoading: 'Loading the latest bouquets from Google Sheets…',



    emptyCartToast: 'Your cart is empty',

    addedFavorite: 'Added to favorites',

    removedFavorite: 'Removed from favorites',

    addedCart: 'Bouquet added to cart',

    decrease: 'Decrease',

    increase: 'Increase',

    remove: 'Remove',

    bouquet: 'Bouquet',



    creatingOrder: 'Creating your order and secure payment link…',

    checkoutError: 'Unable to place the order',

    sending: 'Sending…',

    sendError: 'Unable to send',

    sentThanks: 'Thank you! Your request was sent 🌿',

    paymentSuccess: 'Payment successful. Thank you!',

    paymentFailure: 'Payment failed. Please try again.',

    paymentCancel: 'Payment cancelled — your cart was saved.',

    catalogUnavailable: 'Catalog unavailable',

    catalogCsvError: 'The server could not read the published Google Sheets CSV yet. Make sure the sheet is published as CSV and refresh the page.',

    catalogLoadError: 'Unable to load the catalog.',



    title: 'TATI Flowers | Bouquets & Flower Delivery in Israel',

    description: 'TATI Flowers — handcrafted bouquets, floral arrangements, wedding flowers and workshops. Flower delivery in Tel Aviv and Central Israel.',

    storeLocation: 'Store location',

    openMap: 'Open in Google Maps',



    deliveryOption: 'Delivery',

    deliveryFeeLabel: 'Choose city',

    pickupOption: 'Pickup',

    pickupFree: 'Free',

    pickupAddressTitle: 'Pickup address',

    chooseSize: 'Choose size',

    chooseFlowerCount: 'Number of flowers',

    flowersLabel: 'flowers',

    seoDeliveryTitle: 'Fresh flowers and gifts with delivery in Tel Aviv and Central Israel',
    seoDeliveryIntro1: 'Want to congratulate someone, send a surprise or order flowers for today? TATI Flowers is based in Tel Aviv and delivers fresh bouquets and floral arrangements across Tel Aviv and Central Israel.',
    seoDeliveryIntro2: 'Every bouquet is handcrafted before delivery, with attention to freshness, color combinations and presentation.',

    seoGiftTitle: 'Everything for a beautiful gift',
    seoGiftText1: 'At TATI Flowers you can choose designer bouquets, mono bouquets, floral arrangements, chocolate, sweets and gift sets.',
    seoGiftText2: 'Choose a ready-made option or contact us to create a personalized gift.',

    seoAreaTitle: 'Flower delivery in Tel Aviv and Central Israel',
    seoAreaText1: 'We deliver to Tel Aviv and Jaffa, Holon, Bat Yam, Ramat Gan, Givatayim, Bnei Brak, Rishon LeZion, Petah Tikva, Herzliya and other cities in Central Israel.',
    seoAreaText2: 'The delivery fee is calculated automatically when you select your city during checkout.',

    seoHowTitle: 'How to order?',
    seoHowStep1: 'Choose a bouquet or floral arrangement from the catalog.',
    seoHowStep2: 'Enter the city, delivery address and preferred delivery time.',
    seoHowStep3: 'Pay for your order online.',
    seoHowText: 'We will prepare your order and make sure the flowers arrive beautifully and carefully arranged.',

    availabilityNote: 'The exact flower selection may vary depending on seasonal availability. If needed, individual flowers will be replaced with the closest available alternatives in style, color and value.',
    seoInternationalText: 'Ordering from abroad? You can place your order online from anywhere in the world, and we will deliver the flowers to your loved ones in Israel.',

    deliveryTimingTitle: 'Order time',

    earliestOption: 'Earliest available time',

    scheduleLoading: 'Calculating the earliest available time…',

    scheduledOption: 'Choose date and time',

    scheduledHint: 'You can place a pre-order in advance',

    preparationNotice: 'Minimum order preparation time is 1.5 hours.',

    deliveryEstimateNote: 'Delivery time is approximate and may vary slightly depending on the address and traffic.',

    noSlots: 'No available times for this date',

  },



  ru: {

    navBouquets: 'Букеты',
    navCatalog: 'Каталог',

    navEvents: 'Свадьбы & события',

    navWorkshops: 'Мастер-классы',

    navAbout: 'О нас',

    navContact: 'Контакты',

    cartShort: 'Корзина',

    order: 'Заказать',



    heroEyebrow: 'FLORAL STUDIO · ISRAEL',

    heroTitle: 'Цветы для красивых моментов.',

    chooseBouquet: 'Выбрать букет',

    customBouquet: 'Свой букет',

    deliveryLine: '✦ Доставка день в день · Tel Aviv & Central Israel',



    collection: 'КОЛЛЕКЦИЯ',

    findFlowers: 'Найди свои цветы',

    catalogIntro: 'Лёгкие, живые композиции для повода и без.',



    customOrder: 'ИНДИВИДУАЛЬНЫЙ ЗАКАЗ',

    somethingSpecial: 'Что-то особенное?',

    customText: 'Расскажите о цветах, настроении, бюджете и поводе — мы соберём букет специально для вас.',

    whatsapp: 'Написать в WhatsApp →',



    workshopsEyebrow: 'WORKSHOPS',

    createFlowers: 'Создавай с цветами',

    workshopsText: 'Камерные мастер-классы, красота процесса и немного времени для себя.',

    schedule: 'Узнать расписание',



    meetTati: 'MEET TATI',

    aboutTitle: 'Цветы — мой способ говорить о чувствах',

    aboutText1: 'Каждый букет собирается вручную: сезонные цветы, естественные линии, мягкая палитра и внимание к деталям.',

    aboutText2: 'Без перегруженности. Только форма, воздух и характер.',



    reviews: 'ОТЗЫВЫ',

    reviewsTitle: 'Любят наши клиенты',

    review1: '“Букет оказался ещё красивее, чем я представляла.”',

    review2: '“Очень нежно, свежо и действительно необычно.”',

    review3: '“Всё — от общения до упаковки — было прекрасно.”',



    contactTitle: 'Заказать цветы',

    area: 'Tel Aviv · Central Israel',

    sameDay: 'Доставка в день заказа с учётом времени подготовки и часов работы',

    namePlaceholder: 'Ваше имя',

    phonePlaceholder: 'Телефон',

    messagePlaceholder: 'Что хотите заказать?',

    sendRequest: 'Отправить заявку',



    yourOrder: 'ВАШ ЗАКАЗ',

    cartTitle: 'Корзина',

    cartEmpty: 'Корзина пока пустая',

    cartEmptySmall: 'Добавьте букет — он появится здесь.',

    total: 'Итого',

    checkout: 'Оформить заказ',



    checkoutEyebrow: 'ОФОРМЛЕНИЕ',

    deliveryPayment: 'Доставка и оплата',

    nameLabel: 'Имя *',

    phoneLabel: 'Телефон *',

    cityLabel: 'Город *',

    chooseCity: 'Выберите город',

    addressLabel: 'Адрес *',

    cityPlaceholder: 'Tel Aviv',

    addressPlaceholder: 'Улица, дом, квартира',

    dateLabel: 'Дата доставки',

    timeLabel: 'Время',

    anyTime: 'Любое удобное',

    noteLabel: 'Пожелания к заказу',

    notePlaceholder: 'Текст открытки, код домофона, пожелания к букету…',

    securePayment: 'Безопасная оплата',

    securePaymentText: 'Данные карты вводятся на защищённой странице платёжного провайдера и не проходят через сайт TATI Flowers.',

    proceedPayment: 'Перейти к оплате',



    all: 'Все',
    bouquetCategory: 'Букеты',
    monoCategory: 'Монобукеты',
    pottedCategory: 'Вазоны',
    homeCategory: 'Для дома и декора',

    everyday: 'На каждый день',

    love: 'Любовь',

    event: 'События',

    wedding: 'Свадебные',

    composition: 'Композиции',

    gift: 'Подарки',

    other: 'Другое',

    featured: 'Выбор TATI',

    from: 'от ',

    addToCart: 'В корзину',

    inCart: 'В корзине',

    defaultDescription: 'Сезонный букет, собранный вручную.',

    categoryEmpty: 'В этой категории пока нет букетов.',

    catalogUpdating: 'Каталог обновляется',

    catalogLoading: 'Загружаем актуальные букеты из Google Sheets…',



    emptyCartToast: 'Корзина пока пустая',

    addedFavorite: 'Добавлено в избранное',

    removedFavorite: 'Убрано из избранного',

    addedCart: 'Букет добавлен в корзину',

    decrease: 'Уменьшить',

    increase: 'Увеличить',

    remove: 'Удалить',

    bouquet: 'Букет',



    creatingOrder: 'Создаём заказ и безопасную ссылку на оплату…',

    checkoutError: 'Не удалось оформить заказ',

    sending: 'Отправляем…',

    sendError: 'Ошибка отправки',

    sentThanks: 'Спасибо! Заявка отправлена 🌿',

    paymentSuccess: 'Оплата прошла. Спасибо!',

    paymentFailure: 'Оплата не прошла. Попробуйте ещё раз.',

    paymentCancel: 'Оплата отменена — корзина сохранена.',

    catalogUnavailable: 'Каталог недоступен',

    catalogCsvError: 'Сервер пока не смог прочитать опубликованный CSV Google Sheets. Проверьте, что таблица опубликована в интернете в формате CSV, и обновите страницу.',

    catalogLoadError: 'Не удалось загрузить каталог.',



    title: 'TATI Flowers | Bouquets & Flower Delivery in Israel',

    description: 'TATI Flowers — авторские букеты, цветочные композиции, свадебная флористика и мастер-классы. Доставка цветов по Тель-Авиву и центральному Израилю.',

    storeLocation: 'Расположение магазина',

    openMap: 'Открыть в Google Maps',



    deliveryOption: 'Доставка',

    deliveryFeeLabel: 'Выберите город',

    pickupOption: 'Самовывоз',

    pickupFree: 'Бесплатно',

    pickupAddressTitle: 'Адрес самовывоза',

    chooseSize: 'Выберите размер',

    chooseFlowerCount: 'Количество цветов',

    flowersLabel: 'цветов',

    seoDeliveryTitle: 'Свежие цветы и подарки с доставкой по Тель-Авиву и Центральному Израилю',
    seoDeliveryIntro1: 'Хотите поздравить близкого человека, сделать сюрприз или отправить цветы прямо сегодня? TATI Flowers находится в Тель-Авиве и доставляет свежие букеты и композиции по Тель-Авиву и Центральному Израилю.',
    seoDeliveryIntro2: 'Каждый букет мы собираем вручную перед отправкой, уделяя внимание свежести цветов, сочетанию оттенков и оформлению.',

    seoGiftTitle: 'Всё для красивого поздравления',
    seoGiftText1: 'В TATI Flowers можно выбрать авторские букеты, монобукеты, цветочные композиции, шоколад, сладости и подарочные наборы.',
    seoGiftText2: 'Можно выбрать готовый вариант или связаться с нами, чтобы собрать индивидуальный подарок.',

    seoAreaTitle: 'Доставка цветов по Тель-Авиву и Центральному Израилю',
    seoAreaText1: 'Мы доставляем заказы в Тель-Авив и Яффо, Холон, Бат-Ям, Рамат-Ган, Гиватаим, Бней-Брак, Ришон-ле-Цион, Петах-Тикву, Герцлию и другие города центрального Израиля.',
    seoAreaText2: 'Стоимость доставки рассчитывается автоматически при выборе города во время оформления заказа.',

    seoHowTitle: 'Как заказать?',
    seoHowStep1: 'Выберите букет или композицию в каталоге.',
    seoHowStep2: 'Укажите город, адрес и удобное время доставки.',
    seoHowStep3: 'Оплатите заказ онлайн.',
    seoHowText: 'Мы подготовим заказ и позаботимся о том, чтобы цветы приехали красивыми и аккуратно оформленными.',

    availabilityNote: 'Состав букета может незначительно отличаться в зависимости от сезонного наличия цветов. При необходимости отдельные позиции будут заменены на максимально близкие по стилю, цвету и стоимости.',

    seoInternationalText: 'Заказать цветы можно и из-за границы — оформите заказ онлайн, а мы доставим его вашим близким в Израиле.',

    deliveryTimingTitle: 'Время получения заказа',

    earliestOption: 'Ближайшее доступное время',

    scheduleLoading: 'Рассчитываем ближайшее время…',

    scheduledOption: 'Выбрать дату и время',

    scheduledHint: 'Можно оформить предзаказ заранее',

    preparationNotice: 'Минимальное время подготовки заказа — 1,5 часа.',

    deliveryEstimateNote: 'Время доставки ориентировочное и может немного измениться в зависимости от адреса и дорожной ситуации.',

    noSlots: 'На эту дату нет доступного времени',

  },



  uk: {
    navBouquets: 'Букети',
    navCatalog: 'Каталог',
    navEvents: 'Весілля та події',
    navWorkshops: 'Майстер-класи',
    navAbout: 'Про нас',
    navContact: 'Контакти',
    cartShort: 'Кошик',
    order: 'Замовити',

    heroEyebrow: 'FLORAL STUDIO · ISRAEL',
    heroTitle: 'Квіти для прекрасних моментів.',
    chooseBouquet: 'Обрати букет',
    customBouquet: 'Індивідуальний букет',
    deliveryLine: '✦ Доставка в день замовлення · Тель-Авів та центр Ізраїлю',

    collection: 'КОЛЕКЦІЯ',
    findFlowers: 'Знайдіть свої квіти',
    catalogIntro: 'Легкі, живі композиції для особливих подій і просто без приводу.',

    customOrder: 'ІНДИВІДУАЛЬНЕ ЗАМОВЛЕННЯ',
    somethingSpecial: 'Шукаєте щось особливе?',
    customText: 'Розкажіть нам про квіти, настрій, бюджет і подію — ми створимо букет спеціально для вас.',
    whatsapp: 'Написати у WhatsApp →',

    workshopsEyebrow: 'МАЙСТЕР-КЛАСИ',
    createFlowers: 'Створюйте разом із квітами',
    workshopsText: 'Камерні майстер-класи, краса процесу та трохи часу для себе.',
    schedule: 'Дізнатися розклад',

    meetTati: 'MEET TATI',
    aboutTitle: 'Квіти — мій спосіб говорити про почуття',
    aboutText1: 'Кожен букет створюється вручну: сезонні квіти, природні лінії, ніжна палітра та увага до деталей.',
    aboutText2: 'Без перевантаження. Лише форма, повітря та характер.',

    reviews: 'ВІДГУКИ',
    reviewsTitle: 'Нас люблять наші клієнти',

    contactTitle: 'Замовити квіти',
    area: 'Тель-Авів · Центральний Ізраїль',
    sameDay: 'Доставка в день замовлення з урахуванням часу підготовки та годин роботи',
    namePlaceholder: 'Ваше ім’я',
    phonePlaceholder: 'Телефон',
    messagePlaceholder: 'Що ви хотіли б замовити?',
    sendRequest: 'Надіслати заявку',

    yourOrder: 'ВАШЕ ЗАМОВЛЕННЯ',
    cartTitle: 'Кошик',
    cartEmpty: 'Кошик поки порожній',
    cartEmptySmall: 'Додайте букет — він з’явиться тут.',
    total: 'Разом',
    checkout: 'Оформити замовлення',

    checkoutEyebrow: 'ОФОРМЛЕННЯ',
    deliveryPayment: 'Доставка та оплата',
    nameLabel: 'Ім’я *',
    phoneLabel: 'Телефон *',
    cityLabel: 'Місто *',
    addressLabel: 'Адреса *',
    cityPlaceholder: 'Tel Aviv',
    addressPlaceholder: 'Вулиця, будинок, квартира',
    dateLabel: 'Дата доставки',
    timeLabel: 'Час',
    anyTime: 'Будь-який зручний час',
    noteLabel: 'Побажання до замовлення',
    notePlaceholder: 'Текст листівки, код домофона, побажання до букета…',
    securePayment: 'Безпечна оплата',
    securePaymentText: 'Дані картки вводяться на захищеній сторінці платіжного сервісу та не проходять через сайт TATI Flowers.',
    proceedPayment: 'Перейти до оплати',

    all: 'Усі',
    bouquetCategory: 'Букети',
    monoCategory: 'Монобукети',
    pottedCategory: 'Рослини в горщиках',
    homeCategory: 'Для дому та декору',
    everyday: 'На кожен день',
    love: 'Кохання',
    event: 'Події',
    wedding: 'Весільні',
    composition: 'Композиції',
    gift: 'Подарунки',
    other: 'Інше',
    featured: 'Вибір TATI',
    from: 'від ',
    addToCart: 'До кошика',
    inCart: 'У кошику',
    defaultDescription: 'Сезонний букет, створений вручну.',
    categoryEmpty: 'У цій категорії поки немає букетів.',
    catalogUpdating: 'Каталог оновлюється',
    catalogLoading: 'Завантажуємо актуальні букети з Google Sheets…',

    emptyCartToast: 'Кошик поки порожній',
    addedFavorite: 'Додано до обраного',
    removedFavorite: 'Видалено з обраного',
    addedCart: 'Букет додано до кошика',
    decrease: 'Зменшити',
    increase: 'Збільшити',
    remove: 'Видалити',
    bouquet: 'Букет',

    creatingOrder: 'Створюємо замовлення та безпечне посилання на оплату…',
    checkoutError: 'Не вдалося оформити замовлення',
    sending: 'Надсилаємо…',
    sendError: 'Помилка надсилання',
    sentThanks: 'Дякуємо! Заявку надіслано 🌿',
    paymentSuccess: 'Оплату проведено. Дякуємо!',
    paymentFailure: 'Оплата не пройшла. Спробуйте ще раз.',
    paymentCancel: 'Оплату скасовано — кошик збережено.',
    catalogUnavailable: 'Каталог недоступний',
    catalogLoadError: 'Не вдалося завантажити каталог.',

    title: 'TATI Flowers | Букети та доставка квітів в Ізраїлі',
    description: 'TATI Flowers — авторські букети, квіткові композиції, весільна флористика та доставка квітів у Тель-Авіві й центральному Ізраїлі.',
    storeLocation: 'Розташування магазину',
    openMap: 'Відкрити в Google Maps',

    deliveryOption: 'Доставка',
    deliveryFeeLabel: '+ ₪40',
    pickupOption: 'Самовивіз',
    pickupFree: 'Безкоштовно',
    pickupAddressTitle: 'Адреса самовивозу',
    chooseSize: 'Оберіть розмір',

    chooseFlowerCount: 'Кількість квітів',
    flowersLabel: 'квітів',

    seoDeliveryTitle: 'Свіжі квіти та подарунки з доставкою по Тель-Авіву та Центральному Ізраїлю',
    seoDeliveryIntro1: 'Хочете привітати близьку людину, зробити сюрприз або надіслати квіти вже сьогодні? TATI Flowers знаходиться в Тель-Авіві та доставляє свіжі букети й композиції по Тель-Авіву та Центральному Ізраїлю.',
    seoDeliveryIntro2: 'Кожен букет ми збираємо вручну перед відправленням, приділяючи увагу свіжості квітів, поєднанню відтінків та оформленню.',

    seoGiftTitle: 'Усе для красивого привітання',
    seoGiftText1: 'У TATI Flowers можна обрати авторські букети, монобукети, квіткові композиції, шоколад, солодощі та подарункові набори.',
    seoGiftText2: 'Можна обрати готовий варіант або зв’язатися з нами, щоб створити індивідуальний подарунок.',

    seoAreaTitle: 'Доставка квітів по Тель-Авіву та Центральному Ізраїлю',
    seoAreaText1: 'Ми доставляємо замовлення в Тель-Авів і Яффо, Холон, Бат-Ям, Рамат-Ган, Гіватаїм, Бней-Брак, Рішон-ле-Ціон, Петах-Тікву, Герцлію та інші міста центрального Ізраїлю.',
    seoAreaText2: 'Вартість доставки розраховується автоматично під час вибору міста при оформленні замовлення.',

    seoHowTitle: 'Як замовити?',
    seoHowStep1: 'Оберіть букет або композицію в каталозі.',
    seoHowStep2: 'Вкажіть місто, адресу та зручний час доставки.',
    seoHowStep3: 'Оплатіть замовлення онлайн.',
    seoHowText: 'Ми підготуємо замовлення та подбаємо про те, щоб квіти приїхали красивими й акуратно оформленими.',

    availabilityNote: 'Склад букета може незначно відрізнятися залежно від сезонної наявності квітів. За потреби окремі позиції будуть замінені на максимально близькі за стилем, кольором і вартістю.',
    seoInternationalText: 'Замовити квіти можна і з-за кордону — оформіть замовлення онлайн, а ми доставимо його вашим близьким в Ізраїлі.',

    deliveryTimingTitle: 'Час отримання замовлення',

    earliestOption: 'Найближчий доступний час',

    scheduleLoading: 'Розраховуємо найближчий час…',

    scheduledOption: 'Обрати дату і час',

    scheduledHint: 'Можна оформити попереднє замовлення',

    preparationNotice: 'Мінімальний час підготовки замовлення — 1,5 години.',

    deliveryEstimateNote: 'Час доставки орієнтовний і може трохи змінитися залежно від адреси та дорожньої ситуації.',

    noSlots: 'На цю дату немає доступного часу',

    chooseCity: 'Оберіть місто',

  },



  fr: {

    navBouquets: 'Bouquets',
    navCatalog: 'Catalogue',

    navEvents: 'Mariages & événements',

    navWorkshops: 'Ateliers',

    navAbout: 'À propos',

    navContact: 'Contact',

    cartShort: 'Panier',

    order: 'Commander',



    heroEyebrow: 'STUDIO FLORAL · ISRAËL',

    heroTitle: 'Des fleurs pour de beaux moments.',

    chooseBouquet: 'Choisir un bouquet',

    customBouquet: 'Bouquet sur mesure',

    deliveryLine: '✦ Livraison le jour même · Tel Aviv & Centre d’Israël',



    collection: 'COLLECTION',

    findFlowers: 'Trouvez vos fleurs',

    catalogIntro: 'Des bouquets et compositions naturels et légers, pour une occasion ou simplement pour le plaisir.',



    customOrder: 'COMMANDE SUR MESURE',

    somethingSpecial: 'Envie de quelque chose de spécial ?',

    customText: 'Parlez-nous des fleurs, de l’ambiance, du budget et de l’occasion — nous créerons un bouquet spécialement pour vous.',

    whatsapp: 'Écrivez-nous sur WhatsApp →',



    workshopsEyebrow: 'ATELIERS',

    createFlowers: 'Créez avec les fleurs',

    workshopsText: 'Des ateliers intimistes, le plaisir de créer et un peu de temps pour soi.',

    schedule: 'Voir les dates des ateliers',



    meetTati: 'DÉCOUVREZ TATI',

    aboutTitle: 'Les fleurs sont ma façon de parler des émotions',

    aboutText1: 'Chaque bouquet est réalisé à la main avec des fleurs de saison, des lignes naturelles, une palette douce et une attention portée aux détails.',

    aboutText2: 'Sans surcharge. Seulement la forme, l’air et le caractère.',



    reviews: 'AVIS',

    reviewsTitle: 'Nos clients nous aiment',

    review1: '“Le bouquet était encore plus beau que je ne l’imaginais.”',

    review2: '“Très délicat, frais et vraiment unique.”',

    review3: '“Tout était parfait — de la communication à l’emballage.”',



    contactTitle: 'Commander des fleurs',

    area: 'Tel Aviv · Centre d’Israël',

    sameDay: 'Livraison le jour même selon le temps de préparation et les horaires de la boutique',

    namePlaceholder: 'Votre nom',

    phonePlaceholder: 'Téléphone',

    messagePlaceholder: 'Que souhaitez-vous commander ?',

    sendRequest: 'Envoyer la demande',



    yourOrder: 'VOTRE COMMANDE',

    cartTitle: 'Panier',

    cartEmpty: 'Votre panier est vide',

    cartEmptySmall: 'Ajoutez un bouquet et il apparaîtra ici.',

    total: 'Total',

    checkout: 'Commander',



    checkoutEyebrow: 'COMMANDE',

    deliveryPayment: 'Livraison & paiement',

    nameLabel: 'Nom *',

    phoneLabel: 'Téléphone *',

    cityLabel: 'Ville *',

    chooseCity: 'Choisissez une ville',

    addressLabel: 'Adresse *',

    cityPlaceholder: 'Tel Aviv',

    addressPlaceholder: 'Rue, numéro, appartement',

    dateLabel: 'Date de livraison',

    timeLabel: 'Heure',

    anyTime: 'Toute heure convient',

    noteLabel: 'Notes de commande',

    notePlaceholder: 'Message pour la carte, code d’entrée, préférences pour le bouquet…',

    securePayment: 'Paiement sécurisé',

    securePaymentText: 'Les informations de carte sont saisies sur la page sécurisée du prestataire de paiement et ne transitent jamais par le site TATI Flowers.',

    proceedPayment: 'Passer au paiement',



    all: 'Tout',
    bouquetCategory: 'Bouquets',
    monoCategory: 'Mono-bouquets',
    pottedCategory: 'Plantes en pot',
    homeCategory: 'Maison & décoration',

    everyday: 'Tous les jours',

    love: 'Amour',

    event: 'Événements',

    wedding: 'Mariages',

    composition: 'Compositions',

    gift: 'Cadeaux',

    other: 'Autre',

    featured: 'Choix TATI',

    from: 'À partir de ',

    addToCart: 'Ajouter',

    inCart: 'Dans le panier',

    defaultDescription: 'Bouquet de saison réalisé à la main.',

    categoryEmpty: 'Il n’y a pas encore de bouquets dans cette catégorie.',

    catalogUpdating: 'Mise à jour du catalogue',

    catalogLoading: 'Chargement des bouquets depuis Google Sheets…',



    emptyCartToast: 'Votre panier est vide',

    addedFavorite: 'Ajouté aux favoris',

    removedFavorite: 'Retiré des favoris',

    addedCart: 'Bouquet ajouté au panier',

    decrease: 'Diminuer',

    increase: 'Augmenter',

    remove: 'Supprimer',

    bouquet: 'Bouquet',



    creatingOrder: 'Création de votre commande et du lien de paiement sécurisé…',

    checkoutError: 'Impossible de finaliser la commande',

    sending: 'Envoi…',

    sendError: 'Erreur lors de l’envoi',

    sentThanks: 'Merci ! Votre demande a été envoyée 🌿',

    paymentSuccess: 'Paiement réussi. Merci !',

    paymentFailure: 'Le paiement a échoué. Veuillez réessayer.',

    paymentCancel: 'Paiement annulé — votre panier a été conservé.',

    catalogUnavailable: 'Catalogue indisponible',

    catalogCsvError: 'Le serveur ne peut pas encore lire le fichier CSV publié dans Google Sheets. Vérifiez que le tableau est publié au format CSV puis actualisez la page.',

    catalogLoadError: 'Impossible de charger le catalogue.',



    title: 'TATI Flowers | Bouquets & livraison de fleurs en Israël',

    description: 'TATI Flowers — bouquets artisanaux, compositions florales, fleurs de mariage et ateliers. Livraison de fleurs à Tel Aviv et dans le centre d’Israël.',

    storeLocation: 'Notre boutique',

    openMap: 'Ouvrir dans Google Maps',



    deliveryOption: 'Livraison',

    deliveryFeeLabel: 'Choisissez une ville',

    pickupOption: 'Retrait',

    pickupFree: 'Gratuit',

    pickupAddressTitle: 'Adresse de retrait',

    chooseSize: 'Choisissez la taille',

    chooseFlowerCount: 'Nombre de fleurs',

    flowersLabel: 'fleurs',


    seoDeliveryTitle: 'Fleurs fraîches et cadeaux livrés à Tel Aviv et dans le centre d’Israël',
    seoDeliveryIntro1: 'Vous souhaitez féliciter un proche, faire une surprise ou envoyer des fleurs aujourd’hui ? TATI Flowers est situé à Tel Aviv et livre des bouquets frais et des compositions florales à Tel Aviv et dans le centre d’Israël.',
    seoDeliveryIntro2: 'Chaque bouquet est réalisé à la main avant la livraison, avec une attention particulière portée à la fraîcheur, aux couleurs et à la présentation.',

    seoGiftTitle: 'Tout pour un beau cadeau',
    seoGiftText1: 'Chez TATI Flowers, vous pouvez choisir des bouquets de créateur, des mono-bouquets, des compositions florales, du chocolat, des douceurs et des coffrets cadeaux.',
    seoGiftText2: 'Choisissez une option prête à offrir ou contactez-nous pour créer un cadeau personnalisé.',

    seoAreaTitle: 'Livraison de fleurs à Tel Aviv et dans le centre d’Israël',
    seoAreaText1: 'Nous livrons à Tel Aviv et Jaffa, Holon, Bat Yam, Ramat Gan, Givatayim, Bnei Brak, Rishon LeZion, Petah Tikva, Herzliya et dans d’autres villes du centre d’Israël.',
    seoAreaText2: 'Les frais de livraison sont calculés automatiquement lorsque vous sélectionnez votre ville au moment de la commande.',

    seoHowTitle: 'Comment commander ?',
    seoHowStep1: 'Choisissez un bouquet ou une composition florale dans le catalogue.',
    seoHowStep2: 'Indiquez la ville, l’adresse et l’heure de livraison souhaitée.',
    seoHowStep3: 'Payez votre commande en ligne.',
    seoHowText: 'Nous préparerons votre commande et veillerons à ce que les fleurs arrivent joliment et soigneusement présentées.',

    availabilityNote: 'La composition exacte du bouquet peut légèrement varier selon la disponibilité saisonnière des fleurs. Si nécessaire, certaines fleurs seront remplacées par des alternatives aussi proches que possible en style, couleur et valeur.',

    seoInternationalText: 'Vous commandez depuis l’étranger ? Passez votre commande en ligne où que vous soyez dans le monde, et nous livrerons les fleurs à vos proches en Israël.',

    deliveryTimingTitle: 'Heure de réception',

    earliestOption: 'Premier créneau disponible',

    scheduleLoading: 'Calcul du premier créneau disponible…',

    scheduledOption: 'Choisir la date et l’heure',

    scheduledHint: 'Vous pouvez précommander à l’avance',

    preparationNotice: 'Le temps minimum de préparation de la commande est de 1 h 30.',

    deliveryEstimateNote: 'L’heure de livraison est indicative et peut légèrement varier selon l’adresse et la circulation.',

    noSlots: 'Aucun créneau disponible pour cette date',

  }

};



const CATEGORY_KEYS = {
  bouquet: 'bouquetCategory',
  mono: 'monoCategory',
  composition: 'composition',
  potted: 'pottedCategory',
  home: 'homeCategory',
  gift: 'gift',
  wedding: 'wedding',
  wedding_bouquet: 'wedding',
  everyday: 'bouquetCategory',
  love: 'bouquetCategory',
  event: 'bouquetCategory'
};



const BUILTIN_PRODUCT_TRANSLATIONS = {

  'pink-lower': {

    he: { description: 'זר עדין בגוונים ורודים' },

    en: { description: 'Delicate bouquet in pink tones' },

    fr: { description: 'Bouquet délicat dans des tons roses' }

  },



  'white-garden': {

    he: { description: 'זר אוורירי בגווני לבן ושמנת' },

    en: { description: 'Airy bouquet in white and cream tones' },

    fr: { description: 'Bouquet aérien dans des tons blancs et crème' }

  },



  'wedding-01': {

    he: { description: 'זר כלה אלגנטי בגוונים לבנים' },

    en: { description: 'Elegant bridal bouquet in white tones' },

    fr: { description: 'Bouquet de mariée élégant dans des tons blancs' }

  }

};



const savedCart = readStorage('tati-cart-v2', {});

const savedLang = localStorage.getItem('tati-language');

const pathLang =
  location.pathname
    .split('/')
    .filter(Boolean)[0];

const initialLang =
  ['he', 'en', 'ru', 'uk', 'fr'].includes(pathLang)
    ? pathLang
    : (
      ['he', 'en', 'ru', 'uk', 'fr'].includes(savedLang)
        ? savedLang
        : 'he'
    );



const state = {

  filter: 'all',

  lang: initialLang,

  cart: new Map(

    Object.entries(savedCart).map(([id, qty]) => [

      id,

      Number(qty) || 1

    ])

  ),

  favorites: new Set(

    readStorage('tati-favorites', [])

  ),

  deliveryFees: {},

  defaultDeliveryFee: 60,

  deliveryFee: 0,

  fulfillment: 'delivery',
  schedule: null,

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

  } catch { }

}



function getBouquet(id) {

  return bouquets.find(b => b.id === id);

}



function money(value) {

  const locales = {

    he: 'he-IL',

    en: 'en-US',

    ru: 'ru-RU',

    uk: 'uk-UA',

    fr: 'fr-FR'

  };



  return `₪${Number(value).toLocaleString(

    locales[state.lang] || 'en-US'

  )}`;

}



function getClientDeliveryFee(city) {

  const key = String(city || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');

  if (!key) return 0;

  return Number(
    state.deliveryFees[key] ??
    state.defaultDeliveryFee
  );
}

async function loadConfig() {

  try {
    const response = await fetch('/api/config', { cache: 'no-store' });
    const config = await response.json();

    state.deliveryFees = config.deliveryFees || {};
    state.defaultDeliveryFee = Number(config.defaultDeliveryFee) || 60;

    const citySelect = document.querySelector('#citySelect');

    if (state.fulfillment === 'delivery' && citySelect?.value) {
      state.deliveryFee = getClientDeliveryFee(citySelect.value);
    } else {
      state.deliveryFee = 0;
    }

    updateCheckoutTotals();
  } catch {
    state.deliveryFees = {};
    state.defaultDeliveryFee = 60;
    state.deliveryFee = 0;
  }
}

function updateCheckoutTotals() {

  const deliveryLabel = document.querySelector('#checkoutDeliveryLabel');
  const deliveryFeeLabel = document.querySelector('[data-i18n="deliveryFeeLabel"]');

  if (state.fulfillment === 'delivery') {
    const feeText = state.deliveryFee > 0
      ? `+ ${money(state.deliveryFee)}`
      : '';

    if (deliveryLabel) {
      deliveryLabel.textContent = feeText
        ? `${t('deliveryOption')} ${feeText}`
        : t('deliveryOption');
    }

    if (deliveryFeeLabel) {
      deliveryFeeLabel.textContent = feeText || '—';
    }
  } else {
    if (deliveryLabel) {
      deliveryLabel.textContent = t('pickupOption');
    }

    if (deliveryFeeLabel) {
      deliveryFeeLabel.textContent = '—';
    }
  }

  if (el.checkoutTotal) {
    el.checkoutTotal.textContent = money(orderTotal());
  }

  if (el.checkoutButtonTotal) {
    el.checkoutButtonTotal.textContent = money(orderTotal());
  }
}


function localeForLanguage() {
  return {
    he: 'he-IL',
    en: 'en-GB',
    ru: 'ru-RU',
    uk: 'uk-UA',
    fr: 'fr-FR'
  }[state.lang] || 'en-GB';
}

function formatScheduleDate(dateString) {
  const date = new Date(`${dateString}T12:00:00Z`);

  return new Intl.DateTimeFormat(
    localeForLanguage(),
    {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit'
    }
  ).format(date);
}

function formatScheduleWindow(time) {
  const [hours, minutes] = String(time || '').split(':').map(Number);

  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) {
    return String(time || '');
  }

  const slotMinutes = Number(state.schedule?.slotMinutes || 60);
  const start = hours * 60 + minutes;
  const end = start + slotMinutes;

  const toTime = value => {
    const h = Math.floor(value / 60) % 24;
    const m = value % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  };

  return `${toTime(start)}–${toTime(end)}`;
}

function selectedTimingMode() {
  return document.querySelector(
    'input[name="deliveryTiming"]:checked'
  )?.value || 'asap';
}

function renderSchedule() {
  const schedule = state.schedule;
  const earliestText =
    document.querySelector('#earliestSlotText');
  const scheduledFields =
    document.querySelector('#scheduledFields');
  const dateSelect =
    document.querySelector('#deliveryDate');
  const timeSelect =
    document.querySelector('#deliveryTime');
  const estimateNote =
    document.querySelector('#deliveryEstimateNote');

  if (!dateSelect || !timeSelect) return;

  if (estimateNote) {
    estimateNote.hidden =
      state.fulfillment !== 'delivery';
  }

  if (!schedule?.days?.length) {
    if (earliestText) {
      earliestText.textContent = t('noSlots');
    }

    dateSelect.innerHTML = '';
    timeSelect.innerHTML = '';
    return;
  }

  const previousDate = dateSelect.value;
  const previousTime = timeSelect.value;

  dateSelect.innerHTML =
    schedule.days
      .map(day => `
        <option value="${escapeHtml(day.date)}">
          ${escapeHtml(formatScheduleDate(day.date))}
        </option>
      `)
      .join('');

  const validPreviousDay =
    schedule.days.find(
      day => day.date === previousDate
    );

  const first =
    schedule.firstAvailable ||
    {
      date: schedule.days[0].date,
      time: schedule.days[0].slots[0]
    };

  const mode = selectedTimingMode();

  if (
    mode === 'scheduled' &&
    validPreviousDay
  ) {
    dateSelect.value = previousDate;
  } else {
    dateSelect.value = first.date;
  }

  const renderTimes = preferredTime => {
    const day =
      schedule.days.find(
        item =>
          item.date === dateSelect.value
      ) || schedule.days[0];

    timeSelect.innerHTML =
      day.slots
        .map(time => `
          <option value="${escapeHtml(time)}">
            ${escapeHtml(formatScheduleWindow(time))}
          </option>
        `)
        .join('');

    if (
      preferredTime &&
      day.slots.includes(preferredTime)
    ) {
      timeSelect.value = preferredTime;
    } else if (
      day.date === first.date &&
      day.slots.includes(first.time)
    ) {
      timeSelect.value = first.time;
    }
  };

  renderTimes(
    mode === 'scheduled'
      ? previousTime
      : first.time
  );

  if (mode === 'asap') {
    dateSelect.value = first.date;
    renderTimes(first.time);
    timeSelect.value = first.time;
  }

  if (scheduledFields) {
    scheduledFields.hidden =
      mode !== 'scheduled';
  }

  if (earliestText) {
    earliestText.textContent =
      `${formatScheduleDate(first.date)} · ${formatScheduleWindow(first.time)}`;
  }
}

async function loadSchedule() {
  const response = await fetch(
    `/api/schedule?fulfillment=${encodeURIComponent(state.fulfillment)}`,
    {
      cache: 'no-store'
    }
  );

  const result = await response.json();

  if (
    !response.ok ||
    !result.ok
  ) {
    throw new Error(
      result.error ||
      t('checkoutError')
    );
  }

  state.schedule = result;
  renderSchedule();
}


function cartCount() {

  return [...state.cart.values()]

    .reduce((sum, q) => sum + q, 0);

}



function cartKey(id, size = '', flowerCount = '') {

  if (!size && !flowerCount) {

    return id;

  }



  return `${id}::${size}::${flowerCount}`;

}



function parseCartKey(key) {

  const [id, size = '', flowerCount = ''] =

    String(key).split('::');



  return {

    id,

    size,

    flowerCount: flowerCount

      ? Number(flowerCount)

      : null

  };

}



function productHasSizes(product) {

  return Boolean(

    product?.priceS ||

    product?.priceM ||

    product?.priceL

  );

}



function productPrice(
  product,
  size = '',
  flowerCount = null
) {

  if (!product) return 0;

  if (flowerCount && product.unitPrice) {
    return Math.round(
      Number(flowerCount) *
      Number(product.unitPrice)
    );
  }

  if (size === 'S' && product.priceS) {
    return Number(product.priceS);
  }

  if (size === 'M' && product.priceM) {
    return Number(product.priceM);
  }

  if (size === 'L' && product.priceL) {
    return Number(product.priceL);
  }

  return Number(product.price);
}

function cartTotal() {
  return [...state.cart].reduce(
    (sum, [key, quantity]) => {
      const { id, size, flowerCount } = parseCartKey(key);
      const product = getBouquet(id);

      return sum + productPrice(product, size, flowerCount) * quantity;
    },
    0
  );
}

function cartPayload() {

  return [...state.cart].map(([key, quantity]) => {

    const {

      id,

      size,

      flowerCount

    } = parseCartKey(key);



    return {

      id,

      size: size || null,

      flowerCount: flowerCount || null,

      quantity

    };

  });

}



function orderTotal() {

  return cartTotal() + (state.fulfillment === 'delivery' ? state.deliveryFee : 0);

}



function escapeHtml(value) {

  return String(value ?? '')

    .replace(

      /[&<>'"]/g,

      char => ({

        '&': '&amp;',

        '<': '&lt;',

        '>': '&gt;',

        "'": '&#39;',

        '"': '&quot;'

      })[char]

    );

}



function safeImage(value) {

  const url = String(value || '').trim();



  return /^https?:\/\//i.test(url)

    ? url.replace(/['"()\\\\]/g, encodeURIComponent)

    : '';

}



function localizedProduct(product) {

  const suffix = {

    he: 'He',

    en: 'En',

    ru: 'Ru',

    uk: 'Uk',

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



function normalizeCategory(category) {
  const key = String(category || '').toLowerCase();

  return ({
    everyday: 'bouquet',
    love: 'bouquet',
    event: 'bouquet',
    wedding_bouquet: 'wedding'
  })[key] || key || 'bouquet';
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

    uk: 'UA',

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




  const canonical =
    document.querySelector('link[rel="canonical"]');

  const localizedUrl =
    `https://tatiflowers.co.il/${state.lang}/`;

  if (canonical) {
    canonical.href = localizedUrl;
  }

  const ogUrl =
    document.querySelector('meta[property="og:url"]');

  if (ogUrl) {
    ogUrl.content = localizedUrl;
  }

  if (state.schedule) {
    renderSchedule();
  }

  renderProducts();

  renderCart();

}



function setLanguage(lang) {
  if (!I18N[lang]) {
    return;
  }

  state.lang = lang;

  saveState();

  const newPath = `/${lang}/${location.hash || ''}`;

  history.pushState(
    {},
    '',
    newPath
  );

  applyLanguage();
}



function renderCategories() {

  if (!el.categories) return;



  const availableCategories = new Set(
    bouquets
      .map(b => normalizeCategory(b.category))
      .filter(Boolean)
  );

  const preferredOrder = [
    'bouquet',
    'mono',
    'composition',
    'potted',
    'gift',
    'wedding'
  ];

  const categories = preferredOrder.filter(category =>
    availableCategories.has(category)
  );



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

  const qty = [...state.cart].reduce(

    (sum, [key, quantity]) => {

      const { id } = parseCartKey(key);



      return id === b.id

        ? sum + quantity

        : sum;

    },

    0

  );



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

        ${b.featured

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

          ${qty

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
    .map(([key, quantity]) => {
      const { id, size, flowerCount } = parseCartKey(key);
      const product = getBouquet(id);

      if (!product) return null;

      return {
        ...localizedProduct(product),
        cartKey: key,
        selectedSize: size,
        selectedFlowerCount: flowerCount,
        selectedPrice: productPrice(product, size, flowerCount),
        quantity
      };
    })
    .filter(Boolean);

  el.cartItems.innerHTML = items.map(b => `
    <article class="cart-item">
      <img
        src="${safeImage(b.image) || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23f2e7e1%22/%3E%3C/svg%3E'}"
        alt="${escapeHtml(b.displayName)}"
      >

      <div>
        <h3>${escapeHtml(b.displayName)}</h3>

        ${b.selectedSize
      ? `<div class="cart-item-size">Size ${escapeHtml(b.selectedSize)}</div>`
      : ''}

        ${b.selectedFlowerCount
      ? `<div class="cart-item-size">${escapeHtml(b.selectedFlowerCount)} ${escapeHtml(t('flowersLabel'))}</div>`
      : ''}

        <p>${escapeHtml(b.displayDescription || t('defaultDescription'))}</p>

        <strong dir="ltr">${money(b.selectedPrice * b.quantity)}</strong>

        <div class="qty">
          <button data-qty="-1" data-key="${escapeHtml(b.cartKey)}" aria-label="${escapeHtml(t('decrease'))}">−</button>
          <span>${b.quantity}</span>
          <button data-qty="1" data-key="${escapeHtml(b.cartKey)}" aria-label="${escapeHtml(t('increase'))}">+</button>
        </div>
      </div>

      <button class="cart-remove" data-remove="${escapeHtml(b.cartKey)}" aria-label="${escapeHtml(t('remove'))} ${escapeHtml(b.displayName)}">×</button>
    </article>
  `).join('');

  const empty = items.length === 0;

  el.cartEmpty.hidden = !empty;
  el.cartFooter.hidden = empty;
  el.cartTotal.textContent = money(cartTotal());
  el.bagCount.textContent = String(cartCount());

  updateCheckoutTotals();
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



function setCart(key, nextQty) {

  const { id } = parseCartKey(key);



  if (!getBouquet(id)) return;



  if (nextQty <= 0) {

    state.cart.delete(key);

  } else {

    state.cart.set(

      key,

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



async function openCheckout() {

  if (!state.cart.size) {

    return toast(t('emptyCartToast'));

  }



  closeCart();

  renderCart();



  el.checkoutStatus.textContent = '';

  try {
    await loadSchedule();
  } catch (error) {
    el.checkoutStatus.textContent = localizeKnownError(error.message);
  }

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



function updateFulfillmentUI() {
  const deliveryFields =
    document.querySelector('#deliveryFields');

  const pickupInfo =
    document.querySelector('#pickupInfo');

  const city =
    document.querySelector('#citySelect');

  const address =
    document.querySelector('input[name="address"]');

  const deliveryLabel =
    document.querySelector('#checkoutDeliveryLabel');

  const deliveryFeeLabel =
    document.querySelector(
      '[data-i18n="deliveryFeeLabel"]'
    );

  const isDelivery =
    state.fulfillment === 'delivery';

  if (deliveryFields) {
    deliveryFields.hidden = !isDelivery;
  }

  if (pickupInfo) {
    pickupInfo.hidden = isDelivery;
  }

  if (city) {
    city.required = isDelivery;

    if (!isDelivery) {
      city.value = '';
    }
  }

  if (address) {
    address.required = isDelivery;

    if (!isDelivery) {
      address.value = '';
    }
  }

  if (isDelivery) {
    if (city?.value) {
      state.deliveryFee =
        getClientDeliveryFee(city.value);
    }

    if (deliveryLabel) {
      deliveryLabel.textContent =
        `${t('deliveryOption')} + ${money(state.deliveryFee)}`;
    }

    if (deliveryFeeLabel) {
      deliveryFeeLabel.textContent =
        `+ ${money(state.deliveryFee)}`;
    }
  } else {
    state.deliveryFee = 0;

    if (deliveryLabel) {
      deliveryLabel.textContent =
        t('pickupOption');
    }
  }

  if (el.checkoutTotal) {
    el.checkoutTotal.textContent =
      money(orderTotal());
  }

  if (el.checkoutButtonTotal) {
    el.checkoutButtonTotal.textContent =
      money(orderTotal());
  }
}


document
  .querySelectorAll('input[name="fulfillment"]')
  .forEach(input => {
    input.addEventListener('change', async () => {
      state.fulfillment =
        input.value === 'pickup'
          ? 'pickup'
          : 'delivery';

      updateFulfillmentUI();

      try {
        await loadSchedule();
      } catch (error) {
        if (el.checkoutStatus) {
          el.checkoutStatus.textContent =
            localizeKnownError(error.message);
        }
      }
    });
  });

const citySelect =
  document.querySelector('#citySelect');

citySelect?.addEventListener('change', () => {
  if (
    state.fulfillment !== 'delivery'
  ) {
    return;
  }

  state.deliveryFee =
    getClientDeliveryFee(
      citySelect.value
    );

  updateFulfillmentUI();
});

document
  .querySelectorAll('input[name="deliveryTiming"]')
  .forEach(input => {
    input.addEventListener('change', () => {
      renderSchedule();
    });
  });

document
  .querySelector('#deliveryDate')
  ?.addEventListener('change', () => {
    renderSchedule();
  });



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

      const product = getBouquet(id);



      const hasFlowerCount =

        product?.quantityMin &&

        product?.quantityMax &&

        product?.unitPrice;



      if (

        productHasSizes(product) ||

        hasFlowerCount

      ) {

        openProductModal(id);

        return;

      }



      setCart(

        id,

        (state.cart.get(id) || 0) + 1

      );



      toast(t('addedCart'));

    }

  }

);





const productModal = document.querySelector('#productModal');

const productModalBackdrop = document.querySelector('#productModalBackdrop');

const closeProductModal = document.querySelector('#closeProductModal');

const productModalImage = document.querySelector('#productModalImage');

const productModalName = document.querySelector('#productModalName');

const productModalDescription = document.querySelector('#productModalDescription');

const productModalPrice = document.querySelector('#productModalPrice');

const productModalAdd = document.querySelector('#productModalAdd');



const productSizes = document.querySelector('#productSizes');

const productSizeS = document.querySelector('#productSizeS');

const productSizeM = document.querySelector('#productSizeM');

const productSizeL = document.querySelector('#productSizeL');



const productFlowerCount = document.querySelector('#productFlowerCount');

const flowerCountValue = document.querySelector('#flowerCountValue');

const flowerCountRange = document.querySelector('#flowerCountRange');

const flowerCountMinus = document.querySelector('#flowerCountMinus');

const flowerCountPlus = document.querySelector('#flowerCountPlus');



let activeProductId = null;

let activeProductSize = '';

let activeFlowerCount = null;



function openProductModal(id) {

  const raw = getBouquet(id);

  if (!raw) return;



  const product = localizedProduct(raw);



  activeProductId = id;

  activeProductSize = '';

  activeFlowerCount = null;



  productModalImage.src = safeImage(product.image);

  productModalImage.alt = product.displayName;



  productModalName.textContent = product.displayName;



  productModalDescription.textContent =

    product.displayDescription ||

    t('defaultDescription');



  const hasFlowerCount =

    product.quantityMin &&

    product.quantityMax &&

    product.unitPrice;



  const hasSizes =

    productHasSizes(product);



  productFlowerCount.hidden =

    !hasFlowerCount;



  productSizes.hidden =

    !hasSizes || hasFlowerCount;



  if (hasFlowerCount) {

    const min = Number(product.quantityMin);
    const max = Number(product.quantityMax);
    const nameCount = Number.parseInt(String(product.name || '').match(/^\d+/)?.[0] || '', 10);
    const calculatedCount = Math.round(Number(product.price) / Number(product.unitPrice));
    const preferredCount = Number.isInteger(Number(product.quantityDefault))
      ? Number(product.quantityDefault)
      : Number.isInteger(nameCount)
        ? nameCount
        : calculatedCount;

    activeFlowerCount = Math.min(
      max,
      Math.max(min, preferredCount)
    );



    flowerCountRange.min =

      String(product.quantityMin);



    flowerCountRange.max =

      String(product.quantityMax);



    flowerCountRange.step = '1';



    flowerCountRange.value =

      String(activeFlowerCount);



    flowerCountValue.textContent =

      String(activeFlowerCount);



    productModalPrice.textContent =

      money(

        productPrice(

          product,

          '',

          activeFlowerCount

        )

      );

  } else {

    productSizes

      .querySelectorAll('[data-product-size]')

      .forEach(button => {

        const size =

          button.dataset.productSize;



        const price =

          productPrice(product, size);



        button.hidden =

          size === 'S'

            ? !product.priceS

            : size === 'M'

              ? !product.priceM

              : !product.priceL;



        button.classList.remove('active');



        const label =

          size === 'S'

            ? productSizeS

            : size === 'M'

              ? productSizeM

              : productSizeL;



        if (label && price) {

          label.textContent =

            money(price);

        }

      });



    if (hasSizes) {

      if (product.priceM) {

        activeProductSize = 'M';

      } else if (product.priceS) {

        activeProductSize = 'S';

      } else {

        activeProductSize = 'L';

      }



      productSizes

        .querySelector(

          `[data-product-size="${activeProductSize}"]`

        )

        ?.classList.add('active');

    }



    productModalPrice.textContent =

      money(

        productPrice(

          product,

          activeProductSize

        )

      );

  }



  productModalBackdrop.hidden = false;



  requestAnimationFrame(() => {

    productModalBackdrop.classList.add('show');

    productModal.classList.add('open');

  });



  productModal.setAttribute(

    'aria-hidden',

    'false'

  );



  document.body.classList.add('modal-open');

}







function updateFlowerCount(value) {

  if (!activeProductId) return;



  const product =

    getBouquet(activeProductId);



  if (!product) return;



  const min =

    Number(product.quantityMin);



  const max =

    Number(product.quantityMax);



  const count = Math.max(

    min,

    Math.min(

      max,

      Number(value)

    )

  );



  activeFlowerCount = count;



  flowerCountRange.value =

    String(count);



  flowerCountValue.textContent =

    String(count);



  productModalPrice.textContent =

    money(

      productPrice(

        product,

        '',

        count

      )

    );

}



flowerCountMinus?.addEventListener(

  'click',

  () => {

    updateFlowerCount(

      activeFlowerCount - 1

    );

  }

);



flowerCountPlus?.addEventListener(

  'click',

  () => {

    updateFlowerCount(

      activeFlowerCount + 1

    );

  }

);



flowerCountRange?.addEventListener(

  'input',

  () => {

    updateFlowerCount(

      flowerCountRange.value

    );

  }

);



productSizes?.addEventListener('click', e => {

  const button =

    e.target.closest('[data-product-size]');



  if (!button || !activeProductId) return;



  const product =

    getBouquet(activeProductId);



  if (!product) return;



  activeProductSize =

    button.dataset.productSize;



  productSizes

    .querySelectorAll('[data-product-size]')

    .forEach(item =>

      item.classList.remove('active')

    );



  button.classList.add('active');



  productModalPrice.textContent =

    money(

      productPrice(

        product,

        activeProductSize

      )

    );

});



function closeProductPreview() {

  productModal.classList.remove('open');

  productModalBackdrop.classList.remove('show');

  productModal.setAttribute('aria-hidden', 'true');



  setTimeout(() => {

    productModalBackdrop.hidden = true;

  }, 250);



  document.body.classList.remove('modal-open');

  activeProductId = null;

}



el.products?.addEventListener('click', e => {

  if (e.target.closest('button')) return;



  const card = e.target.closest('.product-card');

  if (!card) return;



  openProductModal(card.dataset.productId);

});



closeProductModal?.addEventListener('click', closeProductPreview);

productModalBackdrop?.addEventListener('click', closeProductPreview);



productModalAdd?.addEventListener('click', () => {

  if (!activeProductId) return;



  const key = cartKey(

    activeProductId,

    activeProductSize,

    activeFlowerCount

  );



  setCart(

    key,

    (state.cart.get(key) || 0) + 1

  );



  toast(t('addedCart'));



  closeProductPreview();



  setTimeout(() => {

    openCart();

  }, 260);

});










el.cartItems?.addEventListener('click', e => {

  const remove = e.target.closest('[data-remove]');



  if (remove) {

    return setCart(

      remove.dataset.remove,

      0

    );

  }



  const qty = e.target.closest('[data-qty]');



  if (qty) {

    const key = qty.dataset.key;



    setCart(

      key,

      (state.cart.get(key) || 0) +

      Number(qty.dataset.qty)

    );

  }

});



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










const navCatalog = document.querySelector('#navCatalog');
const navCatalogToggle = document.querySelector('#navCatalogToggle');

navCatalogToggle?.addEventListener('click', e => {
  e.stopPropagation();

  const open = navCatalog?.classList.toggle('open') || false;

  navCatalogToggle.setAttribute(
    'aria-expanded',
    String(open)
  );
});

document.addEventListener('click', e => {
  if (
    navCatalog &&
    !navCatalog.contains(e.target)
  ) {
    navCatalog.classList.remove('open');

    navCatalogToggle?.setAttribute(
      'aria-expanded',
      'false'
    );
  }
});

document
  .querySelectorAll('[data-category-link]')
  .forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const category =
        link.dataset.categoryLink || 'all';

      state.filter = category;

      renderProducts();

      navCatalog?.classList.remove('open');

      navCatalogToggle?.setAttribute(
        'aria-expanded',
        'false'
      );

      el.nav?.classList.remove('open');

      el.menuButton?.setAttribute(
        'aria-expanded',
        'false'
      );

      document
        .querySelector('#catalog')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    });
  });


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
    if (
      e.target.closest('.nav-catalog-toggle')
    ) {
      return;
    }

    if (e.target.closest('a')) {
      el.nav.classList.remove('open');

      navCatalog?.classList.remove('open');

      navCatalogToggle?.setAttribute(
        'aria-expanded',
        'false'
      );

      el.menuButton?.setAttribute(
        'aria-expanded',
        'false'
      );
    }
  }
);










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










function localizeKnownError(message) {

  const m = String(message || '');



  const known = {

    'Корзина пуста': {

      he: 'הסל ריק',

      en: 'Your cart is empty',

      ru: 'Корзина пуста',

      fr: 'Votre panier est vide'

    },



    'Укажите имя': {

      he: 'נא להזין שם',

      en: 'Please enter your name',

      ru: 'Укажите имя',

      fr: 'Veuillez saisir votre nom'

    },



    'Проверьте номер телефона': {

      he: 'נא לבדוק את מספר הטלפון',

      en: 'Please check the phone number',

      ru: 'Проверьте номер телефона',

      fr: 'Veuillez vérifier le numéro de téléphone'

    },



    'Проверьте email': {

      he: 'נא לבדוק את כתובת האימייל',

      en: 'Please check the email address',

      ru: 'Проверьте email',

      fr: 'Veuillez vérifier votre adresse e-mail'

    },



    'Укажите город': {

      he: 'נא להזין עיר',

      en: 'Please enter a city',

      ru: 'Укажите город',

      fr: 'Veuillez saisir une ville'

    },



    'Укажите адрес доставки': {

      he: 'נא להזין כתובת למשלוח',

      en: 'Please enter a delivery address',

      ru: 'Укажите адрес доставки',

      fr: 'Veuillez saisir une adresse de livraison'

    }

  };



  return (

    known[m]?.[state.lang] ||

    m

  );

}










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

            method: 'POST',



            headers: {

              'content-type':

                'application/json'

            },



            body: JSON.stringify({

              cart: cartPayload(),

              customer: data,

              language: state.lang

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

            method: 'POST',



            headers: {

              'content-type':

                'application/json'

            },



            body: JSON.stringify({

              ...data,

              language: state.lang

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

        threshold: .12

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










async function loadCatalog() {

  renderProducts(

    t('catalogLoading')

  );



  try {

    const response =

      await fetch(

        `/api/products?refresh=1&t=${Date.now()}`,

        {

          cache: 'no-store'

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
        .map(item => ({
          ...item,
          category: normalizeCategory(item.category)
        }))

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
      .forEach(key => {
        const { id } = parseCartKey(key);

        if (!validIds.has(id)) {
          state.cart.delete(key);
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







async function init() {
  await loadConfig();
  applyLanguage();
  await loadCatalog();
}

init();


/* =========================
   HERO SLIDER
========================= */

const heroSlides =
  [...document.querySelectorAll('.hero-slide')];

let heroSlideIndex = 0;

function showHeroSlide(index) {
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle(
      'is-active',
      slideIndex === index
    );
  });
}

if (heroSlides.length > 1) {
  showHeroSlide(heroSlideIndex);

  setInterval(() => {
    heroSlideIndex =
      (heroSlideIndex + 1) %
      heroSlides.length;

    showHeroSlide(heroSlideIndex);
  }, 5500);
}

