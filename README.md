# LearnWard Website

Public bilingual (English default / Vietnamese toggle) product storytelling website for **https://learnward.online**.

## Purpose

The site introduces the **LearnWard** learning-motivation concept for families. It is not the Flutter application, a learning portal, or a production web dashboard. All product UI, rewards and point amounts displayed on the site are **illustrative**. The planned Android and iOS app is still in development.

Key ideas are grounded in [LearnWard's Product Definition](https://github.com/thedusk4203/LearnWard/blob/main/docs/00-product-definition.md) and [Product Principles](https://github.com/thedusk4203/LearnWard/blob/main/docs/01-product-principles.md):

- Learning takes place anywhere, not only within the app.
- Progress, improvement, mastery and meaningful effort matter more than raw scores.
- XP represents lasting progression; Reward Points are bounded and spendable.
- Rewards and their costs are agreed upon by parents and children; the site shows small/medium/large examples.
- The founder story comes from wanting to support two younger brothers in a family with limited time to supervise studying.

## Files

- \`index.html\` — semantic content, English source copy, localized elements.
- \`styles.css\` — responsive design and concept-only dashboard graphics.
- \`script.js\` — Vietnamese copy, language-switch persistence, accessible mobile navigation.
- \`favicon.svg\` — LearnWard shield mark.
- \`CNAME\` — GitHub Pages domain, must not be removed.
- \`robots.txt\` and \`sitemap.xml\` — search engine metadata.

## Run locally

Any static server works. For example:

\`\`\`bash
python -m http.server 8000
\`\`\`

Visit http://localhost:8000/. No Node dependencies or build step are required.

## Deployment

GitHub Pages publishes the root of the \`main\` branch. Set repository Settings → Pages → Custom domain to \`learnward.online\` and enable HTTPS.

Existing Spaceship DNS records:

- A \`@\` → \`185.199.108.153\`
- A \`@\` → \`185.199.109.153\`
- A \`@\` → \`185.199.110.153\`
- A \`@\` → \`185.199.111.153\`
- CNAME \`www\` → \`thedusk4203.github.io\`

**Do not** delete email MX/SPF/DKIM/DMARC records when editing website DNS.

## Content and privacy maintenance

- English is the default; a manual VI switch saves the user's choice in localStorage.
- The brochure website has no forms, accounts, trackers or external dependencies.
- Contact mailto uses \`admin@learnward.online\`. Verify that this alias is configured before advertising it.
- Replace concept-only copy and graphics with verified, launched product capabilities when appropriate.
- Before collecting user data or releasing the mobile app, provide an actual privacy policy appropriate for the app, including child-data practices.
