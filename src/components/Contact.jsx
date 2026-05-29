import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Make sure you have these variables in your .env file
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        form.current.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
    }, (error) => {
        console.error(error.text);
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <section className="py-section-gap mb-section-gap" id="contact">
      <div className="glass-card text-on-surface p-12 md:p-24 relative overflow-hidden rounded-2xl">
        
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div>
            <h2 className="font-display text-headline-lg text-primary mb-8">
              Ready for the next <br />architecture challenge?
            </h2>
            <p className="text-secondary mb-12 text-body-lg">
              I am currently open to new software engineering opportunities and ambitious freelance projects. Let's discuss your roadmap.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="font-label-mono text-label-mono text-on-surface">swainpratik12345@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">near_me</span>
                <span className="font-label-mono text-label-mono text-on-surface">India / Remote</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-label-mono text-[12px] text-primary opacity-70">NAME</label>
                <input 
                  name="user_name"
                  className="w-full bg-surface-container-highest/50 border border-outline-variant p-3 text-on-surface focus:border-primary outline-none transition-all rounded" 
                  type="text" 
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-mono text-[12px] text-primary opacity-70">EMAIL</label>
                <input 
                  name="user_email"
                  className="w-full bg-surface-container-highest/50 border border-outline-variant p-3 text-on-surface focus:border-primary outline-none transition-all rounded" 
                  type="email" 
                  placeholder="hello@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-mono text-[12px] text-primary opacity-70">MESSAGE</label>
              <textarea 
                name="message"
                className="w-full bg-surface-container-highest/50 border border-outline-variant p-3 text-on-surface focus:border-primary outline-none transition-all rounded" 
                rows="4" 
                placeholder="Tell me about your project or next big idea..."
                required
              ></textarea>
            </div>
            <button 
              className={`w-full bg-primary text-on-primary px-8 py-4 font-label-mono text-label-mono rounded transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 active:scale-95'}`} 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-500 font-label-mono text-[12px] text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 font-label-mono text-[12px] text-center">Oops! Something went wrong. Make sure API keys are set.</p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
