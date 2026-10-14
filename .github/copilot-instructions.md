# Copilot instructions for janixpl.github.io

## Project overview

This repository is a small static website for the custom Janix Calendar. The app is intentionally lightweight: `index.html` contains its markup, styling, and JavaScript.

The page renders the current year's calendar, displays the current time in the Europe/Warsaw timezone, computes approximate moon phases, and shows a detail panel for a selected date.

## Build, test, and lint commands

There is no package manifest, frontend framework, automated test suite, or lint workflow in this repository.

To preview the site locally, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. A basic HTTP smoke check is:

```sh
curl -I http://localhost:8000/index.html
```

There is no single-test command. For calendar logic changes, reload the page and check the browser console for runtime errors.

## High-level architecture

- `index.html` is the entire app: CSS theme and layout, page elements, and client-side logic live in one file.
- `update()` builds the calendar for the current year, including thirteen 28-day months and the year-end stabilization day(s) (day 365 and, in leap years, day 366).
- `tick()` runs once per second to update the clock and Unix timestamp without rebuilding the calendar.
- Calendar cells carry `data-*` attributes (`data-greg`, `data-m`, `data-d`, and `data-ts`) that their click handlers use to populate the detail panel.
- Moon phases are approximated from `KNOWN_NEW_MOON` and `MOON_CYCLE`; there is no external calendar or astronomy dependency.

## Key conventions

- Keep the app in its single HTML document unless a concrete need for modularization arises.
- Preserve the custom calendar structure: thirteen 28-day months followed by stabilization day(s).
- Add translated UI labels to the existing `i18n` object for both Polish and English, and use the existing `currentLang`/`toggleLang()` flow.
- Treat `Europe/Warsaw` (`TZ`) as the canonical timezone for clock and date formatting; use the existing `Intl` formatting helpers rather than assuming the browser's local timezone.
- Preserve the calendar-cell dataset attributes and click behavior when changing how dates are rendered or selected.
