# PM Portfolio - Prakash Mahara

A modern, responsive personal portfolio website showcasing projects, services, and professional profile.

## Preview

Visit: [prakashmahara.com.np](https://prakashmahara.com.np)

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with animations
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Bootstrap 5.3** - Component library (via CDN)
- **JavaScript** - Vanilla JS for interactivity
- **Font Awesome & Boxicons** - Icon libraries
- **Google Fonts** - Barlow & Outfit typefaces

## Features

- Responsive design with mobile hamburger menu
- Smooth scrolling navigation
- Dynamic project loading from JSON
- Interactive hover effects on cards
- Gradient backgrounds and modern UI
- Social media integration
- SEO optimized with meta tags

## Project Structure

```
pm_portfolio-new/
├── index.html              # Main HTML file
├── css/
│   └── index.css           # Custom styles
├── js/
│   └── script.js           # JavaScript functionality
├── assets/
│   ├── img/
│   │   ├── logo5.png       # Site logo
│   │   ├── hero2.png       # Hero section image
│   │   └── project/        # Project screenshots
│   └── json/
│       └── projects.json   # Project data
├── CNAME                   # Custom domain config
└── ReadMe.md               # Documentation
```

## Sections

| Section | Description |
|---------|-------------|
| **Header** | Logo + responsive navigation |
| **Hero** | Profile image with introduction |
| **Projects** | Dynamically loaded project cards |
| **Services** | Web Dev, Graphics Design, Mobile Apps |
| **About Me** | Personal biography |
| **Social** | Social media links |
| **Footer** | Copyright information |

## Adding New Projects

Edit `assets/json/projects.json`:

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Brief description",
      "image": "./assets/img/project/image.png",
      "link": "https://project-link.com"
    }
  ]
}
```

## Customization

### Colors
Main colors used:
- Primary: `#0088a9` (Teal)
- Secondary: `#03596e` (Dark Teal)
- Dark: `#020b1f` (Navy)
- Accent: `#f39c12` (Orange)

### Styling
All custom styles are in `css/index.css`. Key sections:
- Section titles with gradients
- Card hover animations
- Social icon color transitions
- Responsive breakpoints at 768px

## Local Development

1. Clone the repository
2. Open `index.html` in a browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## License

© 2025 Prakash Mahara - All rights reserved

## Contact

- Website: [prakashmahara.com.np](https://prakashmahara.com.np)
- YouTube: [@tech4knepal](https://youtube.com/@tech4knepal)
- GitHub: [@prakash27x](https://github.com/prakash27x)
- LinkedIn: [prakash27x](https://linkedin.com/in/prakash27x)