import type { Policy, Tip, Lawsuit, Story, RightCategory, Resource, ToolkitItem, Handbook, ChecklistItem } from './types';
import { 
  DocumentTextIcon, 
  ShieldCheckIcon, 
  ScaleIcon, 
  ChatBubbleBottomCenterTextIcon,
  GavelIcon,
  LifebuoyIcon,
  FolderArrowDownIcon,
  UsersIcon,
  PhoneIcon,
  ClipboardDocumentCheckIcon
} from './components/Icons';
import { ResourceType } from './types';

export const POLICIES_DATA: Policy[] = [
  {
    id: 'p1',
    title: 'Initial Investigation Process',
    summary: 'When a report is received, DCS is mandated to initiate an investigation within a specific timeframe, typically 24-72 hours. This involves interviews with the child, parents, and collateral contacts (teachers, doctors). The primary goal is to assess child safety.',
    icon: DocumentTextIcon,
  },
  {
    id: 'p2',
    title: 'Parental Rights & Responsibilities',
    summary: 'Parents have the right to be informed of allegations, the right to legal counsel, and the right to participate in all hearings. Responsibilities include cooperating with the investigation and following court-ordered service plans aimed at rectifying safety concerns.',
    icon: ShieldCheckIcon,
  },
  {
    id: 'p3',
    title: 'Case Plan & Service Goals',
    summary: 'If a case is substantiated, DCS will develop a case plan with the family. This plan outlines specific goals and services (e.g., counseling, parenting classes) required to mitigate risks and work towards family reunification. Progress is reviewed periodically by the court.',
    icon: ScaleIcon,
  },
    {
    id: 'p4',
    title: 'Communication & Documentation',
    summary: 'DCS workers are required to maintain regular contact with the family and document all interactions, progress, and setbacks. Families have the right to review their case file, though some information may be redacted to protect confidentiality.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export const TIPS_DATA: Tip[] = [
  {
    id: 't1',
    question: 'What should I do when a caseworker first contacts me?',
    answer: 'Stay calm and be polite, but do not admit to any allegations. You have the right to know why they are there. Ask for their identification and the specific allegations against you. Do not let them in your home without a warrant unless you feel it is safe and wise to do so. State clearly, "I do not consent to a search of my home." Contact an attorney immediately.',
  },
  {
    id: 't2',
    question: 'Should I sign anything they give me?',
    answer: 'Do not sign any documents without first consulting with an attorney. This includes "safety plans" or releases of information. Signing these documents can have significant legal consequences and may be used against you in court. Politely state that you need your lawyer to review it first.',
  },
  {
    id: 't3',
    question: 'How do I properly document everything?',
    answer: 'Keep a detailed log of every interaction with DCS. Note the date, time, caseworker\'s name, what was said, and who was present. Record all phone calls (if legal in your state) or follow up with an email summarizing the conversation to create a paper trail. Keep copies of all documents you receive or send.',
  },
  {
    id: 't4',
    question: 'What if I disagree with the caseworker\'s report?',
    answer: 'You have the right to challenge inaccuracies. Formally dispute any false or misleading statements in writing. Send a certified letter to the caseworker and their supervisor detailing the inaccuracies and providing any evidence you have to the contrary. This becomes part of your official case file.',
  },
    {
    id: 't5',
    question: 'How important is finding a qualified attorney?',
    answer: 'It is absolutely critical. Do not rely on a court-appointed attorney if you can afford to hire your own. Seek out a lawyer who specializes in juvenile dependency or family law with a proven track record of fighting DCS. A knowledgeable attorney understands the specific laws, procedures, and strategies needed to protect your rights.',
  },
];

export const LAWSUITS_DATA: Lawsuit[] = [
  {
    id: 'l1',
    title: 'Class Action Lawsuit Regarding Unlawful Removals',
    summary: 'A group of families has filed a class-action lawsuit alleging that the state\'s DCS agency has a pattern of removing children from their homes without sufficient evidence or proper court orders, violating constitutional rights.',
    sourceName: 'National Law Review',
    sourceUrl: 'https://www.natlawreview.com/',
    state: 'National',
  },
  {
    id: 'l2',
    title: 'Failure to Provide Adequate Services to Foster Children (Texas)',
    summary: 'This lawsuit, brought by child advocacy groups, claims the agency failed to provide necessary medical and mental health services to children in its custody, leading to poor outcomes and prolonged stays in foster care.',
    sourceName: 'ACLU Official Site',
    sourceUrl: 'https://www.aclu.org/',
    state: 'TX',
  },
  {
    id: 'l3',
    title: 'Lawsuit Over Caseworker Misconduct and Falsified Records (Florida)',
    summary: 'Several individual families are suing DCS after evidence emerged that caseworkers falsified reports and failed to conduct mandatory visits, resulting in wrongful termination of parental rights.',
    sourceName: 'Local News Outlet Archive',
    sourceUrl: '#',
    state: 'FL',
  },
];

export const STORIES_DATA: Story[] = [
  {
    id: 's1',
    title: 'They Showed Up Unannounced',
    author: 'Anonymous Parent',
    content: 'It was a Tuesday afternoon when two caseworkers knocked on my door. They said they had a report of neglect. I was terrified. I had read online not to let them in without a warrant, so I politely refused. It was the hardest thing I\'ve ever had to do, but it gave me time to call a lawyer. That single decision changed the course of my case.',
    createdAt: '2 days ago',
  },
  {
    id: 's2',
    title: 'The Power of Documentation',
    author: 'A Determined Father',
    content: 'I documented everything. Every phone call, every visit, every email. I created a timeline of events and backed it up with evidence. When they tried to twist my words in court, I had the receipts. My detailed records were the key to getting my kids back home. Don\'t underestimate the power of a paper trail.',
    createdAt: '1 week ago',
  },
  {
    id: 's3',
    title: 'Finding the Right Legal Help',
    author: 'Jane D.',
    content: 'My court-appointed lawyer seemed overwhelmed and wasn\'t fighting for me. I scraped together every penny I had to hire a private attorney who specialized in dependency cases. The difference was night and day. She knew the law, she knew the players, and she believed in me. It was an investment in my family\'s future that paid off.',
    createdAt: '3 weeks ago',
  },
];

export const RIGHTS_DATA: RightCategory[] = [
    {
        id: 'rc1',
        category: 'During Initial Contact & Investigation',
        description: 'Your fundamental rights when a caseworker first makes contact.',
        icon: ShieldCheckIcon,
        rights: [
            { id: 'r1', title: 'Right to Remain Silent', content: 'You are not obligated to answer questions that could incriminate you. You can state, "I am exercising my right to remain silent and I would like to speak with my attorney."' },
            { id: 'r2', title: 'Right to Refuse Entry Without a Warrant', content: 'You can refuse to let a caseworker into your home unless they present a valid, signed search warrant. You can say, "I do not consent to a search of my home."' },
            { id: 'r3', title: 'Right to Know the Allegations', content: 'You have the right to be informed of the specific allegations made against you. Ask the caseworker directly: "What are the specific allegations I am being investigated for?"' },
            { id: 'r4', title: 'Right to an Attorney', content: 'You have the right to have an attorney present during any interviews or questioning. You should state clearly, "I will not answer any questions without my attorney present."' },
        ],
    },
    {
        id: 'rc2',
        category: 'During the Court Process',
        description: 'Your rights once a case has been filed in juvenile dependency court.',
        icon: GavelIcon,
        rights: [
            { id: 'r5', title: 'Right to Notice of Hearings', content: 'You must be given adequate notice of all court dates and hearings so you have a fair opportunity to attend and participate.' },
            { id: 'r6', title: 'Right to a Fair Hearing', content: 'You have the right to present evidence, cross-examine witnesses (including the caseworker), and testify on your own behalf at all hearings.' },
            { id: 'r7', title: 'Right to Review Your Case File', content: 'You and your attorney have the right to review the entire case file held by DCS, which includes all reports, notes, and evidence they have gathered.' },
            { id: 'r8', title: 'Right to a Case Plan', content: 'If the court finds jurisdiction, you have a right to a reasonable and clear case plan designed to address the specific issues and lead to reunification.' },
        ],
    },
];

export const RESOURCES_DATA: Resource[] = [
    { id: 'res1', name: 'Family Justice Law Center', type: ResourceType.Legal, description: 'A national non-profit specializing in dependency law and parent representation.', contact: 'info@familyjustice.org', state: 'National' },
    { id: 'res2', name: 'Parents for Parents Program', type: ResourceType.Support, description: 'A peer support program connecting parents who have successfully navigated the system with those who are currently involved.', contact: 'Find a local chapter online.', state: 'Various' },
    { id: 'res3', name: 'National Coalition for Child Protection Reform', type: ResourceType.Advocacy, description: 'An advocacy group that works to reform child welfare systems and promote family preservation.', contact: 'info@nccpr.org', state: 'National' },
    { id: 'res4', name: 'California Family Law Attorneys', type: ResourceType.Legal, description: 'A directory of certified family law specialists in California.', contact: 'Search online directory.', state: 'CA' },
    { id: 'res5', name: 'Texas Parent Rights Group', type: ResourceType.Advocacy, description: 'A state-level organization focused on protecting the rights of parents in Texas.', contact: 'contact@txparentrights.org', state: 'TX' },
    { id: 'res6', name: 'Florida Legal Services', type: ResourceType.Legal, description: 'Provides free civil legal assistance to eligible, low-income residents of Florida.', contact: '(407) 801-4350', state: 'FL' },
     { id: 'res7', name: 'New York Family Counseling Services', type: ResourceType.Support, description: 'Offers counseling for families experiencing stress and conflict, including DCS involvement.', contact: 'Sliding scale fees available.', state: 'NY' },
];

export const TOOLKIT_DATA: ToolkitItem[] = [
  { 
    id: 'tk1', 
    title: 'DCS Contact Log', 
    description: 'A printable log to meticulously document every phone call, visit, and interaction with caseworkers.', 
    icon: PhoneIcon,
    templateContent: `
================================
DCS INTERACTION LOG
================================

Case Name: [Your Family Name]
Case Number: [If you have one]

---
ENTRY 1
---
Date & Time: ____________________
Caseworker(s) Name(s): ____________________
Type of Contact: [ ] Phone Call  [ ] Home Visit  [ ] Office Visit  [ ] Email  [ ] Other: _______
Others Present: ____________________

Summary of Conversation / Events:
(Be factual and detailed. What was said by each person? What happened?)
________________________________________________________________
________________________________________________________________
________________________________________________________________

Key Demands or Requests from DCS:
________________________________________________________________
________________________________________________________________

Your Responses / What You Agreed To (if anything):
________________________________________________________________
________________________________________________________________

Follow-up Actions for You:
________________________________________________________________

---
ENTRY 2
---
Date & Time: ____________________
Caseworker(s) Name(s): ____________________
Type of Contact: [ ] Phone Call  [ ] Home Visit  [ ] Office Visit  [ ] Email  [ ] Other: _______
Others Present: ____________________

Summary of Conversation / Events:
________________________________________________________________
________________________________________________________________
________________________________________________________________

`
  },
  { 
    id: 'tk2', 
    title: 'Formal Letter Template: Disputing a Report', 
    description: 'A customizable template for formally disputing inaccuracies in a caseworker\'s report in writing.', 
    icon: DocumentTextIcon,
    templateContent: `
[Your Full Name]
[Your Address]
[Your City, State, Zip Code]
[Your Phone Number]
[Your Email Address]

[Date]

[Caseworker's Full Name]
[Caseworker's Title]
[DCS Office Address]
[City, State, Zip Code]

VIA CERTIFIED MAIL - RETURN RECEIPT REQUESTED

RE: Case Name: [Your Family Name]
     Case Number: [Your Case Number]
     Subject: Formal Dispute of Inaccuracies in Report Dated [Date of Report]

Dear [Mr./Ms./Mx. Caseworker's Last Name],

I am writing to formally dispute several material inaccuracies and misrepresentations contained in the [Name of Report, e.g., "Investigation Summary"] dated [Date of Report], which I received on [Date you received it].

Accuracy is critical in these matters, and it is imperative that the official record reflects the facts correctly. The specific points of contention are as follows:

1.  **Inaccuracy:** On page [Page #], the report states, "[Quote the exact inaccurate statement from the report]."
    **Correction:** This is incorrect. The reality is that [Clearly and concisely state the true fact. Provide context if necessary].
    **Evidence:** This can be confirmed by [Mention your evidence, e.g., "a text message from [Name] on [Date]", "the school attendance record", "photos taken at the time"].

2.  **Inaccuracy:** On page [Page #], it is written that "[Quote the second inaccurate statement]."
    **Correction:** This is a mischaracterization of the events. What actually occurred was [Explain the correct sequence of events or context].
    **Evidence:** [Mention your evidence].

[Continue to list each inaccuracy in a new numbered point. Be professional, factual, and avoid emotional language.]

Please immediately amend the case file to include this letter and correct the aforementioned inaccuracies in all official records. I request written confirmation within 15 business days that you have received this letter and that it has been placed in the official case file.

Thank you for your prompt attention to this critical matter.

Sincerely,

_________________________
[Your Signature]

[Your Printed Name]

CC: [Caseworker's Supervisor's Name], Supervisor
    [Your Attorney's Name], Attorney at Law
`
  },
  { 
    id: 'tk3', 
    title: 'Evidence Checklist', 
    description: 'A comprehensive checklist to help you identify and organize powerful evidence for your case.', 
    icon: ShieldCheckIcon,
    templateContent: `
================================
EVIDENCE CHECKLIST & ORGANIZER
================================

Use this checklist to brainstorm and gather evidence to support your case and counter false allegations.

---
SECTION 1: YOUR HOME & CHILDREN'S WELL-BEING
---
[ ] Photos/videos of your home (clean, safe, stocked pantry, etc.) - dated
[ ] Photos/videos of your children (happy, healthy, well-clothed) - dated
[ ] Children's school attendance records
[ ] Children's report cards / academic progress reports
[ ] Letters or certificates of achievement for children
[ ] Medical/dental records showing regular check-ups
[ ] Documentation of any special needs care (IEPs, therapy notes)

---
SECTION 2: YOUR CHARACTER & SUPPORT SYSTEM
---
[ ] List of potential positive character witnesses (names, contact info)
    - Family Members: __________________
    - Friends: __________________
    - Neighbors: __________________
    - Teachers / School Staff: __________________
    - Doctors / Therapists: __________________
    - Community Leaders (pastor, coach, etc.): __________________
[ ] Written character reference letters (see other template)
[ ] Certificates from parenting classes, counseling, etc.
[ ] Proof of employment (pay stubs, letter from employer)
[ ] Proof of stable housing (lease, mortgage statements)

---
SECTION 3: COUNTERING ALLEGATIONS
---
[ ] Your detailed, written timeline of events related to the allegations
[ ] Alibi documentation (receipts, GPS data, witness statements) for specific dates/times
[ ] Text messages or emails that contradict the allegations (screenshot and save them)
[ ] Voicemails or recordings (check state laws on recording conversations)
[ ] Your DCS Contact Log (see other template)
[ ] Any written communication you've sent to or received from DCS

---
ORGANIZATION
---
- Create a physical binder with dividers for each category.
- Create a digital folder on your computer/cloud storage with subfolders.
- Name files clearly (e.g., "2024-03-15_Photo_Kitchen.jpg").
- **IMPORTANT:** Provide copies to your attorney. Keep the originals safe.
`
  },
  { 
    id: 'tk4', 
    title: 'Character Reference Letter Guide', 
    description: 'A guide and template for friends, family, and professionals to write effective character reference letters for court.', 
    icon: UsersIcon,
    templateContent: `
================================
GUIDE: WRITING AN EFFECTIVE CHARACTER REFERENCE LETTER
================================

A good character reference letter can be powerful evidence. It should be truthful, specific, and professional.

---
KEY TIPS FOR YOUR REFERENCE WRITER:
---
1.  **Be Specific:** Instead of saying "[Parent] is a good mom," give a concrete example. "I saw [Parent] patiently work with her son on his homework for an hour every night, even when she was tired after work."
2.  **Be Factual:** The writer should only state what they have personally seen or know to be true. Avoid hearsay or guessing.
3.  **Stay Positive:** Focus on strengths as a parent and person. Do not bash DCS or the other party.
4.  **Keep it Concise:** One page is ideal.
5.  **Include Contact Info:** The writer should include their phone number and address.
6.  **Sign and Date:** The letter must be signed and dated. A notarized letter can have even more weight.

---
TEMPLATE
---

[Reference Writer's Full Name]
[Reference Writer's Address]
[Reference Writer's Phone Number & Email]

[Date]

The Honorable [Judge's Name, if known, otherwise "Presiding Judge"]
[Court Name]
[Court Address]

RE: Character Reference for [Your Full Name]
     In the matter of [Child's Name(s)]
     Case Number: [Your Case Number]

Your Honor,

My name is [Reference Writer's Name], and I am writing in support of [Your Name]. I have known [Your Name] for [Number] years in my capacity as a [friend, neighbor, co-worker, pastor, etc.].

In my time knowing [him/her/them], I have had many opportunities to observe [him/her/them] as a parent.
[This is the most important part. The writer should provide 1-3 specific, positive examples or anecdotes here. Examples:]
*   "I recall a time when [Child's Name] fell and scraped his knee at the park. [Your Name] remained calm, cleaned the wound, and comforted him with a hug, showing great tenderness and care."
*   "As [Your Name]'s neighbor, I have consistently seen their children playing happily in their yard, always well-fed and appropriately dressed for the weather."
*   "At our community events, [Your Name] always ensures their children are behaving respectfully and engages with them in positive, encouraging ways."

Based on my personal observations, I have always known [Your Name] to be a [choose 2-3 traits: loving, responsible, patient, dedicated] parent who prioritizes the well-being of their children above all else. I have never witnessed any behavior that caused me to worry for the safety or welfare of [Child's Name(s)].

Should you require any further information, please do not hesitate to contact me.

Thank you for your time and consideration.

Sincerely,

_________________________
[Reference Writer's Signature]

[Reference Writer's Printed Name]
`
  },
];

export const HANDBOOKS_DATA: Handbook[] = [
  // NOTE: These URLs are placeholders and should be updated with the correct, most current links
  // from official state government websites.
  { id: 'al', state: 'Alabama', url: '#' },
  { id: 'ak', state: 'Alaska', url: '#' },
  { id: 'az', state: 'Arizona', url: '#' },
  { id: 'ar', state: 'Arkansas', url: '#' },
  { id: 'ca', state: 'California', url: '#', note: 'Policies vary by county.' },
  { id: 'co', state: 'Colorado', url: '#' },
  { id: 'ct', state: 'Connecticut', url: '#' },
  { id: 'de', state: 'Delaware', url: '#' },
  { id: 'fl', state: 'Florida', url: '#' },
  { id: 'ga', state: 'Georgia', url: '#' },
  { id: 'hi', state: 'Hawaii', url: '#' },
  { id: 'id', state: 'Idaho', url: '#' },
  { id: 'il', state: 'Illinois', url: '#' },
  { id: 'in', state: 'Indiana', url: '#' },
  { id: 'ia', state: 'Iowa', url: '#' },
  { id: 'ks', state: 'Kansas', url: '#' },
  { id: 'ky', state: 'Kentucky', url: '#' },
  { id: 'la', state: 'Louisiana', url: '#' },
  { id: 'me', state: 'Maine', url: '#' },
  { id: 'md', state: 'Maryland', url: '#' },
  { id: 'ma', state: 'Massachusetts', url: '#' },
  { id: 'mi', state: 'Michigan', url: '#' },
  { id: 'mn', state: 'Minnesota', url: '#' },
  { id: 'ms', state: 'Mississippi', url: '#' },
  { id: 'mo', state: 'Missouri', url: '#' },
  { id: 'mt', state: 'Montana', url: '#' },
  { id: 'ne', state: 'Nebraska', url: '#' },
  { id: 'nv', state: 'Nevada', url: '#' },
  { id: 'nh', state: 'New Hampshire', url: '#' },
  { id: 'nj', state: 'New Jersey', url: '#' },
  { id: 'nm', state: 'New Mexico', url: '#' },
  { id: 'ny', state: 'New York', url: '#' },
  { id: 'nc', state: 'North Carolina', url: '#' },
  { id: 'nd', state: 'North Dakota', url: '#' },
  { id: 'oh', state: 'Ohio', url: '#' },
  { id: 'ok', state: 'Oklahoma', url: '#' },
  { id: 'or', state: 'Oregon', url: '#' },
  { id: 'pa', state: 'Pennsylvania', url: '#' },
  { id: 'ri', state: 'Rhode Island', url: '#' },
  { id: 'sc', state: 'South Carolina', url: '#' },
  { id: 'sd', state: 'South Dakota', url: '#' },
  { id: 'tn', state: 'Tennessee', url: '#' },
  { id: 'tx', state: 'Texas', url: '#' },
  { id: 'ut', state: 'Utah', url: '#' },
  { id: 'vt', state: 'Vermont', url: '#' },
  { id: 'va', state: 'Virginia', url: '#' },
  { id: 'wa', state: 'Washington', url: '#' },
  { id: 'wv', state: 'West Virginia', url: '#' },
  { id: 'wi', state: 'Wisconsin', url: '#' },
  { id: 'wy', state: 'Wyoming', url: '#' },
];

export const CHECKLIST_DATA: ChecklistItem[] = [
    {
        id: 'c1',
        text: 'Get Caseworker Information',
        details: 'Ask for their full name, title, and official ID. Write it all down in your contact log. This is crucial for accountability.'
    },
    {
        id: 'c2',
        text: 'Ask for Allegations in Writing',
        details: 'Politely ask the caseworker for a written copy of the specific allegations against you. If they can\'t provide it immediately, ask when you can expect it.'
    },
    {
        id: 'c3',
        text: 'Do Not Consent to a Home Search',
        details: 'State clearly and calmly: "I do not consent to a search of my home without a warrant." Do not physically block them, but do not give permission.'
    },
    {
        id: 'c4',
        text: 'Do Not Sign Anything',
        details: 'Do not sign any documents, especially a "safety plan," without your attorney reviewing it first. Politely state, "I will need my attorney to review this document before I can sign it."'
    },
    {
        id: 'c5',
        text: 'Start Your DCS Contact Log',
        details: 'Immediately after the interaction, use the template in the Toolkit to write down everything that was said and done. Be as detailed as possible.'
    },
    {
        id: 'c6',
        text: 'Contact a Qualified Attorney',
        details: 'This is the most important step. Use the Resources page to find an attorney who specializes in juvenile dependency law in your state immediately.'
    },
    {
        id: 'c7',
        text: 'Inform Friends & Family',
        details: 'Let your trusted support system know what is happening. You will need their support. Ask them to be ready to write character reference letters if needed.'
    },
];

export const US_STATES: { name: string, abbreviation: string }[] = [
    { name: 'Alabama', abbreviation: 'AL' }, { name: 'Alaska', abbreviation: 'AK' }, { name: 'Arizona', abbreviation: 'AZ' }, { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' }, { name: 'Colorado', abbreviation: 'CO' }, { name: 'Connecticut', abbreviation: 'CT' }, { name: 'Delaware', abbreviation: 'DE' },
    { name: 'Florida', abbreviation: 'FL' }, { name: 'Georgia', abbreviation: 'GA' }, { name: 'Hawaii', abbreviation: 'HI' }, { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' }, { name: 'Indiana', abbreviation: 'IN' }, { name: 'Iowa', abbreviation: 'IA' }, { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' }, { name: 'Louisiana', abbreviation: 'LA' }, { name: 'Maine', abbreviation: 'ME' }, { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' }, { name: 'Michigan', abbreviation: 'MI' }, { name: 'Minnesota', abbreviation: 'MN' }, { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' }, { name: 'Montana', abbreviation: 'MT' }, { name: 'Nebraska', abbreviation: 'NE' }, { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' }, { name: 'New Jersey', abbreviation: 'NJ' }, { name: 'New Mexico', abbreviation: 'NM' }, { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' }, { name: 'North Dakota', abbreviation: 'ND' }, { name: 'Ohio', abbreviation: 'OH' }, { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' }, { name: 'Pennsylvania', abbreviation: 'PA' }, { name: 'Rhode Island', abbreviation: 'RI' }, { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' }, { name: 'Tennessee', abbreviation: 'TN' }, { name: 'Texas', abbreviation: 'TX' }, { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' }, { name: 'Virginia', abbreviation: 'VA' }, { name: 'Washington', abbreviation: 'WA' }, { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' }, { name: 'Wyoming', abbreviation: 'WY' }
];