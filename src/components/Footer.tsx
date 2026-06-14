import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-olive-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-light">ECCA</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Evangelical Christian Church of Africa — Preaching the Word, Reaching the World.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-light">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-gold-light transition-colors">About Us</Link></li>
              <li><Link href="/vision" className="text-gray-300 hover:text-gold-light transition-colors">Vision & Mission</Link></li>
              <li><Link href="/churches" className="text-gray-300 hover:text-gold-light transition-colors">Our Churches</Link></li>
              <li><Link href="/give" className="text-gray-300 hover:text-gold-light transition-colors">Give</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-gold-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-light">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>P.O. Box 35032-00200</li>
              <li>Nairobi, Kenya</li>
              <li>Tel: +254 728 587 089</li>
              <li>Tel: +254 723 822 926</li>
              <li>Email: eccacentraloffice@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-olive-light mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Evangelical Christian Church of Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
