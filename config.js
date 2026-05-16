// ============================================
//  CLIENT CONFIG FILE
//  Edit this file only to customize for
//  each new client. Do not touch script.js
// ============================================

const CONFIG = {

  // ============================
  // BUSINESS INFO
  // ============================
  business: {
    name:     'Lavender Glow Beauty Space',
    tagline:  'Where elegance meets care. Your transformation begins here in the heart of Lurambi, Kakamega.',
    location: 'Bamboo, Lurambi, Kakamega County, Kenya',
    phone:    '254115506649',
    whatsapp: '254115506649',
    email:    '',
  },
  // SOCIALS
  social: {
  instagram: 'https://www.instagram.com/w.a.n.d.a_c?igsh=MW45bGQ2cGRveWllcw==',
  tiktok:    'https://www.tiktok.com/@castro._w?_r=1&_t=ZS-96BXVfyoa96',
  facebook:  'https://www.facebook.com/lavenderglowbeauty',
  whatsapp:  '254115506649',
},

  // ============================
  // OPENING HOURS
  // ============================
  hours: {
    weekdays: { days: 'Monday - Friday',   open: '7:00 AM',  close: '10:00 PM' },
    weekends: { days: 'Saturday & Sunday', open: '10:00 AM', close: '8:00 PM'  },
  },

  // ============================
  // ADMIN ACCOUNT
  // ============================
  admin: {
    email: 'situmawonderful@gmail.com',
    name:  'Wanda',
  },

  // ============================
  // MANAGER ACCOUNT
  // Managers can view bookings and
  // mark them complete/pending,
  // but cannot delete data or export.
  // ============================
  manager: {
    email: 'manager@lavenderglow.com',  // ← change to your manager's email
    name:  'Manager',
  },

  // ============================
  // FIREBASE CONFIG
  // (get from Firebase console)
  // ============================
  firebase: { apiKey: "AIzaSyCsS9-C_pVvR-f47mre_trg-lfujmJvGSE",

  authDomain: "lavenderglow-f4444.firebaseapp.com",

  projectId: "lavenderglow-f4444",

  storageBucket: "lavenderglow-f4444.firebasestorage.app",

  messagingSenderId: "179574135738",

  appId: "1:179574135738:web:23b28692a72137d309db83",

  measurementId: "G-2QCLGR4K3S"

  },

  // ============================
  // GOOGLE MAPS EMBED URL
  // (paste your iframe src here)
  // ============================
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7979.534898112683!2d34.75351931091751!3d0.28933294882643085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbamboo%20lurambi!5e0!3m2!1sen!2ske!4v1777966559038!5m2!1sen!2ske',

  // ============================
  // LOGO (Cloudinary URL)
  // ============================
  logo: 'https://res.cloudinary.com/dbk47jrff/image/upload/v1777664977/lg_logo_rhjea7.png',

  // ============================
  // COLORS
  // ============================
  colors: {
    primary:    '#4a2c82',   // main purple
    secondary:  '#7c3aed',   // lighter purple
    gold:       '#c9a84c',   // gold accent
    background: '#f7f8f8',   // page background
  },

  // ============================
  // SERVICES
  // Add or remove services here
  // ============================
  services: [
    {
      name:  'Manicure',
      desc:  'Classic, Gel & acrylic nail treatments',
      price: '500 - 1,500',
      image: 'https://res.cloudinary.com/dbk47jrff/image/upload/v1778331798/Acrylic_nails_y45fxu.webp',
      subServices: [
        { name: 'Classic Manicure',  price: 500  },
        { name: 'Gel Manicure',      price: 900  },
        { name: 'Acrylic Nails',     price: 1500 },
      ],
    },
    {
      name:  'Pedicure',
      desc:  'Relaxing foot care and nail grooming',
      price: '800 - 2,000',
      image: 'https://res.cloudinary.com/dbk47jrff/image/upload/v1778347116/pedicure_z8g54h.jpg',
      subServices: [
        { name: 'Basic Pedicure',    price: 800  },
        { name: 'Spa Pedicure',      price: 1200 },
        { name: 'Gel Pedicure',      price: 2000 },
      ],
    },
    {
      name:  'Wig Installation',
      desc:  'Professional wig fitting and styling',
      price: '1,500 - 4,000',
      image: 'https://res.cloudinary.com/dbk47jrff/image/upload/v1777664970/wig_installation_gkokcs.jpg',
      subServices: [
        { name: 'Wig Fitting',       price: 1500 },
        { name: 'Wig Styling',       price: 2000 },
        { name: 'Full Lace Install', price: 4000 },
      ],
    },
    {
      name:  'Hair Dressing',
      desc:  'Styling, braiding, and coloring to keep you looking your best',
      price: '1,000 - 5,000',
      image: 'https://res.cloudinary.com/dbk47jrff/image/upload/v1778333156/hair_dressing_w6gjxv.avif',
      subServices: [
        { name: 'Luxury Hair Styling',      price: 1000 },
        { name: 'Braiding Services',          price: 2500 },
        { name: 'Weaves and Extensions',     price: 3500 },
        { name: 'Full Hair Treatment',    price: 5000 },
      ],
    },
    {
      name:  'Barber Shop',
      desc:  'Fresh cuts, Cornrows, Locs installation and braids',
      price: '200 - 3,000',
      image: 'https://res.cloudinary.com/dbk47jrff/image/upload/v1778410820/barber_shop_xs7woy.jpg',
      subServices: [
        { name: 'Fresh Cut',         price: 200  },
        { name: 'Cornrows',          price: 800  },
        { name: 'Braids',             price: 1500 },
        
        { name: 'Dreadlocks & Locs',         price: 3500  },
        
        
      ],
    },
    {
      name:  'Full-body Massage',
      desc:  'Relaxing full-body massage to relieve stress and tension',
      price: '1,500 - 5,000',
      image: 'https://res.cloudinary.com/dbk47jrff/image/upload/v1778387369/massage_ybshjc.jpg',
      subServices: [
        { name: 'Back Massage',      price: 1500 },
        { name: 'Swedish Massage',   price: 2500 },
        { name: 'Aromatherapy Massage', price: 4000 },
        { name: 'Deep Tissue Massage', price: 4500 }, 
        { name: 'Hot Stone Massage',   price: 5000 },
      ],
    },
  ],

};
