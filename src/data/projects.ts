export type Project = {
  key: string;
  status: string;
  name: string;
  body: string;
  bullets: string[];
  link?: string;
  pypiLink?: string;
};

export const projects: Project[] = [
  {
    key: 'scheduler',
    status: 'ACADEMIC PROJECT · IN DEVELOPMENT',
    name: 'University Exam Scheduling System',
    body: 'A practical university examination scheduling system designed to generate conflict-free timetables and simplify faculty-duty allocation for college examinations.',
    bullets: [
      'Uses DSATUR-based graph coloring to allocate courses to examination slots while minimizing scheduling conflicts',
      'Uses greedy allocation for assigning courses to available examination rooms based on capacity and constraints',
      'Uses constraint-based teacher assignment to distribute Room → Teacher duties while considering teacher preferences',
      'Supports consecutive duty allocation for teachers with multiple assignments and helps coordinators manage the generated timetable',
      'Designed for practical use within the college and currently being refined through discussions with college faculty'
    ],
    link: 'https://github.com/reva-32/timetable_system'
  },

  {
    key: 'devguard',
    status: 'SHIPPED · PYPI · OPEN SOURCE',
    name: 'DevGuard CLI',
    body: 'An open-source developer security tool that scans codebases for accidentally exposed credentials before sensitive information reaches a remote repository.',
    bullets: [
      'Published devguard-cli v1.0.1 as an open-source security package on PyPI',
      'Detects potential secrets using regex-based patterns combined with Shannon entropy analysis',
      'Supports manual and pre-commit scanning to catch secrets during development',
      'Provides configurable detection rules and allowlists to reduce false positives',
      'Supports file-level scanning and generates developer-facing security reports',
      'Maintains detailed local audit logs without exposing scanned secret values outside the local system'
    ],
    link: 'https://github.com/reva-32/devguard-cli',
    pypiLink: 'https://pypi.org/project/devguard-cli/1.0.1/'
  },

  {
    key: 'resurrect',
    status: 'IN DEVELOPMENT',
    name: 'Razorpay Payment Recovery Engine — Resurrect',
    body: 'An automated payment-recovery platform that analyzes failed payments and recommends the most appropriate recovery action instead of blindly retrying failed transactions.',
    bullets: [
      'Analyzes failed-payment information and routes cases toward retry, SMS reminder, or fresh payment-link recovery actions',
      'Provides merchant-facing analytics to identify failure patterns, prioritize recoverable payments, and understand payment failures',
      'Includes an interactive chatbot that helps merchants query payment and recovery data and understand why payments are failing',
      'Uses recovery attempts, AI decisions, SMS logs, and payment history to maintain a traceable recovery workflow',
      'Integrates Razorpay Payment Links and webhook-based payment updates for the recovery flow',
      'Includes a synthetic-data environment and live demo flow to demonstrate payment recovery scenarios',
      'Deployed using Vercel, Render, and MongoDB'
    ],
    link: 'https://github.com/reva-32/Resurrect'
  },

  {
    key: 'msme',
    status: 'IN DEVELOPMENT · COLLABORATIVE',
    name: 'MSME 360',
    body: 'A unified business management platform designed to bring customer orders, business operations, and financial information into a centralized dashboard for small and medium businesses.',
    bullets: [
      'Centralizes customer orders from multiple communication channels into a single dashboard',
      'Provides business management features for vendors, finances, invoices, GST reminders, and payment history',
      'Helps business owners track orders and related payment information without switching between multiple systems',
      'Includes customer and order management workflows to keep day-to-day business information organized',
      'AI-assisted workflows are being developed to interpret incoming orders and assist with order processing',
      'Generates draft customer responses and invoice-related content for business owners to review and approve',
      'Planned capabilities include additional communication-channel integrations and inventory intelligence',
      'Currently being expanded with AI-powered order processing and other automation features'
    ]
  }
];