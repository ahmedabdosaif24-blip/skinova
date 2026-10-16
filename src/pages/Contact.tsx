import { useState } from 'react';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="w-full pt-32 pb-24 bg-skinova-ivory min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h1 className="font-serif text-5xl md:text-6xl text-skinova-forest mb-6">Let's Connect</h1>
            <p className="text-lg text-skinova-charcoal/80 leading-relaxed mb-10">
              Whether you have a question about our upcoming products, want to discuss a partnership, or just want to say hello, we'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-xl text-skinova-forest mb-2">Email</h4>
                <p className="text-skinova-charcoal/70">hello@skinova.placeholder</p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-skinova-forest mb-2">Social</h4>
                <p className="text-skinova-charcoal/70">@skinova.official (Coming Soon)</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 shadow-sm border border-skinova-beige/50">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-skinova-beige/30 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-skinova-forest rounded-full"></div>
                </div>
                <h3 className="font-serif text-3xl text-skinova-forest mb-4">Message Sent</h3>
                <p className="text-skinova-charcoal/70">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
                <p className="text-xs text-skinova-charcoal/40 mt-8 uppercase tracking-wider">
                  (Note: This is a placeholder form for demonstration)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium tracking-wide text-skinova-forest mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-skinova-ivory border border-skinova-beige px-4 py-3 text-sm focus:outline-none focus:border-skinova-gold transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium tracking-wide text-skinova-forest mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-skinova-ivory border border-skinova-beige px-4 py-3 text-sm focus:outline-none focus:border-skinova-gold transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium tracking-wide text-skinova-forest mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full bg-skinova-ivory border border-skinova-beige px-4 py-3 text-sm focus:outline-none focus:border-skinova-gold transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium tracking-wide text-skinova-forest mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full bg-skinova-ivory border border-skinova-beige px-4 py-3 text-sm focus:outline-none focus:border-skinova-gold transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full bg-skinova-forest text-skinova-ivory py-4 text-sm font-medium tracking-widest uppercase hover:bg-skinova-emerald transition-colors disabled:opacity-70"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Submit Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
