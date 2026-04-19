<template>
  <div class="page-shell">
    <header class="site-nav" :class="{ 'site-nav--solid': navSolid, 'site-nav--open': menuOpen }">
      <div class="container nav-shell">
        <a class="brand" href="#top" @click="menuOpen = false">
          <span class="brand-mark">MDS</span>
          <span class="brand-copy">Mobile Dental Surgeon</span>
        </a>

        <nav class="nav-links" :class="{ open: menuOpen }">
          <a v-for="item in navLinks" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
          <a class="nav-cta" href="#contact" @click="menuOpen = false">Partner With Us</a>
        </nav>

        <button class="menu-toggle" type="button" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
          <span />
          <span />
        </button>
      </div>
    </header>

    <main>
      <section id="top" class="hero section section--dark">
        <div class="decor-orb orb-a" />
        <div class="decor-orb orb-b" />

        <div class="container hero-shell">
          <div class="hero-copy">
            <div class="eyebrow-rule" />
            <span class="section-kicker">Mobile Oral Surgeon · Dallas–Fort Worth</span>
            <h1 class="display-title">Keep your surgical patients, production, and practice loyalty <em>in-house</em>.</h1>
            <p class="hero-text">
              Dr. Michael Tiplea, DDS, AFAAID brings a complete oral surgery unit directly to DFW general dental offices —
              wisdom teeth, implants, surgical extractions, IV sedation, bone grafting, sinus lifts, and All-on-X — with
              zero capital expense and a same-day 50/50 production split.
            </p>

            <div class="hero-tags">
              <span v-for="tag in heroTags" :key="tag" class="pill-tag">{{ tag }}</span>
            </div>

            <div class="btn-row hero-actions">
              <a class="btn btn--primary" href="#calculator">See the revenue model</a>
              <a class="btn btn--ghost" href="#how">See how it works</a>
            </div>

            <div class="hero-proof editorial-grid">
              <div v-for="item in heroStats" :key="item.label" class="hero-proof-card">
                <span class="stat-value">{{ item.value }}</span>
                <p>{{ item.label }}</p>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="visual-card visual-card--primary" :style="primaryVisualStyle">
              <span class="card-overline">Complete mobile surgical department</span>
              <h2 class="card-title">We bring the surgeon, sedation, inventory, assistant, setup, and cleanup.</h2>
              <p class="card-copy">
                Host offices simply provide an operatory, chair, suction, and a power outlet. No implant inventory to stock.
                No surgical motor to buy. No sedation equipment to finance.
              </p>
              <div class="visual-list">
                <div v-for="item in whatWeBring" :key="item.title" class="visual-list-item">
                  <strong>{{ item.title }}</strong>
                  <span>{{ item.note }}</span>
                </div>
              </div>
            </div>

            <div class="visual-card visual-card--secondary" :style="secondaryVisualStyle">
              <span class="card-overline">On every case</span>
              <div class="mini-stat-grid">
                <div v-for="item in safetyStats" :key="item.label">
                  <strong>{{ item.value }}</strong>
                  <span>{{ item.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="model" class="section section--cream">
        <div class="container">
          <div class="section-header compact">
            <div>
              <span class="section-kicker">The partnership model</span>
              <h2 class="section-title">Referral leakage becomes retained production.</h2>
            </div>
            <p class="section-copy">
              Built for general dentists in Dallas–Fort Worth who want to stop sending surgical cases away. You keep the
              patient relationship, recover lost production, and avoid the overhead of building an oral surgery department.
            </p>
          </div>

          <div class="model-grid editorial-grid">
            <article class="grid-card model-card left-accent-card">
              <span class="card-overline">The problem</span>
              <h3 class="card-title">Every referred case leaves with your revenue and your patient bond.</h3>
              <p class="card-copy">
                The moment a patient is sent out for extractions, implants, or sedation, you lose production, surrender the
                surgical experience, and create an opening for another office to own the next phase of care.
              </p>
            </article>

            <article class="grid-card model-card left-accent-card">
              <span class="card-overline">The model</span>
              <h3 class="card-title">Host Dr. Tiplea inside your office and keep 50% of production.</h3>
              <p class="card-copy">
                The structure is simple: conservative case review, surgery day inside your practice, same-day settlement, and
                the patient recovers bonded to your team — not a specialist's funnel.
              </p>
            </article>

            <article v-for="item in partnershipCards" :key="item.title" class="grid-card detail-card">
              <span class="card-overline">{{ item.eyebrow }}</span>
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-copy">{{ item.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="calculator" class="section section--dark">
        <div class="container calculator-shell">
          <div>
            <div class="section-header compact calculator-header">
              <div>
                <span class="section-kicker">Recovered production</span>
                <h2 class="section-title">Start with a few cases. Recover meaningful monthly profit.</h2>
              </div>
              <p class="section-copy">
                The live-site example is straightforward: a practice doing four wisdom tooth cases and two implant cases each
                month can recapture about $6,200 monthly — roughly $74,400 annually — from production that previously walked
                out the door.
              </p>
            </div>

            <div class="calculator-story editorial-grid">
              <article v-for="item in calculatorStory" :key="item.title" class="grid-card">
                <span class="card-overline">{{ item.eyebrow }}</span>
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-copy">{{ item.copy }}</p>
              </article>
            </div>
          </div>

          <aside class="calculator-panel">
            <span class="card-overline">Practice revenue estimator</span>

            <div class="slider-control">
              <div class="slider-header">
                <label for="wt">Wisdom teeth cases / month</label>
                <strong>{{ wisdomCases }}</strong>
              </div>
              <input id="wt" v-model.number="wisdomCases" type="range" min="0" max="20" step="1">
            </div>

            <div class="slider-control">
              <div class="slider-header">
                <label for="implants">Implant cases / month</label>
                <strong>{{ implantCases }}</strong>
              </div>
              <input id="implants" v-model.number="implantCases" type="range" min="0" max="20" step="1">
            </div>

            <div class="calc-results">
              <div class="calc-row">
                <span>Currently earning on referred cases</span>
                <strong class="calc-row__lose">$0 / month</strong>
              </div>
              <div class="calc-row">
                <span>Your profit hosting Dr. Tiplea</span>
                <strong class="calc-row__win">{{ formatCurrency(monthlyProfit) }} / month</strong>
              </div>
              <div class="calc-row">
                <span>Annual profit recovered</span>
                <strong class="calc-row__win">{{ formatCurrency(annualProfit) }} / year</strong>
              </div>
            </div>

            <div class="calc-total">
              <span>Production kept in your ecosystem</span>
              <strong>{{ formatCurrency(annualProfit) }}</strong>
            </div>

            <p class="calculator-note">
              Assumes 50% share of typical hosted surgical production. Start with one case per month and scale to recurring
              surgical blocks as your team gets comfortable.
            </p>
          </aside>
        </div>
      </section>

      <section id="services" class="section section--pale">
        <div class="container">
          <div class="section-header compact">
            <div>
              <span class="section-kicker">Services performed in-office</span>
              <h2 class="section-title">A full oral surgery menu, delivered in your familiar environment.</h2>
            </div>
            <p class="section-copy">
              The goal is not a narrow specialty day. It is a dependable surgical extension of your office for the procedures
              your patients already need and would otherwise be referred out for.
            </p>
          </div>

          <div class="services-grid editorial-grid">
            <article v-for="service in services" :key="service.title" class="grid-card service-card">
              <span class="card-overline">{{ service.eyebrow }}</span>
              <h3 class="card-title">{{ service.title }}</h3>
              <p class="card-copy">{{ service.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="how" class="section section--dark">
        <div class="container">
          <div class="section-header compact">
            <div>
              <span class="section-kicker">From submission to settlement</span>
              <h2 class="section-title">Three clear steps. Minimal friction for your team.</h2>
            </div>
            <p class="section-copy">
              The workflow is designed for general practice teams: quick case approval, efficient surgery day logistics, and a
              revenue split handled same-day once the block is complete.
            </p>
          </div>

          <div class="steps-grid">
            <article v-for="step in steps" :key="step.number" class="step-card">
              <span class="step-number">{{ step.number }}</span>
              <span class="card-overline">{{ step.eyebrow }}</span>
              <h3 class="card-title">{{ step.title }}</h3>
              <p class="card-copy">{{ step.copy }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="safety" class="section section--cream">
        <div class="container safety-shell">
          <div>
            <div class="section-header compact safety-header">
              <div>
                <span class="section-kicker">Safety, liability, logistics</span>
                <h2 class="section-title">Structured for predictability — clinically and operationally.</h2>
              </div>
              <p class="section-copy">
                Every partnership question should be answered before the first surgery day. The service is built around full
                monitoring, conservative case selection, clear malpractice separation, and a self-contained surgical setup.
              </p>
            </div>

            <div class="safety-grid editorial-grid">
              <article v-for="item in safetyCards" :key="item.title" class="grid-card safety-card">
                <span class="card-overline">{{ item.eyebrow }}</span>
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-copy">{{ item.copy }}</p>
              </article>
            </div>
          </div>

          <aside class="host-needs">
            <div class="host-needs-card">
              <span class="card-overline">Host office needs</span>
              <h3 class="card-title">Your office provides the room. We provide the surgical department.</h3>
              <ul>
                <li v-for="item in hostNeeds" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div class="host-needs-card host-needs-card--accent">
              <span class="card-overline">What arrives with Dr. Tiplea</span>
              <ul>
                <li v-for="item in mobileUnit" :key="item">{{ item }}</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="doctor" class="section section--dark">
        <div class="container doctor-shell">
          <div class="doctor-copy">
            <span class="section-kicker">About Dr. Michael Tiplea</span>
            <h2 class="section-title">20+ years of surgery. 20,000+ extractions. A mobile model refined in DFW.</h2>
            <p class="body-copy">
              Dr. Michael Tiplea, DDS, AFAAID focuses on bringing advanced oral surgery directly into general practices.
              Traveling the Dallas–Fort Worth market since 2016, he has built a repeatable host-office system centered on IV
              sedation, efficient case flow, patient retention, and conservative safety standards.
            </p>
            <p class="body-copy doctor-copy__secondary">
              Credentials highlighted on the current site include IV sedation specialization, ACLS certification, ADSA
              Mastership candidacy, and independent malpractice coverage. The model is designed so general dentists gain
              surgical capability without building a second business inside their own practice.
            </p>
          </div>

          <div class="doctor-side">
            <div class="doctor-photo">
              <img src="/michael-tiplea.png" alt="Dr. Michael Tiplea, DDS, AFAAID" loading="lazy" />
            </div>

            <div class="doctor-metrics editorial-grid">
              <div v-for="item in doctorMetrics" :key="item.label" class="grid-card doctor-metric">
                <strong>{{ item.value }}</strong>
                <span>{{ item.label }}</span>
              </div>
            </div>

            <div class="credentials-list editorial-grid">
              <article v-for="item in credentials" :key="item" class="grid-card credential-item">
                <span>{{ item }}</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" class="section section--pale">
        <div class="container">
          <div class="section-header compact">
            <div>
              <span class="section-kicker">Partner perspective</span>
              <h2 class="section-title">Why the model resonates with general dentists.</h2>
            </div>
            <p class="section-copy">
              The current live site positions the service around comfort, production, seamless workflow, and patient loyalty.
              These quotes are presented as host-office sentiment and reinforce the core economic value proposition.
            </p>
          </div>

          <ClientOnly>
            <Swiper
              class="testimonial-swiper"
              :modules="swiperModules"
              :slides-per-view="1"
              :space-between="24"
              :pagination="{ clickable: true }"
              :autoplay="{ delay: 4500, disableOnInteraction: false }"
              :breakpoints="{ 900: { slidesPerView: 2 } }"
            >
              <SwiperSlide v-for="item in testimonials" :key="item.quote">
                <article class="testimonial-card">
                  <span class="card-overline">{{ item.role }}</span>
                  <p class="testimonial-quote">{{ item.quote }}</p>
                  <div class="testimonial-meta">
                    <strong>{{ item.author }}</strong>
                    <span>{{ item.practice }}</span>
                  </div>
                </article>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </section>

      <section id="faq" class="section section--cream">
        <div class="container">
          <div class="section-header compact">
            <div>
              <span class="section-kicker">Frequently asked questions</span>
              <h2 class="section-title">Common host-office questions, answered clearly.</h2>
            </div>
            <p class="section-copy">
              The live site addresses the same concerns that matter to any GP office: safety, disruption, patient ownership,
              commitment level, and what happens when something comes up after the case.
            </p>
          </div>

          <div class="faq-grid editorial-grid">
            <article
              v-for="(item, index) in faqItems"
              :key="item.question"
              class="faq-item"
              :class="{ 'faq-item--open': activeFaq === index }"
              @click="activeFaq = activeFaq === index ? null : index"
            >
              <button class="faq-question" type="button">
                <span>{{ item.question }}</span>
                <strong>{{ activeFaq === index ? '−' : '+' }}</strong>
              </button>
              <p class="faq-answer">{{ item.answer }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="section contact-section">
        <div class="decor-orb orb-c" />
        <div class="container contact-shell">
          <div class="contact-copy">
            <span class="section-kicker">Become a host office</span>
            <h2 class="section-title">Start with one case. Experience the workflow. Decide from there.</h2>
            <p class="section-copy">
              The current site offers a preferential split for first surgical day partnerships and emphasizes zero long-term
              commitment. Reach out directly or preload an email inquiry using the form.
            </p>

            <div class="contact-benefits editorial-grid">
              <article v-for="item in contactBenefits" :key="item.title" class="grid-card contact-benefit">
                <span class="card-overline">{{ item.eyebrow }}</span>
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-copy">{{ item.copy }}</p>
              </article>
            </div>
          </div>

          <aside class="contact-panel">
            <span class="card-overline">Request partnership</span>
            <h3 class="card-title">Email Dr. Tiplea with your practice details.</h3>

            <div class="contact-form-grid">
              <label>
                <span>Practice name</span>
                <input v-model="contactForm.practice" type="text" placeholder="North Dallas Dental Group">
              </label>
              <label>
                <span>Contact name</span>
                <input v-model="contactForm.name" type="text" placeholder="Dr. Jane Smith">
              </label>
              <label>
                <span>Email</span>
                <input v-model="contactForm.email" type="email" placeholder="doctor@practice.com">
              </label>
              <label>
                <span>Monthly surgical cases</span>
                <select v-model="contactForm.volume">
                  <option value="1-2">1–2</option>
                  <option value="3-5">3–5</option>
                  <option value="6-10">6–10</option>
                  <option value="10+">10+</option>
                </select>
              </label>
              <label class="contact-form-grid__full">
                <span>What procedures are you trying to keep in-house?</span>
                <textarea v-model="contactForm.notes" placeholder="Wisdom teeth, implants, sedation, grafting, All-on-X..."></textarea>
              </label>
            </div>

            <div class="btn-row contact-actions">
              <a class="btn btn--primary" :href="mailtoHref">Open partnership email</a>
              <a class="btn btn--ghost" href="mailto:drmichaeltiplea@gmail.com">drmichaeltiplea@gmail.com</a>
            </div>

            <p class="contact-note">
              No long-term contract. No exclusivity clause. No equipment purchase required.
            </p>
          </aside>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-shell">
        <div>
          <a class="brand brand--footer" href="#top">
            <span class="brand-mark">MDS</span>
            <span class="brand-copy">Mobile Dental Surgeon</span>
          </a>
          <p class="footer-copy">Mobile oral surgery for Dallas–Fort Worth general dental practices.</p>
        </div>

        <div class="footer-links">
          <a v-for="item in navLinks" :key="item.href" :href="item.href">{{ item.label }}</a>
          <a href="mailto:drmichaeltiplea@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

useSeoMeta({
  title: 'Mobile Dental Surgeon | Mobile OMS for Dallas-Fort Worth Dental Practices',
  description:
    'Premium mobile oral surgery website for Dr. Michael Tiplea, DDS, AFAAID. Wisdom teeth, implants, IV sedation, grafting, and All-on-X delivered directly inside Dallas-Fort Worth dental practices.',
  ogTitle: 'Mobile Dental Surgeon | Mobile OMS for Dallas-Fort Worth Dental Practices',
  ogDescription:
    'Keep patients and production in-house with mobile oral surgery, IV sedation, and same-day revenue sharing for DFW dental practices.',
  twitterCard: 'summary_large_image'
})

const swiperModules = [Autoplay, Pagination]
const menuOpen = ref(false)
const activeFaq = ref<number | null>(0)
const wisdomCases = ref(4)
const implantCases = ref(2)
const { y } = useWindowScroll()

const navSolid = computed(() => y.value > 36)
const primaryVisualStyle = computed(() => ({
  transform: `translate3d(0, ${Math.min(y.value * 0.08, 32)}px, 0)`
}))
const secondaryVisualStyle = computed(() => ({
  transform: `translate3d(0, ${Math.max(-24, -y.value * 0.05)}px, 0)`
}))

const monthlyProfit = computed(() => wisdomCases.value * 1000 + implantCases.value * 1100)
const annualProfit = computed(() => monthlyProfit.value * 12)

const navLinks = [
  { label: 'Model', href: '#model' },
  { label: 'Calculator', href: '#calculator' },
  { label: 'Services', href: '#services' },
  { label: 'Safety', href: '#safety' },
  { label: 'FAQ', href: '#faq' }
]

const heroTags = ['Zero overhead', '50/50 production split', 'IV sedation', 'DFW host offices']

const heroStats = [
  { value: '20+', label: 'years of oral surgery experience' },
  { value: '20,000+', label: 'extractions performed' },
  { value: '$6,200', label: 'illustrative monthly profit recovered' }
]

const whatWeBring = [
  { title: 'IV sedation system', note: 'Pumps, monitoring, reversal agents, crash kit' },
  { title: 'Sterile surgical trays', note: 'Pre-packed and autoclave-verified' },
  { title: 'Implant inventory', note: 'Multiple systems available at the point of care' },
  { title: 'Assistant + disposables', note: 'A fully equipped surgical workflow' }
]

const safetyStats = [
  { value: 'ASA I / II', label: 'conservative case selection' },
  { value: 'SpO₂ · EtCO₂ · EKG', label: 'full IV conscious sedation monitoring' },
  { value: 'Same day', label: 'production settlement after the block' },
  { value: 'Independent', label: 'malpractice coverage carried by Dr. Tiplea' }
]

const partnershipCards = [
  {
    eyebrow: 'Zero overhead',
    title: 'No capital investment required',
    copy:
      'No surgical motors, sedation monitors, implant shelves, or additional staff to purchase just to start saying yes to surgical treatment.'
  },
  {
    eyebrow: 'Retention',
    title: 'Your patient stays yours',
    copy:
      'The patient receives surgery in the environment they already trust, then returns to your practice for the restorative relationship and follow-up.'
  },
  {
    eyebrow: 'Flexibility',
    title: 'Scale from trial case to recurring block',
    copy:
      'Start with one hosted case, confirm the workflow with your team, and grow into recurring surgery days without signing away flexibility.'
  },
  {
    eyebrow: 'Speed',
    title: 'Fast case review and scheduling',
    copy:
      'Case submission, review, and approval are positioned as a 24-hour turnaround so your office can move decisively instead of waiting on outside referrals.'
  }
]

const calculatorStory = [
  {
    eyebrow: 'Previously referred out',
    title: 'Wisdom teeth and implant cases often represent invisible loss.',
    copy:
      'What feels like a normal referral pattern can quietly remove thousands in monthly production while giving another office the entire surgical encounter.'
  },
  {
    eyebrow: 'Hosted in-office',
    title: 'The host-office split converts surgical demand into retained revenue.',
    copy:
      'The financial upside arrives without buying equipment, hiring a surgeon, or changing what your core team already does well every day.'
  }
]

const services = [
  {
    eyebrow: 'Extractions',
    title: 'Wisdom teeth removal',
    copy: 'Simple to complex third molar removal performed with the surgical equipment and sedation support needed for efficient in-office care.'
  },
  {
    eyebrow: 'Implants',
    title: 'Implant placement',
    copy: 'Single and multiple implant cases with grafting support and inventory already on site so treatment does not depend on what your office stocks.'
  },
  {
    eyebrow: 'Oral surgery',
    title: 'Surgical extractions',
    copy: 'Impacted teeth, fractured roots, and surgical removal cases that would otherwise leave the practice can be completed in the host operatory.'
  },
  {
    eyebrow: 'Sedation',
    title: 'IV sedation',
    copy: 'Conscious IV sedation for appropriately selected patients with full physiologic monitoring and emergency readiness on every session.'
  },
  {
    eyebrow: 'Grafting',
    title: 'Bone grafts and sinus lifts',
    copy: 'Advanced implant-supportive procedures are part of the service mix, expanding what a general practice can confidently keep in-house.'
  },
  {
    eyebrow: 'Full arch',
    title: 'All-on-X surgery',
    copy: 'High-value comprehensive surgical cases can be delivered in partnership with the host office when the case selection is right.'
  }
]

const steps = [
  {
    number: '01',
    eyebrow: 'Case submission',
    title: 'Send records through the secure portal.',
    copy:
      'Submit patient info, pano, medical history, and requested procedures. Cases are reviewed for fit and approved before they ever reach the schedule.'
  },
  {
    number: '02',
    eyebrow: 'Surgery day',
    title: 'Dr. Tiplea arrives with the full mobile unit.',
    copy:
      'Surgical motor, IV sedation, sterile trays, implant inventory, assistant, setup, and cleanup all travel to the host office so your staff workflow stays familiar.'
  },
  {
    number: '03',
    eyebrow: 'Revenue + retention',
    title: 'Settle production and keep the patient relationship.',
    copy:
      'The production split is settled same-day, and the patient continues identifying with your office instead of being absorbed into a specialist referral network.'
  }
]

const safetyCards = [
  {
    eyebrow: 'Monitoring',
    title: 'Every IV case uses full monitoring.',
    copy:
      'SpO₂, EtCO₂, EKG, blood pressure monitoring, reversal agents, crash kit readiness, and defined emergency protocol are part of the standard surgical setup.'
  },
  {
    eyebrow: 'Selection',
    title: 'Only conservative office-based cases are accepted.',
    copy:
      'The live site emphasizes ASA I and ASA II patients only, with cases reviewed before scheduling to maintain a disciplined safety envelope.'
  },
  {
    eyebrow: 'Liability',
    title: 'Independent malpractice coverage is carried by Dr. Tiplea.',
    copy:
      'The practice model is framed to protect host offices from surgical exposure while maintaining formal process, documentation, and a clear operating structure.'
  },
  {
    eyebrow: 'Sterility',
    title: 'Sterile trays and disposables are self-contained.',
    copy:
      'Pre-packaged trays, single-use supplies, and offloaded sterilization needs keep your internal workflow clean and minimize disruption to your team.'
  }
]

const hostNeeds = ['One operatory', 'Patient chair', 'Suction', 'Power outlet']

const mobileUnit = [
  'IV sedation pumps, monitors, reversal agents, and crash kit',
  'Surgical motor and handpieces',
  'Implant system inventory and related disposables',
  'Sterile surgical trays and all consumables',
  'A trained surgical assistant for the block'
]

const doctorMetrics = [
  { value: 'DDS', label: 'Doctor of Dental Surgery' },
  { value: 'AFAAID', label: 'Fellowship credential highlighted on the live site' },
  { value: '2016', label: 'traveling the DFW area with the mobile model' },
  { value: 'ACLS', label: 'certified emergency readiness' }
]

const credentials = [
  '20+ years in surgery',
  '20,000+ extractions',
  'IV sedation specialist',
  'ADSA Mastership candidate',
  'Independent malpractice insurance',
  'Focused on DFW host-office partnerships'
]

const testimonials = [
  {
    role: 'Host office feedback',
    quote:
      'Dr. Tiplea changed the math completely. My patients are more comfortable, my production is up, and I spent nothing on equipment.',
    author: 'General Dentist',
    practice: 'Dallas–Fort Worth partner practice'
  },
  {
    role: 'Workflow feedback',
    quote:
      'The setup is genuinely seamless. It is the easiest decision I have made for this practice.',
    author: 'Practice Owner',
    practice: 'DFW restorative office'
  },
  {
    role: 'Retention feedback',
    quote:
      'This partnership stopped the handoff. We kept the patient, kept the case value, and never had to build a surgical department ourselves.',
    author: 'Lead Doctor',
    practice: 'North Texas general practice'
  }
]

const faqItems = [
  {
    question: 'Will hosting surgery disrupt my normal office flow?',
    answer:
      'The model is designed so your office provides the room while Dr. Tiplea arrives with the surgical unit, assistant, disposables, and cleanup process. Your team is not expected to become an oral surgery department overnight.'
  },
  {
    question: 'What happens if a patient has a concern after surgery?',
    answer:
      'The live site emphasizes direct access to Dr. Tiplea rather than a call center. Host offices are positioned to have surgeon-level communication when real postoperative questions arise.'
  },
  {
    question: 'Is there a long-term commitment or exclusivity clause?',
    answer:
      'No. The current positioning is explicitly low-friction: start with one case or a first surgical day, validate the fit, and continue only if the workflow works for your office.'
  },
  {
    question: 'Which patients qualify for hosted surgery?',
    answer:
      'Only conservatively selected office-based cases are accepted, with ASA I and II patients highlighted on the current site and each case reviewed in advance before scheduling.'
  },
  {
    question: 'Do I need to buy surgical motors, sedation equipment, or implant inventory?',
    answer:
      'No. The service promise is zero overhead for the host office: the mobile unit arrives with equipment, inventory, trays, and staffing already prepared.'
  },
  {
    question: 'Why not just keep referring out?',
    answer:
      'Because every referral can represent lost revenue, lower patient retention, and a weaker relationship arc. The host-office model lets you preserve surgical production inside your existing ecosystem.'
  }
]

const contactBenefits = [
  {
    eyebrow: 'Fast start',
    title: '24-hour review cadence',
    copy: 'The current offer centers on quick case review so offices can move from inquiry to first hosted block without drawn-out onboarding.'
  },
  {
    eyebrow: 'Low risk',
    title: 'Preferential first-case economics',
    copy: 'The live site promotes a favorable split for a first surgical day so host offices can test the model before expanding volume.'
  },
  {
    eyebrow: 'No lock-in',
    title: 'Flexible partnership structure',
    copy: 'No exclusivity and no long-term contract means your office can evaluate actual workflow, patient response, and financial results in real conditions.'
  }
]

const contactForm = reactive({
  practice: '',
  name: '',
  email: '',
  volume: '3-5',
  notes: ''
})

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`Host Office Partnership Inquiry${contactForm.practice ? ` — ${contactForm.practice}` : ''}`)
  const body = encodeURIComponent([
    'Hello Dr. Tiplea,',
    '',
    `Practice: ${contactForm.practice || 'Not provided'}`,
    `Contact: ${contactForm.name || 'Not provided'}`,
    `Email: ${contactForm.email || 'Not provided'}`,
    `Estimated monthly surgical cases: ${contactForm.volume}`,
    '',
    'Procedures / notes:',
    contactForm.notes || 'Not provided',
    '',
    'I would like to learn more about hosting mobile oral surgery in our office.'
  ].join('\n'))

  return `mailto:drmichaeltiplea@gmail.com?subject=${subject}&body=${body}`
})

const formatCurrency = (value: number) => `$${value.toLocaleString('en-US')}`
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 7rem;
  background:
    radial-gradient(circle at 12% 14%, rgba(179, 140, 97, 0.12), transparent 28%),
    radial-gradient(circle at 82% 18%, rgba(179, 140, 97, 0.16), transparent 24%),
    linear-gradient(180deg, #071d31 0%, #041627 52%, #071a2b 100%);
}

.hero-shell {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(340px, 0.98fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: center;
}

.hero-text {
  max-width: 44rem;
  margin: 1.5rem 0 0;
  color: var(--text-light);
  font-size: clamp(1.02rem, 1.45vw, 1.18rem);
  line-height: 1.75;
}

.hero-text :deep(em),
.display-title :deep(em) {
  font-style: italic;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.8rem 0 2rem;
}

.hero-actions {
  margin-bottom: 2rem;
}

.hero-proof {
  grid-template-columns: repeat(3, 1fr);
}

.hero-proof-card {
  padding: 1.35rem 1.2rem;
  background: rgba(255, 255, 255, 0.04);
}

.hero-proof-card p {
  margin-top: 0.45rem;
  color: rgba(255, 255, 255, 0.64);
  font-size: 0.84rem;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.hero-visual {
  position: relative;
  min-height: 41rem;
}

.visual-card {
  position: absolute;
  border-radius: 1.8rem;
  box-shadow: var(--shadow-deep);
  transition: transform 0.3s ease;
}

.visual-card--primary {
  inset: 0 0 5.5rem 2.5rem;
  padding: clamp(1.8rem, 3vw, 2.4rem);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03)),
    radial-gradient(circle at top right, rgba(179, 140, 97, 0.28), transparent 26%),
    rgba(15, 34, 53, 0.92);
  border: 1px solid rgba(179, 140, 97, 0.22);
}

.visual-card--secondary {
  inset: auto auto 0 0;
  width: min(20rem, 75%);
  padding: 1.4rem;
  background: rgba(4, 22, 39, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);
}

.visual-list {
  display: grid;
  gap: 1px;
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.08);
}

.visual-list-item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.05rem;
  background: rgba(255, 255, 255, 0.03);
}

.visual-list-item strong,
.visual-list-item span {
  display: block;
}

.visual-list-item strong {
  font-size: 0.92rem;
  color: var(--white);
}

.visual-list-item span {
  max-width: 11rem;
  color: rgba(255, 255, 255, 0.56);
  font-size: 0.82rem;
  line-height: 1.5;
  text-align: right;
}

.mini-stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
}

.mini-stat-grid div {
  min-height: 7rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
}

.mini-stat-grid strong {
  display: block;
  margin-bottom: 0.3rem;
  font-family: var(--serif);
  font-size: 1.45rem;
  line-height: 1;
}

.mini-stat-grid span {
  display: block;
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.78rem;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.orb-a {
  top: 6rem;
  right: -1rem;
  width: 18rem;
  height: 18rem;
  background: rgba(179, 140, 97, 0.12);
}

.orb-b {
  bottom: 5rem;
  left: -4rem;
  width: 12rem;
  height: 12rem;
  background: rgba(255, 255, 255, 0.05);
}

.model-grid {
  grid-template-columns: repeat(2, 1fr);
}

.model-card,
.detail-card,
.service-card,
.safety-card,
.contact-benefit {
  min-height: 100%;
}

.calculator-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 30rem);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

.calculator-header {
  margin-bottom: 2.4rem;
}

.calculator-story {
  grid-template-columns: repeat(2, 1fr);
}

.calculator-panel {
  position: sticky;
  top: 6.5rem;
  padding: 2rem;
  border-radius: 1.75rem;
  border: 1px solid rgba(179, 140, 97, 0.26);
  background:
    radial-gradient(circle at top right, rgba(179, 140, 97, 0.16), transparent 24%),
    rgba(7, 24, 40, 0.94);
  box-shadow: var(--shadow-deep);
}

.slider-control + .slider-control {
  margin-top: 1.35rem;
}

.slider-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
  gap: 1rem;
}

.slider-header label {
  color: rgba(255, 255, 255, 0.64);
  font-size: 0.84rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.slider-header strong {
  font-family: var(--serif);
  font-size: 1.35rem;
  color: var(--gold-soft);
}

.calculator-panel input[type='range'] {
  width: 100%;
}

.calc-results {
  margin-top: 1.7rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.25rem;
}

.calc-row {
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.calc-row span {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.92rem;
}

.calc-row strong {
  font-size: 0.94rem;
}

.calc-row__lose {
  color: var(--danger);
}

.calc-row__win {
  color: var(--success);
}

.calc-total {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.3rem;
  padding: 1.2rem;
  border-radius: 1.2rem;
  background: rgba(179, 140, 97, 0.12);
  border: 1px solid rgba(179, 140, 97, 0.22);
}

.calc-total span {
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.calc-total strong {
  font-family: var(--serif);
  font-size: 2rem;
  color: var(--gold-soft);
}

.calculator-note {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.84rem;
  line-height: 1.7;
}

.services-grid {
  grid-template-columns: repeat(3, 1fr);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
}

.step-card {
  padding: clamp(1.8rem, 3vw, 2.6rem);
  background: rgba(255, 255, 255, 0.03);
}

.step-number {
  display: block;
  margin-bottom: 1rem;
  font-family: var(--serif);
  font-size: clamp(3.2rem, 5vw, 5rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: rgba(255, 255, 255, 0.16);
}

.safety-shell,
.doctor-shell,
.contact-shell {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 32rem);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

.safety-header {
  margin-bottom: 2.4rem;
}

.safety-grid {
  grid-template-columns: repeat(2, 1fr);
}

.host-needs {
  display: grid;
  gap: 1rem;
}

.host-needs-card {
  padding: 1.8rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(16, 32, 51, 0.08);
  box-shadow: 0 20px 60px rgba(16, 32, 51, 0.08);
}

.host-needs-card--accent {
  background: linear-gradient(180deg, rgba(17, 37, 57, 0.96), rgba(8, 24, 39, 0.96));
  color: var(--white);
  border-color: rgba(179, 140, 97, 0.2);
}

.host-needs-card ul {
  display: grid;
  gap: 0.85rem;
  padding: 0;
  margin: 1.4rem 0 0;
  list-style: none;
}

.host-needs-card li {
  position: relative;
  padding-left: 1.35rem;
  line-height: 1.65;
}

.host-needs-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--gold);
}

.doctor-copy {
  display: grid;
  gap: 1.4rem;
}

.doctor-copy__secondary {
  color: rgba(255, 255, 255, 0.6);
}

.doctor-side {
  display: grid;
  gap: 1rem;
}

.doctor-photo img {
  width: 100%;
  border-radius: var(--radius);
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

.doctor-metrics {
  grid-template-columns: 1fr 1fr;
}

.doctor-metric strong {
  display: block;
  font-family: var(--serif);
  font-size: 2rem;
  line-height: 1;
}

.doctor-metric span,
.credential-item span {
  display: block;
  margin-top: 0.45rem;
  color: rgba(255, 255, 255, 0.64);
  line-height: 1.6;
}

.credentials-list {
  grid-template-columns: 1fr;
}

.testimonial-swiper {
  padding-bottom: 3rem;
}

.testimonial-card {
  min-height: 100%;
  padding: 2rem;
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(16, 32, 51, 0.08);
  box-shadow: 0 24px 64px rgba(16, 32, 51, 0.08);
}

.testimonial-quote {
  font-family: var(--serif);
  font-size: clamp(1.25rem, 1.8vw, 1.6rem);
  line-height: 1.55;
  color: var(--ink);
}

.testimonial-meta {
  margin-top: 1.6rem;
}

.testimonial-meta strong,
.testimonial-meta span {
  display: block;
}

.testimonial-meta span {
  margin-top: 0.25rem;
  color: var(--ink-muted);
}

:deep(.swiper-pagination) {
  bottom: 0 !important;
}

:deep(.swiper-pagination-bullet) {
  width: 0.65rem;
  height: 0.65rem;
  background: rgba(16, 32, 51, 0.22);
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--gold);
}

.faq-grid {
  grid-template-columns: repeat(2, 1fr);
}

.faq-item {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.82);
  cursor: pointer;
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 0;
  color: var(--ink);
  text-align: left;
}

.faq-question span {
  font-family: var(--serif);
  font-size: 1.25rem;
  line-height: 1.35;
}

.faq-question strong {
  font-size: 1.2rem;
  color: var(--gold);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  color: var(--ink-muted);
  line-height: 1.7;
  transition: max-height 0.35s ease, margin-top 0.35s ease;
}

.faq-item--open .faq-answer {
  max-height: 12rem;
  margin-top: 0.9rem;
}

.contact-section {
  background:
    radial-gradient(circle at top right, rgba(179, 140, 97, 0.18), transparent 24%),
    linear-gradient(180deg, #071d31 0%, #041627 100%);
  color: var(--white);
}

.contact-benefits {
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
}

.contact-panel {
  position: relative;
  z-index: 1;
  padding: 2rem;
  border-radius: 1.75rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow-deep);
}

.contact-form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.4rem;
}

.contact-form-grid label {
  display: grid;
  gap: 0.45rem;
}

.contact-form-grid span {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-form-grid input,
.contact-form-grid select,
.contact-form-grid textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: var(--white);
  outline: none;
}

.contact-form-grid input::placeholder,
.contact-form-grid textarea::placeholder {
  color: rgba(255, 255, 255, 0.42);
}

.contact-form-grid textarea {
  min-height: 8rem;
  resize: vertical;
}

.contact-form-grid__full {
  grid-column: 1 / -1;
}

.contact-actions {
  margin-top: 1.4rem;
}

.contact-note {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.84rem;
  line-height: 1.7;
}

.orb-c {
  top: 6rem;
  right: 12%;
  width: 12rem;
  height: 12rem;
  background: rgba(179, 140, 97, 0.14);
}

.site-nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 40;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
}

.site-nav--solid,
.site-nav--open {
  background: rgba(4, 22, 39, 0.88);
  border-bottom-color: rgba(179, 140, 97, 0.3);
  backdrop-filter: blur(16px);
}

.nav-shell {
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
}

.brand {
  display: inline-flex;
  flex-direction: column;
  gap: 0.2rem;
}

.brand-mark {
  font-family: var(--serif);
  font-size: 1.55rem;
  line-height: 0.9;
  letter-spacing: -0.04em;
}

.brand-copy {
  color: rgba(255, 255, 255, 0.64);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: color 0.25s ease;
}

.nav-links a:hover {
  color: var(--gold-soft);
}

.nav-cta {
  padding: 0.9rem 1.15rem;
  border-radius: 999px;
  border: 1px solid rgba(179, 140, 97, 0.4);
  background: rgba(179, 140, 97, 0.08);
}

.menu-toggle {
  display: none;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  border: 1px solid rgba(179, 140, 97, 0.3);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.35rem;
  color: var(--white);
}

.menu-toggle span {
  width: 1rem;
  height: 1px;
  background: currentColor;
}

.site-footer {
  border-top: 1px solid rgba(179, 140, 97, 0.22);
  background: #03111f;
}

.footer-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.7rem 0;
}

.footer-copy {
  margin-top: 0.75rem;
  color: rgba(255, 255, 255, 0.54);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem 1.4rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@media (max-width: 1100px) {
  .hero-shell,
  .calculator-shell,
  .safety-shell,
  .doctor-shell,
  .contact-shell {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    min-height: 34rem;
  }

  .calculator-panel {
    position: relative;
    top: auto;
  }

  .services-grid,
  .contact-benefits {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 960px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    position: fixed;
    inset: 5rem 0 auto;
    display: grid;
    gap: 1px;
    background: rgba(255, 255, 255, 0.08);
    padding: 0 0.625rem 0.625rem;
    transform: translateY(-1rem);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .nav-links.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nav-links a,
  .nav-links .nav-cta {
    padding: 1.1rem;
    background: rgba(4, 22, 39, 0.98);
    border-radius: 0;
  }

  .hero-proof,
  .model-grid,
  .calculator-story,
  .services-grid,
  .steps-grid,
  .safety-grid,
  .faq-grid,
  .contact-benefits,
  .doctor-metrics {
    grid-template-columns: 1fr;
  }

  .contact-form-grid {
    grid-template-columns: 1fr;
  }

  .contact-form-grid__full {
    grid-column: auto;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding-top: 6rem;
  }

  .hero-visual {
    min-height: 30rem;
  }

  .visual-card--primary {
    inset: 0 0 6rem 1.1rem;
  }

  .visual-card--secondary {
    width: calc(100% - 1rem);
  }

  .visual-list-item {
    flex-direction: column;
  }

  .visual-list-item span {
    max-width: none;
    text-align: left;
  }

  .footer-shell {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-links {
    justify-content: flex-start;
  }
}
</style>
