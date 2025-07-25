import { Template } from "./templates";

export const graduationTemplates: Template[] = [
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
  }
]; 