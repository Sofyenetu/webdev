import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/alpes.jpg"
        alt="Mountain landscape"
        fill={true}
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          UN TECHNICIEN QUI SAURA VOUS <br className="hidden md:inline" />
          RECONCILIER AVEC L'ELECTRICITÉ
        </h1>
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
          Demandez un devis
        </button>
      </div>
    </section>
  )
}