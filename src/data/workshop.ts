// ============================================================================
// WORKSHOP DATA — Edit this file to update all content on the site.
// All sections pull from these data objects. Dates, speakers, organizers,
// and copy can all be changed here without touching component code.
// ============================================================================

export const siteConfig = {
  title: 'Scientific Understanding of Foundation Models',
  shortTitle: 'Sci-FM',
  conference: 'COLM 2026',
  description:
    'A workshop on building rigorous scientific understanding of foundation models — from scaling laws and emergent capabilities to principled evaluation and mechanistic explanation.',
  contactEmail: 'sci-fm-workshop@googlegroups.com', // TODO: Replace with actual email
  openReviewUrl: '#', // TODO: Replace with actual OpenReview URL
  conferenceUrl: '#', // TODO: Replace with actual COLM 2026 URL
  socialLinks: {
    twitter: '#', // TODO: Replace
    github: '#', // TODO: Replace
    openReview: '#', // TODO: Replace
  },
};

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Topics', href: '#topics' },
  { label: 'Call for Papers', href: '#cfp' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Organizers', href: '#organizers' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  title: 'Scientific Understanding of Foundation Models',
  subtitle: 'A Workshop at COLM 2026',
  statement:
    'Foundation models have transformed AI across language, vision, science, and multimodal reasoning — but we still lack a systematic scientific understanding of how they represent knowledge, generalize, reason, and align with human intent. This workshop brings together researchers committed to building that understanding.',
  metadata: [
    { label: 'In person at COLM 2026', icon: 'location' },
    { label: 'Live streaming available', icon: 'stream' }  ],
  ctas: [
    { label: 'Call for Papers', href: '#cfp', primary: true },
    { label: 'Invited Speakers', href: '#speakers', primary: false },
  ],
};

export const about = {
  heading: 'About the Workshop',
  lead: 'Moving from empirical scaling phenomena toward predictive science for foundation models.',
  body: [
    'Despite the extraordinary capabilities of modern foundation models, our scientific understanding of these systems remains remarkably shallow. We can observe that scaling works — but we cannot yet predict when capabilities will emerge, why certain representations form, or how reasoning behavior arises from training dynamics.',
    'This workshop aims to catalyze a shift from capability demonstration to mechanistic explanation. We seek to identify laws, invariants, causal mechanisms, and rigorous evaluation methodologies that can make foundation models more controllable, reliable, and interpretable.',
    'By bringing together researchers from theory, empirical ML, interpretability, optimization, evaluation, and scientific methodology, we aim to lay groundwork for a genuine science of foundation models — one that offers not just post-hoc explanations, but predictive understanding.',
  ],
  questions: [
    'What principles govern the emergence of capabilities in large models?',
    'How do representation geometry and training dynamics shape reasoning behavior?',
    'What are the limits of scaling laws — and what comes after them?',
    'How can we build predictive theories of generalization in overparameterized regimes?',
    'What scientific tools are needed to study foundation models as complex adaptive systems?',
  ],
};

export const topics = {
  heading: 'Topics',
  lead: 'The workshop is organized around three major pillars, each addressing a critical dimension of scientific understanding.',
  note: 'We especially encourage submissions that bridge theory and empirical observation — work that uses formal tools to explain experimental findings, or controlled experiments designed to test theoretical predictions.',
  pillars: [
    {
      title: 'Theory',
      color: 'blue',
      icon: 'theory',
      subtopics: [
        'Scaling laws and breakdown regimes',
        'Emergence and phase transitions in capability',
        'Implicit bias of optimization and representation geometry',
        'Information-theoretic perspectives on in-context learning',
        'Expressivity vs. compression trade-offs',
      ],
    },
    {
      title: 'Controlled Studies & Empirical Understanding',
      color: 'indigo',
      icon: 'empirical',
      subtopics: [
        'Representation collapse, specialization, and disentanglement',
        'Emergent reasoning behavior in LLMs',
        'Probing and causal interventions',
        'Robustness and systematic failure modes',
        'Training dynamics and representation evolution',
      ],
    },
    {
      title: 'Evaluation & Scientific Methodology',
      color: 'violet',
      icon: 'evaluation',
      subtopics: [
        'Designing principled evaluation benchmarks',
        'Capability measurement vs. superficial performance',
        'Reproducibility and experimental design for large-model studies',
        'Predictive evaluation for safety and alignment',
        'Stress testing and adversarial robustness',
      ],
    },
  ],
};

export const callForPapers = {
  heading: 'Call for Papers',
  lead: 'We invite original contributions that advance the scientific understanding of foundation models — spanning theory, controlled empirical studies, and rigorous evaluation methodology.',
  description:
    'We welcome work that goes beyond benchmark improvements to offer mechanistic insight, theoretical grounding, or methodological innovation. Negative results, careful reproductions, and position papers that articulate open problems are valued.',
  categories: [
    {
      title: 'Full Papers',
      length: 'Up to 8 pages',
      description:
        'Original research contributions presenting substantial theoretical, empirical, or methodological results.',
    },
    {
      title: 'Short Papers',
      length: 'Up to 4 pages',
      description:
        'Preliminary findings, negative results, position papers, and focused contributions that advance the workshop\'s scientific goals.',
    },
  ],
  reviewProcess: [
    'All submissions undergo double-blind peer review.',
    'Each submission receives at least two expert reviews.',
    'Top-scoring submissions will be selected for spotlight talks.',
    'All accepted papers will be presented as posters during the workshop.',
  ],
  // TODO: Update these dates when finalized
  keyDates: [
    { event: 'Submission Deadline', date: 'TBA' },
    { event: 'Author Notification', date: 'TBA' },
    { event: 'Camera-Ready Deadline', date: 'TBA' },
    { event: 'Workshop Date', date: 'TBA' },
  ],
  submissionUrl: '#', // TODO: Replace with OpenReview submission link
  guidelinesUrl: '#', // TODO: Replace with submission guidelines link
};

export const speakers = {
  heading: 'Invited Speakers',
  lead: 'Our invited speakers bring deep expertise spanning theoretical foundations, empirical methodology, and large-scale model evaluation.',
  additionalNote: 'Additional invited speakers to be announced. Check back for updates.',
  // TODO: Add more speakers as they are confirmed
  list: [
    {
      name: 'Jikai Jin',
      affiliation: '', // TODO: Add affiliation
      bio: 'Research on theoretical foundations and empirical phenomena in large neural networks, including representation learning, scaling behavior, training dynamics, and emergent capabilities.',
      website: '#', // TODO: Replace with actual website
      imageUrl: null,
      initials: 'JJ',
    },
    {
      name: 'Ludwig Schmidt',
      affiliation: '', // TODO: Add affiliation
      bio: 'Research on robustness, dataset quality, evaluation methodology, and rigorous measurement — developing systematic approaches to evaluating and understanding large-scale models.',
      website: '#', // TODO: Replace with actual website
      imageUrl: null,
      initials: 'LS',
    },
  ],
};

export const schedule = {
  heading: 'Workshop Format & Schedule',
  lead: 'A full-day program designed to balance deep technical talks with open discussion and community engagement.',
  format: [
    { type: 'Opening Remarks', description: 'Welcome and framing of the workshop\'s scientific goals.' },
    { type: 'Invited Talks', description: 'In-depth presentations from leading researchers on core themes.' },
    { type: 'Contributed Spotlight Sessions', description: 'Selected papers presented as short talks highlighting key findings.' },
    { type: 'Poster Sessions', description: 'Interactive poster presentations for all accepted papers.' },
    { type: 'Thematic Panel Discussion', description: 'Moderated discussion on open questions and future directions.' },
    { type: 'Closing Remarks & Awards', description: 'Summary, best paper awards, and next steps for the community.' },
  ],
  panelThemes: [
    'Are scaling laws enough for predictive understanding?',
    'Controlled studies: science or engineering tool?',
    'Can we predict capabilities before training?',
  ],
  // TODO: Replace placeholder times with confirmed schedule
  timeline: [
    { time: '9:00 AM', event: 'Opening Remarks', duration: '15 min' },
    { time: '9:15 AM', event: 'Invited Talk 1', duration: '45 min' },
    { time: '10:00 AM', event: 'Contributed Spotlights (Session 1)', duration: '45 min' },
    { time: '10:45 AM', event: 'Coffee Break', duration: '30 min' },
    { time: '11:15 AM', event: 'Invited Talk 2', duration: '45 min' },
    { time: '12:00 PM', event: 'Poster Session 1', duration: '60 min' },
    { time: '1:00 PM', event: 'Lunch Break', duration: '60 min' },
    { time: '2:00 PM', event: 'Invited Talk 3', duration: '45 min' },
    { time: '2:45 PM', event: 'Contributed Spotlights (Session 2)', duration: '45 min' },
    { time: '3:30 PM', event: 'Coffee Break', duration: '30 min' },
    { time: '4:00 PM', event: 'Thematic Panel Discussion', duration: '60 min' },
    { time: '5:00 PM', event: 'Poster Session 2', duration: '45 min' },
    { time: '5:45 PM', event: 'Closing Remarks & Awards', duration: '15 min' },
  ],
};

export const organizers = {
  heading: 'Organizers',
  lead: 'The workshop is organized by a team of researchers spanning theory, empirical machine learning, interpretability, and evaluation methodology.',
  // TODO: Update affiliations and websites for each organizer
  list: [
    { name: 'Hanlin Zhang', affiliation: '', website: '#', initials: 'HZ' },
    { name: 'Natalie Abreu', affiliation: '', website: '#', initials: 'NA' },
    { name: 'Yizhou Liu', affiliation: '', website: '#', initials: 'YL' },
    { name: 'Yizhong Wang', affiliation: '', website: '#', initials: 'YW' },
    { name: 'Sham Kakade', affiliation: '', website: '#', initials: 'SK' },
    { name: 'Kaiyue Wen', affiliation: '', website: '#', initials: 'KW' },
    { name: 'Sewon Min', affiliation: '', website: '#', initials: 'SM' },
    { name: 'Alex Damian', affiliation: '', website: '#', initials: 'AD' },
  ],
};

export const diversity = {
  heading: 'Diversity & Inclusion',
  body: [
    'We are committed to fostering an inclusive, welcoming, and respectful environment for all participants. The scientific questions at the heart of this workshop benefit from diverse perspectives — across geography, career stage, research tradition, gender, and background.',
    'We will provide remote access options to support participation from researchers who cannot attend in person. If you require specific accessibility accommodations, please contact us and we will do our best to help.',
  ],
};

export const faq = {
  heading: 'Frequently Asked Questions',
  items: [
    {
      question: 'Who should attend this workshop?',
      answer:
        'Researchers and practitioners interested in the scientific foundations of foundation models — including those working in theory, empirical ML, interpretability, optimization, evaluation, safety, and alignment. We welcome attendees from both academia and industry at all career stages.',
    },
    {
      question: 'Will there be a call for papers?',
      answer:
        'Yes. We will solicit both full papers (up to 8 pages) and short papers (up to 4 pages), covering original research, preliminary findings, negative results, and position papers. See the Call for Papers section for details.',
    },
    {
      question: 'Will remote participation be available?',
      answer:
        'Yes. The workshop will be live-streamed, and we plan to support remote poster presentations and Q&A for virtual attendees.',
    },
    {
      question: 'How are papers reviewed?',
      answer:
        'All submissions undergo double-blind peer review, with each paper receiving at least two expert reviews. Reviewers are selected for their expertise in relevant areas of the workshop scope.',
    },
    {
      question: 'Will talks be recorded?',
      answer:
        'Yes. We plan to record all invited talks and panel discussions and make them publicly available after the workshop.',
    },
    {
      question: 'How do I receive updates about the workshop?',
      answer:
        'You can sign up for updates via our contact form, follow us on social media, or join our community forum. Key announcements will also be posted on the workshop website.',
    },
  ],
};

export const footer = {
  title: 'Scientific Understanding of Foundation Models',
  conference: 'Workshop at COLM 2026',
  email: siteConfig.contactEmail,
  copyright: `© ${new Date().getFullYear()} Scientific Understanding of Foundation Models Workshop. All rights reserved.`,
  links: [
    { label: 'COLM 2026', href: siteConfig.conferenceUrl },
    { label: 'OpenReview', href: siteConfig.socialLinks.openReview },
    { label: 'Twitter / X', href: siteConfig.socialLinks.twitter },
  ],
};
