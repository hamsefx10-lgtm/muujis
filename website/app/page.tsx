"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight, BarChart3, Check, ChevronRight, Circle, Code2, Compass, Instagram, Lightbulb, Linkedin, Mail, Menu, MessageCircle, Palette, Play, Quote, Sparkles, Target, X } from "lucide-react";
import { FormEvent, useState } from "react";

const services = [
  ["01", "Branding & Creative", "Aqoonsi brand cad oo ka tarjumaya himiladaada, kana dhex muuqda suuqa.", ["Brand Strategy", "Identity", "Campaigns"], Palette],
  ["02", "Digital Marketing", "Content, social media iyo campaigns ku socda strategy la cabbiri karo.", ["Content", "Social", "Paid Media"], BarChart3],
  ["03", "Web & Technology", "Digital experiences qurux badan, degdeg ah, una shaqeeya business-kaaga.", ["Websites", "UI/UX", "Platforms"], Code2],
  ["04", "Strategy & Consulting", "Research iyo qorshe cad oo hagaya brand-ka, marketing-ka iyo growth-ka.", ["Research", "Planning", "Growth"], Compass],
] as const;

const process = [
  ["01", "Discover", "Waxaan fahannaa business-ka, market-ka, audience-ka iyo hadafyada."],
  ["02", "Strategize", "Waxaan dhisnaa direction ku saleysan research iyo business objectives."],
  ["03", "Create", "Waxaan abuurnaa brand systems, content, campaigns iyo digital products."],
  ["04", "Activate", "Waxaan shaqada geynaa channels-ka iyo suuqa ku habboon."],
  ["05", "Measure & Grow", "Waxaan cabbirnaa, wax ka barannaa, kadibna sii kobcinnaa natiijada."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  function submitDemo(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }

  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Muujis home"><Image src="/images/muujis-logo-dark.png" alt="Muujis" width={210} height={62} priority /></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#services">Services</a><a href="#work">Work</a><a href="#approach">Approach</a><a href="#about">About</a></nav>
      <a className="header-cta" href="#contact">Start a project <ArrowDownRight size={17} /></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      {menuOpen && <nav className="mobile-nav">{[["Services", "#services"], ["Work", "#work"], ["Approach", "#approach"], ["About", "#about"], ["Start a project", "#contact"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ChevronRight size={18} /></a>)}</nav>}
    </header>

    <section className="hero" id="top">
      <Image className="hero-image" src="/images/hero-studio.png" alt="Creative team working together in a studio" fill priority sizes="100vw" />
      <div className="hero-overlay" /><div className="hero-content"><p className="eyebrow"><Sparkles size={15} /> Creative digital agency</p><h1>We build brands.<br /><span>We create impact.</span></h1><p className="hero-copy">Strategy, creative, marketing iyo technology—hal direction oo business-kaaga ka dhigaya mid la arko, la aamino, lana doorto.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Start a project <ArrowRight size={18} /></a><a className="button button-ghost" href="#work"><Play size={16} fill="currentColor" /> Explore our work</a></div></div>
      <div className="hero-proof"><div><strong>10+</strong><span>Years creative experience</span></div><div><strong>4</strong><span>Integrated service areas</span></div><div><strong>01</strong><span>Team. One clear direction.</span></div></div>
      <a className="scroll-cue" href="#services"><span>Scroll to explore</span><ArrowDownRight /></a>
    </section>

    <section className="statement section-pad"><p className="section-label">What we believe</p><h2>Good creative gets attention.<br />Great strategy turns it into <em>business growth.</em></h2><div className="statement-grid"><p>Muujis ma kala goyso branding, content, marketing iyo technology. Waxaan marka hore fahannaa business-ka, kadibna waxaan dhisnaa xal isku xiran.</p><div className="flow">{["Attention", "Engagement", "Leads", "Customers", "Growth"].map((item, i) => <span key={item}>{item}{i < 4 && <ArrowRight size={14} />}</span>)}</div></div></section>

    <section className="services section-pad" id="services"><div className="section-heading"><div><p className="section-label">What we do</p><h2>Four disciplines.<br />One growth partner.</h2></div><p>Waxaan isku keennaa expertise-ka loo baahan yahay si fikraddu u noqoto brand, brand-kuna u noqdo growth.</p></div><div className="service-grid">{services.map(([number, title, copy, tags, Icon]) => <article className="service-card" key={number}><div className="service-top"><span>{number}</span><Icon size={26} /></div><h3>{title}</h3><p>{copy}</p><div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact">Explore service <ArrowDownRight size={18} /></a></article>)}</div></section>

    <section className="work section-pad" id="work"><div className="section-heading light"><div><p className="section-label">Selected work · Demo</p><h2>Proof, not promises.</h2></div><p>Case studies-kan waa demo content. Waxaa lagu beddeli karaa projects-ka dhabta ah, metrics-kooda iyo client testimonials.</p></div>
      <article className="featured-project"><div className="project-image"><Image src="/images/case-brand.png" fill sizes="(max-width: 900px) 100vw, 65vw" alt="Premium green and black brand identity materials" /></div><ProjectInfo type="Brand Identity · Demo 01" title="Nasteexo Living" copy="From a growing local business to a confident, cohesive lifestyle brand." challenge="Inconsistent visual identity" result="+42% brand recall" /></article>
      <article className="featured-project reverse"><div className="project-image"><Image src="/images/case-campaign.png" fill sizes="(max-width: 900px) 100vw, 65vw" alt="Commercial campaign production in a studio" /></div><ProjectInfo type="Campaign & Production · Demo 02" title="Himilo Business" copy="A cinematic campaign designed to make local ambition impossible to ignore." challenge="Low digital engagement" result="3.2× more qualified leads" /></article>
    </section>

    <section className="approach section-pad" id="approach"><div className="section-heading"><div><p className="section-label">How we work</p><h2>Clarity before creativity.</h2></div><p>Process cad ayaa naga caawiya inaan ka gudubno fikrado qurux badan oo keliya, una gudubno shaqo natiijo keenta.</p></div><div className="process-list">{process.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><Circle size={14} fill="currentColor" /></article>)}</div></section>

    <section className="about section-pad" id="about"><div className="about-copy"><p className="section-label">Why Muujis</p><h2>Local understanding.<br />World-class ambition.</h2><p>Waxaan isku darnaa fahamka market-ka maxalliga ah, visual storytelling iyo business thinking. Taasi waxay creative-ka ka dhigaysaa mid si dhab ah ugu xiran customer-ka iyo natiijada.</p><a className="text-link" href="#contact">Meet your growth partner <ArrowRight size={18} /></a></div><div className="principles"><article><Target /><h3>Business first</h3><p>Waxaan fahannaa hadafka ka hor inta aan design samayn.</p></article><article><Lightbulb /><h3>Ideas with direction</h3><p>Creative kasta wuxuu leeyahay sabab iyo objective cad.</p></article><article><Check /><h3>One integrated team</h3><p>Strategy, creative, media iyo digital waxay u shaqeeyaan hal direction.</p></article></div></section>

    <section className="testimonial section-pad"><Quote size={34} /><blockquote>“Muujis waxay naga caawisay inaan brand-keena si cusub u aragno—ma ahayn design keliya, waxay ahayd direction business.”</blockquote><p><strong>Demo testimonial</strong><span>Magaca client-ka iyo shirkadda halkan ayaa lagu beddeli doonaa.</span></p></section>

    <section className="contact section-pad" id="contact"><div className="contact-intro"><p className="section-label">Start a project</p><h2>Let&apos;s create something that matters.</h2><p>Nooga warran business-kaaga, caqabadda jirta iyo meesha aad rabto inaad gaarto. Waxaan kula soo xiriiri doonnaa si aan u qeexno tallaabada xigta.</p><div className="direct-contact"><a href="mailto:muujiscreative@gmail.com"><Mail /> muujiscreative@gmail.com</a><a href="https://wa.me/252915744007" target="_blank" rel="noreferrer"><MessageCircle /> +252 91 574 4007</a></div></div>
      {sent ? <div className="success-message"><span><Check size={30} /></span><h3>Mahadsanid!</h3><p>Demo form-ku wuu shaqeeyay. Marka backend-ka la xiro, fariinta waxaa loo diri doonaa Muujis.</p><button onClick={() => setSent(false)}>Send another brief</button></div> : <form onSubmit={submitDemo}><label>Magacaaga<input required name="name" placeholder="Full name" /></label><label>Shirkadda<input required name="company" placeholder="Company name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Adeegga<select required defaultValue=""><option value="" disabled>Select a service</option><option>Branding & Creative</option><option>Digital Marketing</option><option>Web & Technology</option><option>Strategy & Consulting</option></select></label><label className="full">Nooga warran project-ka<textarea required name="brief" placeholder="Business objective, challenge, timeline..." rows={5} /></label><button className="button button-primary full" type="submit">Send project brief <ArrowRight size={18} /></button><small className="full">Tani hadda waa demo form; xog lama kaydinayo.</small></form>}
    </section>

    <footer><div className="footer-brand"><Image src="/images/muujis-logo-dark.png" alt="Muujis" width={230} height={70} /><p>Creative gets attention.<br />Strategy gives it direction.</p></div><div><p>Explore</p><a href="#services">Services</a><a href="#work">Work</a><a href="#approach">Approach</a><a href="#about">About</a></div><div><p>Connect</p><a href="mailto:muujiscreative@gmail.com">Email</a><a href="https://wa.me/252915744007">WhatsApp</a><a href="#"><Instagram size={16} /> Instagram</a><a href="#"><Linkedin size={16} /> LinkedIn</a></div><div className="footer-bottom"><span>© 2026 Muujis Creative Digital Agency</span><span>Mogadishu, Somalia · Working everywhere</span></div></footer>
  </main>;
}

function ProjectInfo({ type, title, copy, challenge, result }: { type: string; title: string; copy: string; challenge: string; result: string }) {
  return <div className="project-info"><p>{type}</p><h3>{title}</h3><p>{copy}</p><dl><div><dt>Challenge</dt><dd>{challenge}</dd></div><div><dt>Demo result</dt><dd>{result}</dd></div></dl><button>View case study <ArrowRight size={18} /></button></div>;
}
