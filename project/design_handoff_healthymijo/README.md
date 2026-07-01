# Handoff: Healthy Mijo — Full E-commerce Website

## Overview
Healthy Mijo is a direct-to-consumer e-commerce brand selling protein-rich bhel snacks ("Foods for Modern Lifestyles"). This handoff covers a complete 7-page storefront: Homepage, Shop, Product Detail, Account, Checkout, Login/Register, and Order Tracking.

The brand has already been implemented for FarmPuro in a prior Claude Code session — this is the **same site architecture adapted for Healthy Mijo**, so patterns, component structure, and routing logic from the FarmPuro implementation should be reused wherever possible.

---

## About the Design Files
The HTML files bundled in this package are **high-fidelity design references created as HTML prototypes** — they show the intended look, layout, typography, color, and interactions precisely. They are **not production code to copy directly**. The task is to **recreate these designs in the existing codebase's framework** (React/Next.js recommended) using its established patterns, components, and libraries. Refer to these files as the visual specification.

---

## Fidelity
**High-fidelity.** All colors, typography, spacing, border radii, shadows, and interactions are final. Implement pixel-accurately using the design tokens listed below.

---

## Design System / Tokens

### Colors
```
--brown:        #8B3A0F   /* Primary brand — buttons, labels, active states */
--brown-deep:   #5C2208   /* Hero backgrounds, dark sections, nav brand */
--brown-soft:   #B05A28   /* Hover states */
--brown-tint:   #FDF0E6   /* Light card backgrounds, hover fills */
--brown-tint-2: #F5DBC4   /* Borders on tinted areas */
--green:        #4C8B2A   /* Leaf accent, secondary labels */
--green-deep:   #2F5E18   /* Dark green text */
--green-soft:   #6EAB42   /* Hero highlights, footer headings */
--green-tint:   #EBF5E1   /* Delivered status pills */
--orange:       #E05918   /* CTAs, prices, active nav underline, cart badge */
--orange-deep:  #B84010   /* CTA hover */
--orange-tint:  #FEF0E8   /* Transit status pill bg */
--cream:        #FAF5EC   /* Page background */
--cream-warm:   #F2E9D4   /* Card/image placeholder bg */
--white:        #FFFFFF
--ink:          #2A1505   /* Primary text */
--ink-soft:     #7A5030   /* Secondary text */
--rule:         rgba(42,21,5,.08)   /* Dividers */
--rule-strong:  rgba(42,21,5,.15)  /* Stronger dividers */
--footer-bg:    #1A0905   /* Footer dark background */
```

### Typography
```
Display/Headings:  DM Serif Display, serif — font-weight: 400 (italic variant available)
Body/UI:           Plus Jakarta Sans, sans-serif — weights: 300, 400, 500, 600, 700, 800
Base font size:    15px
Base line height:  1.6
```

### Spacing Scale (used throughout)
```
4px, 8px, 10px, 12px, 14px, 16px, 18px, 20px, 22px, 24px, 28px, 32px, 36px, 40px, 44px, 48px, 52px, 56px, 64px, 72px, 80px, 96px
```

### Border Radius
```
Buttons:        999px  (pill — all interactive buttons are fully rounded)
Cards:          14px–20px
Input fields:   12px
Image cards:    16px–18px
Small chips:    999px (pill)
Avatars/icons:  10px–12px square, 50% circle for avatar
```

### Shadows
```
Cards:         0 6px 20px -16px rgba(42,21,5,.18)
Hover cards:   0 20px 48px -18px rgba(42,21,5,.2)
CTA buttons:   0 8px 24px -10px rgba(224,89,24,.45)
Hero image:    0 40px 80px -20px rgba(0,0,0,.5)
```

### Nav Active Indicator
```
Underline: 2.5px solid #E05918, border-radius 2px, position: absolute bottom:-2px
```

---

## Pages / Screens

### 1. Homepage — `HM Homepage.html`
**Purpose:** Brand landing page, drives traffic to shop.

**Sections (top to bottom):**
1. **Announcement bar** — `#5C2208` bg, centered text, 10px padding. "Use code MIJO10 for 10% off your first order · Free shipping above ₹499"
2. **Sticky header** — 80px tall, white/96% opacity + blur(12px), 2px bottom border in `--brown-tint`. Logo left, nav center, actions right (Sign in text link + search icon + cart icon with badge).
3. **Hero** — `--brown-deep` bg, min-height 88vh. Two-column grid: left = headline + sub + CTAs + stats; right = product image with floating badge. H1: 76px DM Serif Display. Primary CTA: orange pill button. Ghost CTA: underlined text link. Stats: 4 items in a row (8 varieties / 30s / 0 Maida / 100% Plant based).
4. **Trust bar** — white bg, 4 items in a row with icons: No Maida / No Frying / No Preservatives / Plant Based.
5. **How it Works** — cream bg, 3-card grid. Each card: emoji + numbered circle (brown-deep) + h3 + p. Steps: Pour / Add / Eat.
6. **Featured Products** — 4-up grid of product cards (see Product Card component spec below).
7. **Marquee strip** — `--brown` bg, infinite scrolling text: "No Maida · No Frying · No Preservatives · Plant Based · High Protein · Ready in 30 Seconds · 100% Veg · Roasted Not Fried"
8. **Why Healthy Mijo** — white bg, 2-col grid: left = 3 product images in mosaic; right = eyebrow + h2 + p + 4 icon+text bullet list + orange CTA button.
9. **Testimonials** — cream bg, 3-col card grid. Each card: star rating + blockquote (DM Serif italic) + author row (avatar circle + name + subtitle) + product chip tag.
10. **All Varieties strip** — `--brown-deep` bg, horizontally scrollable strip of 8 variety cards (image + name + price).
11. **CTA Banner** — `--orange` bg, left = h2 + p; right = white pill button with orange text.
12. **Footer** — `#1A0905` bg, 5-col grid (brand col + 4 link cols). Green-soft col headings. Copy bar at bottom.

---

### 2. Shop — `HM Shop.html`
**Purpose:** Browse and filter all 8 products.

**Sections:**
1. Sticky header (shared)
2. **Page hero** — `--brown-deep` bg, 52px padding. Breadcrumb + H1 + subtitle + 3 stats (8 varieties / 100% Plant Based / 30s Ready In).
3. **Filter bar** — white, sticky below header. Pill-style category tabs (All / High Protein / Millet / Fiber Rich / Kids / Premium) + filter pills + sort dropdown. Results count row below.
4. **Product grid** — 4-col, 24px gap. Each card: image (contain, cream-warm bg) + tag chip + heart button + cat label + h3 + desc + stars + price row + Add button.
5. **Assurance row** — `--brown-tint` bg, 4-col: No Maida / Free Shipping / Easy Returns / Secure Payment.
6. Full footer.

**Category filter JS:** clicking a tab filters `.product[data-cat]` by showing/hiding. Pills toggle `.on` class.

---

### 3. Product Detail — `HM Product.html`
**Purpose:** Single product page (Classic Protein Bhel shown as reference).

**Layout:** 2-col grid (gallery left, info right), gap 64px.

**Gallery (sticky):**
- Main image: aspect-ratio 1/1, border-radius 16px, object-fit contain, padding 12px
- Cert badges overlay bottom-left (pill chips)
- Thumbnail row: 4 × 72px square thumbs, active = 2px `--brown` border
- JS: clicking thumb swaps main image

**Info panel:**
- Cat eyebrow → H1 (40px) → Stars row → Price block (price + strikethrough + save chip)
- Size selector: pill buttons, `.on` = brown tint fill
- Stepper (−/qty/+) in pill border + Add to Cart orange pill CTA (full width)
- Save to Wishlist ghost pill button
- Highlights list: 4 icon+text rows
- Cert chips row at bottom

**Full description section:** 2-col (sticky left title + right long-form text + specs grid).

**Related products:** 4-col grid of smaller cards.

---

### 4. Account — `HM Account.html`
**Purpose:** Logged-in user dashboard.

**Layout:** Hero banner (brown-deep) + 2-col layout (240px sidebar + main content).

**Sidebar nav:** sticky, white card, pill links. Active = brown-tint bg + brown-deep text. Panels: My Orders / Addresses / Wishlist / Profile & Settings / Track Order / Sign Out.

**Panels (JS tab switching):**
- **Orders:** List of order cards. Each: top row (order meta + status pill) + body row (product thumbs + items summary + CTA buttons). Status pills: delivered (green-tint) / transit (orange-tint with pulsing dot).
- **Addresses:** 2-col grid of address cards + dashed "add new" card.
- **Wishlist:** 3-col grid of product cards with filled heart.
- **Profile:** Form card (2-col field grid) + Notifications preference card with toggle switches.

---

### 5. Checkout — `HM Checkout.html`
**Purpose:** Single-page checkout.

**Layout:** Steps indicator (pill-shaped row) + 2-col grid (form left, sticky summary right 400px).

**Steps:** Cart (done, brown) → Details (active, orange) → Payment → Confirm.

**Form sections (white cards, 16px radius):**
- Contact details
- Delivery address
- Delivery option (radio cards: Standard free / Express ₹79)
- Payment (tab switcher: Card / UPI / COD) + card fields + orange pill "Place Order" CTA

**Order summary card:**
- Items list (image thumbnail with qty badge + name + meta + price)
- Totals (subtotal / delivery / discount / grand total in orange)
- Coupon code input + apply button (pill)
- Payment methods strip + trust list

---

### 6. Login/Register — `HM Login.html`
**Purpose:** Authentication.

**Layout:** 2-col full viewport. Left = brand panel (`--brown-deep` bg, decorative pattern, headline, stats, quote). Right = form panel (cream bg, centered).

**Form:** Tab switcher (Sign In / Create Account) in pill container. Google SSO button (white pill). Email/password fields. Show/hide password toggle. Remember me checkbox. Submit orange pill button. Trust strip at bottom.

**On submit:** redirect to `HM Account.html`.

---

### 7. Order Tracking — `HM Order Tracking.html`
**Purpose:** Track a specific order.

**Sections:**
1. Page hero (`--brown-deep`) with breadcrumb
2. **Lookup card:** Order number + email inputs + orange "Track Order" button (pill). JS reveals results section on click.
3. **Order banner:** brown-tint bg, order details left + animated status pill right (pulsing dot for in-transit).
4. **Results grid (2-col):**
   - Left: Timeline card (6 steps with icons, done=brown, active=orange glow) + Map placeholder card + Action buttons (Reorder / Invoice / Contact support) + Storage tip card
   - Right: Sticky order summary card (items + totals + delivery address)

---

## Product Data

| # | Name | Category | Price | Image |
|---|------|----------|-------|-------|
| 1 | Classic Protein Bhel | protein | ₹199 (was ₹249) | `uploads/lite/HealthyMijo (1).jpg` |
| 2 | Millet Power Bhel | millet | ₹219 (was ₹269) | `uploads/lite/HealthyMijo (2).jpg` |
| 3 | Gym Bhel | protein | ₹229 (was ₹279) | `uploads/lite/HealthyMijo (3).jpg` |
| 4 | Chatpata Fiber Bhel | fiber | ₹199 (was ₹249) | `uploads/lite/HealthyMijo (4).jpg` |
| 5 | Jaggery Bhel | classic | ₹199 (was ₹249) | `uploads/lite/HealthyMijo (5).jpg` |
| 6 | Diet Lite Bhel | fiber | ₹199 (was ₹249) | `uploads/lite/HealthyMijo (6).jpg` |
| 7 | Kids Mild Masala Bhel | kids | ₹179 (was ₹219) | `uploads/lite/HealthyMijo (7).jpg` |
| 8 | Premium Dry Fruit Bhel | premium | ₹299 (was ₹349) | `uploads/lite/HealthyMijo (8).jpg` |

**All product images:** `object-fit: contain` with padding (not cover) — packs must show fully.

---

## Components

### Shared Header
- Logo: `uploads/Healthy Mijo.png`, height 52px
- Nav links: Home / Shop / About / Blog / Contact
- Right: "Sign in" text link (brown-deep) + search icon btn + cart icon btn with orange badge
- Hamburger for mobile (≤900px): reveals full-screen mobile nav overlay

### Shared Footer (full)
- Dark bg `#1A0905`, 5-col grid
- Col 1: logo (on cream bg, rounded) + tagline + social icons (pill borders)
- Cols 2–5: Shop / Company / Help / Account link lists
- Headings: `--green-soft`, 11px uppercase tracked
- Copy bar: FSSAI licence + links

### Product Card
```
Container:   white, 1px rule border, border-radius 18px, overflow hidden, flex-col
Image area:  aspect-ratio 1/1.05, cream-warm bg, object-fit contain, padding 8px
             Position: relative — tag chip top-left (pill), heart button top-right (pill)
Body:        padding 16px, flex-col gap 5px
  cat:       10px, uppercase, tracked, --brown
  h3:        DM Serif Display 17px
  desc:      12px, ink-soft
  price row: border-top 1px rule, flex space-between
    .now:    DM Serif Display 19px, --orange
    .was:    12px, ink-soft, line-through
    Add btn: brown pill button, 11px uppercase
Hover:       translateY(-5px) + shadow
```

### Tag Chips
```
bestseller: --orange bg, white text
protein:    --brown-deep bg, white text
millet:     --green bg, white text
fiber:      #7B3A9E bg, white text
kids:       #0D8C8C bg, white text
premium:    #B58B1C bg, white text
```

### Buttons
```
Primary CTA:   bg --orange, white text, border-radius 999px, padding 14–18px 24–28px
               font 12–14px, weight 700, uppercase, letter-spacing .08–.12em
               Shadow: 0 8px 24px -10px rgba(224,89,24,.45)
               Hover: bg --orange-deep, translateY(-1px)

Secondary:     bg --brown, white text, same pill shape, no shadow

Ghost:         border 1.5px --rule-strong, ink text, pill
               Hover: border --brown, bg --brown-tint

Wishlist/icon: white bg/tint, orange accent color
```

### Form Fields
```
Label:   11px, uppercase, tracked .18em, --brown-deep, weight 700
Input:   bg --cream-warm, border 1.5px --rule, border-radius 12px, padding 12–13px 14–15px
         font 15px, --ink
         Focus: border --brown, bg white, box-shadow 0 0 0 4px rgba(139,58,15,.10)
```

### Status Pills
```
Delivered: bg --green-tint, color --green-deep, border-radius 999px
In transit: bg --orange-tint, color --orange-deep + pulsing dot (--orange, 2s animation)
```

---

## Interactions & Behavior

| Interaction | Behavior |
|-------------|----------|
| Mobile nav | Hamburger toggles full-screen overlay, body overflow hidden |
| Category filter (Shop) | Tabs filter product grid by `data-cat` attr |
| Filter pills | Toggle `.on` class |
| Product image thumbs | Click swaps main image src |
| Size selector | Active pill gets brown-tint fill |
| Qty stepper | Min 1, max 10 |
| Account sidebar | Clicking panel link shows/hides panels, smooth scroll to top |
| Toggle switches | Click toggles `.on` class (background transitions) |
| Payment tabs | Active tab gets brown-tint fill |
| Order tracking | "Track Order" button reveals results section with smooth scroll |
| Marquee | CSS `animation: marquee 26s linear infinite`, pauses on hover |
| Card hover | translateY(-5px) + shadow transition .25s |

---

## Responsive Breakpoints

| Breakpoint | Key changes |
|------------|-------------|
| ≤1024px | Hero H1 → 58px; product grid → 2-col |
| ≤900px | Nav hidden, hamburger shown; hero goes single-col with product image shown below headline; hero stats → 2×2 grid; steps → single col; trust bar → 2-col |
| ≤600px | Hero H1 → 34px; CTAs stack full-width; product grid stays 2-col; trust bar → single col; announce bar truncates |

---

## Assets

| Asset | Path | Usage |
|-------|------|-------|
| Logo | `uploads/Healthy Mijo.png` | All pages header + footer |
| Product 1–8 | `uploads/lite/HealthyMijo (1–8).jpg` | Product images throughout |

**Important:** All product images must use `object-fit: contain` (not cover) to show the full pack without cropping.

---

## Pages & Files

| File | Page |
|------|------|
| `HM Homepage.html` | Homepage |
| `HM Shop.html` | Shop / Product listing |
| `HM Product.html` | Product detail (Classic Protein Bhel) |
| `HM Account.html` | User account dashboard |
| `HM Checkout.html` | Checkout |
| `HM Login.html` | Sign in / Register |
| `HM Order Tracking.html` | Order tracking |

---

## Notes for Claude Code

1. **Reuse FarmPuro patterns** — routing, cart state, auth flow, and API patterns from the FarmPuro implementation should carry over directly. Swap the design tokens and product data.
2. **Cart state** — needs to track items across Shop → Product → Checkout. Use existing cart context/store from FarmPuro.
3. **Auth flow** — Login → Account redirect. Use existing auth provider.
4. **FSSAI compliance** — FSSAI Lic. 10016011003814 must appear in footer. "100% Veg · Plant Based" mark required.
5. **No `object-fit: cover` on product images** — always use `contain` with a cream-warm background.
6. **Font loading** — DM Serif Display + Plus Jakarta Sans from Google Fonts. Preconnect to fonts.googleapis.com and fonts.gstatic.com.
7. **Pill buttons everywhere** — `border-radius: 999px` on all interactive buttons, no square corners.
8. **Orange is for action** — `#E05918` is used for all primary CTAs, prices, active states, and cart badges. Brown `#8B3A0F` is secondary brand. Never swap them.
