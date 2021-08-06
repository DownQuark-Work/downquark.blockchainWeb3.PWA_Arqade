# [The 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)

Back to architecture, shall we? I usually go with what I call the 7-1 pattern: 7 folders, 1 file. Basically, you have all your partials stuffed into 7 different folders, and a single file at the root level (usually named main.scss) which imports them all to be compiled into a CSS stylesheet.

Ideally, we can come up with something like this:
```
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file
```

Misc:
/*
  // functions are for inline methods
    /// e.g.
    ```
    .component {
      background-color: formatBaseColors(var(--color-primary), 0.2);
    }
    ```
*/
// @function formatBaseColors($orig, $flag, $val) {
//   $srch:'lvlshrColorBase';
//   $rplc:'--lvlshr-color-base-';
//   $index: str-index($orig, $srch);
//   @if $index {
//     @debug $index, str-length($srch);
//     @debug $rplc + to-lower-case(str-slice($orig, str-length($srch)+1, str-length($orig))) + $flag;
//     // @return str-replace($orig, $srch, $rplc)
//   }
//   @return 0;
// }
