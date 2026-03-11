# Premium Ceramic Mug – Product Page

## Project Overview

This project is a **mobile-first premium product page** built using **React, Tailwind CSS, and Framer Motion**.
The page showcases a handcrafted ceramic mug with a focus on **clean design, smooth animations, and a premium shopping experience**.

The design simulates a modern **e-commerce product page** similar to those used by brands like Apple or Shopify stores.

The layout is optimized for **mobile devices (375px viewport)**.

---

# Features Implemented

## 1. Hero Section

Displays the main product information.

Includes:

* Product title
* Rating and reviews
* Purchase indicator (e.g., *600+ bought in past month*)
* Product description
* Product image with gradient glow effect
* Smooth entry animation using Framer Motion

---

## 2. Product Story Section

Explains the inspiration and craftsmanship behind the mug.

Purpose:

* Builds emotional connection
* Highlights the artisan process
* Enhances brand storytelling

---

## 3. Product Image Carousel

Allows users to browse multiple product images.

Features:

* Smooth horizontal scrolling
* Mobile-friendly swipe experience
* Displays different product angles and details

---

## 4. Variant Selector

Allows users to select different product options.

Examples:

* Color
* Style
* Finish

Provides an interactive way to choose the preferred variant.

---

## 5. Features Section

Highlights key product benefits.

Includes:

* Handcrafted by artisans
* Superior heat retention
* Unique glaze finish
* Comfortable ergonomic grip

Each feature includes:

* Icon
* Title
* Short explanation

Icons are displayed with **premium background styling** to enhance visual appeal.

---

## 6. Customer Reviews

Displays customer feedback to build trust.

Each review includes:

* Customer name
* Star rating
* Short review text

Example:

★★★★★
*"This mug makes my morning coffee feel special."*
— Sarah M.

---

## 7. Call-To-Action Section

Encourages users to purchase the product.

Includes:

* Pricing information
* Purchase button

---

## 8. Sticky Cart

A persistent **Add to Cart bar** that stays visible while scrolling.

Benefits:

* Improves conversion
* Makes purchasing easier
* Common in modern ecommerce sites

---

# Technologies Used

## React

Used to build reusable UI components.

Components created:

* Hero
* Story
* Carousel
* VariantSelector
* Features
* Reviews
* CTA
* StickyCart

---

## Tailwind CSS

Used for styling and layout.

Benefits:

* Utility-first CSS framework
* Faster UI development
* Responsive design support
* Clean and consistent styling

---

## Framer Motion

Used for animations and motion effects.

Examples:

* Fade-in animations
* Scroll reveal effects
* Hover scaling interactions

---

## Lucide React

Used for clean, modern icons.

Icons used in the Features section include:

* Hand (craftsmanship)
* Flame (heat retention)
* Palette (glaze design)
* Coffee (daily ritual)

---

# Project Structure

```
src
 ├─ components
 │   ├─ Hero.jsx
 │   ├─ Story.jsx
 │   ├─ Carousel.jsx
 │   ├─ VariantSelector.jsx
 │   ├─ Features.jsx
 │   ├─ Reviews.jsx
 │   ├─ CTA.jsx
 │   └─ StickyCart.jsx
 │
 ├─ App.jsx
 └─ main.jsx
```

Images are stored inside:

```
public/images
```

---

# Packages Installed

### React

Core framework used to build the application.

---

### Tailwind CSS

Installed for styling.

Installation included:

* Tailwind CSS
* PostCSS
* Autoprefixer

---

### Framer Motion

Used for animations.

Installation command:

```bash
npm install framer-motion
```

---

### Lucide React

Used for icons.

Installation command:

```bash
npm install lucide-react
```

---

# Installation & Setup

## 1. Clone the repository

```bash
git clone <repository-url>
cd project-folder
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Run the development server

```bash
npm run dev
```

---

## 4. Open the project

Visit:

```
http://localhost:5173
```

---

# Design Goals

The goal of this exercise was to create a **premium feeling product page** by focusing on:

* Clean typography
* Soft neutral color palette
* Smooth animations
* Clear information hierarchy
* Mobile-first design
* Engaging product storytelling

---

# Future Improvements

Possible enhancements:

* Add product image zoom
* Add interactive color selection
* Add quantity selector
* Add review rating distribution
* Add checkout flow

---

# Conclusion

This project demonstrates how to build a **modern mobile product page** using React with a focus on **design quality, animation, and user experience**.

The result is a **premium, minimal, and engaging ecommerce interface** optimized for mobile shopping.
