# Ratna Commercial Agencies Website

A modern, professional B2B website for Ratna Commercial Agencies (Pvt) Ltd - a supplier of industrial metals, machinery, tools, hardware, and animal feed.

## 🚀 Features

- **Modern B2B Design**: Clean, professional interface targeting procurement managers and industrial buyers
- **Product Catalog**: Comprehensive product listing with categories, search, and filtering
- **Product Detail Pages**: Detailed specifications, use cases, and datasheets
- **Quote Request System**: Professional lead generation flow
- **Responsive Design**: Fully mobile-responsive across all pages
- **SEO Optimized**: Proper metadata, structured data, and semantic HTML
- **Fast Performance**: Built with Next.js 14 for optimal speed

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Data**: JSON-based product catalog

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the website.

## 📁 Project Structure

```
ratna-commercial/
├── app/                          # Next.js app directory
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── products/                 # Product listing & detail pages
│   │   └── [slug]/              # Dynamic product pages
│   ├── request-quote/           # Quote request pages
│   │   └── success/             # Quote success page
│   ├── layout.tsx               # Root layout with header/footer
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   ├── ProductCard.tsx          # Product card component
│   └── CategoryCard.tsx         # Category card component
├── data/                        # Data files
│   └── products.json            # Product catalog data
├── types/                       # TypeScript types
│   └── product.ts               # Product & category types
└── public/                      # Static assets
    ├── images/                  # Product & category images (placeholder)
    └── datasheets/              # PDF datasheets (placeholder)
```

## 📝 Adding New Products

### 1. Edit the Product Data

Open `data/products.json` and add a new product to the `products` array:

```json
{
  "id": "unique-product-id",
  "name": "Product Name",
  "category": "category-id",
  "slug": "product-name-slug",
  "shortDescription": "Brief description for cards",
  "description": "Detailed product description",
  "specs": {
    "Specification Name": "Value",
    "Another Spec": "Another Value"
  },
  "useCases": [
    "Use case 1",
    "Use case 2"
  ],
  "image": "/images/products/product-image.jpg",
  "datasheetUrl": "/datasheets/product-datasheet.pdf"
}
```

### 2. Product Data Fields

- **id**: Unique identifier (e.g., "copper-wire-1")
- **name**: Display name of the product
- **category**: Must match a category ID from the categories array
- **slug**: URL-friendly version (e.g., "copper-wire-c11000")
- **shortDescription**: 1-2 sentence summary for product cards
- **description**: Full product description for detail page
- **specs**: Object with specification names and values
- **useCases**: Array of application examples
- **image**: Path to product image (placeholder for now)
- **datasheetUrl**: Path to PDF datasheet (placeholder for now)

### 3. Auto-Generation

The website will automatically:
- Generate product detail pages at `/products/[slug]`
- Add the product to the catalog listing
- Enable search and filtering
- Create proper SEO metadata

## 🎨 Customization

### Colors

The website uses a professional B2B color scheme:
- Primary: Blue (`blue-600`) - buttons, links, accents
- Background: Gray (`gray-50`) - page backgrounds
- Text: Dark slate (`slate-900`) for headings, gray for body text
- Navigation: Dark slate (`slate-900`)

To change colors, edit Tailwind classes throughout the components or modify `tailwind.config.ts`.

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/products/[slug]/page.tsx` (sidebar)

### Company Information

Update company details in:
- `app/about/page.tsx` - Company story, timeline, mission
- `app/layout.tsx` - Site metadata and SEO
- `components/Footer.tsx` - Footer description

### Hero Section

Edit the home page hero in `app/page.tsx`:
- Main heading
- Subheading
- CTA button text
- Background styling

## 🖼️ Adding Images

### Product Images

1. Add images to `public/images/products/`
2. Update the `image` field in `products.json`
3. Use format: `/images/products/filename.jpg`

### Category Images

1. Add images to `public/images/categories/`
2. Update category `image` fields in `products.json`

### Placeholder Images

Currently using emoji placeholders. Replace with:
- Real product photography
- Professional industrial imagery
- Category-specific visuals

## 📄 Adding Datasheets

1. Place PDF files in `public/datasheets/`
2. Update `datasheetUrl` in product data
3. Users can download from product detail pages

## 🌐 Categories

Current categories (edit in `products.json`):
- Non-Ferrous Metals
- Ferrous Metals
- Machinery
- Tools & Hardware
- Animal Feed

### Adding a New Category

```json
{
  "id": "new-category",
  "name": "Category Name",
  "slug": "category-slug",
  "description": "Category description",
  "image": "/images/categories/category.jpg"
}
```

## 🔍 SEO

### Page Metadata

Each page has optimized metadata in its component:
```typescript
export const metadata: Metadata = {
  title: 'Page Title - Ratna Commercial Agencies',
  description: 'Page description',
};
```

### Structured Data

Consider adding JSON-LD structured data for products in `app/products/[slug]/page.tsx` for better search visibility.

## 📧 Form Handling

### Contact Form

Located in `app/contact/page.tsx`. Currently shows success message. To integrate:
1. Add API route in `app/api/contact/route.ts`
2. Send email using services like SendGrid, AWS SES, or Resend
3. Update form submission handler

Example API route:
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email with your service
  return Response.json({ success: true });
}
```

### Quote Request Form

Located in `app/request-quote/page.tsx`. To integrate:
1. Create API route for quote submissions
2. Send to CRM or email
3. Store in database if needed

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Platforms

The site works on any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Docker

### Environment Variables

Create `.env.local` for sensitive data:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
EMAIL_API_KEY=your_email_api_key
# Add other variables as needed
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

Test on different devices using browser dev tools.

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus states on interactive elements

## 🔧 Development

### Code Quality

```bash
# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

### Adding Dependencies

```bash
# Example: Adding a library
npm install library-name
```

## 📊 Current Content

The website includes:
- **10 sample products** across 5 categories
- **5 product categories** with descriptions
- **Complete page structure** (home, products, about, contact, quote)
- **Mock data** ready to be replaced with real content

## 🎯 Next Steps

1. **Replace placeholder images** with real product photos
2. **Add actual datasheets** for products
3. **Update company information** with accurate details
4. **Integrate forms** with email service or CRM
5. **Add more products** to the catalog
6. **Set up analytics** (Google Analytics, etc.)
7. **Configure email** for quote submissions
8. **Add client logos** to home page
9. **Customize colors/branding** if needed
10. **Set up domain** and deploy

## 📞 Support

For questions about the codebase:
- Check the code comments
- Review [Next.js 14 documentation](https://nextjs.org/docs)
- Review [TailwindCSS documentation](https://tailwindcss.com/docs)

## 📄 License

Private and proprietary to Ratna Commercial Agencies (Pvt) Ltd.

---

Built with ❤️ using Next.js 14 and TailwindCSS
