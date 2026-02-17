import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O meni | Roko Grgurić",
  description: "Student elektrotehnike na FER-u s fokusom na financijska tržišta, fundamentalnu analizu dionica i umjetnu inteligenciju.",
}

export default function AboutPage() {
  const favoriteSubjects = [
    "Matematičko modeliranje u inžinjerstvu",
    "Statistička analiza podataka",
    "Signali i sustavi",
    "Vjerojatnost i statistika",
    "Matematička analiza 2",
    "Matematička analiza 3"
  ]

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/roko222211",
      icon: Github,
      label: "Visit my GitHub"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/roko-grgurić-506b32295/",
      icon: Linkedin,
      label: "Connect on LinkedIn"
    },
    {
      name: "Email",
      href: "mailto:rokogrguric@gmail.com",
      icon: Mail,
      label: "Send me an email"
    }
  ]

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-20">
      <div className="space-y-12">
        {/* Header */}
        <header className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold">Roko Grgurić</h1>
          <p className="text-xl text-muted-foreground">
            Student @ FER | Project Manager @ EESTEC
          </p>
        </header>

        {/* Main Bio Card */}
        <Card className="border-2 hover:border-primary/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <CardContent className="pt-6">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Student završne godine <strong className="text-foreground">Fakulteta elektrotehnike i računarstva (FER)</strong> u Zagrebu. 
                Trenutno radim na <strong className="text-foreground">preddiplomskom radu</strong> u 
                <strong className="text-foreground"> Laboratoriju za financijske i rizične analize</strong>, 
                gdje istražujem primjenu tehnologije u financijskim institucijama.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Project Manager u <strong className="text-foreground">EESTEC LC Zagreb</strong> gdje organiziram NeoData workshop fokusiran na 
                data science i machine learning. Član <strong className="text-foreground">Studentskog zbora FER-a</strong> i 
                <strong className="text-foreground"> Financijskog kluba</strong>.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Zanima me <strong className="text-foreground">fundamentalna analiza dionica</strong>, 
                <strong className="text-foreground"> kvantitativne financije</strong> i sve više i više 
                <strong className="text-foreground"> umjetna inteligencija</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Favorite Subjects */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl font-bold text-center">Omiljeni kolegiji</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {favoriteSubjects.map((subject, i) => (
              <span
                key={subject}
                style={{ animationDelay: `${300 + i * 50}ms` }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 cursor-default select-none animate-fade-in-up"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4 text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-2xl font-bold">Kontakt</h2>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex h-12 w-12 items-center justify-center rounded-lg border-2 bg-background hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5 transition-colors group-hover:text-primary-foreground" aria-hidden="true" />
                </a>
              )
            })}
          </div>
          <p className="text-sm text-muted-foreground">
            <a 
              href="mailto:rokogrguric@gmail.com"
              className="hover:text-foreground transition-colors duration-300 hover:underline"
            >
              rokogrguric@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
