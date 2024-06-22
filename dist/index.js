"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScoped = void 0;
const react_1 = __importDefault(require("react"));
const createScoped = (element) => {
    const scoped = (strings, ...args) => function Component(props) {
        const resolved = args.map((arg) => arg(props));
        const styles = strings.reduce((acc, string, i) => { var _a; return acc + string + ((_a = resolved[i]) !== null && _a !== void 0 ? _a : ""); }, "");
        const Element = element;
        return (
        // @ts-ignore
        react_1.default.createElement(Element, Object.assign({}, props),
            react_1.default.createElement("style", null, `@scope { ${styles} }`),
            props.children));
    };
    return scoped;
};
exports.createScoped = createScoped;
const TestA = (0, exports.createScoped)("div") `
  color: ${(props) => { var _a, _b; return (_b = (_a = props["aria-busy"]) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; }};
`;
const Component = (props) => {
    return react_1.default.createElement(TestA, Object.assign({}, props));
};
const TestB = (0, exports.createScoped)(Component) `
  color: ${(props) => props.color};
`;
