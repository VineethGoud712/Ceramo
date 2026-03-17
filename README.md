# CÈRAMO – Premium Ceramic Mug Product Page

## Overview

CÈRAMO is a mobile-first premium product page built using **React** and **Tailwind CSS**, designed to deliver a refined and immersive product experience.

The project focuses on **minimal design, emotional storytelling, and smooth interactions**, inspired by modern premium e-commerce experiences.

The layout is optimized for a **375px mobile viewport**, ensuring a focused and high-quality mobile experience.

---

## Key Features

### Navigation
- Minimal top navigation bar  
- Animated hamburger menu  
- Clean brand presentation  

### Hero Section
- Strong product headline and messaging  
- Product image showcase  
- Subtle purchase indicator  
- Primary call-to-action  

### Story Section
- Full-screen background video  
- Gradient overlay for readability  
- Focus on craftsmanship and storytelling  
- Video hosted via **Cloudinary CDN** for optimized performance  

### Product Detail Sections
Two dedicated sections highlighting product design:
- **Where Every Sip Begins** → Rim experience  
- **Comfort in Every Hold** → Handle ergonomics  

### Moments Carousel
- Built using **Swiper.js**  
- Smooth mobile swipe interaction  
- Pagination indicators  
- Lifestyle storytelling slides:
  - The First Sip  
  - The Quiet Pause  
  - The Warmth  

### Variant Selector
- Interactive cup selection  
- Multiple color variants  
- Smooth image transitions (fade + scale)  
- Visual selection feedback  

**Emotional Messaging:**  
> “Not just a cup — a feeling in your hands.”

### Customer Reviews
- Overall rating display (**4.9 ★**)  
- Review count (**120k+**)  
- Individual testimonials  
- Star-based rating UI  

### Footer
- Brand identity  
- Navigation links  
- Supporting brand message  

---

## Tech Stack

| Technology   | Purpose                        |
|-------------|--------------------------------|
| React       | Component-based UI             |
| Tailwind CSS| Styling & layout               |
| Swiper.js   | Carousel functionality         |
| Cloudinary  | Video hosting & delivery       |

---

## Project Structure

```bash
src
├─ components
│  ├─ Navbar.jsx
│  ├─ Hero.jsx
│  ├─ Story.jsx
│  ├─ SipSection.jsx
│  ├─ HandleSection.jsx
│  ├─ Carousel.jsx
│  ├─ CupSelector.jsx
│  ├─ Reviews.jsx
│  └─ Footer.jsx
│
├─ App.jsx
└─ main.jsx
```

**Assets:**
```
public/images
```

---

## Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/VineethGoud712/Ceramo.git
cd project-folder
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open in browser
```
http://localhost:5173
```

---

## Design Principles

This project was built with a focus on:

- Minimal and clean UI  
- Strong typography (**Satoshi & Times**)  
- Black-first premium color palette  
- Emotional storytelling  
- Smooth transitions and interactions  
- Mobile-first design  

---

## Future Enhancements

- Image zoom interaction  
- Advanced variant labels (e.g., Crimson, Forest, Sand)  
- Sticky add-to-cart bar  
- Checkout flow integration  
- Performance optimization for media  

---

## Preview

**Live Demo:**  
https://ceramo.netlify.app/

---

## Conclusion

CÈRAMO demonstrates how to build a modern, premium product page using React, with a strong emphasis on:

- User experience  
- Visual storytelling  
- Clean and scalable UI  

The result is a **refined, minimal, and engaging mobile shopping interface**.