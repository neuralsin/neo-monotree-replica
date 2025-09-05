export type Language = 'en' | 'fr' | 'ta' | 'hi';

export const languages: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  ta: 'தமிழ்',
  hi: 'हिन्दी'
};

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.product': 'Product',
    'nav.why-us': 'Why us?',
    'nav.cases': 'Cases',
    'nav.about': 'About us',
    'nav.blog': 'Blog',
    'nav.book-demo': 'Book a demo',
    
    // Hero Section
    'hero.title': 'Put people first',
    'hero.subtitle': 'Fast, user-friendly and engaging — transform HR into people and culture, and streamline your daily operations with your own branded app.',
    'hero.rating': 'Average user rating',
    'hero.activity': 'Average daily activity',
    'hero.opens': 'Average daily app opens',
    
    // Features
    'features.communication.title': 'Communication & Social',
    'features.communication.desc': 'A fully functional social network fosters collaboration and fun in your workplace community.',
    'features.information.title': 'Information & Training',
    'features.information.desc': 'Efficient, media rich and intuitive development of the people in your organization.',
    'features.wellbeing.title': 'Well-being & Retention',
    'features.wellbeing.desc': 'Give everyone a voice, measure their well-being, and retain your talent.',
    'features.operations.title': 'Daily Operations',
    'features.operations.desc': 'Streamline daily tasks, fill out forms and run department check ups.',
    
    // Book Demo Modal
    'demo.title': 'Book a demo',
    'demo.subtitle': 'Fill in your information, and we will contact you within a couple of hours.',
    'demo.name': 'Name',
    'demo.email': 'E-mail',
    'demo.phone': 'Phone',
    'demo.source': 'How did you hear about us?',
    'demo.submit': 'Submit',
    'demo.privacy': 'Your information is secure with us. Read our Privacy policy for more details.',
    
    // Common
    'common.learn-more': 'Learn more',
    'common.get-started': 'Get started',
    'common.contact': 'Contact us',
  },
  fr: {
    // Navigation
    'nav.product': 'Produit',
    'nav.why-us': 'Pourquoi nous?',
    'nav.cases': 'Cas',
    'nav.about': 'À propos',
    'nav.blog': 'Blog',
    'nav.book-demo': 'Réserver une démo',
    
    // Hero Section
    'hero.title': 'Mettez les gens en premier',
    'hero.subtitle': 'Rapide, convivial et engageant — transformez les RH en personnes et culture, et rationalisez vos opérations quotidiennes avec votre propre application de marque.',
    'hero.rating': 'Note moyenne des utilisateurs',
    'hero.activity': 'Activité quotidienne moyenne',
    'hero.opens': 'Ouvertures d\'applications quotidiennes moyennes',
    
    // Features
    'features.communication.title': 'Communication et Social',
    'features.communication.desc': 'Un réseau social entièrement fonctionnel favorise la collaboration et le plaisir dans votre communauté de travail.',
    'features.information.title': 'Information et Formation',
    'features.information.desc': 'Développement efficace, riche en médias et intuitif des personnes de votre organisation.',
    'features.wellbeing.title': 'Bien-être et Rétention',
    'features.wellbeing.desc': 'Donnez une voix à chacun, mesurez leur bien-être et retenez vos talents.',
    'features.operations.title': 'Opérations Quotidiennes',
    'features.operations.desc': 'Rationalisez les tâches quotidiennes, remplissez les formulaires et effectuez des vérifications de département.',
    
    // Book Demo Modal
    'demo.title': 'Réserver une démo',
    'demo.subtitle': 'Remplissez vos informations, et nous vous contacterons dans quelques heures.',
    'demo.name': 'Nom',
    'demo.email': 'E-mail',
    'demo.phone': 'Téléphone',
    'demo.source': 'Comment avez-vous entendu parler de nous?',
    'demo.submit': 'Soumettre',
    'demo.privacy': 'Vos informations sont sécurisées avec nous. Lisez notre politique de confidentialité pour plus de détails.',
    
    // Common
    'common.learn-more': 'En savoir plus',
    'common.get-started': 'Commencer',
    'common.contact': 'Nous contacter',
  },
  ta: {
    // Navigation
    'nav.product': 'தயாரிப்பு',
    'nav.why-us': 'ஏன் நாங்கள்?',
    'nav.cases': 'வழக்குகள்',
    'nav.about': 'எங்களை பற்றி',
    'nav.blog': 'வலைப்பதிவு',
    'nav.book-demo': 'டெமோ பதிவு செய்யுங்கள்',
    
    // Hero Section
    'hero.title': 'மக்களை முதலில் வைக்கவும்',
    'hero.subtitle': 'வேகமான, பயனர் நட்பு மற்றும் ஈர்க்கும் - HR ஐ மக்கள் மற்றும் கலாச்சாரமாக மாற்றி, உங்கள் சொந்த பிராண்டட் ஆப்புடன் உங்கள் தினசரி செயல்பாடுகளை ஒழுங்குபடுத்துங்கள்.',
    'hero.rating': 'சராசரி பயனர் மதிப்பீடு',
    'hero.activity': 'சராசரி தினசரி செயல்பாடு',
    'hero.opens': 'சராசரி தினசரி ஆப் திறப்புகள்',
    
    // Features
    'features.communication.title': 'தொடர்பு மற்றும் சமூக',
    'features.communication.desc': 'முழுமையாக செயல்படும் சமூக வலைப்பின்னல் உங்கள் பணியிட சமுதாயத்தில் ஒத்துழைப்பு மற்றும் வேடிக்கையை வளர்க்கிறது.',
    'features.information.title': 'தகவல் மற்றும் பயிற்சி',
    'features.information.desc': 'உங்கள் அமைப்பின் மக்களின் திறமையான, ஊடக நிறைந்த மற்றும் உள்ளுணர்வு வளர்ச்சி.',
    'features.wellbeing.title': 'நல்வாழ்வு மற்றும் தக்கவைப்பு',
    'features.wellbeing.desc': 'அனைவருக்கும் குரல் கொடுங்கள், அவர்களின் நல்வாழ்வை அளவிடுங்கள், மற்றும் உங்கள் திறமையை தக்கவைக்கவும்.',
    'features.operations.title': 'தினசரி செயல்பாடுகள்',
    'features.operations.desc': 'தினசரி பணிகளை ஒழுங்குபடுத்துங்கள், படிவங்களை நிரப்புங்கள் மற்றும் துறை சோதனைகளை நடத்துங்கள்.',
    
    // Book Demo Modal
    'demo.title': 'டெமோ பதிவு செய்யுங்கள்',
    'demo.subtitle': 'உங்கள் தகவல்களை நிரப்புங்கள், நாங்கள் சில மணி நேரத்தில் உங்களை தொடர்பு கொள்வோம்.',
    'demo.name': 'பெயர்',
    'demo.email': 'மின்னஞ்சல்',
    'demo.phone': 'தொலைபேசி',
    'demo.source': 'எங்களைப் பற்றி எப்படி கேள்விப்பட்டீர்கள்?',
    'demo.submit': 'சமர்ப்பிக்கவும்',
    'demo.privacy': 'உங்கள் தகவல் எங்களுடன் பாதுகாப்பானது. மேலும் விவரங்களுக்கு எங்கள் தனியுரிமை கொள்கையைப் படியுங்கள்.',
    
    // Common
    'common.learn-more': 'மேலும் அறிக',
    'common.get-started': 'தொடங்குங்கள்',
    'common.contact': 'எங்களை தொடர்பு கொள்ளுங்கள்',
  },
  hi: {
    // Navigation
    'nav.product': 'उत्पाद',
    'nav.why-us': 'हमें क्यों?',
    'nav.cases': 'केसेस',
    'nav.about': 'हमारे बारे में',
    'nav.blog': 'ब्लॉग',
    'nav.book-demo': 'डेमो बुक करें',
    
    // Hero Section
    'hero.title': 'लोगों को पहले रखें',
    'hero.subtitle': 'तेज़, उपयोगकर्ता-अनुकूल और आकर्षक — HR को लोगों और संस्कृति में बदलें, और अपने स्वयं के ब्रांडेड ऐप के साथ अपने दैनिक संचालन को सुव्यवस्थित करें।',
    'hero.rating': 'औसत उपयोगकर्ता रेटिंग',
    'hero.activity': 'औसत दैनिक गतिविधि',
    'hero.opens': 'औसत दैनिक ऐप खुलना',
    
    // Features
    'features.communication.title': 'संचार और सामाजिक',
    'features.communication.desc': 'एक पूर्ण कार्यशील सामाजिक नेटवर्क आपके कार्यक्षेत्र समुदाय में सहयोग और मजे को बढ़ावा देता है।',
    'features.information.title': 'जानकारी और प्रशिक्षण',
    'features.information.desc': 'आपके संगठन के लोगों का कुशल, मीडिया समृद्ध और सहज विकास।',
    'features.wellbeing.title': 'कल्याण और प्रतिधारण',
    'features.wellbeing.desc': 'सभी को आवाज़ दें, उनके कल्याण को मापें, और अपनी प्रतिभा को बनाए रखें।',
    'features.operations.title': 'दैनिक संचालन',
    'features.operations.desc': 'दैनिक कार्यों को सुव्यवस्थित करें, फॉर्म भरें और विभागीय जांच करें।',
    
    // Book Demo Modal
    'demo.title': 'डेमो बुक करें',
    'demo.subtitle': 'अपनी जानकारी भरें, और हम कुछ घंटों के भीतर आपसे संपर्क करेंगे।',
    'demo.name': 'नाम',
    'demo.email': 'ईमेल',
    'demo.phone': 'फोन',
    'demo.source': 'आपने हमारे बारे में कैसे सुना?',
    'demo.submit': 'सबमिट करें',
    'demo.privacy': 'आपकी जानकारी हमारे साथ सुरक्षित है। अधिक विवरण के लिए हमारी गोपनीयता नीति पढ़ें।',
    
    // Common
    'common.learn-more': 'और जानें',
    'common.get-started': 'शुरू करें',
    'common.contact': 'हमसे संपर्क करें',
  }
};

export const useTranslation = (language: Language) => {
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return { t };
};