import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-2 text-black">Contactez-nous</CardTitle>
            <CardDescription className="text-center">
              Nous sommes là pour répondre à toutes vos questions et vous aider dans vos projets électriques.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Nom</label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                  <Input type="email" id="email" name="email" required />
                </div>
              </div>
              <div>
                <label htmlFor="tel" className="block text-sm font-medium text-black mb-1">Téléphone</label>
                <Input type="tel" id="tel" name="tel" required />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-black mb-1">Adresse</label>
                <Input type="text" id="address" name="address" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Votre message</label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <div className="text-center">
                <Button type="submit" className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white">Envoyer</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}