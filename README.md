# Feranmi Portfolio - React App

A modern, responsive portfolio website built with React and Tailwind CSS. This project is a complete conversion of an HTML portfolio into a fully functional React application with all original features preserved.

## Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive Layout**: Fully responsive across all device sizes
- **Smooth Animations**: Custom CSS animations and transitions
- **Interactive Elements**: Hover effects, cursor invert effects, and smooth scrolling
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Status Indicator**: Animated status indicator with scroll effects
- **Code Typing Animation**: Dynamic code typing effect in the process section
- **Letter-by-Letter Animation**: Staggered text animations for headlines

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework with custom animations
- **PostCSS**: CSS processing with autoprefixer
- **Google Fonts**: Multiple font families for typography

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with mobile menu
│   ├── Hero.js            # Hero section with cursor invert effect
│   ├── TrustedBy.js       # Company logos ticker
│   ├── Services.js        # Services section
│   ├── FeaturedWork.js    # Portfolio projects showcase
│   ├── About.js           # About section with image gallery
│   ├── Process.js         # Process section with code animation
│   ├── Footer.js          # Contact and footer section
│   ├── StatusIndicator.js # Animated status indicator
│   └── GoToTop.js         # Scroll to top button
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd feranmi-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Colors and Styling
All styling is handled through Tailwind CSS classes. You can customize colors, spacing, and other design tokens in the `tailwind.config.js` file.

### Animations
Custom animations are defined in both the Tailwind config and the CSS file. Key animations include:
- Fade in/out effects
- Slide up animations
- Scale in effects
- Letter-by-letter reveals
- Typing animations
- Cursor invert effects

### Content
Update the content in each component file to match your personal information:
- Personal details in `Hero.js`
- Services in `Services.js`
- Portfolio projects in `FeaturedWork.js`
- About information in `About.js`
- Contact details in `Footer.js`

## Key Features Explained

### Cursor Invert Effect
The hero section features a unique cursor invert effect that creates a white circle that follows the mouse cursor, inverting colors underneath it.

### Letter-by-Letter Animation
The main headline animates each letter individually with a staggered delay for a dynamic effect.

### Code Typing Animation
The process section includes a realistic code typing animation that simulates writing code in real-time.

### Scroll Effects
Various elements respond to scroll position with parallax effects and dynamic styling.

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The application is optimized for performance with:
- Lazy loading of images
- Efficient React hooks usage
- Optimized CSS animations
- Minimal bundle size

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
