import React, { ReactNode } from "react";

type Component<T> = (props: T) => ReactNode;

export const createScoped = <
  T extends
    | keyof React.JSX.IntrinsicElements
    | Component<P> = "div",
  P = T extends keyof React.JSX.IntrinsicElements
    ? React.ComponentProps<T>
    : T extends (...args: any[]) => any
    ? Parameters<T>[0]
    : never
>(
  element: T
) => {
  const scoped = (
    strings: TemplateStringsArray,
    ...args: ((props: P) => string)[]
  ) =>
    function Component(props: P) {
      const resolved = args.map((arg) => arg(props));
      const styles = strings.reduce(
        (acc, string, i) => acc + string + (resolved[i] ?? ""),
        ""
      );
      const Element = element;

      return (
        // @ts-ignore
        <Element {...props}>
          <style>{`@scope { ${styles} }`}</style>
          {/* @ts-ignore */}
          {props.children}
        </Element>
      );
    };
  return scoped;
};

const TestA = createScoped("div")`
  color: ${(props) => props["aria-busy"]?.toString() ?? ""};
`;

const Component = (props: {
  children: ReactNode;
  color: string;
}) => {
  return <TestA {...props} />;
};

const TestB = createScoped(Component)`
  color: ${(props) => props.color};
`;
