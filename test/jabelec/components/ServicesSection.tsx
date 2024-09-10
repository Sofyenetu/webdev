import { Wrench, Lightbulb, PlugZap } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Lightbulb className="w-12 h-12 text-green-700" />,
      title: "Conseil et expertise",
      description: "Nous offrons des conseils d'experts pour tous vos projets électriques, garantissant des solutions optimales et efficaces."
    },
    {
      icon: <Wrench className="w-12 h-12 text-green-700" />,
      title: "Réparation et rénovation",
      description: "Notre équipe qualifiée assure des réparations rapides et des rénovations complètes pour moderniser vos installations."
    },
    {
      icon: <PlugZap className="w-12 h-12 text-green-700" />,
      title: "Installation et maintenance",
      description: "De l'installation initiale à la maintenance régulière, nous veillons au bon fonctionnement de vos systèmes électriques."
    }
  ]

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nos Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          
            <h2 className="text-2xl font-bold mb-6 mt-12 text-center text-gray-800">Jabelec à votre service</h2>
            <p className="text-gray-600 mb-8 ml-10 mr-10 text-center">
              Chez Jabelec, nous nous engageons à fournir des services électriques de haute qualité. Notre équipe d'experts est prête à répondre à tous vos besoins, des petites réparations aux grands projets d'installation.
            </p>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nom</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="tel" className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                <input type="tel" id="tel" name="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Adresse</label>
                <input type="text" id="address" name="address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Détaillez votre demande</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
              </div>
              <div className="text-center mb-12">
                <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full transition duration-300" >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
      

  )
}