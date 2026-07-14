# Moving parthamradkar.com to Cloudflare Pages

Your site is 100% static (no build step), which is the ideal case for
Cloudflare Pages: free hosting, global CDN, auto-deploy on every git push.

Current setup assumed: code on GitHub (the `CNAME` file suggests GitHub
Pages is serving it now), domain registered at Squarespace.

Total time: ~20 minutes of clicking + up to a day of DNS propagation.

---

## Part 1 — Deploy the site to Cloudflare Pages (10 min)

1. Push your latest code to GitHub (`main` branch).

2. Create a free Cloudflare account at https://dash.cloudflare.com/sign-up
   (skip any paid plan prompts — Free covers everything you need).

3. In the Cloudflare dashboard, go to **Workers & Pages → Create →
   Pages → Connect to Git**.

4. Authorize Cloudflare's GitHub app and select your website repo.

5. Build settings — because the site is plain HTML/CSS/JS:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`

6. Click **Save and Deploy**. In ~30 seconds you'll get a live URL like
   `parth-website.pages.dev`. Open it and click around — this is your
   real site, already on Cloudflare's CDN.

From now on, **every `git push` to main auto-deploys**. Pushes to other
branches get their own preview URLs.

---

## Part 2 — Point your domain at Cloudflare (10 min + propagation)

The clean way is to let Cloudflare run DNS for the domain while
Squarespace stays the registrar. (Option B below transfers it fully.)

### Option A — keep the domain at Squarespace, move DNS to Cloudflare (recommended first step)

1. In the Cloudflare dashboard: **Add a site** (top right, or
   Account Home → Add site) → enter `parthamradkar.com` → choose the
   **Free** plan.

2. Cloudflare scans your existing DNS records and shows them. Accept —
   you can clean them up later.

3. Cloudflare gives you **two nameservers**, something like
   `ada.ns.cloudflare.com` and `bob.ns.cloudflare.com`. Keep this tab open.

4. In Squarespace: **Settings → Domains → parthamradkar.com →
   DNS Settings → Nameservers → Use custom nameservers**, delete the
   Squarespace ones, paste Cloudflare's two, save.

5. Wait. Usually 15 min – 2 hours, worst case 24 h. Cloudflare emails you
   when the domain goes **Active**.

6. Back in Cloudflare: **Workers & Pages → your Pages project →
   Custom domains → Set up a custom domain** → add `parthamradkar.com`.
   Repeat for `www.parthamradkar.com`. Cloudflare creates the DNS
   records for you automatically and issues SSL certificates.

7. Visit https://parthamradkar.com — you're on Cloudflare.

### Option B — transfer the domain to Cloudflare Registrar entirely (optional, do later)

Cheaper renewals (at-cost pricing), one dashboard for everything.
Do this only AFTER Option A is working, since transfer requires the
domain to already be on Cloudflare DNS.

1. Requirements: domain unlocked, no transfer in the past 60 days,
   and registered more than 60 days ago.
2. In Squarespace: Domains → your domain → **Transfer** → unlock the
   domain → copy the **auth/EPP code**.
3. In Cloudflare: **Domain Registration → Transfer Domains** → select
   the domain → paste the auth code → pay one year's renewal (that year
   gets added to your registration, so nothing is lost).
4. Approve the transfer email. Takes up to 5–7 days, site keeps working
   the whole time because DNS never changes.

---

## Part 3 — Clean up old hosting

1. **GitHub Pages:** repo → Settings → Pages → Source: **None**
   (so it stops serving a duplicate site). The `CNAME` file in the repo
   is only used by GitHub Pages; it's harmless but you can delete it.

2. **Squarespace website subscription:** if you were paying for a
   Squarespace *site* (not just the domain), cancel the site plan once
   the Cloudflare version is confirmed live. **Do NOT cancel the domain
   registration** unless you completed Option B.

---

## Gotchas

- **Nothing about the site itself changes.** Pages serves the repo
  exactly as-is — same folder = same URLs.
- **Videos:** `assets/ardms-fctest.mov` is 24 MB. Cloudflare Pages'
  per-file limit is 25 MB, so it fits, but consider re-encoding to mp4
  (`ffmpeg -i ardms-fctest.mov -vcodec h264 -crf 28 ardms-fctest.mp4`)
  — smaller, and `.mov` doesn't play in every browser.
- **Propagation limbo:** while nameservers switch, some visitors may
  briefly see the old site. Normal, resolves within a day.
- **Email:** if you ever set up email on this domain (MX records),
  double-check they carried over in the Cloudflare DNS scan in step A-2.
