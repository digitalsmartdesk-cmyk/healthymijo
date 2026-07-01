# Checkout Form Mockup

_Started 2026-05-25 10:52 UTC_

---

## User

Design the Checkout page mockup for Farm Puro Chutneys.  BRAND: green #2D6A2D, brown #6B3A1F, cream #FAF7F2, gold #C8860A, Playfair Display headings, Inter body.  PAGE LAYOUT (2 columns — form left, summary right):  LEFT COLUMN — CHECKOUT FORM: Step indicator at top: 1 Delivery Details > 2 Review Order > 3 Payment (show Step 1 active)  DELIVERY DETAILS FORM: - Full Name - Mobile Number (with +91 prefix) - Email Address - Address Line 1 - Address Line 2 (optional) - Pincode | City (side by side) - State (dropdown) - Delivery Instructions (optional textarea) - "Continue to Review" button (gold, full width)  RIGHT COLUMN — ORDER SUMMARY (sticky): - Heading: "Order Summary" - 2 cart items shown:   * Coriander Mint Chutney x1 — Rs. 199   * Tamarind Date Chutney x2 — Rs. 498 - Coupon code input + Apply button - Subtotal: Rs. 697 - Delivery: FREE (order above Rs. 499) - Total: Rs. 697 (bold, large) - Secure payment icons (UPI, Visa, Mastercard, RuPay) - Small text: "Powered by Razorpay"  HEADER — simplified (logo only, no nav, no cart icon — reduces distraction during checkout)  Desktop (1280px). The form must feel clean, trustworthy, and easy to complete.

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: write_file]_

_[tool: done]_

Checkout page is up at **Checkout.html** — matches the existing Farm Puro look (Playfair + Inter, brand greens/brown/gold/cream, same card styling and gold CTA as the PDP).

Highlights:
- **Simplified header** — logo only, with a "Secure checkout · SSL" indicator instead of nav/cart
- **Step indicator** — Step 1 Delivery active (filled green), Steps 2 & 3 muted, dashed connectors
- **Form** — single-column field stack with paired fields (Mobile+Email, Pincode+City) on one row; +91 prefix block with mini Indian flag; cream-tinted inputs that turn white on focus with a soft green ring; an inline "Delivers in 2–3 days" hint on the pincode; a green "Save this address" affordance
- **Continue to Review** — full-width gold button with arrow, matching the Add-to-Cart style on the PDP
- **Sticky summary** — both items with real jar thumbnails + quantity dots, dashed coupon row, FREE delivery callout, big Playfair total in deep green
- **Payment row** — UPI/Visa/Mastercard/RuPay chips with brand-correct colour cues, "Powered by Razorpay" line, plus a 3-item trust card below

_[tool: fork_verifier_agent]_

Checkout page is ready at **Checkout.html**.

