# SKINOVA - CARE. HYDRATE. GLOW.

A modern, premium-looking, responsive website for SKINOVA, an emerging skincare and personal care brand.

## Technologies Used
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React

## Project Structure
- `src/components/`: Reusable UI components (Header, Footer, ProductCard)
- `src/pages/`: Page components (Home, Products, ProductDetails, About, Vision, Contact)
- `src/data/`: Static data structures (products.ts)
- `src/lib/`: Utility functions
- `public/`: Static assets like the logo

## How to Run Locally

Since this project requires Node.js, please follow these steps to run it on your machine:

1. **Install Node.js**: If you haven't already, download and install Node.js from [nodejs.org](https://nodejs.org/). This will also install `npm` (Node Package Manager).

2. **Open Terminal / Command Prompt**:
   Navigate to the project directory where this `README.md` is located.
   ```bash
   cd path/to/skinova
   ```

3. **Install Dependencies**:
   Run the following command to install all the required packages for the website:
   ```bash
   npm install
   ```

4. **Start the Development Server**:
   Once the installation is complete, start the local server:
   ```bash
   npm run dev
   ```

5. **View the Website**:
   Open your browser and navigate to `http://localhost:5173` (or the URL provided in your terminal).

## Exporting & Deployment

- **Build for Production**:
  ```bash
  npm run build
  ```
  This will create a `dist` folder containing the optimized static assets ready for deployment on Vercel, Netlify, AWS, etc.

## Outstanding Items for Production Launch
- [ ] Connect a real backend or email service for the Contact form.
- [ ] Connect a newsletter subscription service.
- [ ] Replace placeholder product information (ingredients, directions) with verified data.
- [ ] Add real product photography.
- [ ] Integrate a shopping cart and checkout system (e.g., Shopify, Stripe) when ready for e-commerce.
- [ ] Set up actual social media handles and link them in the footer.
- [ ] Update legal pages (Privacy Policy, Terms & Conditions).
