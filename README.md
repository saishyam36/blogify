# Blogify

**Live site:** [blogify-shyam.vercel.app](https://blogify-shyam.vercel.app)

A personal blog built with **Next.js 16**, powered by **MDX content hosted on GitHub**. Posts are fetched at runtime from a separate GitHub repository, compiled with MDX, and served with ISR (Incremental Static Regeneration).

---

## Features

- MDX blog posts fetched from a remote GitHub repository
- Syntax highlighted code blocks
- Tag-based post filtering
- Responsive dark/light mode UI
- YouTube video embeds inside MDX
- Optimized image rendering inside MDX
- Auto-generated `sitemap.xml` and `robots.txt`
- ISR with 30-minute revalidation

---

## Tech Stack

| Dependency | Purpose |
|---|---|
| `next` | App framework — routing, SSR/ISR, image optimization |
| `react` / `react-dom` | UI rendering |
| `next-mdx-remote` | Fetches and compiles remote MDX content server-side |
| `rehype-highlight` | Syntax highlighting for code blocks in MDX |
| `rehype-slug` | Adds `id` attributes to headings for anchor links |
| `rehype-autolink-headings` | Wraps headings in anchor tags for deep linking |
| `highlight.js` | Code highlighting styles (paired with `rehype-highlight`) |
| `react-icons` | GitHub and LinkedIn icons in the Navbar |
| `sharp` | High-performance image processing for `next/image` |
| `next-sitemap` | Generates `sitemap.xml` and `robots.txt` after build |
| `@tailwindcss/typography` | `prose` styles for MDX body content |
| `tailwindcss` | Utility-first CSS framework |

---

## Project Structure

```
blogify/
├── app/
│   ├── layout.tsx                  # Root layout — Navbar, fonts, metadata
│   ├── page.tsx                    # Homepage — profile + posts list
│   │
│   ├── posts/
│   │   ├── page.tsx                # /posts — dedicated blog listing page
│   │   └── [postId]/
│   │       ├── page.tsx            # Individual post page
│   │       ├── loading.tsx         # Spinner + skeleton while post loads
│   │       ├── error.tsx           # Error boundary for post fetch failures
│   │       └── not-found.tsx       # 404 UI for unknown post slugs
│   │
│   ├── tags/
│   │   └── [tag]/
│   │       ├── page.tsx            # Posts filtered by tag
│   │       ├── loading.tsx         # Skeleton loader for tag page
│   │       ├── error.tsx           # Error boundary for tag page
│   │       └── not-found.tsx       # 404 UI for unknown tags
│   │
│   └── components/
│       ├── Navbar.tsx              # Sticky navigation bar
│       ├── Posts.tsx               # Fetches and lists all post metadata
│       ├── ListItem.tsx            # Single post card with tags
│       ├── ProfilePic.tsx          # Circular profile image (from /public)
│       ├── CustomImage.tsx         # next/image wrapper for MDX images
│       ├── MdxImg.tsx              # Overrides markdown img → CustomImage
│       └── Video.tsx               # YouTube embed with aspect-ratio
│
├── lib/
│   └── posts.ts                    # GitHub API fetching + MDX compilation
│
├── types.d.ts                      # Global types: Meta, BlogPost, Filetree
├── next.config.ts                  # Image remote patterns (GitHub domains)
├── next-sitemap.config.js          # Sitemap + robots.txt generation config
└── public/
    └── profile.png                 # Profile picture
```

---

## How It Works

Blog posts are **not stored in this repo**. They live in a separate GitHub repository ([saishyam36/my-blogposts](https://github.com/saishyam36/my-blogposts)) as `.mdx` files.

**Data flow:**

1. `getPostsMeta()` — calls the GitHub Trees API to list all `.mdx` files
2. `getPostByName()` — fetches the raw MDX file content via `raw.githubusercontent.com`
3. `compileMDX()` — parses frontmatter and compiles MDX to React components server-side
4. Pages are cached for **30 minutes** via ISR (`revalidate = 1800`)

**MDX frontmatter format:**

```mdx
---
title: "My Post Title"
date: "2024-01-15"
tags: ["nextjs", "react"]
---

Post content here...
```

**Custom MDX components available in posts:**

```mdx
<!-- YouTube embed -->
<Video id="dQw4w9WgXcQ" title="Optional title" />

<!-- Optimized image with optional caption -->
<CustomImage src="/images/diagram.png" alt="Diagram" caption="Optional caption" />

<!-- Standard markdown images also work and auto-resolve to GitHub raw URLs -->
![alt text](/images/diagram.png)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- A GitHub personal access token with `repo` read scope

### Environment Variables

Create a `.env.local` file in the root:

```env
GITHUB_TOKEN=your_github_personal_access_token
SITE_URL=https://your-domain.com
```

### Install & Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
pnpm build
```

`next-sitemap` runs automatically after build via the `postbuild` script and generates `public/sitemap.xml` and `public/robots.txt`.

---

## Deployment

Deploy on [Vercel](https://vercel.com). Set the following environment variables in your Vercel project settings:

| Variable | Value |
|---|---|
| `GITHUB_TOKEN` | Your GitHub PAT |
| `SITE_URL` | Your production domain (e.g. `https://blogify-shyam.vercel.app`) |
