export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">JABELEC</h3>
              <p>Votre partenaire en solutions électriques</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p>Email: info@jabelec.com</p>
              <p>Téléphone: +33 1 23 45 67 89</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-500 transition duration-300">Facebook</a>
                <a href="#" className="hover:text-green-500 transition duration-300">Twitter</a>
                <a href="#" className="hover:text-green-500 transition duration-300">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }