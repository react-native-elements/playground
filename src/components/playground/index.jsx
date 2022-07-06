import * as React from "react";

import {
  Compiler,
  Knobs,
  Editor,
  Error,
  ActionButtons,
  Placeholder,
} from "react-view";

export default ({ params, containerStyle = {} }) => {
  return (
    <React.Fragment>
      <div
        style={{
          border: "1px dashed #ccc",
          position: "relative",
          ...containerStyle,
        }}
      >
        <Compiler
          {...params.compilerProps}
          minHeight={62}
          placeholder={Placeholder}
        />
      </div>
      <Knobs {...params.knobProps} />
      <Error msg={params.errorProps.msg} />
      <Editor {...params.editorProps} />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </React.Fragment>
  );
};
