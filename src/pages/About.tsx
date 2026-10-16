export function About() {
  return (
    <div className="w-full pt-32 pb-24 bg-skinova-ivory min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl text-skinova-forest mb-8">Getting to Know SKINOVA</h1>
          <p className="text-xl text-skinova-charcoal/80 leading-relaxed font-light">
            SKINOVA is an emerging skincare and personal care brand built around a simple idea: everyday care deserves thoughtful design. Our goal is to develop a recognizable, modern brand that makes personal care approachable while maintaining a consistent visual identity and a professional customer experience.
          </p>
        </div>

        <div className="space-y-24">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl text-skinova-forest border-b border-skinova-gold pb-4 inline-block">1. Who We Are</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-skinova-charcoal/80 leading-relaxed text-lg">
                We are a modern cosmetics brand focused on the essentials. Rather than overwhelming you with endless options, we are dedicating ourselves to creating a curated selection of high-quality, beautifully presented products that you will want to reach for every single day.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl text-skinova-forest border-b border-skinova-gold pb-4 inline-block">2. Why SKINOVA</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-skinova-charcoal/80 leading-relaxed text-lg">
                Because skincare shouldn't be complicated. We believe in taking the confusion out of personal care by focusing on what truly matters: hydration, protection, and consistency. SKINOVA exists to provide reliable staples that elevate your daily routine without overcomplicating it.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl text-skinova-forest border-b border-skinova-gold pb-4 inline-block">3. Our Philosophy</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-skinova-charcoal/80 leading-relaxed text-lg">
                Less, but better. We champion a minimalist approach to product development, ensuring that every item bearing the SKINOVA name serves a distinct purpose. Our visual language—rooted in deep greens, warm golds, and clean lines—reflects this commitment to refined simplicity.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl text-skinova-forest border-b border-skinova-gold pb-4 inline-block">4. What We Aim to Deliver</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-skinova-charcoal/80 leading-relaxed text-lg">
                Formulations that feel good and packaging that looks good on your bathroom counter. We are currently developing our inaugural line, starting with our signature Lip Balm and Daily Moisturiser, engineered to provide essential hydration and a subtle, natural glow.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl text-skinova-forest border-b border-skinova-gold pb-4 inline-block">5. Our Commitment</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-skinova-charcoal/80 leading-relaxed text-lg">
                To remain transparent, accessible, and customer-focused as we grow. While we are at the beginning of our journey, our promise is to consistently listen to our community and refine our offerings to meet the real, everyday needs of our customers.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
