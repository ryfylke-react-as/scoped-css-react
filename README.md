# scoped-css-react

A _styled_-like styling solution that lets you write `@scope`'d css.

### [caniuse](https://caniuse.com/mdn-css_at-rules_scope)

## Simple example

```tsx
import { createScoped } from "scoped-css-react";

const Container = createScoped("main")`
    :scope {
        background: black;
    }

    a {
        color: red;
    }
`;

export default function App() {
  return (
    <Container>
      <h1>
        <span>Hey</span> there!
      </h1>
    </Container>
  );
}
```

## Use with other components

> Your component needs to take a `children` prop

```tsx
const StyledButton = createScope(Button)`
    :scope {
        color: red;
    }

    svg {
       --size: 0.875rem;
    }
`;
```

## Props

```tsx
const StyledButton = createScope(Button)`
    :scope {
        color: ${(props) =>
          props.variant === "ghost" ? "black" : "white"};
    }

    svg {
       --size: 0.875rem;
    }
`;
```
