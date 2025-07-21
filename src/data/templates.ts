export interface Template {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  description: string;
  htmlContent: string;
  defaultColors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
  };
  defaultFonts: {
    title: string;
    body: string;
  };
  views?: number;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  backgroundImage: string;
  templateCount: number;
}

export const categories: Category[] = [
  {
    id: 'wedding',
    name: 'Wedding',
    description: 'Elegant designs for your special day',
    backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    templateCount: 4
  },
  {
    id: 'birthday',
    name: 'Birthday',
    description: 'Fun and colorful celebration invites',
    backgroundImage: 'https://plus.unsplash.com/premium_photo-1670002456774-bc8f50ced929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJpcnRoZGF5JTIwY2VsZWJyYXRpb258ZW58MHx8MHx8fDA%3D',
    templateCount: 4
  },
  {
    id: 'graduation',
    name: 'Graduation',
    description: 'Celebrate academic achievements',
    backgroundImage: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    templateCount: 2
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Professional business invitations',
    backgroundImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    templateCount: 3
  }
];

export const templates: Template[] = [
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
  },
  {
    id: 'birthday-1',
    name: 'Colorful Celebration',
    category: 'birthday',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1692880430217-00731a66c1ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxiaXJ0aGRheXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Elegant pastel birthday invite with arched gold border, watercolor balloons, and cute lamb illustration.',
    views: 987,
    isNew: false,
    isPopular: true,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: #f8f5f1; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
        <!-- Arched white card with gold border -->
        <div style="width: 340px; height: 540px; background: #fff; border: 4px solid #e2b13c; border-bottom: 0; border-radius: 180px 180px 32px 32px/220px 220px 32px 32px; position: absolute; top: 30px; left: 30px; right: 30px; margin: 0 auto; z-index: 1; box-shadow: 0 4px 24px #e2b13c22;">
        </div>
        <!-- Top right pastel balloons -->
        <svg width='220' height='120' style='position:absolute;top:32px;right:0;z-index:2;' viewBox='0 0 220 120'>
          <g>
            <circle cx='200' cy='40' r='28' fill='#f7b6b6' fill-opacity='0.7'/>
            <circle cx='170' cy='60' r='22' fill='#b6d6f7' fill-opacity='0.7'/>
            <circle cx='190' cy='80' r='20' fill='#f7e6b6' fill-opacity='0.7'/>
            <circle cx='150' cy='40' r='18' fill='#b6f7d6' fill-opacity='0.7'/>
            <circle cx='120' cy='60' r='22' fill='#e2b13c' fill-opacity='0.5'/>
            <circle cx='180' cy='20' r='18' fill='#b6b6f7' fill-opacity='0.7'/>
            <circle cx='210' cy='90' r='16' fill='#f7b6e6' fill-opacity='0.7'/>
            <circle cx='140' cy='80' r='16' fill='#f7d6b6' fill-opacity='0.7'/>
            <circle cx='160' cy='100' r='14' fill='#b6f7f7' fill-opacity='0.7'/>
          </g>
        </svg>
        <!-- Bottom left lamb, cake, balloons -->
        <svg width='180' height='120' style='position:absolute;bottom:24px;left:10px;z-index:2;' viewBox='0 0 180 120'>
          <!-- Balloons -->
          <ellipse cx='40' cy='40' rx='18' ry='22' fill='#f7b267' fill-opacity='0.7'/>
          <ellipse cx='70' cy='30' rx='15' ry='18' fill='#b6d6f7' fill-opacity='0.7'/>
          <ellipse cx='100' cy='60' rx='13' ry='16' fill='#b6f7d6' fill-opacity='0.7'/>
          <ellipse cx='60' cy='70' rx='12' ry='14' fill='#f7b6b6' fill-opacity='0.7'/>
          <!-- Cake -->
          <ellipse cx='30' cy='110' rx='28' ry='10' fill='#e2b13c' fill-opacity='0.3'/>
          <rect x='10' y='90' width='40' height='20' rx='8' fill='#f7e6b6' stroke='#e2b13c' stroke-width='2'/>
          <rect x='18' y='98' width='24' height='8' rx='4' fill='#f7b6e6' />
          <rect x='22' y='102' width='16' height='4' rx='2' fill='#b6b6f7' />
          <rect x='28' y='90' width='4' height='10' rx='2' fill='#e2b13c' />
          <rect x='36' y='90' width='4' height='10' rx='2' fill='#e2b13c' />
          <rect x='20' y='90' width='4' height='10' rx='2' fill='#e2b13c' />
          <!-- Lamb -->
          <ellipse cx='120' cy='100' rx='28' ry='14' fill='#b6f7f7' fill-opacity='0.3'/>
          <ellipse cx='120' cy='90' rx='24' ry='12' fill='#fff' stroke='#e2b13c' stroke-width='2'/>
          <ellipse cx='120' cy='80' rx='18' ry='10' fill='#fff' stroke='#e2b13c' stroke-width='1.5'/>
          <ellipse cx='110' cy='90' rx='6' ry='4' fill='#fff' />
          <ellipse cx='130' cy='90' rx='6' ry='4' fill='#fff' />
          <ellipse cx='120' cy='100' rx='8' ry='4' fill='#fff' />
          <ellipse cx='120' cy='80' rx='4' ry='2' fill='#e2b13c' />
          <ellipse cx='110' cy='95' rx='2' ry='1' fill='#e2b13c' />
          <ellipse cx='130' cy='95' rx='2' ry='1' fill='#e2b13c' />
        </svg>
        <!-- Main Content -->
        <div style='position:absolute;top:60px;left:0;right:0;width:100%;z-index:3;display:flex;flex-direction:column;align-items:center;'>
          <div contenteditable="true" style="font-size: 48px; color: #7a5a1e; font-family: 'Dancing Script', cursive; font-weight: 700; margin-bottom: 0;">Olivia</div>
          <div contenteditable="true" style="font-size: 20px; color: #7a5a1e; font-family: 'Merriweather', serif; font-weight: 700; letter-spacing: 2px; margin-bottom: 18px;">IS TURNING FOUR</div>
          <div contenteditable="true" style="font-size: 17px; color: #7a5a1e; font-family: 'Merriweather', serif; margin-bottom: 24px; text-align: center;">JOIN US IN CELEBRATING OUR<br>BIRTHDAY GIRL'S PARTY.</div>
          <div style='display:flex;align-items:center;gap:12px;margin-bottom:18px;'>
            <div contenteditable="true" style="font-size: 22px; color: #7a5a1e; font-family: 'Merriweather', serif; font-weight: 700;">10</div>
            <div style="font-size: 22px; color: #7a5a1e; font-family: 'Merriweather', serif; font-weight: 700;">|</div>
            <div contenteditable="true" style="font-size: 22px; color: #7a5a1e; font-family: 'Merriweather', serif; font-weight: 700;">MAY</div>
            <div style="font-size: 22px; color: #7a5a1e; font-family: 'Merriweather', serif; font-weight: 700;">|</div>
            <div contenteditable="true" style="font-size: 22px; color: #7a5a1e; font-family: 'Merriweather', serif; font-weight: 700;">2024</div>
          </div>
          <div style='display:flex;flex-direction:column;align-items:center;margin-bottom:12px;'>
            <div contenteditable="true" style="font-size: 16px; color: #7a5a1e; font-family: 'Merriweather', serif;">09:00 AM</div>
            <div contenteditable="true" style="font-size: 16px; color: #7a5a1e; font-family: 'Merriweather', serif;">at 123 Anywhere St.,<br>Any City</div>
          </div>
          <div contenteditable="true" style="font-size: 16px; color: #7a5a1e; font-family: 'Dancing Script', cursive; margin-top: 8px;">RSVP to Anna<br>+123-456-7890</div>
        </div>
      </div>
    `,
    defaultColors: { primary: '#e2b13c', secondary: '#7a5a1e', text: '#7a5a1e', background: '#f8f5f1' },
    defaultFonts: { title: "'Dancing Script', cursive", body: "'Merriweather', serif" }
  },
  {
    id: 'birthday-2',
    name: 'Birthday Party ',
    category: 'birthday',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1681841125083-78fa9ee82169?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8S2lkcyUyMFBhcnR5fGVufDB8fDB8fHww',
    description: 'Pastel, playful kids birthday invite with bunting, confetti, balloons, and a festive abstract background.',
    views: 1123,
    isNew: false,
    isPopular: true,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: linear-gradient(135deg, #f3e7fe 0%, #c9eaff 100%); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
        <!-- Confetti Dots (corners) -->
        <svg width='400' height='600' style='position:absolute;top:0;left:0;z-index:0;pointer-events:none;' viewBox='0 0 400 600'>
          <circle cx='30' cy='30' r='8' fill='#f7b267' fill-opacity='0.7'/>
          <circle cx='370' cy='40' r='7' fill='#7ec4cf' fill-opacity='0.7'/>
          <circle cx='60' cy='570' r='6' fill='#b5ead7' fill-opacity='0.7'/>
          <circle cx='380' cy='570' r='9' fill='#f48498' fill-opacity='0.7'/>
          <circle cx='200' cy='20' r='5' fill='#b6d6f7' fill-opacity='0.6'/>
          <circle cx='380' cy='300' r='6' fill='#f7b6e6' fill-opacity='0.6'/>
        </svg>
        <!-- Balloons (left side, background) -->
        <svg width='80' height='180' style='position:absolute;top:80px;left:0;z-index:0;pointer-events:none;' viewBox='0 0 80 180'>
          <ellipse cx='30' cy='40' rx='18' ry='22' fill='#f7b267' fill-opacity='0.5'/>
          <ellipse cx='60' cy='80' rx='15' ry='18' fill='#7ec4cf' fill-opacity='0.5'/>
          <ellipse cx='40' cy='120' rx='13' ry='16' fill='#b5ead7' fill-opacity='0.5'/>
        </svg>
        <!-- Bunting Banner (top edge, vibrant) -->
        <svg width='284' height='44' viewBox='0 0 284 44' style='position:absolute;top:0;left:58px;z-index:2;'>
          <g>
            <polygon points='0,0 28,0 19,22 9,22' fill='#f7b267'/>
            <polygon points='28,0 56,0 47,22 37,22' fill='#7ec4cf'/>
            <polygon points='56,0 84,0 75,22 65,22' fill='#b5ead7'/>
            <polygon points='84,0 112,0 103,22 93,22' fill='#f48498'/>
            <polygon points='112,0 140,0 131,22 121,22' fill='#f7b6e6'/>
            <polygon points='140,0 168,0 159,22 149,22' fill='#b6d6f7'/>
            <polygon points='168,0 196,0 187,22 177,22' fill='#f7b267'/>
            <polygon points='196,0 224,0 215,22 205,22' fill='#7ec4cf'/>
            <polygon points='224,0 252,0 243,22 233,22' fill='#b5ead7'/>
            <polygon points='252,0 280,0 271,22 261,22' fill='#f48498'/>
          </g>
        </svg>
        <!-- Main Content (on gradient, with text shadow for readability) -->
        <div style='width:100%;height:100%;position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;'>
          <div contenteditable="true" style="font-size: 16px; color: #444; font-family: 'Quicksand', Arial, sans-serif; letter-spacing: 1px; text-shadow:0 2px 8px #fff8;">JOIN US TO CELEBRATE</div>
          <div contenteditable="true" style="font-size: 36px; color: #b45d8d; font-family: 'Dancing Script', cursive; font-weight: 700; text-shadow:0 2px 8px #fff8;">Alina's</div>
          <div style='position:relative;display:flex;flex-direction:column;align-items:center;'>
            <div contenteditable="true" style="font-size: 28px; color: #3bb3b3; font-family: 'Pacifico', cursive; font-weight: 500; z-index:2; text-shadow:0 2px 8px #fff8;">Birthday Party</div>
            <svg width='120' height='10' style='position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);z-index:1;'><rect x='10' y='4' width='100' height='4' rx='2' fill='#f7b267' fill-opacity='0.5'/></svg>
          </div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">SUNDAY, APRIL 6TH - 10 AM</div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">OUR HOME</div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">1234 SW ANYWHERE STREET</div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">ANYTOWN, FL 123123</div>
          <div contenteditable="true" style="font-size: 15px; color: #b45d8d; font-family: 'Quicksand', Arial, sans-serif; background: #f7b26722; border-radius: 8px; padding: 10px 18px; margin-top: 12px; font-weight:600;">RSVP TO CLARA 012.345.6789<br>BY APRIL 5TH</div>
        </div>
      </div>
    `,
    defaultColors: { primary: '#b45d8d', secondary: '#3bb3b3', text: '#444', background: '#f3e7fe' },
    defaultFonts: { title: "'Dancing Script', 'Pacifico', cursive", body: "'Quicksand', Arial, sans-serif" }
  },
  {
    id: 'birthday-3',
    name: 'Elegant Adult',
    category: 'birthday',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1692912315734-0837ed767730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWR1bHQlMjBiaXJ0aGRheXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Elegant white and gold birthday invite with modern serif, script, and confetti corners.',
    views: 756,
    isNew: false,
    isPopular: false,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: linear-gradient(135deg, #f9f7f3 0%, #f6ecd9 100%); padding: 0 24px; font-family: 'Merriweather', 'Georgia', serif; position: relative; overflow: hidden; text-align: center; display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">
        <!-- Elegant background shapes -->
        <svg width='400' height='600' style='position:absolute;top:0;left:0;z-index:0;pointer-events:none;' viewBox='0 0 400 600'>
          <ellipse cx='340' cy='80' rx='60' ry='30' fill='#bfa046' fill-opacity='0.07'/>
          <ellipse cx='60' cy='520' rx='50' ry='22' fill='#bfa046' fill-opacity='0.06'/>
          <ellipse cx='200' cy='300' rx='120' ry='60' fill='#bfa046' fill-opacity='0.03'/>
          <path d='M0,400 Q100,500 400,520' stroke='#bfa046' stroke-width='2' fill='none' opacity='0.08'/>
          <path d='M0,100 Q200,0 400,120' stroke='#bfa046' stroke-width='2' fill='none' opacity='0.06'/>
        </svg>
        <!-- Gold confetti corners -->
        <svg width='120' height='120' style='position:absolute;top:0;left:0;z-index:1;'><circle cx='10' cy='10' r='2' fill='#bfa046' fill-opacity='0.18'/><circle cx='30' cy='30' r='3' fill='#bfa046' fill-opacity='0.22'/><circle cx='60' cy='20' r='2' fill='#bfa046' fill-opacity='0.15'/><circle cx='80' cy='50' r='4' fill='#bfa046' fill-opacity='0.18'/><circle cx='100' cy='30' r='2' fill='#bfa046' fill-opacity='0.13'/></svg>
        <svg width='120' height='120' style='position:absolute;bottom:0;right:0;z-index:1;'><circle cx='110' cy='110' r='2' fill='#bfa046' fill-opacity='0.18'/><circle cx='90' cy='90' r='3' fill='#bfa046' fill-opacity='0.22'/><circle cx='60' cy='100' r='2' fill='#bfa046' fill-opacity='0.15'/><circle cx='40' cy='70' r='4' fill='#bfa046' fill-opacity='0.18'/><circle cx='20' cy='90' r='2' fill='#bfa046' fill-opacity='0.13'/></svg>
        <!-- Gold flourishes -->
        <svg width='120' height='40' style='position:absolute;top:0;right:0;z-index:1;'><path d='M0,20 Q60,0 120,20' stroke='#bfa046' stroke-width='1.5' fill='none' /></svg>
        <svg width='120' height='40' style='position:absolute;bottom:0;left:0;z-index:1;'><path d='M0,20 Q60,40 120,20' stroke='#bfa046' stroke-width='1.5' fill='none' /></svg>
        <!-- Main Content -->
        <div style='position:relative; z-index:2; width:100%; margin-top: 38px; margin-bottom: 18px; display: flex; flex-direction: column; align-items: center; gap: 10px;'>
          <div contenteditable="true" style="font-size: 18px; color: #bfa046; font-family: 'Merriweather', serif; font-weight: 500; letter-spacing: 1px; margin-bottom: 8px;">JOIN US FOR A</div>
          <div style='display:flex;flex-direction:column;align-items:center;margin-bottom:8px;'>
            <div contenteditable="true" style="font-size: 44px; color: #3a3532; font-family: 'Merriweather', serif; font-weight: 800; letter-spacing: 2px; line-height: 1;">BIRTHDAY</div>
            <div contenteditable="true" style="font-size: 44px; color: #bfa046; font-family: 'Dancing Script', cursive; font-weight: 700; margin-top: -24px;">Party</div>
          </div>
          <div contenteditable="true" style="font-size: 32px; color: #bfa046; font-family: 'Dancing Script', cursive; font-weight: 700; margin-bottom: 0;">Olivia Wilson</div>
          <div contenteditable="true" style="font-size: 16px; color: #3a3532; font-family: 'Merriweather', serif; margin-bottom: 0;">Save the date! Olivia wilson is having a birthday,<br>and we want you there to celebrate. Let's make it a day to remember!</div>
          <div style='display:flex;flex-direction:column;align-items:center;margin:18px 0 8px 0;'>
            <div contenteditable="true" style="font-size: 18px; color: #bfa046; font-family: 'Merriweather', serif; font-weight: 700; letter-spacing: 1px;">OCTOBER</div>
            <div style='display:flex;align-items:center;gap:24px;margin:8px 0;'>
              <div style='display:flex;flex-direction:column;align-items:center;'>
                <div contenteditable="true" style="font-size: 16px; color: #3a3532; font-family: 'Merriweather', serif; font-weight: 600;">SUNDAY</div>
              </div>
              <div style='display:flex;flex-direction:column;align-items:center;'>
                <div contenteditable="true" style="font-size: 38px; color: #bfa046; font-family: 'Merriweather', serif; font-weight: 800;">23</div>
                <div contenteditable="true" style="font-size: 14px; color: #bfa046; font-family: 'Merriweather', serif; font-weight: 600;">2024</div>
              </div>
              <div style='display:flex;flex-direction:column;align-items:center;'>
                <div contenteditable="true" style="font-size: 16px; color: #3a3532; font-family: 'Merriweather', serif; font-weight: 600;">STARTS 7PM</div>
              </div>
          </div>
          </div>
          <div contenteditable="true" style="font-size: 22px; color: #3a3532; font-family: 'Merriweather', serif; font-weight: 700; margin-bottom: 0;">LET'S CELEBRATE TOGETHER!</div>
          <div contenteditable="true" style="font-size: 16px; color: #3a3532; font-family: 'Merriweather', serif; margin-bottom: 0;">123 Anywhere St., Any City, ST 12345</div>
          <div contenteditable="true" style="font-size: 14px; color: #bfa046; font-family: 'Dancing Script', cursive; margin-top: 18px; margin-bottom: 12px; max-width: 80%; word-break: break-word; overflow: hidden; text-overflow: ellipsis; white-space: normal; display: block; margin-left: auto; margin-right: auto;">-Olivia Wilson & Family</div>
        </div>
      </div>
    `,
    defaultColors: { primary: '#bfa046', secondary: '#3a3532', text: '#3a3532', background: '#f9f7f3' },
    defaultFonts: { title: "'Dancing Script', cursive", body: "'Merriweather', serif" }
  },
  {
    id: 'birthday-4',
    name: 'Sweet Fifty',
    category: 'birthday',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1711044546059-1691ed8a969c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
    description: 'Black and gold 50th birthday invite with confetti, bold 3D gold 50, and elegant script.',
    views: 445,
    isNew: true,
    isPopular: false,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: #18151a; position: relative; overflow: hidden; font-family: 'Montserrat', Arial, sans-serif; color: #fff; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; padding: 0;">
        <!-- Brush Strokes Right Side -->
        <svg width="80" height="600" viewBox="0 0 80 600" style="position:absolute;right:0;top:0;z-index:2;" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect x="60" y="20" width="12" height="60" rx="6" fill="#bfa046"/>
            <rect x="62" y="100" width="8" height="40" rx="4" fill="#fff"/>
            <rect x="64" y="160" width="10" height="50" rx="5" fill="#bfa046"/>
            <rect x="60" y="230" width="12" height="60" rx="6" fill="#fff"/>
            <rect x="62" y="310" width="8" height="40" rx="4" fill="#bfa046"/>
            <rect x="64" y="370" width="10" height="50" rx="5" fill="#fff"/>
            <rect x="60" y="440" width="12" height="60" rx="6" fill="#bfa046"/>
            <rect x="62" y="520" width="8" height="40" rx="4" fill="#fff"/>
          </g>
        </svg>
        <div style="position: relative; z-index: 3; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; padding: 48px 40px 32px 32px;">
          <div contenteditable="true" style="font-size: 13px; letter-spacing: 1.5px; color: #fff; margin-bottom: 18px; font-family: 'Montserrat', Arial, sans-serif;">Come and celebrate with us!</div>
          <div contenteditable="true" style="font-size: 15px; letter-spacing: 3px; color: #fff; margin-bottom: 32px; font-family: 'Montserrat', Arial, sans-serif;">PATRICIA IS TURNING</div>
          <div contenteditable="true" style="font-size: 72px; color: #bfa046; font-family: 'Dancing Script', cursive; font-weight: 700; line-height: 1; margin-bottom: 12px;">Fabulous</div>
          <div contenteditable="true" style="font-size: 72px; color: #bfa046; font-family: 'Dancing Script', cursive; font-weight: 700; line-height: 1; margin-bottom: 32px;">Fifty</div>
          <div contenteditable="true" style="font-size: 18px; letter-spacing: 2px; color: #fff; margin-bottom: 8px; font-family: 'Montserrat', Arial, sans-serif;">08.28.19 | SAT | 8 PM</div>
          <div contenteditable="true" style="font-size: 15px; color: #fff; margin-bottom: 2px; font-family: 'Montserrat', Arial, sans-serif;">The Camberg Hotel</div>
          <div contenteditable="true" style="font-size: 13px; color: #fff; font-family: 'Montserrat', Arial, sans-serif;">9205 Paris Hill St. Schenectady, NY</div>
        </div>
      </div>
    `,
    defaultColors: { primary: '#bfa046', secondary: '#fff', text: '#fff', background: '#18151a' },
    defaultFonts: { title: "'Dancing Script', cursive", body: "'Montserrat', Arial, sans-serif" }
  },
  {
    id: 'graduation-1',
    name: 'Graduation Party',
    category: 'graduation',
    thumbnail: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D',
    description: 'Photo background graduation invite with large script, bold date, and modern layout.',
    views: 321,
    isNew: true,
    isPopular: false,
    htmlContent: `
      <div style="width: 400px; height: 600px; position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-family: 'Playfair Display', 'Merriweather', 'Georgia', serif; background: linear-gradient(135deg, #23232b 0%, #18151a 100%); box-shadow: 0 8px 32px #0006;">
        <!-- Professional geometric gold background shapes -->
        <svg width='400' height='600' style='position:absolute;top:0;left:0;z-index:0;pointer-events:none;' viewBox='0 0 400 600'>
          <defs>
            <radialGradient id='vignette' cx='0.5' cy='0.5' r='0.7'>
              <stop offset='60%' stop-color='transparent'/>
              <stop offset='100%' stop-color='#18151a' stop-opacity='0.85'/>
            </radialGradient>
          </defs>
          <rect width='400' height='600' fill='url(#vignette)'/>
          <path d='M40 80 Q200 0 360 80' stroke='#e6c76e' stroke-width='1.5' fill='none' opacity='0.18'/>
          <path d='M0 500 Q200 600 400 500' stroke='#e6c76e' stroke-width='1.5' fill='none' opacity='0.13'/>
          <ellipse cx='320' cy='120' rx='30' ry='12' fill='#e6c76e' fill-opacity='0.04'/>
          <ellipse cx='80' cy='480' rx='24' ry='10' fill='#e6c76e' fill-opacity='0.03'/>
        </svg>
        <!-- Gold confetti top -->
        <svg width='400' height='60' style='position:absolute;top:0;left:0;z-index:2;pointer-events:none;'><g>
          <rect x='30' y='18' width='3' height='10' rx='1.5' fill='#e6c76e' fill-opacity='0.7'/>
          <rect x='60' y='8' width='2' height='8' rx='1' fill='#e6c76e' fill-opacity='0.5'/>
          <circle cx='120' cy='20' r='2' fill='#e6c76e' fill-opacity='0.7'/>
          <rect x='200' y='10' width='4' height='12' rx='2' fill='#e6c76e' fill-opacity='0.7'/>
          <rect x='300' y='18' width='3' height='10' rx='1.5' fill='#e6c76e' fill-opacity='0.6'/>
          <circle cx='380' cy='30' r='2' fill='#e6c76e' fill-opacity='0.7'/>
        </g></svg>
        <!-- Gold confetti bottom -->
        <svg width='400' height='60' style='position:absolute;bottom:0;left:0;z-index:2;pointer-events:none;'><g>
          <rect x='50' y='32' width='3' height='10' rx='1.5' fill='#e6c76e' fill-opacity='0.7'/>
          <rect x='90' y='42' width='2' height='8' rx='1' fill='#e6c76e' fill-opacity='0.5'/>
          <circle cx='160' cy='50' r='2' fill='#e6c76e' fill-opacity='0.7'/>
          <rect x='220' y='40' width='4' height='12' rx='2' fill='#e6c76e' fill-opacity='0.7'/>
          <rect x='320' y='32' width='3' height='10' rx='1.5' fill='#e6c76e' fill-opacity='0.6'/>
          <circle cx='380' cy='40' r='2' fill='#e6c76e' fill-opacity='0.7'/>
        </g></svg>
        <!-- Clinking glasses icon -->
        <svg width='60' height='60' style='position:absolute;top:90px;left:0;right:0;margin:auto;z-index:3;'><g>
          <g stroke="#e6c76e" stroke-width="2" fill="none">
            <path d="M18 44 Q24 28 30 18 Q36 8 42 28 Q48 44 30 52"/>
            <path d="M42 44 Q36 28 30 18 Q24 8 18 28 Q12 44 30 52"/>
            <ellipse cx="25" cy="28" rx="6" ry="10" fill="#e6c76e" fill-opacity="0.5"/>
            <ellipse cx="35" cy="28" rx="6" ry="10" fill="#e6c76e" fill-opacity="0.5"/>
          </g>
        </g></svg>
        <!-- Main Content -->
        <div style='width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;z-index:4;'>
          <div contenteditable="true" style="font-size: 22px; color: #e6c76e; font-family: 'Playfair Display', serif; font-style: italic; font-weight: 500; letter-spacing: 1.5px; margin-bottom: 18px;">You're Invited To</div>
          <div contenteditable="true" style="font-size: 46px; color: #e6c76e; font-family: 'Playfair Display', serif; font-variant: small-caps; font-weight: 900; letter-spacing: 3px; line-height: 1;">Graduation<br>Party</div>
          <div contenteditable="true" style="font-size: 38px; color: #e6c76e; font-family: 'Dancing Script', cursive; font-style: italic; font-weight: 700; margin: 10px 0 18px 0; letter-spacing: 2px;">Class 2025</div>
          <div contenteditable="true" style="font-size: 22px; color: #e6c76e; font-family: 'Playfair Display', serif; font-style: italic; font-weight: 600; margin-bottom: 0; letter-spacing: 1.5px;">2025 July 12th 18:00–21:00</div>
          <div contenteditable="true" style="font-size: 18px; color: #e6c76e; font-family: 'Playfair Display', serif; font-style: italic; font-weight: 400; margin-top: 8px; letter-spacing: 1px;">123 Anywhere St., Any City</div>
        </div>
      </div>
    `,
    defaultColors: { primary: '#e6c76e', secondary: '#fff', text: '#fff', background: '#18151a' },
    defaultFonts: { title: "'Playfair Display', 'Merriweather', 'Georgia', serif", body: "'Inter', Arial, sans-serif" }
  },
  {
    id: 'graduation-2',
    name: 'Modern Graduation',
    category: 'graduation',
    thumbnail: 'https://images.unsplash.com/photo-1539413595691-37a09a48579b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW9kZXJuJTIwR3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'A modern, professional graduation invitation with a clean, premium look.',
    views: 210,
    isNew: false,
    isPopular: true,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: #f8fafc; padding: 44px 36px; font-family: 'Montserrat', 'Inter', Arial, sans-serif; text-align: center; border-radius: 18px; box-shadow: 0 4px 24px #0001; position: relative; overflow: hidden;">
        <!-- SVG Enhanced Background -->
        <svg width='400' height='600' viewBox='0 0 400 600' fill='none' xmlns='http://www.w3.org/2000/svg' style='position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;'>
          <!-- Soft gradient overlay -->
          <defs>
            <linearGradient id='grad1' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stop-color='#fbbf24' stop-opacity='0.10'/>
              <stop offset='100%' stop-color='#2563eb' stop-opacity='0.08'/>
            </linearGradient>
            <pattern id='diagonalLines' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='rotate(45)'>
              <rect x='0' y='0' width='10' height='1' fill='#2563eb' fill-opacity='0.04'/>
            </pattern>
          </defs>
          <rect width='400' height='600' fill='url(#grad1)'/>
          <rect width='400' height='600' fill='url(#diagonalLines)'/>
          <circle cx='340' cy='80' r='60' fill='#2563eb' fill-opacity='0.07'/>
          <rect x='-40' y='420' width='180' height='180' rx='90' fill='#fbbf24' fill-opacity='0.08'/>
          <ellipse cx='320' cy='520' rx='60' ry='30' fill='#2563eb' fill-opacity='0.05'/>
          <rect x='220' y='-40' width='100' height='100' rx='30' fill='#fbbf24' fill-opacity='0.06'/>
          <!-- Extra geometric shapes -->
          <polygon points='60,120 90,160 30,160' fill='#2563eb' fill-opacity='0.06'/>
          <polygon points='370,300 390,340 350,340' fill='#fbbf24' fill-opacity='0.07'/>
          <polygon points='200,580 220,610 180,610' fill='#2563eb' fill-opacity='0.05'/>
        </svg>
        <!-- Simple Cap Icon -->
        <div style='margin-bottom: 18px; margin-top: 8px; position:relative; z-index:1;'>
          <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;vertical-align:middle;">
            <polygon points="24,4 46,14 24,24 2,14" fill="#2563eb"/>
            <rect x="20" y="24" width="8" height="4" rx="2" fill="#fbbf24"/>
            <rect x="23" y="28" width="2" height="6" rx="1" fill="#fbbf24"/>
          </svg>
        </div>
        <!-- Main Title -->
        <div contenteditable="true" style="font-size: 26px; color: #2563eb; font-family: 'Montserrat', 'Inter', Arial, sans-serif; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; position:relative; z-index:1;">Graduation Ceremony</div>
        <div style="width: 60px; height: 3px; background: #fbbf24; margin: 0 auto 18px; border-radius: 2px; position:relative; z-index:1;"></div>
        <!-- Honoring -->
        <div contenteditable="true" style="font-size: 15px; color: #7c6a4d; margin-bottom: 4px; letter-spacing: 1px; position:relative; z-index:1;">Honoring</div>
        <div contenteditable="true" style="font-size: 22px; color: #2d2212; font-family: 'Merriweather', 'Georgia', serif; font-weight: 700; margin-bottom: 18px; position:relative; z-index:1;">Richard Roe</div>
        <!-- Date & Time -->
        <div contenteditable="true" style="font-size: 15px; color: #7c6a4d; margin-bottom: 4px; position:relative; z-index:1;">Sunday, January 15th, 2030</div>
        <div contenteditable="true" style="font-size: 15px; color: #7c6a4d; margin-bottom: 16px; position:relative; z-index:1;">10:00 AM – 5:00 PM</div>
        <!-- Divider -->
        <div style="width: 40px; height: 2px; background: #2563eb; margin: 0 auto 18px; border-radius: 1px; position:relative; z-index:1;"></div>
        <!-- Address -->
        <div contenteditable="true" style="font-size: 15px; color: #2d2212; margin-bottom: 24px; line-height: 1.5; position:relative; z-index:1;">445 W, Mount Eden Road,<br>Anchorage, AK 99504, USA</div>
        <!-- RSVP & Dress Code -->
        <div contenteditable="true" style="font-size: 13px; color: #2563eb; margin-bottom: 8px; position:relative; z-index:1;">RSVP: grad2024@email.com</div>
        <div contenteditable="true" style="font-size: 13px; color: #7c6a4d; margin-bottom: 0; position:relative; z-index:1;">Dress Code: Smart Casual</div>
      </div>
    `,
    defaultColors: { primary: '#2563eb', secondary: '#fbbf24', text: '#2d2212', background: '#f8fafc' },
    defaultFonts: { title: "'Montserrat', 'Inter', Arial, sans-serif", body: "'Inter', sans-serif" }
  },
  {
    id: 'corporate-1',
    name: 'Business Meeting',
    category: 'corporate',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJ1c2luZXNzfGVufDB8fDB8fHww',
    description: 'Elegant, minimal business mixer invitation in a classic style.',
    views: 150,
    isNew: true,
    isPopular: false,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: #fcf9f6; padding: 44px 32px; font-family: 'Merriweather', 'Georgia', serif; text-align: center; border-radius: 18px; box-shadow: 0 4px 24px #0001; position: relative; overflow: hidden; color: #b49b6c;">
        <!-- SVG Background Effects -->
        <svg width='400' height='600' viewBox='0 0 400 600' fill='none' xmlns='http://www.w3.org/2000/svg' style='position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;'>
          <!-- Soft gradient overlay -->
          <defs>
            <linearGradient id='bizgrad' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stop-color='#ede6d6' stop-opacity='0.13'/>
              <stop offset='100%' stop-color='#b49b6c' stop-opacity='0.08'/>
            </linearGradient>
            <pattern id='bizlines' patternUnits='userSpaceOnUse' width='24' height='24' patternTransform='rotate(45)'>
              <rect x='0' y='0' width='12' height='1' fill='#b49b6c' fill-opacity='0.04'/>
            </pattern>
          </defs>
          <rect width='400' height='600' fill='url(#bizgrad)'/>
          <rect width='400' height='600' fill='url(#bizlines)'/>
          <!-- Sunburst Corners -->
          <g opacity='0.13'>
            <path d='M0,0 L60,0 A60,60 0 0,1 0,60 Z' stroke='#b49b6c' stroke-width='1' fill='none'/>
            <path d='M400,0 L340,0 A60,60 0 0,0 400,60 Z' stroke='#b49b6c' stroke-width='1' fill='none'/>
            <path d='M0,600 L0,540 A60,60 0 0,1 60,600 Z' stroke='#b49b6c' stroke-width='1' fill='none'/>
            <path d='M400,600 L400,540 A60,60 0 0,0 340,600 Z' stroke='#b49b6c' stroke-width='1' fill='none'/>
          </g>
          <!-- Extra geometric shapes -->
          <circle cx='340' cy='100' r='38' fill='#b49b6c' fill-opacity='0.06'/>
          <rect x='-30' y='420' width='120' height='120' rx='60' fill='#ede6d6' fill-opacity='0.09'/>
          <polygon points='60,140 90,180 30,180' fill='#b49b6c' fill-opacity='0.05'/>
          <polygon points='370,320 390,360 350,360' fill='#ede6d6' fill-opacity='0.07'/>
        </svg>
        <!-- Logo/Icon -->
        <div style='margin-bottom: 18px; margin-top: 8px; position:relative; z-index:1;'>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;vertical-align:middle;">
            <ellipse cx="27" cy="27" rx="25" ry="25" stroke="#b49b6c" stroke-width="2" fill="none"/>
            <rect x="17" y="22" width="20" height="10" rx="5" stroke="#b49b6c" stroke-width="2" fill="none"/>
            <rect x="24" y="15" width="6" height="7" rx="3" stroke="#b49b6c" stroke-width="2" fill="none"/>
            <line x1="27" y1="32" x2="27" y2="39" stroke="#b49b6c" stroke-width="2"/>
          </svg>
          </div>
        <!-- Event Title -->
        <div contenteditable="true" style="font-size: 28px; font-family: 'Merriweather', 'Georgia', serif; font-weight: 700; margin-bottom: 8px; letter-spacing: 1px; position:relative; z-index:1;">BUSINESS MEETING</div>
        <!-- Subtitle -->
        <div contenteditable="true" style="font-size: 16px; font-family: 'Inter', Arial, sans-serif; color: #b49b6c; margin-bottom: 18px; position:relative; z-index:1;">Join Us for an Evening of Networking</div>
        <!-- Date/Time/Location -->
        <div style="font-size: 15px; font-family: 'Inter', Arial, sans-serif; color: #b49b6c; margin-bottom: 18px; position:relative; z-index:1;">
          <span contenteditable="true" style='border-bottom:1px solid #b49b6c; padding:0 6px;'>Friday</span>
          <span contenteditable="true" style='font-size:18px; font-weight:700; margin:0 8px;'>May 12</span>
          <span contenteditable="true" style='border-bottom:1px solid #b49b6c; padding:0 6px;'>2024</span><br/>
          <span contenteditable="true">6:00 PM – 9:00 PM</span><br/>
          <span contenteditable="true">Downtown Office Lounge</span><br/>
          <span contenteditable="true">123 Business District, Metropolis, NY</span>
        </div>
        <!-- Message -->
        <div contenteditable="true" style="font-size: 13px; font-family: 'Inter', Arial, sans-serif; color: #b49b6c; margin-bottom: 18px; position:relative; z-index:1; background:rgba(255,255,255,0.7); border-radius:8px; padding:10px 8px; display:inline-block;">We are pleased to invite you to a business mixer to connect, collaborate, and share new opportunities. Your participation is valuable for building strong professional relationships.</div>
        <!-- Footer -->
        <div contenteditable="true" style="font-size: 13px; font-family: 'Inter', Arial, sans-serif; color: #b49b6c; position:relative; z-index:1;">We look forward to your presence and engagement.</div>
      </div>
    `,
    defaultColors: { primary: '#b49b6c', secondary: '#ede6d6', text: '#b49b6c', background: '#fcf9f6' },
    defaultFonts: { title: "'Merriweather', 'Georgia', serif", body: "'Inter', Arial, sans-serif" }
  },
  {
    id: 'corporate-3',
    name: 'Monthly Meeting',
    category: 'corporate',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1661413166847-47e3ecc668a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qm9hcmQlMjBNZWV0aW5nfGVufDB8fDB8fHww',
    description: 'Modern, minimal monthly team meeting invitation with blue geometric accents.',
    views: 0,
    isNew: true,
    isPopular: false,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: #fff; padding: 0 32px; font-family: 'Montserrat', 'Inter', Arial, sans-serif; display: flex; flex-direction: column; justify-content: flex-start; align-items: center; position: relative; overflow: hidden; text-align: center;">
        <!-- Top right geometric accent -->
        <svg width='80' height='80' viewBox='0 0 80 80' style='position:absolute;top:24px;right:24px;z-index:0;'><rect x='60' y='0' width='8' height='40' rx='4' fill='#1e2952'/><rect x='70' y='10' width='8' height='40' rx='4' fill='#3b4ba3'/><rect x='50' y='20' width='8' height='40' rx='4' fill='#6b7fd7'/></svg>
        <!-- Bottom left geometric accent -->
        <svg width='80' height='80' viewBox='0 0 80 80' style='position:absolute;bottom:24px;left:24px;z-index:0;'><rect x='0' y='40' width='8' height='40' rx='4' fill='#1e2952'/><rect x='10' y='30' width='8' height='40' rx='4' fill='#3b4ba3'/><rect x='20' y='20' width='8' height='40' rx='4' fill='#6b7fd7'/></svg>
        <!-- Decorative circles -->
        <svg width='32' height='32' style='position:absolute;top:60px;left:32px;z-index:0;'><circle cx='8' cy='8' r='6' fill='none' stroke='#6b7fd7' stroke-width='2'/><circle cx='24' cy='16' r='3' fill='#6b7fd7' fill-opacity='0.2'/></svg>
        <svg width='32' height='32' style='position:absolute;bottom:40px;right:32px;z-index:0;'><circle cx='24' cy='24' r='6' fill='none' stroke='#6b7fd7' stroke-width='2'/><circle cx='8' cy='16' r='3' fill='#6b7fd7' fill-opacity='0.2'/></svg>
        <div style='position:relative; z-index:1; width:100%; margin-top: 54px; margin-bottom: 18px;'>
          <div contenteditable="true" style="font-size: 15px; color: #3b4ba3; font-weight: 600; letter-spacing: 1px; margin-bottom: 24px;">PRESTON CORPORATION</div>
          <div contenteditable="true" style="font-size: 28px; color: #1e2952; font-weight: 800; margin-bottom: 0; letter-spacing: 1px;">MONTHLY TEAM</div>
          <div contenteditable="true" style="font-size: 38px; color: #3b4ba3; font-weight: 900; margin-bottom: 32px; letter-spacing: 2px;">MEETING</div>
          <div contenteditable="true" style="font-size: 17px; color: #1e2952; font-weight: 700; margin-bottom: 0;">June 9, 2025</div>
          <div contenteditable="true" style="font-size: 15px; color: #1e2952; margin-bottom: 18px;">8:00 AM - 11:00 AM</div>
          <div contenteditable="true" style="font-size: 16px; color: #3b4ba3; font-weight: 700; margin-bottom: 18px;">Preston Corp. Conference Room</div>
          <div style='width: 100%; display: flex; align-items: center; justify-content: center; margin: 18px 0;'>
            <div style='flex:1; height:2px; background:#6b7fd7; border-radius:1px;'></div>
            <div style='width:16px; height:16px; border:2px solid #6b7fd7; border-radius:50%; margin:0 8px;'></div>
            <div style='flex:1; height:2px; background:#6b7fd7; border-radius:1px;'></div>
          </div>
          <div contenteditable="true" style="font-size: 15px; color: #1e2952; font-weight: 700; margin-bottom: 0;">RSVP</div>
          <div contenteditable="true" style="font-size: 16px; color: #3b4ba3; font-weight: 700; margin-bottom: 0;">Hannah Preston</div>
          <div contenteditable="true" style="font-size: 15px; color: #1e2952;">+1 317-517-3692</div>
        </div>
      </div>
    `,
    defaultColors: { primary: '#1e2952', secondary: '#3b4ba3', text: '#1e2952', background: '#fff' },
    defaultFonts: { title: "'Montserrat', 'Inter', Arial, sans-serif", body: "'Inter', Arial, sans-serif" }
  },
  {
    id: 'corporate-4',
    name: 'Annual General Meeting',
    category: 'corporate',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJ1c2luZXNzfGVufDB8fDB8fHww',
    description: 'Minimal, professional annual general meeting invitation with geometric accents.',
    views: 0,
    isNew: true,
    isPopular: false,
    htmlContent: `
      <div style="width: 400px; height: 600px; background: #fff; padding: 0 36px; font-family: 'Inter', Arial, sans-serif; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; text-align: left;">
        <!-- Geometric shapes -->
        <svg width='400' height='600' viewBox='0 0 400 600' fill='none' xmlns='http://www.w3.org/2000/svg' style='position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;'>
          <circle cx='40' cy='60' r='60' fill='#b7d3c6' fill-opacity='0.35'/>
          <rect x='20' y='300' width='120' height='120' rx='60' fill='#b7d3c6' fill-opacity='0.18'/>
          <circle cx='0' cy='500' r='80' fill='#b7d3c6' fill-opacity='0.18'/>
        </svg>
        <div style='position:relative; z-index:1; margin-top: 48px;'>
          <div contenteditable="true" style="font-size: 13px; color: #1a3c34; font-weight: 600; letter-spacing: 1px; margin-bottom: 8px;">LIONPOINT<br>RECRUITMENT<br>SPECIALISTS</div>
          <div contenteditable="true" style="font-size: 28px; color: #1a3c34; font-weight: 800; margin-bottom: 32px; line-height: 1.1;">ANNUAL<br>GENERAL<br>MEETING</div>
          <div contenteditable="true" style="font-size: 15px; color: #1a3c34; margin-bottom: 18px;">May 23, 2025<br>1:00 PM to 5:00 PM</div>
          <div contenteditable="true" style="font-size: 14px; color: #1a3c34; margin-bottom: 18px; line-height: 1.5;">LionPoint Main Office,<br>4881 Dien Thomas Dr., Frisco, TX</div>
          <div contenteditable="true" style="font-size: 13px; color: #1a3c34; margin-bottom: 8px;">Please RSVP</div>
          <div contenteditable="true" style="font-size: 13px; color: #1a3c34;">Email: cparrish@lionpoint.com</div>
        </div>
      </div>
    `,
    defaultColors: { primary: '#1a3c34', secondary: '#b7d3c6', text: '#1a3c34', background: '#fff' },
    defaultFonts: { title: "'Inter', Arial, sans-serif", body: "'Inter', Arial, sans-serif" }
  }
];

export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};

export const getAllCategories = (): string[] => {
  return [...new Set(templates.map(template => template.category))];
};
