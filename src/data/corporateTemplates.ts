import { Template } from "./templates";

export const corporateTemplates: Template[] = [
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
      <div style="width: 400px; height: 600px; background: #fcf9f6; padding: 44px 32px; font-family: 'Merriweather', 'Georgia', serif; text-align: center; border-radius: 18px; box-shadow: 0 4px 24px #0001; position: relative; overflow: hidden; color: #1e2952;">
        <!-- SVG Background Effects -->
        <svg width='400' height='600' viewBox='0 0 400 600' fill='none' xmlns='http://www.w3.org/2000/svg' style='position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;'>
          <!-- Soft gradient overlay -->
          <defs>
            <linearGradient id='bizgrad' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stop-color='#3b4ba3' stop-opacity='0.13'/>
              <stop offset='100%' stop-color='#1e2952' stop-opacity='0.08'/>
            </linearGradient>
            <pattern id='bizlines' patternUnits='userSpaceOnUse' width='24' height='24' patternTransform='rotate(45)'>
              <rect x='0' y='0' width='12' height='1' fill='#1e2952' fill-opacity='0.04'/>
            </pattern>
          </defs>
          <rect width='400' height='600' fill='url(#bizgrad)'/>
          <rect width='400' height='600' fill='url(#bizlines)'/>
          <!-- Sunburst Corners -->
          <g opacity='0.13'>
            <path d='M0,0 L60,0 A60,60 0 0,1 0,60 Z' stroke='#1e2952' stroke-width='1' fill='none'/>
            <path d='M400,0 L340,0 A60,60 0 0,0 400,60 Z' stroke='#1e2952' stroke-width='1' fill='none'/>
            <path d='M0,600 L0,540 A60,60 0 0,1 60,600 Z' stroke='#1e2952' stroke-width='1' fill='none'/>
            <path d='M400,600 L400,540 A60,60 0 0,0 340,600 Z' stroke='#1e2952' stroke-width='1' fill='none'/>
          </g>
          <!-- Extra geometric shapes -->
          <circle cx='340' cy='100' r='38' fill='#1e2952' fill-opacity='0.06'/>
          <rect x='-30' y='420' width='120' height='120' rx='60' fill='#3b4ba3' fill-opacity='0.09'/>
          <polygon points='60,140 90,180 30,180' fill='#1e2952' fill-opacity='0.05'/>
          <polygon points='370,320 390,360 350,360' fill='#3b4ba3' fill-opacity='0.07'/>
        </svg>
        <!-- Logo/Icon -->
        <div style='margin-bottom: 18px; margin-top: 8px; position:relative; z-index:1;'>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;vertical-align:middle;">
            <ellipse cx="27" cy="27" rx="25" ry="25" stroke="#1e2952" stroke-width="2" fill="none"/>
            <rect x="17" y="22" width="20" height="10" rx="5" stroke="#1e2952" stroke-width="2" fill="none"/>
            <rect x="24" y="15" width="6" height="7" rx="3" stroke="#1e2952" stroke-width="2" fill="none"/>
            <line x1="27" y1="32" x2="27" y2="39" stroke="#1e2952" stroke-width="2"/>
          </svg>
          </div>
        <!-- Event Title -->
        <div contenteditable="true" style="font-size: 28px; font-family: 'Merriweather', 'Georgia', serif; font-weight: 700; margin-bottom: 8px; letter-spacing: 1px; position:relative; z-index:1;">MONTHLY MEETING</div>
        <!-- Subtitle -->
        <div contenteditable="true" style="font-size: 16px; font-family: 'Inter', Arial, sans-serif; color: #1e2952; margin-bottom: 18px; position:relative; z-index:1;">Join Us for a Monthly Team Update</div>
        <!-- Date/Time/Location -->
        <div style="font-size: 15px; font-family: 'Inter', Arial, sans-serif; color: #1e2952; margin-bottom: 18px; position:relative; z-index:1;">
          <span contenteditable="true" style='border-bottom:1px solid #1e2952; padding:0 6px;'>Thursday</span>
          <span contenteditable="true" style='font-size:18px; font-weight:700; margin:0 8px;'>June 15</span>
          <span contenteditable="true" style='border-bottom:1px solid #1e2952; padding:0 6px;'>2024</span><br/>
          <span contenteditable="true">10:00 AM – 11:00 AM</span><br/>
          <span contenteditable="true">Virtual Meeting</span><br/>
          <span contenteditable="true">Zoom Link: https://zoom.us/j/1234567890</span>
        </div>
        <!-- Message -->
        <div contenteditable="true" style="font-size: 13px; font-family: 'Inter', Arial, sans-serif; color: #1e2952; margin-bottom: 18px; position:relative; z-index:1; background:rgba(255,255,255,0.7); border-radius:8px; padding:10px 8px; display:inline-block;">Join our monthly team meeting to discuss recent projects, upcoming initiatives, and share feedback.</div>
        <!-- Footer -->
        <div contenteditable="true" style="font-size: 13px; font-family: 'Inter', Arial, sans-serif; color: #1e2952; position:relative; z-index:1;">We look forward to your participation.</div>
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
      <div style="width: 400px; height: 600px; background: #fcf9f6; padding: 44px 32px; font-family: 'Merriweather', 'Georgia', serif; text-align: center; border-radius: 18px; box-shadow: 0 4px 24px #0001; position: relative; overflow: hidden; color: #1a3c34;">
        <!-- SVG Background Effects -->
        <svg width='400' height='600' viewBox='0 0 400 600' fill='none' xmlns='http://www.w3.org/2000/svg' style='position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;'>
          <!-- Soft gradient overlay -->
          <defs>
            <linearGradient id='bizgrad' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stop-color='#b7d3c6' stop-opacity='0.13'/>
              <stop offset='100%' stop-color='#1a3c34' stop-opacity='0.08'/>
            </linearGradient>
            <pattern id='bizlines' patternUnits='userSpaceOnUse' width='24' height='24' patternTransform='rotate(45)'>
              <rect x='0' y='0' width='12' height='1' fill='#1a3c34' fill-opacity='0.04'/>
            </pattern>
          </defs>
          <rect width='400' height='600' fill='url(#bizgrad)'/>
          <rect width='400' height='600' fill='url(#bizlines)'/>
          <!-- Sunburst Corners -->
          <g opacity='0.13'>
            <path d='M0,0 L60,0 A60,60 0 0,1 0,60 Z' stroke='#1a3c34' stroke-width='1' fill='none'/>
            <path d='M400,0 L340,0 A60,60 0 0,0 400,60 Z' stroke='#1a3c34' stroke-width='1' fill='none'/>
            <path d='M0,600 L0,540 A60,60 0 0,1 60,600 Z' stroke='#1a3c34' stroke-width='1' fill='none'/>
            <path d='M400,600 L400,540 A60,60 0 0,0 340,600 Z' stroke='#1a3c34' stroke-width='1' fill='none'/>
          </g>
          <!-- Extra geometric shapes -->
          <circle cx='340' cy='100' r='38' fill='#1a3c34' fill-opacity='0.06'/>
          <rect x='-30' y='420' width='120' height='120' rx='60' fill='#b7d3c6' fill-opacity='0.09'/>
          <polygon points='60,140 90,180 30,180' fill='#1a3c34' fill-opacity='0.05'/>
          <polygon points='370,320 390,360 350,360' fill='#b7d3c6' fill-opacity='0.07'/>
        </svg>
        <!-- Logo/Icon -->
        <div style='margin-bottom: 18px; margin-top: 8px; position:relative; z-index:1;'>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;vertical-align:middle;">
            <ellipse cx="27" cy="27" rx="25" ry="25" stroke="#1a3c34" stroke-width="2" fill="none"/>
            <rect x="17" y="22" width="20" height="10" rx="5" stroke="#1a3c34" stroke-width="2" fill="none"/>
            <rect x="24" y="15" width="6" height="7" rx="3" stroke="#1a3c34" stroke-width="2" fill="none"/>
            <line x1="27" y1="32" x2="27" y2="39" stroke="#1a3c34" stroke-width="2"/>
          </svg>
          </div>
        <!-- Event Title -->
        <div contenteditable="true" style="font-size: 28px; font-family: 'Merriweather', 'Georgia', serif; font-weight: 700; margin-bottom: 8px; letter-spacing: 1px; position:relative; z-index:1;">ANNUAL GENERAL MEETING</div>
        <!-- Subtitle -->
        <div contenteditable="true" style="font-size: 16px; font-family: 'Inter', Arial, sans-serif; color: #1a3c34; margin-bottom: 18px; position:relative; z-index:1;">Annual Shareholder Meeting</div>
        <!-- Date/Time/Location -->
        <div style="font-size: 15px; font-family: 'Inter', Arial, sans-serif; color: #1a3c34; margin-bottom: 18px; position:relative; z-index:1;">
          <span contenteditable="true" style='border-bottom:1px solid #1a3c34; padding:0 6px;'>Tuesday</span>
          <span contenteditable="true" style='font-size:18px; font-weight:700; margin:0 8px;'>July 10</span>
          <span contenteditable="true" style='border-bottom:1px solid #1a3c34; padding:0 6px;'>2024</span><br/>
          <span contenteditable="true">9:00 AM – 11:00 AM</span><br/>
          <span contenteditable="true">Corporate Headquarters</span><br/>
          <span contenteditable="true">123 Business District, Metropolis, NY</span>
        </div>
        <!-- Message -->
        <div contenteditable="true" style="font-size: 13px; font-family: 'Inter', Arial, sans-serif; color: #1a3c34; margin-bottom: 18px; position:relative; z-index:1; background:rgba(255,255,255,0.7); border-radius:8px; padding:10px 8px; display:inline-block;">Join us for our annual general meeting to review financial performance, discuss strategic plans, and elect new board members.</div>
        <!-- Footer -->
        <div contenteditable="true" style="font-size: 13px; font-family: 'Inter', Arial, sans-serif; color: #1a3c34; position:relative; z-index:1;">We look forward to your presence and participation.</div>
      </div>
    `,
    defaultColors: { primary: '#1a3c34', secondary: '#b7d3c6', text: '#1a3c34', background: '#fff' },
    defaultFonts: { title: "'Inter', Arial, sans-serif", body: "'Inter', Arial, sans-serif" }
  },
  {
    id: 'corporate-5',
    name: 'LIONPOINT RECRUITMENT SPECIALISTS',
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