// Site-wide config -- edit these values, the rest of the site reads them.
// Voice: executive, calm, technical, declarative. No "I'm available" language.
export const site = {
  name: 'Darshan Kansara',
  initials: 'DK',
  role: 'Senior Manager, Platform Reliability & Operations',
  org: 'Microsoft',
  location: 'Redmond, WA',
  email: 'dbkansara@hotmail.com',
  github: 'https://github.com/darshankansara-21',
  linkedin: 'https://www.linkedin.com/in/darshankansara',
  resumeUrl: '/resume.pdf',
  yearsExperience: '25',
  yearsAtMicrosoft: '15',

  // ---------- HERO ----------
  // Spec: focus on impact, not introduction. Three lines: headline, support, credibility.
  eyebrow: 'Microsoft \u00b7 Redmond, WA',
  headline: 'Making complex systems feel simple.',
  subheadline:
    'Leading cloud infrastructure, reliability, and AI-driven operations across mission-critical Azure platforms.',
  credibility:
    '25 years in technology. 15 years at Microsoft. Leading global teams that keep business-critical systems running quietly.',

  // ---------- SIGNATURE MOMENT ----------
  signature: {
    line: 'The best operations teams are invisible.',
    body: 'Customers never notice reliability. They only notice failure. The work is making complexity disappear \u2014 quietly, repeatedly, at scale.',
  },

  // ---------- IMPACT STRIP ----------
  metrics: [
    { value: '25',    label: 'Years technology leadership' },
    { value: '15',    label: 'Years building Microsoft cloud' },
    { value: '40+',   label: 'Global team members led' },
    { value: '$1M+',  label: 'Annual savings delivered' },
    { value: 'Azure', label: 'Synapse \u00b7 Cosmos DB \u00b7 Fabric' },
  ],

  // ---------- EXECUTIVE IMPACT ----------
  outcomes: [
    {
      kicker: 'Cost optimization',
      title: 'Cut $1M+ from annual platform spend without trading reliability.',
      body: 'Capacity right-sizing, reservation strategy, and elimination of idle infrastructure across an Azure data platform operating 24x7.',
    },
    {
      kicker: 'Reliability engineering',
      title: 'Hardened a business-critical data platform to operate quietly.',
      body: 'Synapse, Cosmos DB, and Fabric supporting global marketing and customer-lifecycle workloads. Operational readiness embedded in every change.',
    },
    {
      kicker: 'Platform modernization',
      title: 'Migrated legacy workloads and rebuilt the operating model.',
      body: 'Automation-first runbooks, standardized incident response, and operational reviews rebuilt around measurable outcomes rather than activity.',
    },
    {
      kicker: 'Global operations leadership',
      title: 'Built and led a 40-person global team across three continents.',
      body: 'Infrastructure engineering, data operations, and program management. Calm under load. Low attrition. High ownership.',
    },
    {
      kicker: 'AI transformation',
      title: 'Brought LLMs into the operations stack as a daily tool.',
      body: 'Incident intelligence, cost forecasting, knowledge automation, and runbook copilots \u2014 grounded in telemetry, not demoware.',
    },
  ],

  // ---------- CAREER JOURNEY ----------
  // Visual timeline. Each station is a phase of the cloud era.
  journey: [
    { year: '2000',  label: 'Infrastructure & networking',                note: 'Early career foundations.' },
    { year: '2005',  label: 'Datacenter operations',                      note: 'Service delivery for Microsoft engagements.' },
    { year: '2011',  label: 'Datacenter automation',                      note: 'Azure-scale tooling and standardization.' },
    { year: '2013',  label: 'Datacenter reliability \u2014 CO+I',         note: 'Built the first Azure datacenter pre-production lab.' },
    { year: '2020',  label: 'Cloud capacity & continuous improvement',    note: 'Multi-million-dollar cost discipline at scale.' },
    { year: '2022',  label: 'Data platform reliability',                  note: 'Synapse, Cosmos DB, Fabric \u2014 operated globally.' },
    { year: 'Today', label: 'AI-powered operations',                      note: 'LLMs as a multiplier on the operations stack itself.' },
  ],

  // ---------- AI & OPERATIONS ----------
  ai: {
    kicker: 'AI & Operations',
    headline: 'AI as an operations multiplier \u2014 not a demo.',
    body:
      'For three years I have been applying LLMs and automation to the operations stack itself. The aim is the same as every other choice in operations: faster signal, cheaper toil, fewer surprises.',
    capabilities: [
      { name: 'Incident intelligence',     body: 'Pattern recognition across historical incidents to surface likely cause classes within minutes of a page.' },
      { name: 'Knowledge systems',         body: 'Tribal operational knowledge made searchable, queryable, and grounded in primary telemetry.' },
      { name: 'Operational copilots',      body: 'In-context assistants for on-call engineers \u2014 attached to dashboards, not a separate chat window.' },
      { name: 'Cloud cost intelligence',   body: 'Forecasting, anomaly detection, and exec-grade Azure spend reporting surfaced before invoicing.' },
      { name: 'Root cause acceleration',   body: 'LLM-assisted post-incident reviews that compress the time from outage to written, accountable RCA.' },
      { name: 'AI-assisted runbooks',      body: 'Living runbooks that propose the next safe action, parameterized by the current state of the system.' },
    ],
  },

  // ---------- WRITING ----------
  // Editorial preview. Pieces show up here once they hold up to review.
  writing: [
    { date: 'Soon', title: 'Reliability is a product, not a tax.',           dek: 'Why operational excellence belongs on the roadmap \u2014 with owners and KPIs \u2014 not buried in overhead.', href: '/writing' },
    { date: 'Soon', title: 'AI in operations: where it actually saves time.', dek: 'A working list of LLM use cases that have survived production contact in a Microsoft data platform.',          href: '/writing' },
    { date: 'Soon', title: 'Calm leadership in a 24x7 platform.',             dek: 'Notes on running global on-call teams without burning them out \u2014 or losing pager discipline.',              href: '/writing' },
  ],

  // ---------- CONTACT ----------
  contact: {
    headline: "Let's talk about reliability, operations, AI, and building systems that scale.",
    sub: 'Direct to inbox. No forms.',
  },
};
