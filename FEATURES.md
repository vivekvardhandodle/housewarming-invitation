# 🎨 Features & Animation Guide

A detailed breakdown of all the amazing features in your house warming invitation.

---

## 🎬 Animations Catalog

### 1. Header Animations

#### Om Symbol (ॐ)
- **Type**: Scale & Rotate entrance
- **Duration**: 1 second
- **Effect**: Spins from -180° while scaling up
- **Glow**: Pulsing text shadow effect
- **Loop**: Continuous glow animation

#### Title Text
- **Type**: Fade & Slide up
- **Delay**: Staggered (0.5s, 0.7s)
- **Effect**: Smooth opacity + Y-axis transition
- **Gradient**: Saffron to orange to red

#### Decorative Flowers (🌺)
- **Type**: Continuous rotation
- **Speed**: 8 seconds per rotation
- **Center Diya**: Scale pulse (1 → 1.2 → 1)

---

### 2. Diya (Oil Lamp) Animations

#### Flame Effect (🔥)
- **Scale**: 1 → 1.1 → 0.9 → 1.1 → 1
- **Opacity**: 1 → 0.9 → 1 → 0.9 → 1
- **Duration**: 1.5 seconds (infinite)
- **Glow**: Dynamic box-shadow (20px → 30px)

#### Diya Body (🪔)
- **Type**: Floating motion
- **Range**: 0px → -10px → 0px
- **Duration**: 3 seconds
- **Easing**: ease-in-out

#### Light Rays
- **Count**: 8 rays per diya
- **Animation**: Fade out + Scale up
- **Spread**: Rotated 45° apart
- **Color**: Gold gradient to transparent

#### Positions
- Top Left: Delay 0s
- Top Right: Delay 0.3s
- Bottom Left: Delay 0.6s
- Bottom Right: Delay 0.9s

---

### 3. Rangoli Pattern

#### Structure
```
Outer Layer:
  - 6 circles rotating clockwise
  - Duration: 20 seconds
  - Staggered delays (0s, 0.5s, 1s...)

Middle Layer:
  - 8 petal shapes
  - Clip-path: triangle
  - Rotation + Scale animation
  - Duration: 3 seconds each

Inner Layer:
  - 4 decorative elements
  - Counter-clockwise rotation
  - Duration: 15 seconds

Center:
  - Large flower (🌺)
  - Rotation: 360° in 10 seconds
  - Pulsing glow effect
```

#### Color Scheme
1. Saffron (#FF9933) to Marigold (#FFA500)
2. Pink (#FF69B4) to Purple (#9B59B6)
3. Orange (#FF6B35) to Red (#DC143C)
4. Marigold (#FFA500) to Gold (#FFD700)

#### Sparkles
- **Count**: 12 random positions
- **Animation**: Fade in/out + Scale
- **Duration**: 2 seconds
- **Stagger**: 0.2s delay each

---

### 4. Event Details Cards

#### Card Entrance
- **Type**: Fade + Slide up
- **Initial**: Y offset +50px, opacity 0
- **Duration**: 0.6 seconds
- **Stagger**: 0.2s between cards

#### Hover Effect
- **Scale**: 1.05
- **Y offset**: -5px
- **Shadow**: Increased elevation
- **Duration**: 0.3 seconds

#### Icon Animation
- **Type**: Scale pop-in
- **Delay**: 0.3s + card delay
- **Duration**: 0.5 seconds
- **Spring**: Natural bounce

---

### 5. Floating Background Elements

#### Flowers (🌺, 🌸, 🌼, 🏵️, 💐)
- **Count**: 20 instances
- **Path**: Top to bottom with wave motion
  - X: 0 → 50 → -50 → 50 → 0
  - Y: -100 → 100vh
- **Duration**: 10-20 seconds (random)
- **Opacity**: 0 → 1 → 1 → 1 → 0
- **Rotation**: 0° → 720° (two full spins)

#### Mangoes (🥭)
- **Count**: 10 instances
- **Traditional**: Symbol of prosperity
- **Animation**: Straight fall with rotation
- **Duration**: 15-25 seconds
- **Opacity**: Fade in/out

#### Sparkles (✨)
- **Count**: 15 instances
- **Animation**: Pulse scale
- **Random**: Position on screen
- **Duration**: 3 seconds
- **Loop**: Infinite with varying delays

---

### 6. RSVP Button

#### Idle State
- **Gradient**: Saffron → Orange → Red
- **Shadow**: Large elevation
- **Icons**: Rotating diyas (🪔)

#### Hover Effect
- **Scale**: 1.05
- **Rotation**: Wiggle [0, -2, 2, -2, 0]
- **Shadow**: Increased
- **Duration**: 0.3 seconds

#### Click Effect
- **Scale**: 0.95
- **Duration**: Instant
- **Feedback**: Tactile feel

---

### 7. RSVP Modal

#### Modal Entrance
- **Backdrop**: Fade in blur
- **Card**: Scale 0.9 → 1
- **Y offset**: +50px → 0
- **Spring**: Stiffness 300, Damping 30

#### Form Elements
- **Focus**: Border color change
- **Error**: Red text fade in
- **Radio buttons**: Custom styled
  - **Selected**: Border + Background color
  - **Hover**: Border highlight

#### Header
- **Gradient**: Full-width orange gradient
- **Diya**: Wiggle animation [0, 10, -10, 0]
- **Duration**: 2 seconds loop

---

### 8. Success Modal

#### Entrance
- **Backdrop**: Fade in
- **Card**: Scale 0.5 → 1
- **Spring**: Bouncy entrance

#### Success Icon (✓)
- **Stage 1**: Circle container scales up
- **Stage 2**: Checkmark scales up
- **Delay**: 0.2s → 0.3s
- **Color**: Green theme

#### Celebration Emojis (🎉, 🎊, ✨, 🌟)
- **Count**: 8 particles
- **Animation**: Shoot upward
  - Y: -20 → -60 → -80
  - X: Spread outward based on index
  - Opacity: 0 → 1 → 0
- **Stagger**: 0.1s each
- **Duration**: 1.5 seconds

#### Decorative Diyas
- **Count**: 3 diyas
- **Animation**: Float + Scale
- **Duration**: 2 seconds loop
- **Stagger**: 0.2s each

---

## 🎨 Color Palette

### Primary Colors
```css
Saffron:       #FF9933  /* Main orange */
Indian Orange: #FF6B35  /* Vibrant orange */
Marigold:      #FFA500  /* Traditional yellow-orange */
Diya Gold:     #FFD700  /* Golden glow */
Temple Red:    #DC143C  /* Sacred red */
```

### Accent Colors
```css
Rangoli Pink:   #FF69B4  /* Bright pink */
Rangoli Purple: #9B59B6  /* Deep purple */
```

### Background
```css
Gradient: Orange-50 → Rose-50 → Amber-50
Pattern:  Subtle radial gradients (rangoli-pattern)
```

---

## 📱 Responsive Features

### Mobile (< 768px)
- Corner diyas hidden (performance)
- Rangoli scaled down (64px → 80px)
- Single column layout
- Touch-optimized buttons
- Simplified animations

### Tablet (768px - 1024px)
- Medium rangoli size
- Dual column cards
- Full animations
- Optimized touch targets

### Desktop (> 1024px)
- Full experience
- All diyas visible
- Large rangoli (80px)
- Hover effects active
- Maximum animations

---

## ⚡ Performance Optimizations

### Animation Performance
- **GPU Acceleration**: All transforms use `translateZ(0)`
- **Will-change**: Applied to animated elements
- **RequestAnimationFrame**: Framer Motion optimized
- **Throttled**: Background elements limited

### Loading Performance
- **No Images**: Uses emojis (instant load)
- **Code Splitting**: Next.js automatic
- **Tree Shaking**: Unused code removed
- **Minification**: Production build optimized

### Bundle Size
- **First Load**: 139 KB
- **JavaScript**: Chunked efficiently
- **CSS**: Purged unused styles
- **Total**: < 500 KB including all assets

---

## 🎯 Accessibility Features

### Keyboard Navigation
- Tab order follows visual flow
- Focus indicators on all interactive elements
- Enter/Space for button activation
- Escape to close modals

### Screen Readers
- Semantic HTML structure
- ARIA labels where needed
- Alt text for all meaningful content
- Proper heading hierarchy

### Motion Preferences
- Respects `prefers-reduced-motion`
- Core functionality works without animations
- Graceful degradation

---

## 🎭 Cultural Authenticity

### Traditional Elements
1. **Om (ॐ)**: Sacred symbol, start of creation
2. **Diya (🪔)**: Symbol of prosperity and good fortune
3. **Rangoli**: Traditional art form, welcomes guests
4. **Marigold**: Auspicious flower for ceremonies
5. **Mango**: Symbol of prosperity and abundance
6. **Sanskrit**: "शुभं भवतु" (May all be auspicious)

### Color Significance
- **Saffron**: Sacred, spiritual
- **Red**: Auspicious, prosperity
- **Gold**: Divine, wealth
- **Orange**: Energy, celebration

### Ceremony Details
- **Griha Pravesh**: Hindu house warming ritual
- **Muhurat Time**: Auspicious time (4:42 AM)
- **Traditional Breakfast**: Post-ceremony feast
- **Blessings**: Essential part of ceremony

---

## 🎬 Animation Timeline

```
0.0s - 0.3s:  Header border slides in
0.3s - 1.0s:  Om symbol scales and rotates in
0.5s - 1.3s:  Title fades in with gradient
0.7s - 1.5s:  Subtitle appears
0.9s - 1.9s:  Decorative flowers rotate in

// Diyas appear
0.0s: Top left diya
0.3s: Top right diya
0.6s: Bottom left diya
0.9s: Bottom right diya

0.5s - 2.0s:  Rangoli pattern builds up
              - Outer circles appear
              - Middle petals grow
              - Inner elements rotate
              - Center flower pops in
              - Sparkles start appearing

0.8s - 1.8s:  Event cards slide up
              - Card 1: Date
              - Card 2: Time
              - Card 3: Venue

1.0s - 1.8s:  Map link card appears

1.2s - 2.0s:  RSVP button scales in

1.5s - 2.5s:  Sanskrit blessing fades in

Continuous:   Background flowers fall
              Sparkles pulse
              All elements animate smoothly
```

---

## 🎨 Custom CSS Classes

### Utility Classes
```css
.text-gradient        /* Saffron to red gradient text */
.border-gradient      /* Gradient border */
.rangoli-pattern      /* Subtle background pattern */
```

### Animation Classes
```css
.animate-float        /* Floating motion */
.animate-glow         /* Pulsing glow effect */
.animate-spin-slow    /* 8 second rotation */
.animate-pulse-slow   /* 3 second pulse */
.animate-sparkle      /* Scale + opacity pulse */
```

---

## 🔧 Customization Points

### Easy to Modify
1. **Colors**: `tailwind.config.js` → `theme.extend.colors`
2. **Animation Speed**: Component files → `transition.duration`
3. **Element Count**: Component files → array sizes
4. **Layout**: `app/page.tsx` → component arrangement

### Moderate Difficulty
1. **Rangoli Design**: `RangoliPattern.tsx` → layer structure
2. **Diya Effects**: `DiyaAnimation.tsx` → flame properties
3. **Background Elements**: `FloatingFlowers.tsx` → element types

### Advanced
1. **Custom Animations**: New Framer Motion variants
2. **3D Effects**: Add perspective transforms
3. **Physics**: react-spring for realistic motion

---

## 🎊 Interactive Elements

### Clickable
- RSVP Button
- Google Maps link
- Modal close buttons
- Form submission
- Radio buttons

### Hoverable
- All cards (scale + shadow)
- RSVP button (scale + wiggle)
- Form fields (border color)
- Links (color change)

### Focus States
- All form inputs
- Buttons
- Radio buttons
- Links

---

## 📊 Animation Performance Metrics

- **FPS Target**: 60 fps
- **GPU Usage**: Optimized transforms
- **Repaints**: Minimized with will-change
- **Janks**: None in production build
- **Time to Interactive**: < 2 seconds

---

**Your invitation uses 50+ individual animations working in perfect harmony! 🎨**

Each animation is carefully timed and optimized for:
- ✅ Smooth 60 FPS performance
- ✅ Cultural authenticity
- ✅ Modern aesthetics
- ✅ Mobile compatibility
- ✅ Accessibility

---

*All animations powered by Framer Motion with GPU acceleration*

