# TypeScript Learning Log - Crabs Khai

This document tracks TypeScript concepts as we encounter them. Since we are learning on the go, this will explain _why_ we are using certain features.

## Basics

### Types vs. Interfaces

In this project, we generally use **Interfaces** for defining the shape of objects (like our Data models) and **Types** for unions or functional definitions.

```typescript
// Interface for a Menu Item
interface MenuItem {
  id: string;
  name: string;
  price: number;
}

// Type for a category (Union Type)
type MenuCategory = "starters" | "mains" | "drinks";
```

### Type Safety based on "Shape"

TypeScript is "structurally typed". If it looks like a duck (has the same properties), it is a duck. We don't need to explicitly say "this object is a MenuItem" if it has all the right fields.

## React & TypeScript

### Typing Props

When we make a component, we tell it what props we expect. This prevents us from passing the wrong data.

```typescript
// Define what the component needs
interface ButtonProps {
  label: string;
  onClick: () => void; // A function that returns nothing
  variant?: "primary" | "secondary"; // Optional prop (?)
}

export const Button = ({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  // ...
};
```

### Generics

_(You might see this in our reusable components)_
Generics let us write code that works with _any_ type, but still keeps type safety. Think of it as a variable for a Type.

Example: A list component that can render a list of _anything_ (Strings, Numbers, or Crabs).

## Common Errors & Fixes

_This section will be updated as we hit errors._

- **"Type 'string' is not assignable to type 'number'":** You are trying to put text into a number variable.
- **"Property 'x' does not exist on type 'y'":** You are trying to access a field that TypeScript doesn't know about. Check your Interface definition.
