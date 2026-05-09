Features
--------
- [x] organise mobile nav a bit better (like here: https://sharif.io/posts)
- [x] code + figcaption should go together 

- [ ] breadcrumbs navigation elements
- [ ] pagination elements
- [x] group details+summary with the same name into an accordion menu
- [x] navigation
  - [ ] navigation of various widths (super skinny, skinny, horizontal, etc, like the side menu of CircleCI)
  - [x] "menu" type navigation on desktop should also look like the mobile one
- [x] forms
  - [x] validation states
- [ ] animations
- [ ] loading state with aria-busy
- [x] screenshot tests

Improvements
------------
- [ ] redo CSS with nesting
- [x] if I have a nav with the "card" role, it looks fairly ok; but the padding-block could be 0 to make it look even better
- [x] fieldsets, cards all have padding-bottom: 0; is that a good way to approach this? or is it better to have the same padding as top/left/right and figure out a way to remove buttons, inputs, etc natural bottom padding if they are the last element? 
- [x] input elements inside a "group" element maintain their bottom padding/marging; should they? what about if they're inside a form?
- [x] decide on class-based versions for various roles & types (columns, note, etc)
  -> Sorted it here: https://gobi-tools.github.io/css-theme/default/pages/docs/custom/classes.html
- [ ] redo the horizontal spacing to be based on "ch"
- [ ] redo aside and any other fixed widths to be based on "ch"
- [ ] redo the mobile & container logic (based on "ch", like here: https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need)
- [ ] for Tab like navigation, is it possible to have N layers, like Soda docs
  https://docs.soda.io/data-testing/git-managed-data-contracts/install-and-configure 
- [ ] have a full-screen width dimension
- [ ] pre>code elements should have horizontal scrolling enabled
- [x] make 1st child of "header" that's not a nav act like a "hero", and get rid of the "hero" class.  

Bugs
----
- [ ] nav item with icon + text on mobile is not aligned correctly vertically (both ul>li and ol>li)
- [x] If we have two <code> blocks in the same line / paragraph, the 2nd one (and maybe others) have more margin-left than needed 
- [ ] on really small devices (iPhone SE), the last form on [this page](http://localhost:8081/default/pages/docs/forms/forms_normal.html) does not respect
  column widths (e.g. they are unqeual)
- [x] should rows in width<600px have a 0px gap in "92.class-rows.css"?  
- [x] group + row does not vertically center elements correctly
- [x] form elements (textarea, inputs) in a couple of layouts (http://localhost/docs/forms-normal?theme=default&width=medium) 
      on smaller devices (but not yet mobile) are not aligning correclty (e.g. 782px)
        - [x] fixed for http://localhost/docs/forms-normal?theme=default&width=medium at 782px
        - [x] still a problem here, http://localhost/docs/forms-grouped?theme=default&width=medium, at 806px
- [x] for menu elements on smaller devices, when I have 5 navigation menu tabs, the last one won't appear and the widths are not consistent
- [x] autocompleted input elements (name, email, etc) have a "yellow" background; can it be changed?
- [x] if datalist is last element in a grouped form, then one of the visible inputs will not have the right-hand side border
- [x] Tabs in here http://localhost/docs/tabs?theme=default&width=medium at 1000px does not look great (e.g. they're going mobile way too soon!)
- [x] when in a form/fieldset and I want to "group" inputs
  - [x] they still have a margin-left between them 
  - [x] they are not 100% of the screen
- [x] buttons or submit inputs as direct parents inside a "row" role should not have margin-left between them anymore (on desktop or mobile)
- [x] buttons with icon & text need better horizontal alignment
- [x] if a set of grouped checkboxes aren't each in their div (label + input pair), then v-align is way off
- [x] checkbox & radio button text is not correctly aligned (it needs more padding bottom?)
- [x] ordered lists should also have the same v-spacing as horizontal lists
- [x] on mobile, make sure no zooming happens on input focus (this is because input font was smaller than 16px!)
- [x] on smaller devices (any browswer) grouped select + datepicker + button ... the select input becoems waaaay to small horizontally whilst other elements maintain a decent width
- [x] on mobile Chrome (browser), datepicker has small height & width
- [x] on mobile Chrome (browser), submit & reset input types have left-aligned text, instead of centered 
- [x] code, kbd, etc, elements should have display: inline-block
- [x] make the .gap class not visible on mobile

Bugs/Platform
-------------
- [ ][Mobile Safari] The datepicker has no placeholder text; example [here](https://gobi-tools.github.io/css-theme/default/pages/docs/forms/forms_grouped.html) 
- [ ][Mobile Safari] Check & radio button widget & text are not centrally v-aligned
- [x][Mobile Safari/Chrome] Summary with .card class has extra bottom padding or gap
- [x][Mobile Safari/Chrome] Normal navigation example makes the whole viewport too wide, generating horizontal scrolling
- [x][Mobile Safari/Chrome] Selector colors are off on all themes;

Docs
----
- [x] add examples for section headers
- [ ] add docs for footer
- [ ] add docs for main
- [x] On [summary](https://gobi-tools.github.io/css-theme/default/pages/docs/basics/summary.html) page, on mobile,
  the vertical distance between demo & code is too small
- [x] Clicking the "menu sub-nav" button on mobile only works once  
- [ ] [Table](https://gobi-tools.github.io/css-theme/default/pages/docs/basics/table.html) example on mobile does not look good
- [x] [Form/Checkbox](https://gobi-tools.github.io/css-theme/default/pages/docs/forms/forms_checkbox.html) last example: distance
  between example & code on mobile is too small
- [x] The search & select menu [here](https://gobi-tools.github.io/css-theme/default/pages/docs/navigation/navigation.html) does 
not appear OK on small screens; so remove one of the menus;
- [x] Remove the .png icon example from [here](https://gobi-tools.github.io/css-theme/default/pages/docs/extra/icons.html)
- [x] Also [here](https://gobi-tools.github.io/css-theme/default/pages/docs/extra/icons.html), the vertical spacing between 
  example & code on mobile is too small
- [x] remove the theming docs part