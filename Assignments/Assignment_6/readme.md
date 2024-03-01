# Aqua Terra Bistro Website Project
 
## Overview
 
The Aqua Terra Bistro website consists of two main pages: the homepage and the menu page. It utilizes advanced web development techniques, including CSS Grid, Flexbox, and SCSS, to create a responsive and visually appealing experience for visitors. This README explains how various SCSS features are applied throughout the project to enhance the styling and organization of the website's codebase.
 
## SCSS/SASS Features Implementation
 
### Variables and Custom Properties
- **Where Used**: Global style settings (`abstracts/_variables.scss`).
- **Implementation**: SCSS variables define the primary and secondary colors, font stacks, and base font size. Custom properties are created for themes, allowing easy theme adjustments via root selectors.
 
### Nesting
- **Where Used**: Throughout the project, especially in components like `.nav-links`, `.menu`, and `.chef-gallery`.
- **Implementation**: SCSS nesting simplifies the structure, making it more readable and maintainable. For instance, in `.nav-links`, anchor tags (`a`) have nested `&:hover` states, enhancing the navigation bar's interactivity.
 
### Interpolation
- **Where Used**: In mixins and dynamic class names (`mixins/_gridLayout.scss`).
- **Implementation**: Interpolation is used within mixins to construct selector names dynamically, allowing for more flexible and reusable code patterns.
 
### Placeholder Selectors
- **Where Used**: Common patterns like `.btn` and `.flex-center`.
- **Implementation**: Placeholder selectors are defined for button styles and flex centering, then extended in specific classes to reduce redundancy and ensure consistency across the website.
 
### Mixins
- **Where Used**: Responsive design, grid, and flex layouts (`abstracts/_mixins.scss`).
- **Implementation**: Mixins for flexCenter, gridLayout, and respond-to enhance the website's responsiveness and layout structures, applied in various sections like `.chef-gallery` and `.menu-grid`.
 
### Functions
- **Where Used**: Font sizing and spacing (`abstracts/_functions.scss`).
- **Implementation**: The `calcRem` function converts pixel values to REMs, ensuring scalable and accessible design across the website.
 
### Additional Features
 
#### @import
- **Where Used**: Main SCSS file (`main.scss`).
- **Implementation**: Organizes the SCSS structure by importing partials like variables, mixins, and component styles, streamlining the styling process.
 
#### @extend
- **Where Used**: Shared styles across elements (`components/_button.scss`).
- **Implementation**: Allows certain selectors to inherit styles from a placeholder selector, promoting the DRY principle.
 
#### @media and @content
- **Where Used**: Responsive design adjustments (`abstracts/_mixins.scss`).
- **Implementation**: Media query mixins use `@content` to include block of styles specific to various breakpoints, enabling custom responsive designs.
 
#### Conditional Logic (@if, @else)
- **Where Used**: Mixins for theme-specific styles (`mixins/_themes.scss`).
- **Implementation**: Adjusts styles based on conditions, such as switching colors and fonts for a dark mode theme.
 
### File Structure
 
The SCSS files are organized into multiple directories:
- `abstracts/` for variables, mixins, and functions.
- `base/` for foundational styles like resets and typography.
- `components/` for UI components (buttons, navigation).
- `layout/` for layout definitions (headers, footers, grid).
- `pages/` for page-specific styles.
 
### UI Design and Implementation
 
The website's UI is crafted with attention to detail, utilizing CSS Grid for structured layouts in the chef gallery and menu sections, and Flexbox for alignment and distribution in the header and social icons section. The use of SCSS has significantly streamlined the development process, enabling a more structured and maintainable codebase while also allowing for intricate design implementations with minimal code repetition.
 
This README provides an insight into the technical and aesthetic decisions made during the development of the Aqua Terra Bistro website, highlighting the sophisticated use of SCSS/SASS to create a modern, responsive web experience.
