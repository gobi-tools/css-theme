Features
--------
- [ ] breadcrumbs elements
- [ ] pagination elements
- [x] navigation
  - [ ] navigation of various widths (super skinny, skinny, horizontal, etc, like the side menu of CircleCI)
  - [ ] "menu" type navigation on desktop should also look like https://retiready.co.uk/ (e.g. a bit of "mobile-on-desktop" feel)
- [ ] forms
  - [ ] validation states
- [ ] animations
- [ ] have the following classes:
  - [x] .is-banner
  - [x] .is-medium-container
  - [x] .is-wide-container
  - [x] .is-pulled-center
  - [c] .id-gap
  - [x] .is-success
  - [x] .is-error
  - [x] .is-mobile-only
  - [x] .is-desktop-only
  - [ ] .is-bg-primary
  - [ ] .is-bg-secondary
  - [ ] .is-bg-accent
  - [ ] .is-bg-success
  - [ ] .is-bg-error
  - [ ] .is-rounded
  - [ ] .is-circle

Improvements
------------
- [ ] if I have a nav with the "card" role, it looks fairly ok; but the padding-block could be 0 to make it look even better
- [ ] decide on class-based versions for various roles & types (columns, note, etc)
- [ ] redo the horizontal spacing to be based on "ch"
- [ ] redo the mobile & container logic (based on "ch", like here: https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need)

Bugs
----
- [ ] on mobile Chrome (browser), submit & reset input types have left-aligned text, instead of centered 
- [ ] on mobile Chrome (browser), datepicker has small height & width
- [ ] for menu elements on smaller devices, when I have 5 navigation menu tabs, the last one won't appear and the widths are not consistent