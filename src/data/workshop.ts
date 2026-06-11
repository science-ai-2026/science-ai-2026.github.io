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
  contactEmail: 'scienceai26@gmail.com',
  openReviewUrl: 'https://openreview.net/group?id=colmweb.org/COLM/2026/Workshop/Sci-FM',
  conferenceUrl: '#', // TODO: Replace with actual COLM 2026 URL
  socialLinks: {
    twitter: '#', // TODO: Replace
    github: '#', // TODO: Replace
    openReview: 'https://openreview.net/group?id=colmweb.org/COLM/2026/Workshop/Sci-FM',
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
  lead: 'The workshop centers on advancing the scientific understanding of foundation models by bridging empirical observations with theoretical grounding.',
  note: 'We particularly encourage work that bridges theory and empirical observation, ensuring that theoretical claims are accompanied by rigorous experimental validation.',
  pillars: [
    {
      title: 'Training Dynamics, Data, and Optimization',
      color: 'blue',
      icon: 'theory',
      subtopics: [
        'Data curation, high-quality data mixtures, and the role of open models in driving capabilities',
        'Optimization at scale, including width and depth scaling across training regimes',
        'How optimization choices affect quantization, post-training, and downstream model behavior',
        'Theoretical and empirical limits of scaling laws, including domain-specific scaling and breakdown regimes',
      ],
    },
    {
      title: 'Post-Training, Reward Modeling, and Alignment',
      color: 'indigo',
      icon: 'empirical',
      subtopics: [
        'RL, self-improvement, and how pre-training enables effective post-training',
        'Reward systems, reward model overoptimization, and utility engineering for value systems',
        'Scaling and designing RL environments for evaluating agentic behavior',
        'High-quality post-training datasets, instruction tuning data, and reward models',
      ],
    },
    {
      title: 'Evaluation Science and Reliability',
      color: 'violet',
      icon: 'evaluation',
      subtopics: [
        'Measurement methodology and fluid benchmarking for rapidly changing language models',
        'Capability measurement, including latent capabilities, emergence, and in-context learning',
        'Reproducibility, determinism in inference, and reliable conclusions from imperfect synthetic data',
        'Scalable and automated analysis of model behavior and population-level phenomena',
      ],
    },
  ],
};

export const callForPapers = {
  heading: 'Call for Papers',
  lead: 'We invite original contributions that advance the scientific understanding of foundation models across training dynamics, post-training and alignment, and evaluation science.',
  description:
    'We welcome work that connects empirical observations with theoretical grounding, offers mechanistic insight, or develops rigorous methodology for studying foundation models. Negative results, careful reproductions, and position papers that articulate open problems are valued.',
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
    'All reviewers will be acknowledged on the workshop website after the review process concludes.',
    'Outstanding submissions will be selected for oral presentation, with best paper award(s) presented at the closing ceremony.',
  ],
  // TODO: Update these dates when finalized
  keyDates: [
    { event: 'Submission Deadline', date: 'June 23, 2026' },
    { event: 'Author Notification', date: 'July 24, 2026' },
    { event: 'Camera-Ready Deadline', date: 'TBA' },
    { event: 'Workshop Date', date: 'October 9, 2026' },
  ],
  submissionUrl: siteConfig.openReviewUrl,
  guidelinesUrl: '#', // TODO: Replace with submission guidelines link
};

export const speakers = {
  heading: 'Invited Speakers',
  lead: 'Our invited speakers bring deep expertise spanning theoretical foundations, empirical methodology, and large-scale model evaluation.',
  additionalNote: '',
  // TODO: Add more speakers as they are confirmed
  list: [
    {
      name: 'Jikai Jin',
      affiliation: 'PhD student, Stanford University',
      bio: 'Jikai Jin\'s research focuses on making data-driven algorithms more principled and reliable. His work on Prescriptive Scaling Laws reveals how language model capabilities emerge and evolve, and his Hierarchical Component Analysis provides new tools for causal representation learning.',
      website: 'https://jkjin.com/',
      imageUrl: '/speakers/jikai_profile.jpg',
      initials: 'JJ',
    },
    {
      name: 'Surya Ganguli',
      affiliation: 'Associate Professor, Stanford University',
      bio: 'Surya Ganguli leverages statistical physics to study the training dynamics, generalization, and scaling laws of large neural networks. His works, including Diffusion Models, Exact Solutions to the Nonlinear Dynamics of Learning in Deep Linear Neural Networks and Deriving Neural Scaling Laws from the Statistics of Natural Language, provide a first-principles perspective on how complex capabilities emerge in large-scale systems.',
      website: 'https://ganguli-gang.stanford.edu/surya.html',
      imageUrl: '/speakers/surya_profile.jpg',
      initials: 'SG',
    },
    {
      name: 'Zhiyuan Li',
      affiliation: 'Assistant Professor, Toyota Technological Institute at Chicago',
      bio: 'Zhiyuan Li works on the theoretical foundations of deep learning, particularly the implicit bias of optimization algorithms. His works such as Explaining the Edge-of-Stability and What Happens after SGD Reaches Zero Loss help demystify how training design choices fundamentally shape the trajectory and capabilities of foundation models.',
      website: 'https://zhiyuanli.ttic.edu/',
      imageUrl: '/speakers/zhiyuan_profile.webp',
      initials: 'ZL',
    },
    {
      name: 'Hector Liu',
      affiliation: 'Director, MBZUAI Institute of Foundation Models Silicon Valley Lab',
      bio: 'Hector (Zhengzhong) Liu leads large-scale language model training at MBZUAI. He is the driving force behind LLM360, an initiative for fully open-sourcing the entire LLM training process to foster transparency and reproducibility, and led the development of K2, a leading fully open-source 65B language model.',
      website: 'https://hunterhector.github.io/',
      imageUrl: '/speakers/hector_profile.png',
      initials: 'HL',
    },
    {
      name: 'Valentina Pyatkin',
      affiliation: 'Postdoctoral Researcher, Allen Institute for AI / University of Washington',
      bio: 'Valentina Pyatkin develops robust post-training pipelines for instruction following, preference optimization, and alignment. As a core contributor to OLMo and TULU 3, her research tackles contextual robustness, reward modeling, and the systematic evaluation of generative AI.',
      website: 'https://valentinapy.github.io/',
      imageUrl: '/speakers/valentina_profile.jpg',
      initials: 'VP',
    },
    {
      name: 'Ludwig Schmidt',
      affiliation: 'Assistant Professor, Stanford University & Anthropic',
      bio: 'Ludwig Schmidt is known for work on data curation, evaluation, and post-training. His projects such as DCLM, OpenThoughts, and TerminalBench highlight the importance of rigorous data pipelines, open reasoning datasets, and systematic evaluation in understanding large-scale models.',
      website: 'https://profiles.stanford.edu/ludwig-schmidt',
      imageUrl: '/speakers/ludwig_profile.jpg',
      initials: 'LS',
    },
    {
      name: 'Mohammad Shoeybi',
      affiliation: 'VP of Applied Deep Learning Research, NVIDIA',
      bio: 'Mohammad Shoeybi is a pioneer in large-scale model optimization and the driving force behind Megatron-LM. His work addresses the critical algorithmic and hardware challenges of distributed training, enabling the efficient scaling of foundation models to hundreds of billions of parameters through advanced model parallelism.',
      website: 'https://scholar.google.com/citations?user=62ElavIAAAAJ&hl=en',
      imageUrl: '/speakers/mohammed_profile.jpg',
      initials: 'MS',
    },
    {
      name: 'Andrew Gordon Wilson',
      affiliation: 'Professor, New York University',
      bio: 'Andrew Gordon Wilson focuses on understanding why overparameterized models generalize effectively. His works on Bayesian Deep Learning and a Probabilistic Perspective of Generalization and Epiplexity explore the implicit biases of optimization procedures, probabilistic modeling, and the geometry of learned representations.',
      website: 'https://cims.nyu.edu/~andrewgw/',
      imageUrl: '/speakers/andrew_profile.jpeg',
      initials: 'AGW',
    },
  ],
};

export const schedule = {
  heading: 'Workshop Format & Schedule',
  lead: 'A full-day program designed to balance deep technical talks with open discussion and community engagement.',
  format: [
    { type: 'Opening Remarks', description: 'Welcome and framing of the workshop\'s scientific goals.' },
    { type: 'Invited Talks', description: 'In-depth invited presentations on scaling, emergence, post-training, and alignment.' },
    { type: 'Poster Sessions', description: 'Two dedicated poster sessions during coffee breaks to discuss accepted work.' },
    { type: 'Panel Discussion', description: 'A thematic panel discussion.' },
    { type: 'Contributed Spotlights', description: 'Top submissions presented as contributed spotlight talks.' },
    { type: 'Closing Remarks & Awards', description: 'Summary, best paper awards, and next steps for the community.' },
  ],
  timeline: [
    // Morning Session
    { time: '08:45 - 09:00', event: 'Opening Remarks', duration: '15 min' },
    { time: '09:00 - 09:30', event: 'Invited Talk: Ludwig Schmidt (Post-training Data & TerminalBench)', duration: '30 min' },
    { time: '09:30 - 10:00', event: 'Invited Talk: Surya Ganguli (Physics of ML and Capability Emergence)', duration: '30 min' },
    { time: '10:00 - 10:30', event: 'Morning Break', duration: '30 min' },
    { time: '10:30 - 11:00', event: 'Invited Talk: Andrew Gordon Wilson (Generalization & Representation Geometry)', duration: '30 min' },
    { time: '11:00 - 11:30', event: 'Invited Talk: Zhiyuan Li (Understanding of Optimization and Post-training)', duration: '30 min' },
    { time: '11:30 - 12:00', event: 'Contributed Talks', duration: '30 min' },
    { time: '12:00 - 13:30', event: 'Lunch Break & Poster Session I', duration: '90 min' },
    // Afternoon Session
    { time: '13:30 - 14:00', event: 'Invited Talk: Valentina Pyatkin (Post-Training & Verifiable Alignment)', duration: '30 min' },
    { time: '14:00 - 14:30', event: 'Invited Talk: Mohammad Shoeybi (Large-Scale Training & Model Parallelism)', duration: '30 min' },
    { time: '14:30 - 15:00', event: 'Contributed Talks', duration: '30 min' },
    { time: '15:00 - 15:30', event: 'Afternoon Break', duration: '30 min' },
    { time: '15:30 - 16:00', event: 'Invited Talk: Jikai Jin (Observational Studies & Prescriptive Scaling)', duration: '30 min' },
    { time: '16:00 - 16:30', event: 'Invited Talk: Hector Liu (Open-Source LLM Training & Transparency)', duration: '30 min' },
    { time: '16:30 - 17:15', event: 'Panel Discussion', duration: '45 min' },
    { time: '17:15 - 18:00', event: 'Poster Session II & Closing Remarks', duration: '45 min' },
  ],
};

export const organizers = {
  heading: 'Organizers',
  lead: '',
  // TODO: Update affiliations and websites for each organizer
  list: [
    { name: 'Hanlin Zhang', affiliation: '', website: 'https://hanlin-zhang.com/', imageUrl: '/organizers/hanlin_profile.png', initials: 'HZ' },
    { name: 'Natalie Abreu', affiliation: '', website: 'https://natalieabreu.github.io/website/', imageUrl: '/organizers/natalie_profile.JPG', initials: 'NA' },
    { name: 'Yizhou Liu', affiliation: '', website: 'https://liuyz0.github.io/', imageUrl: '/organizers/yizhou_profile.webp', initials: 'YL' },
    { name: 'Yizhong Wang', affiliation: '', website: 'https://homes.cs.washington.edu/~yizhongw/', imageUrl: '/organizers/yizhong_profile.jpg', initials: 'YW' },
    { name: 'Sham Kakade', affiliation: '', website: 'https://sham.seas.harvard.edu/', imageUrl: '/organizers/sham_profile.jpg', initials: 'SK' },
    { name: 'Kaiyue Wen', affiliation: '', website: 'https://whenwen.github.io/', imageUrl: '/organizers/kaiyue_profile.jpg', initials: 'KW' },
    { name: 'Sewon Min', affiliation: '', website: 'https://www.sewonmin.com/', imageUrl: '/organizers/sewon_profile.jpg', initials: 'SM' },
    { name: 'Alex Damian', affiliation: '', website: 'https://alex-damian.github.io/', imageUrl: '/organizers/damian_profile.jpg', initials: 'AD' },
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
