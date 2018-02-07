# Applied Front-end

## Content

- [The basics](#the-basics)
    - HTML, CSS and Javascript, how they work together
- [Components](#components)
    - [Why we need it](#why-we-need-it)
    - [How they work](#how-they-work)
- Our first component
    - List component
- Interaction with components
    - Button component to add or remove from the list
- More complex components
    - Gallery
- Creating n instances components
    - Sliders
- Handling data
    - Passing data to children components (one-way binding)
- Component lifecycle
    - Initializing
    - Loading data
    - Creating markup
    - Updating
    - Unmounting
- Animations
    - CSS Animations
        - Transitions
        - Keyframes
    - Javascript animations
        - How to do it right
- Common components
    - Accordions
    - Tables and dynamic lists
    - Navigation menus
    - Parallax content
    - Custom inputs (buttons, labels, checkbox, selects ...)
    - Modals
    - Notifications

## The basics

Basically a component is composed by HTML fot the markup, CSS for the styling and JS for any logic involved and maybe animations, you can create components using the three techologies or some of them, that depends on the component. **Not every component has HTML+CSS+JS**.

[Back to top](#content)

## Components

### Why we need it

**Components provide a way to write small parts** with a consistent way to communicate it with other components (API) that can easily be orchestrated as part of a larger screen, application or system.

[Back to top](#content)

### How they work

Every component should work by itself, you only need to pass some data and even that can be optional, that the first principle, you can create components using other components but every inner component should work isolated.

Every component is a new instance of it, thats because if you need to use the same component twice, every component should has its own private state that doesn't affect the other one.

[Back to top](#content)