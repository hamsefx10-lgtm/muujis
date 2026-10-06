const menu = document.querySelector('#menu'); const mobile = document.querySelector('#mobile'); if (menu && mobile) { const closeMenu = () => { mobile.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation menu') }; menu.addEventListener('click', () => { const open = mobile.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu') }); mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu)); document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu() }) } const form = document.querySelector('#brief'); if (form) { form.addEventListener('submit', event => { event.preventDefault(); if (!form.reportValidity()) return; const data = new FormData(form); const subject = encodeURIComponent(`Muujis project brief — ${data.get('company') || 'New enquiry'}`); const body = encodeURIComponent([`Name: ${data.get('name')}`, `Company: ${data.get('company')}`, `Email: ${data.get('email')}`, `Service: ${data.get('service')}`, `Project brief: ${data.get('brief')}`].join('\n')); window.location.href = `mailto:muujiscreative@gmail.com?subject=${subject}&body=${body}` }) }
const work = document.querySelector('#work'); if (work) { const filters = document.createElement('div'); filters.className = 'work-filters'; filters.setAttribute('role', 'group'); filters.setAttribute('aria-label', 'Filter projects'); filters.innerHTML = '<button class="is-active" data-filter="all">All work</button><button data-filter="brand">Brand identity</button><button data-filter="campaign">Campaigns</button>'; const projects = [...work.querySelectorAll('.featured-project')]; projects.forEach((project, index) => project.dataset.category = index === 0 ? 'brand' : 'campaign'); work.querySelector('.section-heading')?.after(filters); filters.addEventListener('click', event => { const button = event.target.closest('button'); if (!button) return; filters.querySelectorAll('button').forEach(item => item.classList.toggle('is-active', item === button)); const filter = button.dataset.filter; projects.forEach(project => { project.hidden = filter !== 'all' && project.dataset.category !== filter }) }) }
const statement = document.querySelector('.statement'); if (statement) { const trust = document.createElement('section'); trust.className = 'trust-strip client-logos'; trust.setAttribute('aria-label', 'Companies Muujis has worked with'); const logos = [
  { file: 'client-01-sahid.png', name: 'SAHID MI Engineering' },
  { file: 'client-02-abqo.png', name: 'ABQO Company' },
  { file: 'client-03-kobciye.png', name: 'Dugsiga Kobciye Academy' },
  { file: 'client-04-jigjiga.png', name: 'Maamulka Magaalada Jigjiga' },
  { file: 'client-05-yatim.png', name: 'Yatim Charity Organization' },
  { file: 'client-06-cyro.png', name: 'CYRO Relief Organization' },
  { file: 'client-07-lion.png', name: 'Lion Brand' },
  { file: 'client-08-hadiya.png', name: 'Hadiya Cafe & Conference Halls' },
  { file: 'client-09-medical.png', name: 'Healthcare Partner' },
  { file: 'client-10-orange-bird.png', name: 'Fly Brand' },
  { file: 'client-11-riseup.png', name: 'Rise Up' },
  { file: 'client-12-syvo.png', name: 'SYVO Voluntary Organization' },
  { file: 'client-13-havoyoco.png', name: 'HAVOYOCO Committee' }
]; const items = logos.map((item) => `<span class="client-logo" title="${item.name}"><img src="/images/clients/clean/${item.file}" alt="${item.name}" loading="lazy"></span>`).join(''); trust.innerHTML = `<div class="client-logos-head"><p>TRUSTED BY</p><span>Companies we have worked with</span></div><div class="client-logos-viewport"><div class="client-logos-track">${items}${items}</div></div>`; statement.before(trust); const track = trust.querySelector('.client-logos-track'); if (track) { let touchResumeTimer; trust.querySelectorAll('.client-logo').forEach(el => { el.addEventListener('pointerenter', () => track.style.animationPlayState = 'paused'); el.addEventListener('pointerleave', () => track.style.animationPlayState = ''); el.addEventListener('touchstart', () => { clearTimeout(touchResumeTimer); track.style.animationPlayState = 'paused'; trust.querySelectorAll('.client-logo').forEach(l => l.classList.remove('is-touched')); el.classList.add('is-touched'); }, { passive: true }); el.addEventListener('touchend', () => { touchResumeTimer = setTimeout(() => { track.style.animationPlayState = ''; el.classList.remove('is-touched'); }, 1400); }, { passive: true }); }); } }
const heroImage = document.querySelector('.hero-image'); if (heroImage) { heroImage.src = '/images/muujis-hero-studio.png'; heroImage.alt = 'Muujis creative team working together in a modern digital studio' }
/* Profile-led content update: concise hero, complete services, six-step process, team and final CTA. */
const hero = document.querySelector('.hero'); if (hero) { hero.querySelector('.eyebrow').innerHTML = '<span class="eyebrow-mark">✦</span><span>Muujis</span><i></i><span>Creative Digital Agency</span>'; hero.querySelector('h1').innerHTML = '<span class="hero-title-primary">We Build Brands.</span><span class="hero-title-accent">We Create Impact.</span>'; hero.querySelector('.hero-copy').textContent = 'Waxaan ka caawinaa ganacsiyada inay dhistaan brand xoog leh, yeeshaan muuqaal digital oo xirfad leh, si wanaagsan ula xiriiraan customers-kooda, una abuuraan growth joogto ah.'; const actions = hero.querySelector('.hero-actions'); if (actions) { actions.innerHTML = '<a class="button button-primary" href="#services">Explore Our Services →</a><a class="button button-ghost" href="#contact">Let’s Work Together ↗</a>' } }
const profileStatement = document.querySelector('.statement'); if (profileStatement) { profileStatement.querySelector('.section-label').textContent = 'Who we are'; profileStatement.querySelector('h2').innerHTML = 'Creative Thinking.<br>Strategy. <em>Technology.</em>'; const copy = profileStatement.querySelector('.statement-grid>p'); if (copy) copy.textContent = 'Muujis waa Creative Digital Agency ka caawisa businesses inay dhistaan brand cad, abuuraan content tayo leh, kobciyaan digital presence-kooda, isla markaana isticmaalaan technology iyo strategy si ay u gaaraan business objectives-kooda. Ma kala saarno branding, content, marketing iyo technology. Waxaan marka hore fahannaa business-ka, customer-ka iyo market-ka, kadibna waxaan abuurnaa xal isku xiran.'; const flow = profileStatement.querySelector('.flow'); if (flow) flow.innerHTML = '<span>Attention →</span><span>Engagement →</span><span>Leads →</span><span>Customers →</span><span>Business Growth</span>' }
const serviceData = [['Branding & Creative', 'Build a Brand People Remember.', ['Brand Strategy', 'Logo Design', 'Brand Identity Design', 'Visual Identity Systems', 'Brand Guidelines', 'Company Profile Design', 'Marketing Materials', 'Creative Campaign Design'], 'Build Your Brand'], ['Digital Marketing', 'Turn Attention Into Growth.', ['Content Strategy', 'Content Production', 'Social Media Management', 'Paid Advertising', 'Analytics & Reporting'], 'Grow Your Digital Presence'], ['Web & Technology', 'Digital Experiences Built for Business.', ['Website Design & Development', 'Business Websites', 'Landing Pages', 'E-commerce Platforms', 'Web Applications', 'UI/UX Design', 'Website Maintenance'], 'Start Your Web Project'], ['Strategy & Consulting', 'Better Decisions Start With Better Strategy.', ['Business Strategy', 'Marketing Strategy', 'Brand Consulting', 'Market Research', 'Customer Analysis', 'Growth Planning', 'Digital Transformation Consulting'], 'Talk to a Strategist']]; document.querySelectorAll('.service-card').forEach((card, index) => { const item = serviceData[index]; if (!item) return; card.querySelector('h3').textContent = item[0]; const paragraph = card.querySelector('p'); if (paragraph) paragraph.textContent = item[1]; const tags = card.querySelector('.tags'); if (tags) tags.innerHTML = item[2].map(tag => `<span>${tag}</span>`).join(''); const link = card.querySelector('a'); if (link) link.textContent = item[3] + ' ↘' });
const approach = document.querySelector('.approach'); if (approach) { approach.querySelector('.section-label').textContent = 'How we work'; approach.querySelector('h2').textContent = 'From Understanding to Growth.'; const steps = [['Discover', 'Waxaan fahannaa business-ka, market-ka, audience-ka iyo objectives-ka.'], ['Strategize', 'Waxaan dhisnaa strategy ku saleysan research iyo business goals.'], ['Create', 'Waxaan abuurnaa brand systems, content, campaigns, designs iyo technology solutions.'], ['Activate', 'Waxaan xalalka ku dabaqnaa channels-ka ku habboon.'], ['Measure', 'Waxaan cabbirnaa performance-ka oo fahannaa waxa shaqeynaya.'], ['Grow', 'Waxaan insights-ka u isticmaalnaa horumarinta strategy-ga iyo natiijooyinka mustaqbalka.']]; const list = approach.querySelector('.process-list'); if (list) { list.innerHTML = steps.map((step, index) => `<article><span>${String(index + 1).padStart(2, '0')}</span><h3>${step[0]}</h3><p>${step[1]}</p><b>●</b></article>`).join('') } }
const about = document.querySelector('.about'); if (about) { about.querySelector('.section-label').textContent = 'Our philosophy'; about.querySelector('h2').innerHTML = 'Marketing That Connects<br>to <em>Business.</em>'; const p = about.querySelector('.about-copy>p:not(.section-label)'); if (p) p.textContent = 'Muujis kuma eka Likes → Views → Followers. Waxaan eegnaa safarka oo dhan: Attention → Engagement → Leads → Customers → Business Growth. Creative gets attention. Strategy gives it direction. Marketing turns attention into business opportunities.' }
const principles = document.querySelector('.principles'); if (principles) { const items = [['Creative Thinking', 'Ma naqshadeyno muuqaal keliya; waxaan ka fikirnaa fikradda iyo ujeeddada ka dambeysa.'], ['Strategic Approach', 'Creative-ka waxaa hagaya strategy iyo business objectives.'], ['Business Understanding', 'Waxaan marka hore fahannaa business-ka ka hor inta aan xal soo jeedin.'], ['Local Market Understanding', 'Waxaan tixgelinnaa local market-ka, customer behavior-ka iyo business environment-ka.'], ['Integrated Services', 'Branding, marketing, creative iyo technology waxay ku shaqeeyaan hal direction.'], ['Business-Focused Results', 'Waxaan eegnaa business impact-ka, ma aha muuqaal qurux badan oo keliya.'], ['One Connected Team', 'Client-ku wuxuu helayaa team isku xiraya strategy, creative, media iyo digital.']]; principles.innerHTML = items.map((item, index) => `<article><b>${index < 3 ? '✦' : '◉'}</b><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('') }
const workHeading = document.querySelector('#work .section-heading'); if (workHeading) { workHeading.querySelector('.section-label').textContent = 'Capabilities / Portfolio'; workHeading.querySelector('h2').textContent = 'Work built for impact.'; workHeading.querySelector('p:last-child').textContent = 'Halkan waxaa hadda ka muuqda noocyada shaqo ee Muujis qabato. Projects-ka dhabta ah iyo natiijooyinkooda ayaa lagu dari doonaa marka la xaqiijiyo.' }
const contact = document.querySelector('.contact'); if (contact) { contact.innerHTML = '<div class="contact-orbit" aria-hidden="true"><i></i><b></b></div><div class="contact-topline"><span>Muujis / Contact</span><span>Let\'s make it clear</span></div><div class="contact-title"><p class="section-label">Start a conversation</p><h2>A good brief is where<br><em>impact</em> begins.</h2></div><div class="contact-workspace"><aside class="contact-methods" aria-label="Direct contact options"><a href="mailto:muujiscreative@gmail.com"><b>01</b><span>Email</span><small>muujiscreative@gmail.com</small></a><a href="https://wa.me/252915744007" target="_blank" rel="noopener"><b>02</b><span>WhatsApp</span><small>+252 91 574 4007</small></a><p><b>03</b><span>Jigjiga · Somali Galbeed</span><small>Working everywhere</small></p></aside><form id="brief" novalidate><div class="contact-fields-top"><label>Magacaaga<input required autocomplete="name" name="name" placeholder="Full name"></label><label>Shirkadda<input required autocomplete="organization" name="company" placeholder="Company name"></label></div><label>Email<input required autocomplete="email" type="email" name="email" placeholder="you@company.com"></label><label>Adeegga<select required name="service"><option value="">Dooro adeeg</option><option>Branding &amp; Creative</option><option>Digital Marketing</option><option>Web &amp; Technology</option><option>Strategy &amp; Consulting</option></select></label><label>Nooga warran project-ka<textarea required name="brief" placeholder="Business objective, challenge, timeline..." rows="3"></textarea></label><div class="contact-submit"><button type="submit" aria-label="Send the project brief on WhatsApp"><span aria-hidden="true">→</span></button><strong>U dir WhatsApp</strong></div><small class="contact-reply"><i></i>Jawaab caadi ahaan 1 maalin shaqo gudaheed.</small></form></div>'; const whatsappForm = contact.querySelector('#brief'); whatsappForm.addEventListener('submit', event => { event.preventDefault(); if (!whatsappForm.reportValidity()) return; const data = new FormData(whatsappForm); const message = ['Salaan Muujis, waxaan rabaa inaan mashruuc ka wada hadalno.', 'Magaca: ' + data.get('name'), 'Shirkadda: ' + data.get('company'), 'Email: ' + data.get('email'), 'Adeegga: ' + data.get('service'), 'Faahfaahinta project-ka: ' + data.get('brief')].join('\\n'); window.open('https://wa.me/252915744007?text=' + encodeURIComponent(message), '_blank', 'noopener') }) }
if (contact && !document.querySelector('.team-section')) { const team = document.createElement('section'); team.className = 'team-section section-pad'; team.innerHTML = '<div class="section-heading"><div><p class="section-label">Our team</p><h2>Meet the People<br>Behind Muujis.</h2></div><p>Team isku xiraya media production, sales, marketing, customer understanding iyo business development.</p></div><div class="team-grid"><article><span>01</span><h3>Media & Creative</h3><p>Video Production · Photography · Creative Media · Visual Storytelling</p></article><article><span>02</span><h3>Marketing & Business</h3><p>Sales · Marketing · Customer Understanding · Business Development</p></article></div>'; contact.before(team) }
const teamSection = document.querySelector('.team-section'); if (teamSection) teamSection.id = 'team'; const navMarkup = '<a class="is-active" href="#top">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#work">Portfolio</a><a href="#team">Team</a><a href="#contact">Contact</a>'; const desktopNav = document.querySelector('.desktop-nav'); if (desktopNav) desktopNav.innerHTML = navMarkup; const mobileNav = document.querySelector('.mobile-nav'); if (mobileNav) mobileNav.innerHTML = navMarkup.replaceAll('</a>', ' <span aria-hidden="true">›</span></a>'); const headerCta = document.querySelector('.header-cta'); if (headerCta) headerCta.remove(); const navigationLinks = [...document.querySelectorAll('.desktop-nav a,.mobile-nav a')]; const navSections = [...new Set(navigationLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean))]; const updateActiveNavigation = () => { let current = navSections[0]; navSections.forEach(section => { if (section.getBoundingClientRect().top <= window.innerHeight * .38) current = section }); navigationLinks.forEach(link => { const active = current && link.getAttribute('href') === '#' + current.id; link.classList.toggle('is-active', active); if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current') }) }; updateActiveNavigation(); window.addEventListener('scroll', updateActiveNavigation, { passive: true })
const glassHeader = document.querySelector('.site-header'); if (glassHeader) { const syncGlassHeader = () => glassHeader.classList.toggle('is-scrolled', window.scrollY > 20); syncGlassHeader(); window.addEventListener('scroll', syncGlassHeader, { passive: true }) }
const processSection = document.querySelector('.approach'); if (processSection) { processSection.innerHTML = '<div class="process-showcase"><div class="process-intro"><div class="process-intro-image"></div><div class="process-intro-content"><p class="section-label"><span class="process-dot"></span>How we work</p><h2>From Understanding<br>to <em>Real Growth.</em></h2><p>Waxaan raacnaa <span class="process-copy-accent">hab cad oo iskaashi ah</span> si mashruuc kasta u keeno value dhab ah. Laga bilaabo fahamka business-ka ilaa xal la abuuro oo la hirgeliyo, waxaan diiradda saarnaa <span class="process-copy-accent">natiijooyin la cabbiri karo</span> iyo <span class="process-copy-accent">koboc waara.</span></p></div></div><div class="process-steps"><div class="process-line"></div><article class="process-step"><span class="step-icon">⌕</span><div><strong>01</strong><h3>Discover</h3><p>Waxaan fahannaa business-ka, market-ka, audience-ka iyo objectives-ka.</p></div><img src="/images/muujis-hero-studio.png" alt="Muujis team discovering a business challenge"></article><article class="process-step"><span class="step-icon">▤</span><div><strong>02</strong><h3>Strategize</h3><p>Waxaan dhisnaa strategy ku saleysan research iyo business goals.</p></div><img src="/images/case-brand.jpg" alt="Brand strategy materials"></article><article class="process-step"><span class="step-icon">✦</span><div><strong>03</strong><h3>Create</h3><p>Waxaan abuurnaa brand systems, content, campaigns, designs iyo technology solutions.</p></div><img src="/images/case-campaign.jpg" alt="Creative campaign production"></article><article class="process-step"><span class="step-icon">↗</span><div><strong>04</strong><h3>Activate</h3><p>Waxaan xalalka ku dabaqnaa channels-ka ku habboon.</p></div><img src="/images/muujis-hero-studio.png" alt="Muujis team activating a digital campaign"></article><article class="process-step"><span class="step-icon">▥</span><div><strong>05</strong><h3>Measure</h3><p>Waxaan cabbirnaa performance-ka oo fahannaa waxa shaqeynaya.</p></div><img src="/images/case-campaign.jpg" alt="Performance analytics dashboard"></article><article class="process-step"><span class="step-icon">↗</span><div><strong>06</strong><h3>Grow</h3><p>Waxaan insights-ka u isticmaalnaa horumarinta strategy-ga iyo natiijooyinka mustaqbalka.</p></div><img src="/images/case-brand.jpg" alt="Business growth strategy"></article></div></div>' }
const philosophySection = document.querySelector('.about'); if (philosophySection) { philosophySection.innerHTML = '<div class="philosophy-shell"><div class="philosophy-copy"><p class="section-label"><span class="philosophy-mark"></span>Our philosophy</p><h2>Marketing that<br>connects to <em>business.</em></h2><p class="philosophy-lede">Waxaan aaminsanahay in suuqgeyn wanagsan ay ka badan tahay hal-abuur — waa inay horseeddaa natiijooyin dhab ah, kobac waara oo la taaban karo.</p><a class="text-link" href="#contact">Saaw badan <span>→</span></a><span class="philosophy-orbit" aria-hidden="true"></span></div><div class="principle-stack"><div class="principle-stack-heading"><span>Why Muujis</span></div><article><b>01</b><div><i aria-hidden="true"></i><h3>Creative thinking</h3><p>Waxaan keennaa fikrado cusub oo dhaxal leh, kuwaas oo dadka kiciya isla markaana fursado abuura.</p></div></article><article><b>02</b><div><i aria-hidden="true"></i><h3>Built on strategy</h3><p>Hal-abuurkeena wuxuu ku saleysan yahay faham qoto dheer oo ku saabsan suuqa, xogta iyo yoolalkaaga.</p></div></article><article><b>03</b><div><i aria-hidden="true"></i><h3>One connected team</h3><p>Waxaan ku shaqeynaa sidii hal team, annagoo isku dubbaridaya hal-abuur, istiraatiijiyad iyo fulin.</p></div></article></div></div>' }
const testimonialSection = document.querySelector('.testimonial'); if (testimonialSection) { testimonialSection.innerHTML = '<div class="standard-shell"><p class="standard-label">The Muujis Standard</p><span class="standard-label-line" aria-hidden="true"></span><blockquote>Fikradaha wanaagsan<br>waxay beddelaan ganacsiyo,<br>waxayna dhisaan <em>mustaqbal</em> ka fiican.</blockquote><div class="standard-path" aria-label="How we measure the work"><svg class="standard-curve" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden="true"><path d="M 0,45 C 120,5 260,6 430,35 S 790,78 1200,42"></path><circle cx="0" cy="45" r="6"></circle><circle cx="430" cy="35" r="6"></circle><circle cx="840" cy="62" r="6"></circle><circle class="standard-end" cx="1200" cy="42" r="8"></circle></svg><article class="standard-step standard-step-one"><span>01</span><h3>Clarity</h3><p>Clear thinking. Sharper direction.</p></article><article class="standard-step standard-step-two"><span>02</span><h3>Consistency</h3><p>A stronger brand. Day after day.</p></article><article class="standard-step standard-step-three"><span>03</span><h3>Measurable impact</h3><p>Real progress. Not just pretty work.</p></article></div><p class="standard-foot"><span></span>Creative + strategy, made accountable.</p></div>' }
const teamDesign = document.querySelector('.team-section'); if (teamDesign) { teamDesign.innerHTML = '<div class="team-shell"><div class="team-intro"><div><p class="section-label">Our team</p><h2>Four perspectives.<br>One powerful <em>direction.</em></h2></div><p>Waxaan isku darnaa hal-abuur, istiraatiijiyad, suuq-geyn iyo horumarin ganacsi si aan u dhisno fursado waara oo leh saameyn dhab ah.</p></div><div class="team-network"><svg viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true"><path d="M230 100 L770 320 M770 100 L230 320"></path><circle cx="500" cy="210" r="9"></circle></svg><article class="team-member team-member-aamina"><img src="/images/team-aamina.png" alt="Temporary AI-generated portrait for Aamina Ali"><div><h3>Aamina Ali</h3><span>Creative &amp; Media</span></div></article><article class="team-member team-member-hassan"><img src="/images/team-hassan.png" alt="Temporary AI-generated portrait for Hassan Noor"><div><h3>Hassan Noor</h3><span>Strategy</span></div></article><article class="team-member team-member-farah"><img src="/images/team-farah.png" alt="Temporary AI-generated portrait for Farah Abdi"><div><h3>Farah Abdi</h3><span>Marketing</span></div></article><article class="team-member team-member-layla"><img src="/images/team-layla.png" alt="Temporary AI-generated portrait for Layla Osman"><div><h3>Layla Osman</h3><span>Business Development</span></div></article></div><p class="team-caption"><span></span>One connected team<span></span></p></div>' }
const resultsDesign = document.querySelector('.results'); if (resultsDesign) { resultsDesign.innerHTML = '<div class="results-shell"><header class="results-intro"><p class="section-label">Why businesses choose us</p><h2>Creative with<br>a business job.</h2><p>Waxaan isku darnaa fikir hal-abuur leh iyo istiraatiijiyad ganacsi si aan u dhisno brandoyin waara oo dhaqaaya keenaya.</p></header><div class="results-rail" aria-hidden="true"><span>01</span><i></i><span>02</span><i></i><span>03</span></div><div class="result-grid" aria-label="Business outcomes"><article><div class="result-icon" aria-hidden="true"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="21"></circle><path d="m24 40 8-17 8 8-16 9Z"></path><path d="M32 11v7M53 32h-7M32 53v-7M11 32h7"></path></svg></div><div><span>01</span><h3>Clear positioning</h3><p>Brand-kaaga wuxuu helayaa fariin cad iyo direction mideysan.</p></div><b aria-hidden="true"></b></article><article><div class="result-icon" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M15 43c0-10 18-2 18-14 0-9-14-3-14-13 0-5 5-8 11-8h14"></path><path d="m39 6 9 10-9 10"></path><circle cx="15" cy="43" r="4"></circle></svg></div><div><span>02</span><h3>Designed to convert</h3><p>Page kasta wuxuu leeyahay flow cad oo visitor-ka ku hagaya tallaabada xigta.</p></div><b aria-hidden="true"></b></article><article><div class="result-icon" aria-hidden="true"><svg viewBox="0 0 64 64"><path d="M13 49h8V38h-8v11Zm15 0h8V29h-8v20Zm15 0h8V19h-8v30Z"></path><path d="M12 31c12 0 22-6 34-20"></path><path d="m37 11 9-1-2 9"></path></svg></div><div><span>03</span><h3>Measurable momentum</h3><p>Waxaan cabbirnaa waxa shaqeynaya, kadibna sii kobcinnaa natiijada.</p></div><b aria-hidden="true"></b></article></div></div>'; const railSpans = resultsDesign.querySelectorAll('.results-rail span'); const articles = resultsDesign.querySelectorAll('.result-grid article'); const activateOutcome = (idx) => { articles.forEach((art, i) => art.classList.toggle('scene-current', i === idx)); railSpans.forEach((span, i) => { span.classList.toggle('is-active', i === idx); span.classList.toggle('is-passed', i < idx); }); }; railSpans.forEach((span, i) => span.addEventListener('click', () => activateOutcome(i))); articles.forEach((art, i) => art.addEventListener('click', () => activateOutcome(i))); activateOutcome(0); }
const revealTargets = document.querySelectorAll('.statement,.services,.results,.work,.approach,.about,.testimonial,.team-section,.contact,.service-card,.result-grid article,.featured-project,.process-step,.principle-stack article,.review-card,.team-grid article,.trust-strip'); revealTargets.forEach((el, index) => { el.classList.add('scroll-reveal'); el.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`); if (el.matches('.service-card,.result-grid article,.process-step,.principle-stack article,.review-card,.team-grid article')) el.dataset.reveal = index % 2 ? 'right' : 'left' }); document.querySelectorAll('.section-heading h2,.process-intro h2,.philosophy-copy h2,.contact h2').forEach((heading) => { const parts = heading.innerHTML.split('<br>'); if (parts.length > 1) heading.innerHTML = parts.map(part => `<span class="reveal-line"><span>${part}</span></span>`).join('') }); const revealObserver = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target) } }), { threshold: .12, rootMargin: '0px 0px -8% 0px' }); document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el)); const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; const processVisual = document.querySelector('.process-intro-image'); if (processVisual && !prefersReduced) { let ticking = false; window.addEventListener('scroll', () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { const rect = processVisual.parentElement.getBoundingClientRect(); const offset = Math.max(-18, Math.min(18, (window.innerHeight / 2 - (rect.top + rect.height / 2)) * .035)); processVisual.style.transform = `translateY(${offset}px) scale(1.025)`; ticking = false }) }, { passive: true }) }

/* Reversible desktop scroll story, inspired by the interaction model—not the MAGCC design. */
const isDesktop = window.matchMedia('(min-width: 901px)').matches;
const sceneConfig = isDesktop
  ? (prefersReduced ? [['approach']] : [['services'], ['results'], ['work'], ['approach']])
  : [['work'], ['approach']];
const scenes = [];
sceneConfig.forEach(([id]) => {
  const section = document.getElementById(id) || document.querySelector('.' + id);
  if (!section || section.dataset.scrollScene) return;
  section.dataset.scrollScene = 'true';
  section.classList.add('scroll-scene');
  const frame = document.createElement('div');
  frame.className = 'scroll-stage';
  while (section.firstChild) frame.appendChild(section.firstChild);
  section.appendChild(frame);
  if (id === 'approach') {
    const line = section.querySelector('.process-line');
    const steps = section.querySelectorAll('.process-step');
    if (line && steps.length) {
      line.setAttribute('unselectable', 'on');
      line.onselectstart = () => false;
      if (!line.querySelector('.process-marker')) {
        line.innerHTML = Array.from(steps, (_, index) => `<span class="process-marker" role="button" tabindex="0" aria-label="Step ${index + 1}" unselectable="on">${String(index + 1).padStart(2, '0')}</span>`).join('');
      }
      line.querySelectorAll('.process-marker').forEach((marker, index) => {
        marker.setAttribute('unselectable', 'on');
        marker.onselectstart = () => false;
        marker.style.cursor = 'pointer';
        marker.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const range = Math.max(1, section.offsetHeight - window.innerHeight);
          window.scrollTo({ top: section.offsetTop + range * (index / (steps.length - 1)), behavior: 'smooth' });
        });
      });
      steps.forEach((step, index) => {
        step.style.cursor = 'pointer';
        step.addEventListener('click', () => {
          const range = Math.max(1, section.offsetHeight - window.innerHeight);
          window.scrollTo({ top: section.offsetTop + range * (index / (steps.length - 1)), behavior: 'smooth' });
        });
      });
    }
  }
  scenes.push(section);
});
const alignResultsHash = () => {
  if (window.location.hash !== '#results') return;
  const resultsTarget = document.getElementById('results');
  if (!resultsTarget) return;
  const align = () => window.scrollTo({ top: resultsTarget.offsetTop, behavior: 'auto' });
  requestAnimationFrame(() => requestAnimationFrame(align));
  window.setTimeout(align, 250);
  const imageReady = Promise.all(Array.from(document.images, image => image.decode ? image.decode().catch(() => { }) : Promise.resolve()));
  Promise.all([imageReady, document.fonts?.ready || Promise.resolve()]).then(() => requestAnimationFrame(align));
  window.setTimeout(align, 1200);
};
if (document.readyState === 'complete') alignResultsHash();
else window.addEventListener('load', alignResultsHash, { once: true });
let targetY = window.scrollY, currentY = window.scrollY, rafId = 0;
const clamp = value => Math.min(1, Math.max(0, value));
const render = () => {
  currentY += (targetY - currentY) * .10;
  scenes.forEach(section => {
    const range = Math.max(1, section.offsetHeight - window.innerHeight);
    const sceneY = section.classList.contains('approach') || section.classList.contains('results') || section.classList.contains('work') ? window.scrollY : currentY;
    const progress = clamp((sceneY - section.offsetTop) / range);
    section.style.setProperty('--scene-progress', progress.toFixed(4));
    if (section.classList.contains('work') || section.id === 'work') {
      const workIndex = Math.min(4, Math.floor(progress * 4.999));
      if (typeof window.activatePortfolioProject === 'function' && !window.portfolioScrollLocked) {
        window.activatePortfolioProject(workIndex);
      }
    }
    if (section.classList.contains('services')) {
      section.style.setProperty('--services-shift', `${progress * -91}vw`);
      section.style.setProperty('--services-copy-shift', `${progress * -74}vw`);
      section.style.setProperty('--services-copy-opacity', String(1 - progress * .78));
    }
    if (section.classList.contains('results')) {
      section.style.setProperty('--results-step', String(Math.min(3, Math.round(progress * 2) + 1)));
    }
    if (section.classList.contains('about')) {
      section.style.setProperty('--about-shift', `${progress * -186}vw`);
      section.style.setProperty('--about-copy-shift', `${progress * -58}vw`);
      section.style.setProperty('--about-copy-opacity', String(1 - progress * .78));
    }
    section.classList.toggle('scene-active', progress > .015 && progress < .985);
    const items = Array.from(section.querySelectorAll('.service-card,.result-grid article,.featured-project,.process-step,.principle-stack article,.review-card,.team-grid article'));
    const isStandard = section.classList.contains('testimonial');
    const standardPosition = isStandard && items.length > 1 ? progress * (items.length - 1) : 0;
    const active = isStandard
      ? Math.min(items.length - 1, Math.round(standardPosition))
      : (section.classList.contains('services') || section.classList.contains('results') || section.classList.contains('about') || section.classList.contains('approach'))
        ? Math.min(items.length - 1, Math.round(progress * (items.length - 1)))
        : Math.min(items.length - 1, Math.floor(progress * items.length));
    items.forEach((item, index) => {
      const isCurrent = index === active;
      item.classList.toggle('scene-current', isCurrent);
      if (section.classList.contains('results')) item.setAttribute('aria-current', isCurrent ? 'step' : 'false');
      if (isStandard) item.style.setProperty('--card-offset', (index - standardPosition).toFixed(4));
      if (section.classList.contains('approach')) {
        const offset = index - active;
        const dist = Math.abs(offset);
        item.style.setProperty('--step-offset', String(offset));
        item.style.setProperty('--step-dist', String(dist));
        item.setAttribute('data-distant', dist > 2 ? 'true' : 'false');
      }
    });
    if (section.classList.contains('results')) {
      section.querySelectorAll('.results-rail span').forEach((marker, index) => {
        marker.classList.toggle('is-active', index === active);
        marker.classList.toggle('is-passed', index < active);
      });
    }
    if (section.classList.contains('approach')) {
      section.querySelectorAll('.process-marker').forEach((marker, index) => {
        marker.classList.toggle('is-active', index === active);
        marker.classList.toggle('is-passed', index < active);
      });
    }
    if (isStandard) {
      section.style.setProperty('--standard-step', String(active + 1));
      section.dataset.standardStep = String(active + 1).padStart(2, '0');
      const rail = section.querySelector('.review-rail');
      if (rail) rail.dataset.current = String(active + 1).padStart(2, '0');
    }
  });
  rafId = requestAnimationFrame(render);
};
const sync = () => { targetY = window.scrollY };
window.addEventListener('scroll', sync, { passive: true });
window.addEventListener('resize', sync);
rafId = requestAnimationFrame(render);
window.addEventListener('pagehide', () => {
  cancelAnimationFrame(rafId);
  window.removeEventListener('scroll', sync);
  window.removeEventListener('resize', sync);
}, { once: true });

/* Final team presentation: portraits and names supplied by the client. */
const teamApproved = document.querySelector('.team-section');
if (teamApproved) {
  teamApproved.innerHTML = `<div class="team-approved-shell">
    <div class="team-approved-topline"><p>THE PEOPLE BEHIND THE WORK</p></div>
    <div class="team-approved-heading"><p>Our <em>Team</em></p><i></i></div>
    <div class="team-approved-grid">
      <article><div class="team-approved-photo"><img src="/images/team/ali-mohamed.png" alt="Ali"></div><h3>Ali</h3><span>Marketing Strategist/actor</span></article>
      <article><div class="team-approved-photo"><img src="/images/team/baqdaadi.png" alt="Baqdad"></div><h3>Baqdad</h3><span>Creative Director</span></article>
      <article><div class="team-approved-photo"><img src="/images/team/shamsadiini.png" alt="Shamsadiin"></div><h3>Shamsadiin</h3><span>Media Producer</span></article>
      <article><div class="team-approved-photo"><img src="/images/team/hamse-moalin.png" alt="Hamza"></div><h3>Hamza</h3><span>Software Engineer</span></article>
    </div>
    <div class="team-approved-network" aria-hidden="true"><svg viewBox="0 0 1440 100" preserveAspectRatio="none"><g class="team-connectors"><path d="M126 0 C126 62 160 82 720 72"/><path d="M522 0 C522 38 572 48 720 72"/><path d="M918 0 C918 38 868 48 720 72"/><path d="M1314 0 C1314 62 1280 82 720 72"/></g><g class="team-endpoints"><circle cx="126" cy="0" r="5"/><circle cx="522" cy="0" r="5"/><circle cx="918" cy="0" r="5"/><circle cx="1314" cy="0" r="5"/></g><g class="team-hub"><circle cx="720" cy="72" r="48"/><circle cx="720" cy="72" r="32"/><circle cx="720" cy="72" r="18"/><circle cx="720" cy="72" r="8"/></g></svg></div>
    <p class="team-approved-caption"><b></b>ONE TEAM. MANY STORIES.<b></b></p>
  </div>`;
  const syncTeamConnectors = () => {
    const cards = [...teamApproved.querySelectorAll('.team-approved-grid article')];
    const grid = teamApproved.querySelector('.team-approved-grid').getBoundingClientRect();
    const centers = cards.map(card => { const rect = card.getBoundingClientRect(); return (rect.left + rect.width / 2 - grid.left) / grid.width * 1440; });
    teamApproved.querySelectorAll('.team-connectors path').forEach((path, index) => {
      const x = centers[index];
      path.setAttribute('d', index === 0 || index === 3 ? `M${x} 0 C${x} 62 ${x} 82 720 72` : `M${x} 0 C${x} 38 ${x} 48 720 72`);
    });
    teamApproved.querySelectorAll('.team-endpoints circle').forEach((circle, index) => circle.setAttribute('cx', centers[index]));
  };
  requestAnimationFrame(syncTeamConnectors);
  window.addEventListener('resize', syncTeamConnectors, { passive: true });
}

/* Final contact direction: keep the approved minimalist, no-card composition. */
(() => {
  const contact = document.querySelector('#contact.contact');
  if (!contact) return;
  contact.classList.add('contact-approved');
  contact.innerHTML = `
    <div class="contact-orbit" aria-hidden="true"></div>
    <div class="contact-topline"><span>MUUJIS / CONTACT</span><span>LET'S MAKE IT CLEAR</span></div>
    <div class="contact-frame">
      <div class="contact-left">
        <div class="contact-title"><h2>Let's make it <em>clear.</em></h2><p class="contact-copy">Fikrad fiican waxay u baahan tahay wada hadal cad.<br>Nala soo xiriir, aan ka dhisno waxa xiga.</p></div>
        <div class="contact-methods" aria-label="Direct contact options">
          <a href="mailto:muujiscreative@gmail.com"><i aria-hidden="true">✉</i><span>Email</span><small>hello@muujis.com</small></a>
          <a href="https://wa.me/252915744007" target="_blank" rel="noopener"><i aria-hidden="true">◔</i><span>WhatsApp</span><small>+252 91 574 4007</small></a>
          <p><i aria-hidden="true">⌖</i><span>Jigjiga · Somali Galbeed</span><small>Working everywhere</small></p>
        </div>
      </div>
      <div class="contact-right">
        <p class="contact-form-heading"><span></span>START A CONVERSATION</p>
        <form id="brief" novalidate>
          <div class="contact-fields-top">
            <label>Full name<input required autocomplete="name" name="name"></label>
            <label>Company<input required autocomplete="organization" name="company"></label>
          </div>
          <label>Email<input required autocomplete="email" type="email" name="email"></label>
          <label>Service<select required name="service"><option value="">Select a service</option><option>Branding &amp; Creative</option><option>Digital Marketing</option><option>Web &amp; Technology</option><option>Strategy &amp; Consulting</option></select></label>
          <label>Project brief<textarea required name="brief" rows="3"></textarea></label>
          <div class="contact-submit"><button type="submit" aria-label="Send the project brief on WhatsApp"><span aria-hidden="true">→</span></button><strong>Send via WhatsApp</strong></div>
        </form>
      </div>
    </div>`;
  const form = contact.querySelector('#brief');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      'Salaan Muujis 👋',
      '',
      'Waxaan rabaa inaan mashruuc ka wada hadalno.',
      '',
      '*Magaca:* ' + data.get('name'),
      '*Shirkadda:* ' + data.get('company'),
      '*Email:* ' + data.get('email'),
      '*Adeegga:* ' + data.get('service'),
      '',
      '*Faahfaahinta mashruuca:*',
      data.get('brief')
    ].join('\n');
    window.location.assign('https://wa.me/252915744007?text=' + encodeURIComponent(message));
  });
})();

/* Advance the six How We Work cards one chapter per wheel gesture or touch swipe. */
(() => {
  const processScene = document.getElementById('approach');
  if (!processScene) return;
  let processLocked = false;
  const advanceProcess = (direction) => {
    const range = Math.max(1, processScene.offsetHeight - window.innerHeight);
    const count = processScene.querySelectorAll('.process-step').length || 6;
    const position = Math.max(0, Math.min(1, (window.scrollY - processScene.offsetTop) / range));
    const current = Math.round(position * (count - 1));
    const next = Math.max(0, Math.min(count - 1, current + direction));
    if (next === current || processLocked) return false;
    processLocked = true;
    window.scrollTo({ top: processScene.offsetTop + range * (next / (count - 1)), behavior: 'smooth' });
    window.setTimeout(() => { processLocked = false; }, 520);
    return true;
  };

  window.addEventListener('wheel', event => {
    const rect = processScene.getBoundingClientRect();
    const pinned = rect.top <= window.innerHeight * .15 && rect.bottom >= window.innerHeight * .85;
    if (!pinned || event.deltaY === 0) return;
    if (advanceProcess(event.deltaY > 0 ? 1 : -1)) {
      event.preventDefault();
    }
  }, { passive: false });

  let touchY = 0, touchX = 0, touchTime = 0;
  processScene.addEventListener('touchstart', event => {
    if (event.touches.length === 1) {
      touchY = event.touches[0].clientY;
      touchX = event.touches[0].clientX;
      touchTime = Date.now();
    }
  }, { passive: true });

  processScene.addEventListener('touchend', event => {
    if (event.changedTouches.length === 1) {
      const rect = processScene.getBoundingClientRect();
      const pinned = rect.top <= window.innerHeight * .18 && rect.bottom >= window.innerHeight * .82;
      if (!pinned) return;
      const diffY = touchY - event.changedTouches[0].clientY;
      const diffX = touchX - event.changedTouches[0].clientX;
      const duration = Date.now() - touchTime;
      if ((Math.abs(diffY) > 28 || (Math.abs(diffY) > 18 && duration < 240)) && Math.abs(diffY) > Math.abs(diffX) * 1.1) {
        advanceProcess(diffY > 0 ? 1 : -1);
      }
    }
  }, { passive: true });
})();

/* Results: one deliberate wheel or touch gesture advances exactly one outcome. */
(() => {
  if (!window.matchMedia('(min-width: 901px)').matches) return;
  const resultsScene = document.getElementById('results') || document.querySelector('.results');
  if (!resultsScene) return;
  let resultsLocked = false;
  const advanceResults = (direction) => {
    const range = Math.max(1, resultsScene.offsetHeight - window.innerHeight);
    const position = Math.max(0, Math.min(1, (window.scrollY - resultsScene.offsetTop) / range));
    const current = Math.round(position * 2);
    const next = Math.max(0, Math.min(2, current + direction));
    if (next === current || resultsLocked) return false;
    resultsLocked = true;
    window.scrollTo({ top: resultsScene.offsetTop + range * (next / 2), behavior: 'smooth' });
    window.setTimeout(() => { resultsLocked = false; }, 560);
    return true;
  };

  window.addEventListener('wheel', event => {
    const rect = resultsScene.getBoundingClientRect();
    const pinned = rect.top <= window.innerHeight * .15 && rect.bottom >= window.innerHeight * .85;
    if (!pinned || Math.abs(event.deltaY) < 6) return;
    if (advanceResults(event.deltaY > 0 ? 1 : -1)) {
      event.preventDefault();
    }
  }, { passive: false });

  let touchY = 0, touchX = 0, touchTime = 0;
  resultsScene.addEventListener('touchstart', event => {
    if (event.touches.length === 1) {
      touchY = event.touches[0].clientY;
      touchX = event.touches[0].clientX;
      touchTime = Date.now();
    }
  }, { passive: true });

  resultsScene.addEventListener('touchend', event => {
    if (event.changedTouches.length === 1) {
      const rect = resultsScene.getBoundingClientRect();
      const pinned = rect.top <= window.innerHeight * .18 && rect.bottom >= window.innerHeight * .82;
      if (!pinned) return;
      const diffY = touchY - event.changedTouches[0].clientY;
      const diffX = touchX - event.changedTouches[0].clientX;
      const duration = Date.now() - touchTime;
      if ((Math.abs(diffY) > 28 || (Math.abs(diffY) > 18 && duration < 240)) && Math.abs(diffY) > Math.abs(diffX) * 1.1) {
        advanceResults(diffY > 0 ? 1 : -1);
      }
    }
  }, { passive: true });
})();

/* Verified Muujis social channels. */
const socialChannels = [
  ['Facebook', 'f', 'https://www.facebook.com/share/19yTGoBYR5/?mibextid=wwXIfr'],
  ['TikTok', '♪', 'https://www.tiktok.com/@muujiscreative?_r=1&_t=ZS-9A2LHk8CtGv'],
  ['Instagram', '◎', 'https://www.instagram.com/muujiscreative?stkn=bTN5bmpkcXlrM2tl&utm_source=qr'],
  ['LinkedIn', 'in', 'https://www.linkedin.com/in/muujis-creative-60488643a?utm_source=share_via&utm_content=profile&utm_medium=member_ios']
];
const socialMarkup = socialChannels.map(([name, icon, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Muujis on ${name}"><span aria-hidden="true">${icon}</span><b>${name}</b></a>`).join('');
const contactIntro = document.querySelector('.contact-intro');
if (contactIntro && !contactIntro.querySelector('.social-links')) {
  const socialNav = document.createElement('nav');
  socialNav.className = 'social-links';
  socialNav.setAttribute('aria-label', 'Muujis social media');
  socialNav.innerHTML = socialMarkup;
  contactIntro.appendChild(socialNav);
}
const footerConnect = [...document.querySelectorAll('footer>div')].find(item => item.querySelector(':scope>p')?.textContent.trim().toLowerCase() === 'connect');
if (footerConnect && !footerConnect.querySelector('.footer-social')) {
  const footerSocial = document.createElement('nav');
  footerSocial.className = 'footer-social';
  footerSocial.setAttribute('aria-label', 'Muujis social media');
  footerSocial.innerHTML = socialMarkup;
  footerConnect.appendChild(footerSocial);
}

/* One deliberate wheel gesture advances one Muujis Standard principle. */
if (false && window.matchMedia('(min-width: 901px)').matches) {
  const standardScene = document.getElementById('testimonials');
  let standardWheelLocked = false;
  if (standardScene) {
    const standardQuote = standardScene.querySelector('blockquote');
    if (standardQuote) standardQuote.innerHTML = '<span class="standard-title-main">Creative-ku waa inuu soo jiitaa attention;</span><span class="standard-title-accent">strategy-guna waa inuu u beddelaa business opportunity.</span>';
    window.addEventListener('wheel', event => {
      const rect = standardScene.getBoundingClientRect();
      const range = standardScene.offsetHeight - window.innerHeight;
      const isPinned = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
      if (!isPinned || Math.abs(event.deltaY) < 8) return;
      event.preventDefault();
      if (standardWheelLocked) return;
      const current = Math.round(Math.max(0, Math.min(1, (window.scrollY - standardScene.offsetTop) / range)) * 2);
      const next = Math.max(0, Math.min(2, current + (event.deltaY > 0 ? 1 : -1)));
      if (next === current) return;
      standardWheelLocked = true;
      window.scrollTo({ top: standardScene.offsetTop + (range * (next / 2)), behavior: 'smooth' });
      window.setTimeout(() => { standardWheelLocked = false }, 650);
    }, { passive: false });
  }
}

/* Selected work: editorial showcase with a pinned horizontal image rail. */
const portfolioWork = document.getElementById('work');
if (portfolioWork) {
  const portfolioHeading = portfolioWork.querySelector('.section-heading');
  if (portfolioHeading) {
    const label = portfolioHeading.querySelector('.section-label');
    const title = portfolioHeading.querySelector('h2');
    const copy = portfolioHeading.querySelector(':scope>p:last-child');
    if (label) label.textContent = 'Selected work';
    if (title) title.textContent = 'Work that moves business.';
    if (copy) copy.textContent = 'A small preview of the systems, campaigns and digital experiences we build. Real project stories are coming next.';
  }
  const projectCards = [...portfolioWork.querySelectorAll('.featured-project')];
  projectCards.forEach((card, index) => {
    card.classList.add('portfolio-project');
    card.dataset.projectIndex = String(index);
  });
  if (!portfolioWork.querySelector('.work-gallery')) {
    const gallery = document.createElement('div');
    gallery.className = 'work-gallery';
    gallery.setAttribute('aria-label', 'Selected work image previews');
    gallery.innerHTML = `<div class="work-gallery-head"><span>More from the studio</span><span class="work-gallery-count">01 — 05</span></div><div class="work-gallery-viewport"><div class="work-gallery-track">
      <figure class="work-thumb is-current"><img src="/images/case-brand.jpg" alt="Brand identity studio preview"><figcaption>Brand identity</figcaption></figure>
      <figure class="work-thumb"><img src="/images/case-campaign.jpg" alt="Campaign production studio preview"><figcaption>Campaign systems</figcaption></figure>
      <figure class="work-thumb"><img src="/images/muujis-hero-studio.png" alt="Digital experience studio preview"><figcaption>Digital experiences</figcaption></figure>
      <figure class="work-thumb"><img src="/images/process-studio-generated.png" alt="Creative process studio preview"><figcaption>Creative direction</figcaption></figure>
      <figure class="work-thumb"><img src="/images/case-brand.jpg" alt="Business growth brand preview"><figcaption>Growth stories</figcaption></figure>
    </div></div>`;
    portfolioWork.appendChild(gallery);
  }
  const updatePortfolioGallery = () => {
    const track = portfolioWork.querySelector('.work-gallery-track');
    if (!track) return;
    const progress = parseFloat(getComputedStyle(portfolioWork).getPropertyValue('--scene-progress')) || 0;
    track.style.setProperty('--gallery-progress', String(progress));
    portfolioWork.querySelectorAll('.work-thumb').forEach((thumb, index) => thumb.classList.toggle('is-current', index === Math.min(4, Math.floor(progress * 5))));
  };
  window.addEventListener('scroll', updatePortfolioGallery, { passive: true });
  window.addEventListener('resize', updatePortfolioGallery);
  updatePortfolioGallery();
}

/* Stable selected-work story: one deliberate wheel action changes one featured preview. */
if (portfolioWork) {
  const portfolioStage = portfolioWork.querySelector('.scroll-stage') || portfolioWork;
  portfolioWork.classList.add('portfolio-showcase');
  portfolioWork.querySelectorAll('.featured-project,.work-gallery').forEach(node => node.remove());
  const showcaseItems = [
    { category: 'brand', image: '/images/case-brand.jpg', alt: 'Brand identity material system', eyebrow: 'Brand identity', title: 'Brand systems', copy: 'Clear identity systems that make a business recognizable and ready to grow.', includes: 'Logo · identity · guidelines' },
    { category: 'campaign', image: '/images/case-campaign.jpg', alt: 'Creative campaign production in a studio', eyebrow: 'Campaigns', title: 'Campaign systems', copy: 'Concept, content and production connected around one business objective.', includes: 'Content · production · media' },
    { category: 'digital', image: '/images/muujis-hero-studio.png', alt: 'Muujis digital studio team collaborating', eyebrow: 'Digital', title: 'Digital experiences', copy: 'Web and digital touchpoints designed to feel clear, useful and memorable.', includes: 'Web · content · experience' },
    { category: 'creative', image: '/images/process-studio-generated.png', alt: 'Muujis creative production process', eyebrow: 'Creative direction', title: 'Stories with direction', copy: 'Creative direction that gives every idea a focused role in the brand.', includes: 'Concept · visual · story' },
    { category: 'growth', image: '/images/case-brand.jpg', alt: 'Brand system designed for business growth', eyebrow: 'Growth', title: 'Built to progress', copy: 'Connected systems that make future campaigns easier to launch and measure.', includes: 'Strategy · systems · growth' }
  ];
  const showcase = document.createElement('div');
  showcase.className = 'portfolio-showcase-shell';
  showcase.innerHTML = `<div class="portfolio-copy"><span>Our work</span><h3>Selected <em>work.</em></h3><p>Ideas in the wild. Real brands. Measurable impact. A selection of work for ambitious clients.</p><a href="#contact">Explore more <b>→</b></a></div><div class="portfolio-main" aria-live="polite">${showcaseItems.map((item, index) => `<article class="portfolio-panel${index === 0 ? ' is-active' : ''}" data-project="${index}"><img src="${item.image}" alt="${item.alt}"><div class="portfolio-panel-info"><span>${item.eyebrow}</span><small>${String(index + 1).padStart(2, '0')}</small><h3>${item.title}</h3><p>${item.copy}</p><strong>${item.includes}</strong><a href="#contact" aria-label="Discuss ${item.title}">→</a></div></article>`).join('')}</div><div class="portfolio-thumbnails" role="tablist" aria-label="Work previews">${showcaseItems.map((item, index) => `<button class="portfolio-thumb${index === 0 ? ' is-active' : ''}" type="button" role="tab" aria-selected="${index === 0}" aria-label="Show ${item.title}" data-project="${index}"><img src="${item.image}" alt=""><span>${String(index + 1).padStart(2, '0')}</span></button>`).join('')}</div>`;
  const portfolioFilters = portfolioStage.querySelector('.work-filters');
  if (portfolioFilters) {
    showcase.querySelector('.portfolio-copy')?.appendChild(portfolioFilters);
  }
  portfolioStage.appendChild(showcase);
  let selectedProject = 0;
  const activateProject = index => {
    selectedProject = Math.max(0, Math.min(showcaseItems.length - 1, index));
    showcase.querySelectorAll('.portfolio-panel').forEach((panel, itemIndex) => panel.classList.toggle('is-active', itemIndex === selectedProject));
    showcase.querySelectorAll('.portfolio-thumb').forEach((thumb, itemIndex) => {
      const active = itemIndex === selectedProject;
      thumb.classList.toggle('is-active', active);
      thumb.setAttribute('aria-selected', String(active));
    });
    portfolioWork.dataset.activeProject = String(selectedProject + 1);
  };
  window.activatePortfolioProject = activateProject;
  showcase.addEventListener('click', event => {
    const thumb = event.target.closest('.portfolio-thumb');
    if (thumb) {
      const targetIndex = Number(thumb.dataset.project);
      activateProject(targetIndex);
      const range = Math.max(1, portfolioWork.offsetHeight - window.innerHeight);
      window.portfolioScrollLocked = true;
      window.scrollTo({ top: portfolioWork.offsetTop + (range * (targetIndex / (showcaseItems.length - 1))), behavior: 'smooth' });
      window.setTimeout(() => { window.portfolioScrollLocked = false; }, 520);
    }
  });
  portfolioFilters?.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    portfolioFilters.querySelectorAll('button').forEach(btn => btn.classList.toggle('is-active', btn === button));
    const filter = button.dataset.filter;
    const targetIdx = filter === 'campaign' ? 1 : filter === 'brand' ? 0 : 0;
    activateProject(targetIdx);
    const range = Math.max(1, portfolioWork.offsetHeight - window.innerHeight);
    window.portfolioScrollLocked = true;
    window.scrollTo({ top: portfolioWork.offsetTop + (range * (targetIdx / (showcaseItems.length - 1))), behavior: 'smooth' });
    window.setTimeout(() => { window.portfolioScrollLocked = false; }, 520);
  });
  if (!prefersReduced) {
    let portfolioLocked = false;
    const advanceWork = (direction) => {
      const next = selectedProject + direction;
      if (next < 0 || next >= showcaseItems.length || portfolioLocked) return false;
      portfolioLocked = true;
      window.portfolioScrollLocked = true;
      activateProject(next);
      const range = Math.max(1, portfolioWork.offsetHeight - window.innerHeight);
      window.scrollTo({ top: portfolioWork.offsetTop + (range * (next / (showcaseItems.length - 1))), behavior: 'smooth' });
      window.setTimeout(() => {
        portfolioLocked = false;
        window.portfolioScrollLocked = false;
      }, 520);
      return true;
    };

    window.addEventListener('wheel', event => {
      const rect = portfolioWork.getBoundingClientRect();
      const pinned = rect.top <= 2 && rect.bottom >= window.innerHeight - 2;
      if (!pinned || Math.abs(event.deltaY) < 8) return;
      if (advanceWork(event.deltaY > 0 ? 1 : -1)) {
        event.preventDefault();
      }
    }, { passive: false });

    let workTouchY = 0, workTouchX = 0, workTouchTime = 0;
    portfolioWork.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        workTouchY = e.touches[0].clientY;
        workTouchX = e.touches[0].clientX;
        workTouchTime = Date.now();
      }
    }, { passive: true });
    portfolioWork.addEventListener('touchend', e => {
      if (e.changedTouches.length === 1) {
        const rect = portfolioWork.getBoundingClientRect();
        const pinned = rect.top <= window.innerHeight * .22 && rect.bottom >= window.innerHeight * .78;
        if (!pinned) return;
        const diffY = workTouchY - e.changedTouches[0].clientY;
        const diffX = workTouchX - e.changedTouches[0].clientX;
        const duration = Date.now() - workTouchTime;
        if ((Math.abs(diffY) > 26 || (Math.abs(diffY) > 16 && duration < 240)) && Math.abs(diffY) > Math.abs(diffX) * 1.1) {
          advanceWork(diffY > 0 ? 1 : -1);
        } else if (Math.abs(diffX) > 28 && Math.abs(diffX) > Math.abs(diffY)) {
          advanceWork(diffX > 0 ? 1 : -1);
        }
      }
    }, { passive: true });
  }
  activateProject(0);
}
