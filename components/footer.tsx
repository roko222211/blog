import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/roko222211",
      icon: Github,
      label: "Visit my GitHub profile"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/roko-grgurić-506b32295/",
      icon: Linkedin,
      label: "Connect with me on LinkedIn"
    },
    {
      name: "Email",
      href: "mailto:rokogrguric@gmail.com",
      icon: Mail,
      label: "Send me an email"
    }
  ]

  return (
    <footer className="border-t bg-muted/30" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group w-fit cursor-pointer"
              aria-label="Blog home"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50">
                <span className="text-primary-foreground font-bold text-lg select-none">B</span>
              </div>
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                Blog
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tehnologija, financije i razvoj softvera.
            </p>
          </div>

          {/* Links */}
          <nav className="space-y-3" aria-label="Footer navigation">
            <h4 className="text-sm font-semibold">Navigacija</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center group"
                >
                  <span className="relative">
                    Početna
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center group"
                >
                  <span className="relative">
                    Članci
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center group"
                >
                  <span className="relative">
                    O meni
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Kontakt</h4>
            <div className="flex gap-3" role="list">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="group relative flex h-10 w-10 items-center justify-center rounded-lg border bg-background hover:bg-accent transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={social.label}
                    role="listitem"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              <a 
                href="mailto:rokogrguric@gmail.com"
                className="hover:text-foreground transition-colors duration-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                rokogrguric@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground text-center md:text-left">
              © {currentYear} Roko Grgurić. Sva prava pridržana.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="hidden sm:inline">Izgrađeno s Claude Sonnet 4.5</span>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
