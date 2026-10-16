export function Vision() {
  return (
    <div className="w-full pt-32 pb-24 bg-skinova-ivory min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <h1 className="font-serif text-5xl md:text-6xl text-skinova-forest mb-6">Mission & Vision</h1>
          <div className="w-24 h-px bg-skinova-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="bg-skinova-beige/20 p-10 border border-skinova-gold/20">
            <h2 className="font-serif text-3xl text-skinova-forest mb-6">Our Mission</h2>
            <p className="text-lg text-skinova-charcoal/80 leading-relaxed italic">
              "To create accessible, thoughtfully presented skincare essentials that fit naturally into everyday personal care routines."
            </p>
          </div>
          
          <div className="bg-skinova-forest p-10 border border-skinova-emerald">
            <h2 className="font-serif text-3xl text-skinova-gold mb-6">Our Vision</h2>
            <p className="text-lg text-skinova-ivory/90 leading-relaxed italic">
              "To build SKINOVA into a recognizable and trusted personal care brand known for its modern identity, consistent quality standards, and customer-focused approach."
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-4xl text-skinova-forest text-center mb-16">Core Values</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { title: "Quality", desc: "Uncompromising standards in everything we produce." },
              { title: "Simplicity", desc: "Removing the unnecessary to focus on the essential." },
              { title: "Accessibility", desc: "Premium experiences that remain approachable." },
              { title: "Trust", desc: "Building honest relationships with our community." },
              { title: "Continuous Improvement", desc: "Always learning, refining, and evolving." },
              { title: "Customer Focus", desc: "Designing for real people and real routines." }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 mx-auto mb-6 border border-skinova-gold/50 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-skinova-forest rounded-full"></div>
                </div>
                <h3 className="font-serif text-2xl text-skinova-forest mb-3">{value.title}</h3>
                <p className="text-sm text-skinova-charcoal/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
