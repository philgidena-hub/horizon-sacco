# Horizon SACCO Landing Page

A modern, responsive, and multilingual landing page for Horizon SACCO (Savings and Credit Cooperative) based in Mekelle, Ethiopia.

## Features

### Internationalization (i18n)
- Full support for **3 languages**:
  - **English (EN)** - Default language
  - **Amharic (አማርኛ)** - Ethiopian national language
  - **Tigrinya (ትግርኛ)** - Regional language for Tigray
- Dynamic language switching with React Context
- Proper font support for both Latin and Ethiopic scripts (Noto Sans Ethiopic)

### Sections

1. **Navbar**
   - Fixed top navigation with logo
   - Responsive mobile menu
   - Language selector dropdown
   - Call-to-action button

2. **Hero Section**
   - Compelling headline and subtext
   - Primary and secondary CTAs
   - Key statistics display
   - Feature highlights with icons

3. **Services Grid**
   - **Savings Products**:
     - Regular Saving (7.5% interest)
     - Children's Saving (10% interest)
     - Diaspora Saving
     - Voluntary Saving
   - **Loan Products**:
     - Housing Loan
     - Vehicle Loan
     - Business Loan
     - Education Loan

4. **Interest Rates Highlight**
   - Visual cards showing key rates
   - Regular saving: 7.5% per year
   - Children's saving: 10% per year
   - Maximum loan: 10,000,000 Birr

5. **Loan Calculator**
   - Interactive calculator
   - Formula: Monthly Saving × Duration × 3
   - Real-time calculation
   - Fully translatable labels

6. **Footer**
   - Contact information
   - Address details
   - Social proof

## Technology Stack

- **Framework**: React 18 (Functional Components + Hooks)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Fonts**: Inter (Latin), Noto Sans Ethiopic (Ethiopic scripts)

## Color Palette

- **Primary Green**: Growth and financial stability
  - `primary-600`: #16a34a
  - Used for main CTAs, branding

- **Accent Orange**: Energy and warmth
  - `accent-600`: #ea580c
  - Used for highlights, secondary elements

- **Neutrals**: White, Gray shades for backgrounds and text

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Horizon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Horizon/
├── src/
│   ├── App.jsx          # Main application with all components
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind imports and custom styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## Language Implementation

The application uses React Context for state management of the current language. All translations are stored in a `translations` object at the top of [src/App.jsx](src/App.jsx):

```javascript
const translations = {
  en: { /* English translations */ },
  am: { /* Amharic translations */ },
  ti: { /* Tigrinya translations */ }
};
```

The `useLanguage` hook provides:
- `language`: Current active language code
- `setLanguage`: Function to change language
- `t(key)`: Translation function to get text for current language

## Contact Information

**Horizon SACCO**
- Phone: +251 909 800 203
- Email: saccohorizon@gmail.com
- Address: Hawelti Sub-city, Mekelle, Tigray, Ethiopia

## Customization

### Adding New Translations

1. Open [src/App.jsx](src/App.jsx)
2. Find the `translations` object
3. Add new keys to all three language objects (en, am, ti)
4. Use the `t()` function in your components: `{t('yourNewKey')}`

### Modifying Colors

Edit [tailwind.config.js](tailwind.config.js) to customize the color palette:

```javascript
colors: {
  primary: { /* Your green shades */ },
  accent: { /* Your orange shades */ }
}
```

### Adding New Sections

Add new components to [src/App.jsx](src/App.jsx) and include them in the main `App` component.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Proper Ethiopic script rendering on all platforms

## License

© 2024 Horizon SACCO. All rights reserved.
