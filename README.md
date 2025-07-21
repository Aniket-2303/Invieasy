# InviteEasy - HTML-Based Invitation Editor

A modern, responsive web application for creating beautiful invitation cards using HTML-based templates and a powerful editor.

## Features

### 🎨 HTML-Based Templates
- **Pure HTML Templates**: Each template is stored as HTML with inline styles
- **Scalable Design**: Easy to add new templates and customize existing ones
- **Responsive Layouts**: Templates work perfectly on all devices

### ✏️ Powerful HTML Editor
- **Live Preview**: See changes in real-time as you edit
- **Text Customization**: Edit title, message, name, date/time, and venue
- **Color Control**: Customize primary, secondary, and text colors
- **Font Selection**: Choose from various font families for titles and body text
- **Export Options**: Download as HTML, PNG, or PDF

### 🚀 User-Friendly Interface
- **Template Grid**: Browse templates by category with beautiful previews
- **Category Filtering**: Filter templates by occasion (Birthday, Wedding, etc.)
- **Modern UI**: Clean, intuitive design with smooth animations

## Project Structure

```
src/
├── app/
│   ├── templates/
│   │   ├── page.tsx              # Template browsing page
│   │   └── editor/[id]/page.tsx  # HTML editor page
│   └── page.tsx                  # Home page
├── components/
│   ├── HtmlEditor.tsx            # Main HTML editor component
│   ├── TemplateGrid.tsx          # Template grid display
│   └── Navigation.tsx            # Navigation component
└── data/
    └── templates.ts              # Template data and utilities
```

## Template Data Structure

Each template is defined with:

```typescript
interface Template {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  description: string;
  htmlContent: string;           // HTML with inline styles
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
}
```

## How It Works

### 1. Template Selection
- Users browse templates in a responsive grid
- Filter by category (Birthday, Wedding, etc.)
- Click to open the HTML editor

### 2. HTML Editor
- Template HTML loads into the editor
- Users can edit text fields directly
- Color and font customization with live preview
- Changes update the HTML content in real-time

### 3. Export & Share
- Export as HTML file for web sharing
- PNG/PDF export for printing (implementation ready)
- Responsive design works on all devices

## Key Technical Features

### HTML-Based Approach
- **Scalability**: Easy to add new templates
- **Flexibility**: Full control over styling and layout
- **Performance**: Fast loading and rendering
- **Compatibility**: Works across all browsers and devices

### Editor Capabilities
- **Real-time Updates**: Live preview of all changes
- **DOM Manipulation**: Safe HTML parsing and editing
- **State Management**: React state for all customization options
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Exposing Your App with Ngrok

To share your app with others over the internet:

### Option 1: Simple Tunnel
```bash
# Start your dev server first
npm run dev

# In another terminal, create tunnel
npm run tunnel
```

### Option 2: Combined Command
```bash
# Start both dev server and tunnel together
npm run dev:tunnel
```

### Ngrok Features
- **Public URL**: Get a public URL like `https://abc123.ngrok.io`
- **HTTPS**: Secure connection with SSL certificate
- **Real-time**: Changes reflect immediately
- **Inspect**: View requests at `http://localhost:4040`

### Setup Ngrok (Optional)
1. Sign up at [ngrok.com](https://ngrok.com)
2. Get your authtoken
3. Add it to `ngrok.yml` file
4. Use custom subdomain: `ngrok http 3000 --subdomain=yourname`

## Adding New Templates

1. **Create Template Data**
   Add a new template object to `src/data/templates.ts`:

   ```typescript
   {
     id: 'your-template-id',
     name: 'Your Template Name',
     category: 'Category',
     thumbnail: '/path/to/thumbnail.jpg',
     description: 'Template description',
     htmlContent: `<div style="...">Your HTML content</div>`,
     defaultColors: { /* colors */ },
     defaultFonts: { /* fonts */ }
   }
   ```

2. **Add Thumbnail Image**
   Place your template thumbnail in `public/cards/`

3. **HTML Structure**
   Use `data-editable` attributes for editable fields:
   ```html
   <div data-editable="title">Title Text</div>
   <div data-editable="message">Message Text</div>
   ```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **React Icons**: Beautiful icon library
- **HTML5**: Template structure and editing

## Future Enhancements

- [ ] PNG/PDF export functionality
- [ ] More template categories
- [ ] User accounts and saved designs
- [ ] Social media sharing
- [ ] Advanced typography options
- [ ] Image upload and customization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
