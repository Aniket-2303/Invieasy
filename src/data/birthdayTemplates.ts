import { Template } from "./templates";

export const birthdayTemplates: Template[] = [
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
          <div contenteditable="true" style="font-size: 36px; color: #b45d8d; font-family: 'Dancing Script', cursive; font-weight: 700; text-shadow:0 2px 8px #fff8;">Emma's</div>
          <div style='position:relative;display:flex;flex-direction:column;align-items:center;'>
            <div contenteditable="true" style="font-size: 28px; color: #3bb3b3; font-family: 'Pacifico', cursive; font-weight: 500; z-index:2; text-shadow:0 2px 8px #fff8;">Birthday Party</div>
            <svg width='120' height='10' style='position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);z-index:1;'><rect x='10' y='4' width='100' height='4' rx='2' fill='#f7b267' fill-opacity='0.5'/></svg>
          </div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">SUNDAY, APRIL 6TH - 10 AM</div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">OUR HOME</div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">1234 SW ANYWHERE STREET</div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">ANYTOWN, FL 123123</div>
          <div contenteditable="true" style="font-size: 15px; color: #b45d8d; font-family: 'Quicksand', Arial, sans-serif; background: #f7b26722; border-radius: 8px; padding: 10px 18px; margin-top: 12px; font-weight:600;">RSVP TO EMMA 012.345.6789<br>BY APRIL 5TH</div>
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
          <div contenteditable="true" style="font-size: 36px; color: #bfa046; font-family: 'Dancing Script', cursive; font-weight: 700; text-shadow:0 2px 8px #fff8;">Sophia's</div>
          <div style='position:relative;display:flex;flex-direction:column;align-items:center;'>
            <div contenteditable="true" style="font-size: 28px; color: #3bb3b3; font-family: 'Pacifico', cursive; font-weight: 500; z-index:2; text-shadow:0 2px 8px #fff8;">Birthday Party</div>
            <svg width='120' height='10' style='position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);z-index:1;'><rect x='10' y='4' width='100' height='4' rx='2' fill='#f7b267' fill-opacity='0.5'/></svg>
          </div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">SUNDAY, APRIL 6TH - 10 AM</div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">OUR HOME</div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">1234 SW ANYWHERE STREET</div>
          <div contenteditable="true" style="font-size: 15px; color: #444; font-family: 'Quicksand', Arial, sans-serif; text-shadow:0 2px 8px #fff8;">ANYTOWN, FL 123123</div>
          <div contenteditable="true" style="font-size: 15px; color: #bfa046; font-family: 'Quicksand', Arial, sans-serif; background: #f7b26722; border-radius: 8px; padding: 10px 18px; margin-top: 12px; font-weight:600;">RSVP TO SOPHIA 012.345.6789<br>BY APRIL 5TH</div>
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
  }
]; 