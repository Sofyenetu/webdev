'use client'

import { useState, useEffect } from 'react'
import { Wrench, Lightbulb, PlugZap, Hammer, X } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    icon: <Lightbulb className="w-16 h-16 text-green-700" />,
    title: "Installation",
    description: "Installation de systèmes électriques pour les nouvelles constructions et les rénovations.",
    longDescription: "Notre service d'installation électrique assure une mise en place professionnelle et sécurisée de vos systèmes électriques. Nous offrons des solutions complètes pour les nouvelles constructions, la mise à niveau des systèmes existants, l'installation de panneaux électriques, le câblage pour l'éclairage, les prises et les appareils, ainsi que des solutions d'éclairage intérieur et extérieur.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    icon: <Wrench className="w-16 h-16 text-green-700" />,
    title: "Rénovation",
    description: "Mise à niveau et modernisation des installations électriques existantes.",
    longDescription: "Notre service de rénovation électrique vise à moderniser et optimiser vos installations existantes. Nous évaluons votre système actuel, identifions les améliorations possibles, et mettons en œuvre des solutions pour augmenter l'efficacité énergétique, la sécurité et la fonctionnalité de votre installation électrique.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    icon: <PlugZap className="w-16 h-16 text-green-700" />,
    title: "Borne VE",
    description: "Installation de bornes de recharge pour véhicules électriques.",
    longDescription: "Nous sommes spécialisés dans l'installation de bornes de recharge pour véhicules électriques, adaptées à vos besoins résidentiels ou professionnels. Notre équipe vous conseille sur le choix de la borne la plus appropriée et assure une installation conforme aux normes de sécurité en vigueur.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    icon: <Hammer className="w-16 h-16 text-green-700" />,
    title: "Dépannage",
    description: "Service rapide de dépannage pour tous vos problèmes électriques.",
    longDescription: "Notre service de dépannage électrique est disponible pour résoudre rapidement et efficacement tous vos problèmes électriques. Que ce soit pour une panne, un court-circuit, ou tout autre dysfonctionnement, notre équipe d'experts intervient dans les plus brefs délais pour assurer votre sécurité et le bon fonctionnement de vos installations.",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const serviceTitle = hash.replace('#', '').toLowerCase()
      const service = services.find(s => s.title.toLowerCase() === serviceTitle)
      if (service) {
        setExpandedService(service.title)
      }
    }
  }, [])

  const handleExpand = (title: string) => {
    setIsAnimating(true)
    setExpandedService(expandedService === title ? null : title)
    setTimeout(() => setIsAnimating(false), 500) // Match this with animation duration
  }

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Nos Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 1 }}
                animate={{ 
                  opacity: expandedService && expandedService !== service.title ? 0 : 1,
                  width: expandedService === service.title ? '100%' : 'auto',
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={expandedService === service.title ? 'col-span-full' : ''}
              >
                <Card className="h-full transition duration-300 hover:shadow-lg">
                  {expandedService === service.title ? (
                    <div className="grid md:grid-cols-2 gap-6 p-6">
                      <div>
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-semibold mb-4 text-black">{service.title}</CardTitle>
                        <CardDescription className="text-base mb-4">{service.longDescription}</CardDescription>
                        <Button 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => handleExpand(service.title)}
                        >
                          <X className="mr-2 h-4 w-4" /> Fermer
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <CardHeader>
                        <div className="flex justify-center mb-4">{service.icon}</div>
                        <CardTitle className="text-2xl font-semibold text-center text-black">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center mb-4">{service.description}</CardDescription>
                        <div className="text-center">
                          <Button
                            variant="default"
                            className="bg-green-700 hover:bg-green-800 text-white"
                            onClick={() => handleExpand(service.title)}
                            disabled={isAnimating}
                          >
                            En savoir plus
                          </Button>
                        </div>
                      </CardContent>
                    </>
                  )}
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}