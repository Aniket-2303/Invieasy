import { Template } from "./templates";

export const weddingTemplates: Template[] = [
  {
    id: 'wedding-1',
    name: 'Classic Elegance',
    category: 'wedding',
    thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=600&fit=crop',
    description: 'Timeless design with gold accents and elegant typography perfect for traditional ceremonies',
    views: 1247,
    isNew: false,
    isPopular: true,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: linear-gradient(135deg, #f8f6f3 0%, #e8e2d8 100%); padding: 40px; box-sizing: border-box; font-family: 'Playfair Display', serif; position: relative; overflow: hidden;">
        <div style="position: absolute; top: 20px; right: 20px; width: 80px; height: 80px; background: url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=100&h=100&fit=crop') center/cover; border-radius: 50%; opacity: 0.3;"></div>
        <div style="text-align: center; height: 100%;">
          <h1 contenteditable="true" style="font-size: 28px; color: #8B7355; margin-bottom: 10px; font-weight: 700;">Wedding Invitation</h1>
          <div style="width: 60px; height: 2px; background: #C9A96E; margin: 0 auto 20px;"></div>
          <h2 contenteditable="true" style="font-size: 24px; color: #2D2A26; margin-bottom: 5px; font-weight: 400;">Sarah & Michael</h2>
          <p contenteditable="true" style="font-size: 14px; color: #6B6660; margin-bottom: 30px; font-style: italic;">Together with their families</p>
          <p contenteditable="true" style="font-size: 16px; color: #2D2A26; margin-bottom: 20px; line-height: 1.6;">Request the pleasure of your company<br>at the celebration of their marriage</p>
          <div style="background: rgba(139, 115, 85, 0.1); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p contenteditable="true" style="font-size: 18px; color: #8B7355; margin-bottom: 5px; font-weight: 600;">Saturday, June 15th, 2024</p>
            <p contenteditable="true" style="font-size: 14px; color: #6B6660; margin-bottom: 10px;">4:00 PM</p>
            <p contenteditable="true" style="font-size: 14px; color: #6B6660;">Rose Garden Venue<br>123 Celebration Lane<br>Bloomfield, CA 90210</p>
          </div>
          <p contenteditable="true" style="font-size: 12px; color: #6B6660; margin-top: 30px;">RSVP by May 1st, 2024<br>sarah.michael.wedding@email.com</p>
        </div>
      </div>
    `,
    defaultColors: {
      primary: '#8B7355',
      secondary: '#C9A96E',
      text: '#2D2A26',
      background: '#f8f6f3'
    },
    defaultFonts: {
      title: "'Playfair Display', serif",
      body: "'Playfair Display', serif"
    }
  },
  {
    id: 'wedding-2',
    name: 'Modern Romance',
    category: 'wedding',
    thumbnail: 'https://images.unsplash.com/photo-1726682811289-968611755fca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fE1vZGVybiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
    description: 'Contemporary layout with soft pastels and minimalist design elements',
    views: 892,
    isNew: true,
    isPopular: false,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: #2D2A26; padding: 40px; box-sizing: border-box; font-family: 'Playfair Display', serif; position: relative; color: #C9A96E;">
        <div style="border: 2px solid #C9A96E; height: 100%; padding: 30px; box-sizing: border-box; position: relative;">
          <div style="text-align: center; height: 100%;">
            <div style="font-size: 16px; letter-spacing: 2px; margin-bottom: 20px; color: #C9A96E;">✦ ✦ ✦</div>
            <h1 contenteditable="true" style="font-size: 32px; color: #C9A96E; margin-bottom: 15px; font-weight: 700;">WEDDING</h1>
            <h2 contenteditable="true" style="font-size: 26px; color: #FEFCFA; margin-bottom: 10px; font-weight: 400;">Emma & James</h2>
            <div style="width: 80px; height: 1px; background: #C9A96E; margin: 0 auto 25px;"></div>
            <p contenteditable="true" style="font-size: 14px; color: #D4C4B0; margin-bottom: 30px; letter-spacing: 1px;">TOGETHER WITH THEIR FAMILIES</p>
            <p contenteditable="true" style="font-size: 16px; color: #FEFCFA; margin-bottom: 25px; line-height: 1.8;">Request the honor of your presence<br>at the celebration of their union</p>
            <div style="margin: 30px 0;">
              <p contenteditable="true" style="font-size: 20px; color: #C9A96E; margin-bottom: 8px; font-weight: 600;">DECEMBER 22, 2024</p>
              <p contenteditable="true" style="font-size: 14px; color: #D4C4B0; margin-bottom: 15px;">SIX O'CLOCK IN THE EVENING</p>
              <p contenteditable="true" style="font-size: 13px; color: #FEFCFA; line-height: 1.4; white-space: pre-line; margin: 0 auto; max-width: 260px;">Grand Ballroom · The Ritz Carlton · 100 Central Park South · New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    `,
    defaultColors: {
      primary: '#C9A96E',
      secondary: '#2D2A26',
      text: '#FEFCFA',
      background: '#2D2A26'
    },
    defaultFonts: {
      title: "'Playfair Display', serif",
      body: "'Playfair Display', serif"
    }
  },
  {
    id: 'wedding-3',
    name: 'Floral Dreams',
    category: 'wedding',
    thumbnail: 'https://images.unsplash.com/photo-1560158019-12689e7893a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
    description: 'Beautiful botanical illustrations with watercolor effects and romantic styling',
    views: 1456,
    isNew: false,
    isPopular: true,
    htmlContent: `
      <div class="floral-card">
        <svg class="floral-bg-svg" width="400" height="600" viewBox="0 0 400 600">
          <ellipse class="floral-bg-blob1" cx="80" cy="90" rx="70" ry="40" />
          <ellipse class="floral-bg-blob2" cx="320" cy="120" rx="60" ry="36" />
          <ellipse class="floral-bg-blob3" cx="200" cy="500" rx="110" ry="50" />
          <path class="floral-bg-shape" d="M60,520 Q80,500 120,540 Q140,560 100,570 Q70,560 60,520" />
          <circle class="floral-bg-blob4" cx="340" cy="520" r="28" />
          <g opacity="0.10">
            <g transform="translate(20, 20)">
              <circle cx="15" cy="15" r="8" fill="#D4A5A5"/>
              <circle cx="25" cy="10" r="6" fill="#D4A5A5"/>
              <circle cx="35" cy="20" r="7" fill="#D4A5A5"/>
              <circle cx="20" cy="30" r="5" fill="#D4A5A5"/>
            </g>
            <g transform="translate(320, 30)">
              <circle cx="15" cy="15" r="6" fill="#D4A5A5"/>
              <circle cx="25" cy="10" r="8" fill="#D4A5A5"/>
              <circle cx="35" cy="20" r="5" fill="#D4A5A5"/>
              <circle cx="20" cy="30" r="7" fill="#D4A5A5"/>
            </g>
            <g transform="translate(30, 520)">
              <circle cx="15" cy="15" r="7" fill="#D4A5A5"/>
              <circle cx="25" cy="10" r="5" fill="#D4A5A5"/>
              <circle cx="35" cy="20" r="6" fill="#D4A5A5"/>
              <circle cx="20" cy="30" r="8" fill="#D4A5A5"/>
            </g>
            <g transform="translate(330, 540)">
              <circle cx="15" cy="15" r="5" fill="#D4A5A5"/>
              <circle cx="25" cy="10" r="7" fill="#D4A5A5"/>
              <circle cx="35" cy="20" r="8" fill="#D4A5A5"/>
              <circle cx="20" cy="30" r="6" fill="#D4A5A5"/>
            </g>
          </g>
        </svg>
        <div class="floral-content">
          <h1 class="floral-title" contenteditable="true">Wedding Invitation</h1>
          <div class="floral-divider"></div>
          <h2 class="floral-names" contenteditable="true">Sophia & Ethan</h2>
          <p class="floral-families" contenteditable="true">Together with their families</p>
          <p class="floral-message" contenteditable="true">Request the pleasure of your company<br>as we exchange vows and begin our new life together</p>
          <div class="floral-details-box">
            <p class="floral-date" contenteditable="true">Saturday, July 20th, 2024</p>
            <p class="floral-time" contenteditable="true">4:00 in the afternoon</p>
            <p class="floral-address" contenteditable="true">The Garden Terrace<br>123 Blossom Lane<br>Rose Valley, CA 90210</p>
          </div>
          <p class="floral-rsvp" contenteditable="true">Kindly respond by June 1st, 2024<br>sophia.ethan.wedding@email.com</p>
        </div>
      </div>
    `,
    defaultColors: {
      primary: '#8B5A5A',
      secondary: '#D4A5A5',
      text: '#6B4E4E',
      background: '#FFF9FB'
    },
    defaultFonts: {
      title: "'Cormorant Garamond', serif",
      body: "'Cormorant Garamond', serif"
    }
  },
  {
    id: 'wedding-4',
    name: 'Vintage Charm',
    category: 'wedding',
    thumbnail: 'https://images.unsplash.com/photo-1744611196217-70c96eb3c76e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Retro-inspired design with ornate borders and classic serif typography',
    views: 634,
    isNew: false,
    isPopular: false,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: #F8F5F0; padding: 40px; box-sizing: border-box; font-family: 'Playfair Display', serif; position: relative; border: 10px solid #E8D9C5;">
        <div style="position: absolute; top: 20px; right: 20px; width: 80px; height: 80px; border: 2px solid #D4BFA0; border-radius: 50%;"></div>
        <div style="position: absolute; bottom: 20px; left: 20px; width: 60px; height: 60px; border: 2px solid #D4BFA0; border-radius: 50%;"></div>
        <div style="text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center;">
          <div style="font-size: 20px; color: #8B7355; letter-spacing: 3px; margin-bottom: 10px;">THE WEDDING OF</div>
          <h1 contenteditable="true" style="font-size: 32px; color: #5D4037; margin-bottom: 5px; font-weight: 600; letter-spacing: 2px;">Olivia & William</h1>
          <div style="width: 100px; height: 1px; background: #D4BFA0; margin: 0 auto 20px;"></div>
          <p contenteditable="true" style="font-size: 14px; color: #8B7355; margin-bottom: 30px; line-height: 1.6;">Together with their families<br>request the honor of your presence<br>at their marriage celebration</p>
          <div style="margin: 25px 0;">
            <p contenteditable="true" style="font-size: 18px; color: #5D4037; margin-bottom: 5px; font-weight: 600;">September 14th, 2024</p>
            <p contenteditable="true" style="font-size: 14px; color: #8B7355; margin-bottom: 15px;">Saturday at half past four in the afternoon</p>
            <p contenteditable="true" style="font-size: 14px; color: #5D4037; line-height: 1.6;">The Grand Ballroom<br>Vintage Estate<br>456 Heritage Road<br>Old Town, NY 10001</p>
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: #8B7355;">
            <p contenteditable="true">Reception to follow<br>Black Tie Optional</p>
            <p contenteditable="true" style="margin-top: 15px;">Kindly RSVP by August 15th<br>oliviaandwilliam@email.com</p>
          </div>
        </div>
      </div>
    `,
    defaultColors: {
      primary: '#5D4037',
      secondary: '#D4BFA0',
      text: '#8B7355',
      background: '#F8F5F0'
    },
    defaultFonts: {
      title: "'Playfair Display', serif",
      body: "'Playfair Display', serif"
    }
  }
]; 