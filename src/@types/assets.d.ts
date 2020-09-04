declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.jpeg' {
  const content: ImageSourcePropType;
  export default content;
}
