import Layout from '../../components/feature/Layout';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-purple-950/20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <div className="relative max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Talk
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your infrastructure? Get in touch with our team of experts
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
                <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                  Whether you need a complete infrastructure overhaul or just want to optimize your current setup, we're here to help.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-2xl text-blue-400"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@cloudopspro.com" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                        contact@cloudopspro.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-2xl text-purple-400"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-slate-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-2xl text-cyan-400"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Availability</h3>
                      <p className="text-slate-400">24/7 Support Available</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: 'ri-linkedin-fill', url: '#' },
                      { icon: 'ri-github-fill', url: '#' },
                      { icon: 'ri-twitter-x-fill', url: '#' },
                      { icon: 'ri-youtube-fill', url: '#' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
                      >
                        <i className={`${social.icon} text-xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 text-sm"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 text-sm"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 text-sm"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pr-8 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50 transition-colors duration-300 appearance-none cursor-pointer text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="cloud">Cloud Architecture & Migration</option>
                        <option value="devops">DevOps Automation</option>
                        <option value="sre">SRE Solutions</option>
                        <option value="monitoring">Monitoring & Observability</option>
                        <option value="ai">AI/ML Infrastructure</option>
                        <option value="support">24/7 Support</option>
                        <option value="other">Other</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 resize-none text-sm"
                      placeholder="Tell us about your project..."
                    />
                    <p className="text-slate-500 text-xs mt-1">{formData.message.length}/500 characters</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-loader-4-line animate-spin"></i>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center">
                      <i className="ri-check-line mr-2"></i>
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
