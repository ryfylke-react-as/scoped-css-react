import React, { ReactNode } from "react";
type Component<T> = (props: T) => ReactNode;
export declare const createScoped: <T extends Component<P> | keyof React.JSX.IntrinsicElements = "div", P = T extends keyof React.JSX.IntrinsicElements ? React.ComponentProps<T> : T extends (...args: any[]) => any ? Parameters<T>[0] : never>(element: T) => (strings: TemplateStringsArray, ...args: ((props: P) => string)[]) => (props: P) => React.JSX.Element;
declare const Component: (props: {
    children: ReactNode;
    color: string;
}) => React.JSX.Element;
export {};
