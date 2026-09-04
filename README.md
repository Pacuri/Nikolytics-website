# Nikolytics website

The public website for Nikolytics. Structure for Purpose.

Built with Next.js (App Router) and deployed on Vercel. Every page is prerendered as static HTML at build time.

## Run it locally

    npm install
    npm run dev

Open http://localhost:3000.

## Where things live

- `app/` pages: `page.tsx` is the homepage, `insights/` is the article index and `insights/[slug]/` renders one article.
- `components/` the homepage sections, header, footer, the Cal.com link and the two small client scripts (smooth scroll, section reveal).
- `content/insights/*.md` the articles. One Markdown file per article with frontmatter. Add a file to add an article; the index, homepage library and sitemap pick it up on the next build.
- `public/images/` the hero, the logo and the article images.
- `app/globals.css` all styling, with the brand tokens at the top (`--cream`, `--forest`, `--teal`, `--sage`, `--line`).
- `lib/site.ts` site name, motto, URL, navigation and the Cal.com booking link.

## Adding an article

Create `content/insights/your-slug.md`:

    ---
    title: "Article title"
    category: "Operations"
    description: "One sentence shown under the title and in the library."
    image: "/images/insights/your-image.jpg"
    imageAlt: "What the image shows"
    author: "Niko, Nikolytics"
    readingTime: "5 min"
    order: 5
    status: "published"
    ---

    Body in Markdown.

Put the image in `public/images/insights/`. The homepage shows the first four by `order`.

## The booking link

Every "Let's talk" opens the Cal.com event in a modal on top of the page. The link itself is the real booking URL, so it still works without JavaScript. Change it in `lib/site.ts`.

## Deploying

Vercel deploys automatically from the `main` branch. Preview deployments are created for every other branch and pull request.

Set the production domain in `lib/site.ts` (`site.url`) so canonical URLs, the sitemap and Open Graph tags point at the right place.

## Copy rules

The brief's rules apply to every word on the site: no em dashes, no "not X, but Y" constructions, no pricing, guarantees or unverified figures, and only the approved American Paragons testimonial as client proof.
