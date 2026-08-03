# Yukora Portfolio

Official public website and experimental project archive for Yukora.

## Public site surface

The GitHub Pages homepage is intentionally kept at the repository root:

- `index.html` — current Yukora landing page
- `yukora-main.css` — homepage presentation
- `CNAME` — custom-domain configuration
- `assets/brand/` — current visual identity and favicon assets

Keeping these files at the root preserves GitHub Pages behavior and the existing domain configuration.

## Project routes

The top-level project directories (`aegis`, `beta`, `forge`, `ghostmech`, `nemo`, `nexus`, `prism`, `shortcut`, `spectre`, `store`, `tools`, `v2`, and `vaultzero`) are preserved as independent historical or experimental web routes. Moving them under a single parent folder would change their public URLs, so they remain at the root for backward compatibility.

New standalone experiments should be added under `projects/<project-name>/`. Existing routes can be migrated there only when redirects are introduced at their original locations.

## Assets

- New shared branding belongs in `assets/brand/`.
- New homepage media belongs in `assets/site/`.
- Root-level images are legacy assets retained to avoid breaking older project references. They should not be used by new pages.

## Repository conventions

1. Keep the active homepage limited to `index.html`, `yukora-main.css`, and organized files under `assets/`.
2. Do not add new loose media files to the repository root.
3. Preserve `CNAME` and existing project-route folders unless a redirect migration is part of the same change.
4. Prefer descriptive, lowercase filenames for new assets.

This structure keeps the live website unchanged while giving future work a predictable home.