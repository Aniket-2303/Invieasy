module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#095764',      // Teal Ink - headings, text, icons
          background: '#FFFCF0',   // Soft Cream - main app background
          card: '#F4EBD0',         // Warm Yellow - cards, light panels
          accent: '#F18701',       // Accent Orange - buttons, highlights
          gray: '#EAE7DC',         // Warm Gray - subtle backgrounds
          textgray: '#7A7A7A',     // Subtext, muted labels
          charcoal: '#2F2F2F',     // Deep gray - fallback or strong text
          disabled: '#F9F5EF',     // Disabled UI zones
          error: '#FFE3E3',        // Error alert background
          success: '#DFF5E1',      // Success alert background
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'sans-serif']
      }
    }
  },
  plugins: [],
} 

