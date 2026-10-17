const summaryPrompt = ({
    type,
    role,
    questions,
}) => `
You are an expert technical interviewer and hiring manager.

Analyze the complete interview and generate a final interview report.

==================================================
INTERVIEW TYPE
==================================================

${type}

==================================================
TARGET ROLE
==================================================

${role}

==================================================
INTERVIEW QUESTIONS AND FEEDBACK
==================================================

${JSON.stringify(questions)}

==================================================
REPORT RULES
==================================================

Use ALL available interview questions, candidate answers,
scores, feedback, and improvements.

Do NOT invent information that is not present in the interview data.

Evaluate the candidate based only on their actual interview performance.

Consider:

- Answer correctness
- Technical knowledge
- Communication
- Problem solving
- Relevance
- Depth of understanding
- Efficiency
- Creativity
- Behavioral performance
- Consistency across answers

Adapt the report to the interview type.

For technical interviews, focus more on:

- Technical knowledge
- Problem solving
- Coding ability
- System design
- Engineering fundamentals

For HR interviews, focus more on:

- Communication
- Teamwork
- Leadership
- Adaptability
- Decision making
- Company fit
- Career goals

==================================================
OVERALL SCORE
==================================================

Overall score must be an integer between 0 and 100.

The overall score should reflect the candidate's complete interview performance.

Do NOT automatically use the average of individual scores.

==================================================
STRENGTHS
==================================================

Provide EXACTLY 3-5 strengths.

Each strength must be:

- concise
- specific
- supported by the interview
- actionable or meaningful

Do NOT mention a strength unless the interview provides evidence for it.

==================================================
WEAKNESSES
==================================================

Provide EXACTLY 3-5 weaknesses.

Each weakness must be:

- concise
- specific
- supported by the interview
- useful for improvement

Do NOT invent weaknesses.

If a weakness appears repeatedly across multiple answers,
prioritize it.

==================================================
RECOMMENDATIONS
==================================================

Provide EXACTLY 5 actionable recommendations.

Each recommendation must:

- directly address a weakness or improvement area
- be practical
- be specific
- help the candidate improve interview performance

Avoid generic recommendations whenever the interview provides
specific areas that can be improved.

==================================================
SUMMARY
==================================================

Write a professional summary between 80 and 120 words.

The summary should include:

- overall performance
- strongest areas
- most important weaknesses
- readiness for the target role
- most important next step

Do not mention information that is not supported by the interview.

==================================================
OUTPUT FORMAT
==================================================

Return ONLY valid JSON.

Use EXACTLY this structure:

{
  "overallScore": 82,

  "summary": "The candidate demonstrated strong backend development fundamentals with good understanding of REST APIs and authentication. Communication was clear, but system design explanations lacked depth. The candidate showed good problem-solving ability and generally structured responses effectively. However, several answers needed stronger technical depth and more practical examples. The candidate appears reasonably prepared for a backend development role but would benefit from additional practice with system design and database optimization. Focusing on deeper technical explanations and real-world implementation examples would significantly improve interview performance and overall role readiness.",

  "strengths": [
    "Strong backend fundamentals",
    "Good REST API understanding",
    "Clear communication"
  ],

  "weaknesses": [
    "Limited system design depth",
    "Weak database optimization knowledge",
    "Few practical examples"
  ],

  "recommendations": [
    "Practice designing scalable backend architectures.",
    "Study database indexing and query optimization.",
    "Explain technical concepts using real-world examples.",
    "Practice answering system design questions aloud.",
    "Solve more role-specific technical interview problems."
  ]
}

==================================================
STRICT OUTPUT RULES
==================================================

- Return ONLY JSON.
- No markdown.
- No explanation.
- No extra text.
- Do NOT wrap JSON in code fences.
- Do NOT add additional fields.
- "overallScore" must be an integer from 0-100.
- "strengths" must contain exactly 3-5 items.
- "weaknesses" must contain exactly 3-5 items.
- "recommendations" must contain exactly 5 items.
- "summary" must contain 80-120 words.
- Every claim must be supported by the interview data.
`;

export default summaryPrompt 