# scoped-css-react

A _styled_-like styling solution that lets you write `@scope`'d css.

> **For now, avoid using this for components that have lots of instances**  
> This is because we mount the styles along with each component.  
> This is best used as containers, but you can style children using nested css

### [caniuse](https://caniuse.com/mdn-css_at-rules_scope)

## Simple example

```tsx
import { createScoped } from "scoped-css-react";

const Container = createScoped("main")`
    :scope {
        background: black;
    }

    span {
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
/**
<main>
    <style>
    @scope {
        :scope {
            background: black;
        }
    
        span {
            color: red;
        }
    }
    </style>
    <h1>
        <span>Hey</span> there!
    </h1>
</main>

**/
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
