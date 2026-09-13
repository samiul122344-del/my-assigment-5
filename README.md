# Dev Stack Builder

## Description
Dev Stack Builder is an interactive web application designed for developers to explore, select, and organize technology stacks for modern software development projects. Users can view detailed tool cards, see ratings and difficulty levels, and manage a personalized selection list in real time.

## Technologies Used
- React.js
- Tailwind CSS
- JavaScript (ES6+)
- React-Toastify
- JSON (Local data file)
- Vite

## Key Features
1. **Interactive Stack Management:** Users can add tools to their stack with duplicate selection protection and instant toast alerts.
2. **Responsive Design:** Fully responsive layout with mobile drawer navigation and responsive grid layout across mobile, tablet, and desktop screens.
3. **Shared Brand Gradient Theme:** Consistent orange-to-pink-to-violet gradient styling across navigation, buttons, and section titles.

---

## React Questions & Answers

### i. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code directly inside JavaScript files. It is used in React to make UI component structure visual, clean, and easier to read and maintain.

### ii. What is the difference between props and state?
**Answer:** 
- **Props (Properties):** Read-only data passed down from a parent component to a child component.
- **State:** Mutable data managed locally inside a component that can change over time (e.g., user actions or data fetching) and triggers re-renders when updated.

### iii. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook creates local dynamic state variables in functional components. In this project, `useState` is used to store:
1. `technologies` (the list of fetched technologies),
2. `stack` (the selected items added by the user),
3. `loading` (loading spinner state),
4. `isMobileMenuOpen` (toggle state for mobile navigation menu).

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** The `useEffect` hook manages side effects in React components, such as data fetching, subscriptions, or DOM updates. It was used in this project to fetch the local `technologies.json` file when the application mounts (loads) for the first time.

### v. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify which items in a dynamic list have changed, been added, or removed. This helps React efficiently update and re-render only the specific elements instead of re-rendering the entire list.

### vi. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means rendering different UI elements or components based on specific conditions or states. 
- **Example used in project:** The empty state in the sidebar stack. If `stack.length === 0`, it renders `"Your stack is empty."`, otherwise it renders the selected stack items list and the `"Remove All"` button.

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:** 
- **Parent to Child:** Data is passed down from parent to child using `props`.
- **Child to Parent:** The parent passes a callback function via `props` to the child component, and the child calls that function with parameters to send data back up to the parent.
-
this ans halp (ai)