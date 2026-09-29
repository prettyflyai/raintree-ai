// Section B — Operational excellence (B3, B4) + plan
export const B3 = [
{ id:'rcm', area:'B3', name:'RCM services agents', goals:['EBITDA improvements','RCM services at 50%+ margin'],
  pain:'RCM services margins sit below target because claim scrubbing, denial work and payment posting are manual and scale with headcount.',
  solution:'Three agents inside the RCM team: pre-submission claim scrubbing, denial root-cause and appeal drafting, and automated payment posting with exception routing.',
  kind:'save', value:1100000, basis:'30% of RCM services labour on ~$8M services revenue', weeks:'10–12 weeks', cost:180000,
  steps:['Mine 24 months of remits','Scrub claims before submission','Draft appeals with evidence','Automate posting and exceptions'],
  proto:{t:'q', r:[['Claim 26-44812 · PT eval 97163','Medicare · $182'],['Claim 26-44830 · 97110 × 4','BCBS · $264'],['Denial D-2291 · 97140','Aetna · CO-50']],
   f:[['KX modifier missing','Patient is past the therapy threshold for 2026; claim will deny without KX.','Medicare rules · visit history'],
      ['Units exceed authorization','Authorization covers 12 visits; this is visit 13.','Auth log'],
      ['Appeal drafted','Medical necessity supported by the plan of care and progress note; letter ready for signature.','Chart · payer policy']]}},
{ id:'spend', area:'B3', name:'Spend optimization agent', goals:['EBITDA improvements','Non-people cost reduction'],
  pain:'Software, cloud, clearinghouse and vendor costs have grown with little review. Renewals auto-renew and duplicate tools overlap.',
  solution:'Reconciles AP, card spend and cloud bills into a single vendor register. Flags duplicates, unused seats, rate creep and renewal windows with a recommended action.',
  kind:'save', value:420000, basis:'8–12% of ~$4M addressable non-people spend', weeks:'4–6 weeks', cost:60000,
  steps:['Ingest AP, card and cloud bills','Build the vendor register','Flag savings with evidence','Calendar renewals and negotiate'],
  proto:{t:'q', r:[['Azure · production subscriptions','$62K/month'],['Clearinghouse fees','$28K/month'],['SaaS seats · 41 vendors','$19K/month']],
   f:[['Idle compute $7.4K/month','14 VMs in a retired test environment have run at under 3% CPU for 90 days.','Azure cost export'],
      ['Per-claim rate above market','Current rate $0.32 per claim against a benchmark of $0.22 at your volume.','Contract · benchmark'],
      ['Duplicate tools','Three survey tools and two e-signature tools overlap; consolidate to one each.','AP · SSO logs']]}},
{ id:'ledger', area:'B3', name:'AI OS savings ledger', goals:['EBITDA improvements','$2M AI OS savings'],
  pain:'Savings from AI programmes are claimed but not measured consistently. Finance cannot defend the $2M figure to the board.',
  solution:'A ledger that records each agent\u2019s baseline, measured result and verified saving, reconciled to the P&L. Shows progress against the $2M target and flags claims without evidence.',
  kind:'save', value:120000, basis:'Finance reporting time + prevents double counting', weeks:'3–4 weeks', cost:40000,
  steps:['Agree baselines per agent','Instrument measurement','Reconcile to the P&L monthly','Report progress to the board'],
  proto:{t:'q', r:[['RCM services agents','Verified $412K of $1.1M plan'],['Support resolution agent','Verified $180K of $700K plan'],['Spend optimization agent','Verified $96K of $420K plan']],
   f:[['On track','Posting automation saved 2.1 FTE in Q3, confirmed against payroll.','Payroll · time study'],
      ['Claim lacks evidence','$60K deflection saving has no baseline ticket count; held as unverified.','Ledger rules'],
      ['Progress to target','$688K verified of $2.0M (34%) at month 5 of 12.','Ledger']]}}
];
export const B4 = [
{ id:'support', area:'B4', name:'Support resolution agent', goals:['Efficiencies of scale','Support cost per customer'],
  pain:'Support volume grows with the customer base. Most tickets are how-to or configuration questions already answered in help content.',
  solution:'Resolves how-to and configuration tickets from help content and the customer\u2019s own setup, and escalates the rest with a diagnosis attached. Works alongside Assembled staffing.',
  kind:'save', value:700000, basis:'40% deflection on ~90K tickets/yr', weeks:'6–8 weeks', cost:110000,
  steps:['Cluster 12 months of tickets','Ground on help content','Resolve top intents end to end','Escalate with diagnosis'],
  proto:{t:'c', qa:[
   ['Our claims are stuck in "pending" since yesterday.','Your clearinghouse batch from 16 Oct failed validation: 12 claims are missing a rendering provider NPI after a provider was added. Add the NPI under Staff → Providers and resubmit the batch. I have opened ticket 88213 in case you want a specialist.',['Clearinghouse batch log','Your provider setup'],[['Resubmit batch','primary']]],
   ['How do I change the cancellation fee?','Settings → Scheduling → Policies → No-show and late cancel. Your current fee is $35. Changes apply to appointments booked after saving.',['Help: Scheduling policies','Your settings']]]}},
{ id:'expert', area:'B4', name:'Product expertise agent', goals:['Efficiencies of scale','Scale expert knowledge'],
  pain:'Sales, CS and support rely on a few product experts for detailed answers. Those experts are interrupted all day.',
  solution:'An internal assistant grounded in product docs, release notes, resolved tickets and implementation notes. It answers with citations and routes new questions to the expert, capturing the answer.',
  kind:'save', value:350000, basis:'Expert interrupts + faster answers for ~300 staff', weeks:'4–6 weeks', cost:70000,
  steps:['Index docs, releases and tickets','Enforce citations and permissions','Launch in Teams','Capture new answers'],
  proto:{t:'c', qa:[
   ['Does Raintree support Direct Access billing rules in Texas?','Yes. Texas allows PT evaluation and treatment for up to 10 business days without a referral for licensed PTs meeting criteria. Raintree enforces this with the Direct Access visit limit setting per state.',['Release 25.2 notes','State rules library']],
   ['Can a customer use their own clearinghouse with RCM services?','Not today. RCM services requires the Raintree clearinghouse integration. The exception process is documented and has been approved twice.',['RCM services terms','Resolved ticket 71022']]]}},
{ id:'health', area:'B4', name:'NPS, eNPS & account health agent', goals:['Efficiencies of scale','Retention and advocacy'],
  pain:'NPS, support, usage and billing signals live in separate tools. At-risk accounts are found at renewal, and eNPS insight rarely turns into action.',
  solution:'Combines NPS verbatims, ticket trends, usage and billing into a health score per account, explains the drivers, and drafts the save or expansion play. Summarises eNPS themes by team.',
  kind:'rev', value:800000, basis:'Churn 8% → 6% on ~$40M ARR', weeks:'6–8 weeks', cost:100000,
  steps:['Unify health signals','Score and explain risk','Draft save plays','Close the loop on eNPS themes'],
  proto:{t:'q', r:[['Evergreen Rehab · 9 clinics','Health 38 · renewal Feb 2027'],['Tri-County PT · 4 clinics','Health 55'],['Kids First Therapy · 6 clinics','Health 81 · expansion signal']],
   f:[['Detractor NPS (3)','Verbatim: "billing errors every month since the update".','NPS survey'],
      ['Ticket spike','Billing tickets up 3× in 60 days; two escalations.','Support data'],
      ['Save play drafted','Executive call plus an RCM review, with a credit authorised up to $2K.','Retention playbook']]}}
];
export const AREAS = [
  { code:'A1', pillar:'A', name:'Better marketing' },
  { code:'A2', pillar:'A', name:'Predictable revenue motion' },
  { code:'B1', pillar:'B', name:'Implementation throughput' },
  { code:'B2', pillar:'B', name:'Product delivery quality' },
  { code:'B3', pillar:'B', name:'EBITDA improvements' },
  { code:'B4', pillar:'B', name:'Efficiencies of scale' }
];
export const PHASES = [
  { n:'1', when:'Q4 2026 · weeks 0–8', title:'This quarter\u2019s ARR', ids:['leads','forecast','displace'] },
  { n:'2', when:'Q1 2027', title:'Wallet, launch and margin', ids:['wallet','launch','rcm','support','ledger'] },
  { n:'3', when:'Q2 2027', title:'Implementation and trust', ids:['implcopilot','migration','onboard','proof','expert'] },
  { n:'4', when:'H2 2027', title:'Scale and delivery quality', ids:['pdlc','release','qa','spend','health'] }
];
