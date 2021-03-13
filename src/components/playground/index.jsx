import * as React from "react";
import styles from "./playground.module.css";

import {
  Compiler,
  Knobs,
  Editor,
  Error,
  ActionButtons,
  Placeholder,
} from "react-view";

export default ({ params }) => {
  return (
    <React.Fragment>
      <div className={styles.playground}>
        <Compiler
          {...params.compilerProps}
          minHeight={62}
          placeholder={Placeholder}
        />
      </div>
      <Error msg={params.errorProps.msg} isPopup />
      <Knobs {...params.knobProps} />
      <Editor {...params.editorProps} />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </React.Fragment>
  );
};
