export const notes = [
  {
    slug: 'reliability',
    number: '01',
    category: 'Reliability · Product thinking',
    title: 'Reliability is a product decision.',
    subtitle: 'Ownership after the happy path',
    lede: 'The experience does not stop when the feature ships. Someone still owns what happens when the dependency slows down, the data arrives late, or the happy path ends.',
    quote: 'A system reveals its product decisions most clearly when the expected path is no longer available.',
    paragraphs: [
      'For a long time, technology organizations treated reliability as the work that followed product development. Builders created the change; an operations team absorbed the uncertainty. That separation looks tidy on an organization chart and feels very different at 2 a.m.',
      'The better question is not, “Who supports this?” It is, “What did we decide about failure while we were designing it?” Monitoring, rollback, capacity, recovery, and clear ownership are choices about the user experience. They belong beside scope and architecture, not in a readiness checklist opened the week before launch.',
      'This does not mean eliminating failure. It means making failure understandable. A useful alert carries context. A runbook reflects the current system. A service owner knows which tradeoff was made and why. The person responding should not have to reconstruct the design from telemetry fragments while the clock is running.',
      'Reliability becomes less theatrical when it is part of ordinary work: one more acceptance criterion, one more design conversation, one more reason to test the uncomfortable path before a customer does.',
    ],
  },
  {
    slug: 'improvement',
    number: '02',
    category: 'Continuous improvement · Cost',
    title: 'Continuous improvement is a way of seeing.',
    subtitle: 'Learning to notice accepted friction',
    lede: 'Many expensive problems survive because they have become familiar. The workaround has a name, a meeting, and perhaps even a dashboard. Familiarity makes friction look permanent.',
    quote: 'Waste hides particularly well inside work that everyone agrees is necessary.',
    paragraphs: [
      'The most useful improvement work often begins before there is a program around it. Someone notices that a handoff always takes three days. Capacity is held “just in case” but never revisited. A report exists because another report is difficult to trust. None of these looks dramatic alone. Together they become the operating model.',
      'Lean and Kaizen gave me useful language, but the habit matters more than the vocabulary: go close to the work, make the current state visible, and ask why the system keeps producing the same result. The answer is rarely that people need to try harder.',
      'Cost optimization follows the same pattern. A large cloud bill is the final signal, not the first cause. The causes live in sizing assumptions, idle resources, reservation choices, unclear ownership, and decisions that made sense once but were never examined again.',
      "Improvement is not a campaign against imperfection. It is a steady refusal to let yesterday's workaround become tomorrow's architecture.",
    ],
  },
  {
    slug: 'bounded-ai',
    number: '03',
    category: 'Applied AI · Judgment',
    title: 'AI earns trust one bounded decision at a time.',
    subtitle: 'Evidence before automation',
    lede: '“Add AI” is not a useful product requirement. The useful question is narrower: which decision is difficult, what evidence would improve it, and what happens if the system is wrong?',
    quote: 'The closer a recommendation gets to deleting, spending, changing, or claiming, the more visible its evidence should become.',
    paragraphs: [
      'I did not arrive at AI by leaving infrastructure behind. Monitoring, incident response, capacity planning, and pre-production testing all taught the same lesson: confidence should come from evidence and limits, not presentation.',
      'That is how I think about AI in operational systems. Incident history can provide earlier context. Cost patterns can expose anomalies before an invoice. A runbook can suggest a next step based on the current state. In each case, the value is not a conversational interface. It is reducing the distance between a signal and a defensible decision.',
      'The products I build use the same boundary. LifeLens protects uncertain photos rather than casually recommending deletion. ApplyReady shows gaps instead of manufacturing experience to fill them. The intelligence is useful precisely because the consequential action remains legible to the person taking it.',
      'Trust does not arrive when a model sounds certain. It accumulates when a system is clear about what it knows, conservative about what it does not, and designed so a person can still say no.',
    ],
  },
] as const;

export type Note = (typeof notes)[number];