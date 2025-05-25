import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-custom-cream text-zinc-800 py-12">
      <div className="container px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          					<Link href="/" className="flex items-center" aria-label="Inicio">
						<img
							src="/innataBlack.png"
							alt="Logo Innata"
							className="h-20 w-auto max-w-[150px]"
						/>
					</Link>
          <p className="text-zinc-600 max-w-xs">
            Transformando vidas a través del fitness. Únete a nuestra comunidad y eleva tu experiencia.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-zinc-800 hover:text-custom-teal">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-zinc-800 hover:text-custom-teal">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-zinc-800 hover:text-custom-teal">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">ENLACES</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-zinc-600 hover:text-custom-teal">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/clases" className="text-zinc-600 hover:text-custom-teal">
                Clases
              </Link>
            </li>
            <li>
              <Link href="/paquetes" className="text-zinc-600 hover:text-custom-teal">
                Paquetes
              </Link>
            </li>
            <li>
              <Link href="/reservar" className="text-zinc-600 hover:text-custom-teal">
                Reservar
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-zinc-600 hover:text-custom-teal">
                Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">HORARIOS</h4>
          <ul className="space-y-2 text-zinc-600">
            <li>Lunes a Viernes:</li>
            <li className="ml-2">(7:00-7:45) (8:15-9:00) (6:00-6:45) (8:00-8:45)</li>
            <li>Sábado:</li>
            <li className="ml-2">(8:00-8:45) (9:15-10:00)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">CONTACTO</h4>
          <address className="not-italic text-zinc-600 space-y-2">
            <p>Av. Principal #123</p>
            <p>Ciudad, CP 12345</p>
            <p>Tel: 775-357-1894</p>
            <p>Email: innata@indoor@gmail.com</p>
          </address>
        </div>
      </div>

      <div className="container px-4 mt-12 pt-6 border-t border-zinc-200">
        <p className="text-center text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} Innata Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
