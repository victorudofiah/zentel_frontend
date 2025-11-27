export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-4">Zentel Insight</h2>
          <p className="text-gray-300">
            Empowering Africa through digital skills — from design to tech.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <p className="text-gray-300">Email: support@zentelinsight.com</p>
          <p className="text-gray-300">WhatsApp: +234 813 000 0000</p>
        </div>

      </div>

      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} Zentel Insight. All rights reserved.
      </div>
    </footer>
  );
}
