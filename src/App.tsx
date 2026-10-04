import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  type Variants,
} from 'motion/react'
import {
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Loader2,
  MapPin,
  Menu,
  Monitor,
  Play,
  Send,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'



const WEB3FORMS_KEY = 'd3a118f7-655a-4a6b-ae03-d0e7efe5998e'
const WHATSAPP_NUMBER = '2250555362643'

const profile = {
  name: 'Pascal Salif Zongo',
  email: 'zongopascalsalif@gmail.com',
  location: "Côte d'Ivoire",
  youtube: '#',
  github: 'https://github.com/Pascalzongo',
  linkedin: 'https://www.linkedin.com/public-profile/settings/',
  photo: '/image/profil.jpg',
}

const roles = [
  'Développeur full-stack junior',
  "Étudiant en Génie Logiciel",
  'Créateur de contenu tech',
]

const navLinks = [
  { label: 'À propos', href: '#apropos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Chaîne', href: '#chaine' },
]

const skills = [
  {
    icon: <Code2 className="size-6" />,
    title: 'Web',
    items: ['Html','Css','PHP','Mysql', 'Laravel', 'Node.js', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    icon: <Monitor className="size-6" />,
    title: 'Bureau',
    items: ['Electron', 'VB.NET', 'SQLite','Access'],
  },
  {
    icon: <Smartphone className="size-6" />,
    title: 'Mobile',
    items: ['Flutter', 'React Native'],
  },
]

const projects = [
  {
    title: 'Facilo',
    tag: 'SaaS',
    text: 'Plateforme de facturation et de gestion de stock pensée pour les petits commerçants et les PME.',
    stack: ['Html','Css','Laravel', 'MySQL'],
    gradient: 'from-indigo-600/50 to-fuchsia-600/30',
    image: '/image/facilo.png',
    link: '#',
  },
  {
    title: 'MonRepetiteurPro',
    tag: 'Site Web',
    text: 'Plateforme de mise en relation entre les parents et les repetiteurs.',
    stack: ['Html', 'Css', 'PHP', 'Mysql'],
    gradient: 'from-cyan-600/50 to-indigo-600/30',
    image: '/image/monrepetiteurpro.png',
    link: '#',
  },
  {
    title: 'Suzerain',
    tag: 'Site Vitrine',
    text: 'Site vitrine présentant les activités de Suzerain entreprise.',
    stack: ['Html', 'Css', 'JavaScript'],
    gradient: 'from-emerald-600/50 to-cyan-600/30',
    image: '/image/suzerain.png',
    link: '#',
  },
]

/* ============ ANIMATIONS ============ */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
        {label}
      </p>
      <h2 className="mt-2 text-4xl font-bold md:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-indigo-500 to-fuchsia-500" />
    </Reveal>
  )
}

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <motion.span
        whileHover={{ rotate: -8, scale: 1.08 }}
        className="relative flex size-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-fuchsia-500 text-sm font-extrabold shadow-lg shadow-indigo-500/30"
      >
        PZ
        <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-cyan-300 ring-2 ring-slate-950" />
      </motion.span>
      <span className="text-lg font-bold tracking-tight">
        Pascal<span className="text-indigo-400">Dev</span>
      </span>
    </span>
  )
}

function WhatsAppButton() {
  const message = encodeURIComponent(
    'Bonjour Pascal, je vous contacte depuis votre portfolio.',
  )

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { delay: 1, type: 'spring', stiffness: 260, damping: 18 },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="relative size-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </motion.a>
  )
}

/* ============ PAGE ============ */

function App() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [photoOk, setPhotoOk] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2800,
    )
    return () => clearInterval(id)
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Nouveau message depuis ton portfolio',
          from_name: 'Portfolio',
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setErrorMsg(`${json.message ?? 'Erreur inconnue'} (code ${res.status})`)
        setStatus('error')
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Connexion impossible')
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-slate-950 text-white">
      {/* BARRE DE PROGRESSION */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-60 h-0.5 w-full origin-left bg-linear-to-r from-indigo-400 via-fuchsia-400 to-cyan-300"
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md"
      >
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#accueil">
            <Logo />
          </a>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:block">
              <Button size="sm">Me contacter</Button>
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Ouvrir le menu"
              className="rounded-lg p-2 text-slate-200 hover:bg-white/10 md:hidden"
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  <Button className="mt-2 w-full">Me contacter</Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HERO */}
      <section
        id="accueil"
        className="relative flex min-h-screen items-center justify-center px-6 pt-20"
      >
        {/* Fond quadrillé */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'radial-gradient(ellipse at center, black, transparent 70%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black, transparent 70%)',
          }}
        />

        <motion.div
          className="absolute -left-32 -top-32 size-96 rounded-full bg-indigo-600/40 blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-32 top-1/3 size-96 rounded-full bg-fuchsia-600/30 blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, -50, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 size-80 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="relative">
              <motion.div
                className="absolute -inset-1.5 rounded-full opacity-80 blur-md"
                style={{
                  background:
                    'conic-gradient(from 0deg, #6366f1, #d946ef, #22d3ee, #6366f1)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative size-40 overflow-hidden rounded-full border-2 border-white/20 bg-slate-900 p-1">
                {photoOk ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    onError={() => setPhotoOk(false)}
                    className="size-full rounded-full object-cover object-[50%_25%]"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center rounded-full bg-slate-900 text-4xl font-bold">
                    PZ
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-indigo-200"
          >
            <Sparkles className="size-4" /> Disponible pour des projets
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl"
          >
            Salut, je suis{' '}
            <span className="bg-linear-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              PascalDev
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex h-9 items-center justify-center text-xl text-slate-300 md:text-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-slate-400"
          >
            Je transforme vos idées en solutions digitales performantes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a href="#projets">
              <Button size="lg">
                Voir mes projets <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="bg-transparent">
                Me contacter
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* À PROPOS */}
      <section id="apropos" className="mx-auto max-w-4xl px-6 py-28">
        <SectionTitle label="À propos" title="Qui suis-je ?" />
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12">
            <p className="hyphens-auto text-justify text-base leading-8 text-slate-300 md:text-lg">
              Je suis{' '}
              <strong className="bg-linear-to-r from-indigo-400 to-fuchsia-400 bg-clip-text font-bold text-transparent">
                {profile.name}
              </strong>
              , étudiant en Génie Logiciel à PIGIER Côte d’Ivoire, passionné par
              le développement informatique et la création de solutions
              numériques innovantes. Curieux, rigoureux et constamment à la
              recherche de nouvelles connaissances, je m’intéresse
              particulièrement à la conception et au développement
              d’applications robustes, performantes, sécurisées et évolutives.
              J’aime transformer des idées et des besoins concrets en solutions
              technologiques simples, efficaces et adaptées aux utilisateurs. À
              travers mes projets, je développe mes compétences en
              développement web, conception d’applications, bases de données et
              architecture logicielle, tout en accordant une importance
              particulière à la qualité du code, à l’expérience utilisateur et
              aux bonnes pratiques de développement. Mon objectif est de
              devenir un ingénieur logiciel compétent et polyvalent, capable de
              concevoir des applications fiables répondant aux défis
              technologiques des entreprises et de la société. Je suis
              également motivé par le travail en équipe, l’apprentissage continu
              et la réalisation de projets qui ont un réel impact.
            </p>

            <p className="mt-10 flex items-center gap-2 border-t border-white/10 pt-6 text-slate-400">
              <MapPin className="size-4 text-indigo-400" /> {profile.location}
            </p>
          </div>
        </Reveal>
      </section>

      {/* COMPÉTENCES */}
      <section id="competences" className="mx-auto max-w-6xl px-6 pb-28">
        <SectionTitle label="Compétences" title="Ce que je maîtrise" />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {skills.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROJETS */}
      <section id="projets" className="mx-auto max-w-6xl px-6 pb-28">
        <SectionTitle label="Projets" title="Mes réalisations" />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-colors hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div
                className={`relative flex h-44 items-end overflow-hidden bg-linear-to-br ${p.gradient} p-5`}
              >
                <img
                  src={p.image}
                  alt={`Capture du projet ${p.title}`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  className="absolute inset-0 size-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="relative rounded-full bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="flex items-center justify-between text-xl font-semibold">
                  {p.title}
                  <ExternalLink className="size-4 text-slate-500 transition group-hover:text-white" />
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{p.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-indigo-500/15 px-2 py-1 text-xs text-indigo-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* CHAÎNE */}
      <section id="chaine" className="px-6 pb-28">
        <Reveal className="mx-auto max-w-4xl rounded-3xl bg-linear-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 p-px">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-slate-950 px-8 py-14 text-center md:flex-row md:text-left">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <Play className="size-9 text-fuchsia-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold">Pascal Tech CI</h3>
              <p className="mt-2 text-slate-300">
                Du contenu tech éducatif en français pour apprendre la
                programmation et les outils numériques, pensé pour l’Afrique
                francophone.
              </p>
            </div>
            <a href={profile.youtube}>
              <Button size="lg">Découvrir la chaîne</Button>
            </a>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-2xl px-6 pb-28">
        <SectionTitle label="Contact" title="Travaillons ensemble" />
        <Reveal>
          <p className="mb-8 text-center text-lg text-slate-300">
            Un projet, une collaboration ou une opportunité ? Écris-moi, je
            réponds avec plaisir.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">
                  Nom
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Ton nom"
                  className="border-white/15 bg-white/5 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="toi@exemple.com"
                  className="border-white/15 bg-white/5 text-white placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-300">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Décris ton projet ou ta demande..."
                className="border-white/15 bg-white/5 text-white placeholder:text-slate-500"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="size-4" /> Envoyer le message
                </>
              )}
            </Button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 text-sm text-emerald-400"
                >
                  <Check className="size-4" /> Message envoyé, merci ! Je te
                  réponds très vite.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-sm text-red-400"
                >
                  Erreur : {errorMsg}. Tu peux aussi m’écrire directement à{' '}
                  {profile.email}.
                </motion.p>
              )}
            </AnimatePresence>
          </form>

          <div className="mt-8 flex justify-center gap-6 text-sm text-slate-400">
            <a href={profile.github} className="hover:text-white">
              GitHub
            </a>
            <a href={profile.linkedin} className="hover:text-white">
              LinkedIn
            </a>
            <a href={profile.youtube} className="hover:text-white">
              YouTube
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="flex flex-col items-center gap-4">
          <Logo />
          <p className="text-sm text-slate-500">
            © 2026 {profile.name}. Tous droits réservés.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  )
}

export default App