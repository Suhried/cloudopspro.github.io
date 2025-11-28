import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Cloud Architecture', path: '/services#cloud' },
      { name: 'DevOps Automation', path: '/services#devops' },
      { name: 'SRE Solutions', path: '/services#sre' },
      { name: 'AI/ML Infrastructure', path: '/services#ai' }
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Technologies', path: '/technologies' },
    ],
    Support: [
      { name: 'Contact', path: '/contact' },
      { name: 'Documentation', path: '/docs' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Status', path: '/status' }
    ]
  };

  const socialLinks = [
    { icon: 'ri-linkedin-fill', url: '#', name: 'LinkedIn' },
    { icon: 'ri-github-fill', url: '#', name: 'GitHub' },
    { icon: 'ri-twitter-x-fill', url: '#', name: 'Twitter' },
    { icon: 'ri-youtube-fill', url: '#', name: 'YouTube' }
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <i className="ri-cloud-line text-2xl text-white"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: '"Pacifico", serif' }}>
                CloudOps Pro
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We build the backbone of your digital future with enterprise-grade cloud engineering, DevOps, and SRE solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} CloudOps Pro. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-300 cursor-pointer">
                Terms of Service
              </Link>
              <a 
                href="https://readdy.ai/?origin=logo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-300 cursor-pointer"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
