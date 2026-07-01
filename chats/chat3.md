# # Farm Puro Chutneys PDP

_Started 2026-05-25 10:40 UTC_

---

## User

Design the Product Detail Page (PDP) mockup for Farm Puro Chutneys. Use Coriander Mint Chutney as the example product.  BRAND: green #2D6A2D, brown #6B3A1F, cream #FAF7F2, gold #C8860A, Playfair Display headings, Inter body.  PAGE LAYOUT: 1. HEADER — same sticky header 2. BREADCRUMB — Home > Shop > Coriander Mint Chutney 3. MAIN CONTENT (2 columns):    LEFT COLUMN:    - Large product image (square, rounded corners)    - 3 smaller thumbnail images below (same image repeated as placeholders)    RIGHT COLUMN:    - Product name (Playfair Display, large)    - Spice level badge (green dot + "Medium")    - Price: Rs. 199 (bold, brand-green)    - Short description (2-3 sentences)    - Weight: 250g    - Quantity stepper (- / 1 / +)    - Add to Cart button (full width, gold background)    - Divider line    - "Best Paired With" — 3 items with food emoji and label    - Hero ingredient highlight box (light green bg): "Key Ingredient: Fresh Coriander"    - Freshness strip: leaf icon + "Made fresh. No preservatives. Ships within 24 hours." 4. BELOW FOLD:    - Full description section (cream background)    - "You May Also Like" — 4 related product cards 5. FOOTER — same footer  Desktop (1280px). The right column CTA (Add to Cart) must be visually dominant.

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: grep]_

_[tool: read_file]_

_[tool: update_todos]_

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Built the Coriander Mint Chutney PDP at **Product.html** — full 1280px layout matching the existing Shop page's visual system.

**Key choices for the dominant gold CTA:**
- The Add to Cart button is a tall (64px) gold pill stretching the right column, with an inset bottom shadow + soft drop shadow for tactile weight, and the live price embedded inside it (₹199 next to a divider) so the value is impossible to miss
- Stacked beneath: a secondary "Buy it now" brown-outline button for express checkout — keeps the gold visually alone at the top of the action stack
- Quantity stepper sits compactly to the left so the gold gets ~3× the visual mass

**Other notes:**
- Reused the sticky header/footer, color tokens, type pairing, spice indicators, and product card pattern from Shop.html — no new visual vocabulary introduced
- Coriander image is reused across the 4 thumbnails (2 with shifted `object-position`, 1 styled placeholder "pairing shot")
- Ingredient highlight uses the brand green tint with a circular green icon badge; freshness strip uses a dashed border to read as a "shipping promise" stamp
- "You may also like" pulls 4 sibling jars from the existing Shop grid using the same card markup

