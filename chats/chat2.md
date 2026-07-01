# Shop Page Mockup

_Started 2026-05-25 10:11 UTC_

---

## User

Design the Shop page mockup for Farm Puro Chutneys using the same brand identity as the homepage.  BRAND: green #2D6A2D, brown #6B3A1F, cream #FAF7F2, gold #C8860A, Playfair Display headings, Inter body.  PAGE ELEMENTS: 1. HEADER — same as homepage (sticky, consistent) 2. PAGE HERO — short banner: "Our Chutneys" heading, subheading, breadcrumb (Home > Shop) 3. FILTER BAR (sticky below header on scroll):    - Category tabs: All | Chutneys | Pastes | Thecha — active tab in brand-green    - Spice filter: All | Mild | Medium | Hot | Very Hot    - Sort dropdown: Featured | Price Low-High | Price High-Low 4. PRODUCT GRID — 4 columns, show all 9 products:    Each card: product image (square), spice level dot indicator, product name, short description, weight (250g), price, Add to Cart button    Card hover state: subtle lift shadow 5. FOOTER — same as homepage  Products to show in grid: Tamarind Date Chutney Rs.249, Coconut Chutney Rs.199, Garlic Red Chutney Rs.229, Coriander Mint Chutney Rs.199, Ginger-Garlic Paste Rs.179, Tomato Onion Chutney Rs.219, Curry Leaf Chutney Rs.219, Green Chilli Thecha Rs.229, Peanut Garlic Chutney Rs.229.  Desktop (1280px). Make the filter bar clean and easy to use.

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Shop page is live at **Shop.html**, matching the homepage's brand system (greens/brown/cream/gold, Playfair + Inter).

Highlights:
- **Page hero** in brand-green with breadcrumb (Home › Shop), heading "Our chutneys, pickles & pastes," and a small stats column (9 jars / 250g / 0 preservatives).
- **Sticky filter bar** sits just below the sticky header. Category tabs (pill segmented control with counts), spice pills with colored dot indicators (Mild → Very Hot maps to green → red), and a styled sort dropdown.
- **4-column grid, all 9 products** with spice-level dot indicator, weight (250g), price, and Add-to-Cart. Hover lifts the card with a soft shadow + quick-view pill.
- The 4 products with photography (Tamarind, Coconut, Garlic Red, Coriander Mint) reuse the homepage imagery. The 5 without photos (Ginger-Garlic Paste, Tomato Onion, Curry Leaf, Green Chilli Thecha, Peanut Garlic) get tasteful illustrated jar placeholders in palette-appropriate hues — drop in real photography when ready.
- Footer is identical to the homepage.

Tabs and spice pills are click-interactive (visual toggle); wire them to actual filtering when the catalogue is live.

