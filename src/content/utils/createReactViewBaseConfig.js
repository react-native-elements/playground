export default function createReactViewBaseConfig(componentName, RNComponent) {
  if (!componentName || !RNComponent) {
    throw new Error(
      "createBaseComponent needs a componentName name and RNComponent"
    );
  }

  return {
    componentName,
    scope: {
      RNComponent,
    },
    imports: {
      "react-native-elements": {
        named: [componentName],
      },
    },
  };
}
