# Quick Start Guide

Get your Ratna Commercial website up and running in 5 minutes!

## ⚡ Fast Setup

```bash
# Navigate to project
cd ratna-commercial

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Immediate Customization Tasks

### 1. Update Contact Information (5 minutes)

**Files to edit:**
- `components/Footer.tsx` - Lines 88-98
- `app/contact/page.tsx` - Lines 59-109
- `app/products/[slug]/page.tsx` - Lines 139-145

**Replace:**
- Address: "123 Industrial Avenue, Colombo, Sri Lanka"
- Phone: "+94 11 234 5678"
- Email: "info@ratnacommercial.lk"

### 2. Update Company Story (10 minutes)

**File:** `app/about/page.tsx`

**Sections to customize:**
- Company overview (lines 28-42)
- Timeline dates and events (lines 113-171)
- Adjust founding year, expansion dates, milestones

### 3. Customize Home Page (10 minutes)

**File:** `app/page.tsx`

**What to update:**
- Hero heading and description (lines 16-22)
- Statistics (lines 47-60) - Years in business, countries, clients
- Company description in "Why Choose Us" (lines 104-137)

### 4. Add Your First Real Product (15 minutes)

**File:** `data/products.json`

1. Copy an existing product entry
2. Update all fields with real product data
3. Save the file - product automatically appears!

Example:
```json
{
  "id": "your-product-1",
  "name": "Your Product Name",
  "category": "non-ferrous",
  "slug": "your-product-name",
  "shortDescription": "Brief description",
  "description": "Full description",
  "specs": {
    "Spec 1": "Value 1",
    "Spec 2": "Value 2"
  },
  "useCases": ["Use 1", "Use 2"],
  "image": "/images/products/your-image.jpg",
  "datasheetUrl": "/datasheets/your-datasheet.pdf"
}
```

## 🎨 Quick Styling Changes

### Change Primary Color

Find and replace `blue-600` with your preferred Tailwind color:
```bash
# Example: Change to green
# Find: blue-600
# Replace: green-600
```

Common locations:
- `components/Header.tsx`
- `app/page.tsx`
- `components/Footer.tsx`
- All form pages

### Update Logo

**File:** `components/Header.tsx` (lines 15-18)

Replace the text logo with an image:
```tsx
<Link href="/" className="flex items-center">
  <Image src="/logo.png" alt="Ratna Commercial" width={200} height={50} />
</Link>
```

## 📸 Adding Images

### Product Images

1. Place images in `public/images/products/`
2. Update `image` path in `products.json`
3. Recommended: 800x600px, WebP or JPG format

### Category Images

1. Place images in `public/images/categories/`
2. Update category `image` paths in `products.json`
3. Recommended: 600x400px

## 📧 Set Up Forms (Optional)

### Quick Email Integration

Install a service:
```bash
npm install @sendgrid/mail
# or
npm install resend
```

Create API route `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Send email with your preferred service
  // Example with SendGrid, Resend, etc.
  
  return NextResponse.json({ success: true });
}
```

Update form in `app/contact/page.tsx` to call your API.

## 🚀 Deploy to Vercel (10 minutes)

### One-Command Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel
```

Or:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

## ✅ Pre-Launch Checklist

- [ ] Update all contact information
- [ ] Replace placeholder company story
- [ ] Add at least 5 real products
- [ ] Update home page statistics
- [ ] Add company logo
- [ ] Test all pages on mobile
- [ ] Test quote request form
- [ ] Add real product images
- [ ] Set up form email delivery
- [ ] Configure custom domain
- [ ] Add Google Analytics (optional)

## 🆘 Common Issues

### Build fails with type errors
Run: `npm run build` to see specific errors. Usually fixed by ensuring all product data fields match the expected types.

### Images not loading
Ensure images are in `public/` directory and paths start with `/`

### Forms not submitting
Check browser console for errors. Remember to set up API routes for production use.

### Styles not applying
Run: `npm run dev` fresh and clear browser cache

## 📞 Need Help?

Check the main `README.md` for detailed documentation on:
- Complete customization guide
- Adding products
- Form integration
- Deployment options
- SEO optimization

---

**Ready to launch?** Start with the immediate customization tasks above! 🚀
