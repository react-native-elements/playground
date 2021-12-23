import * as React from "react";
import { AirbnbRating } from "react-native-elements";
import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";

const AirbnbRatingPlayground = () => {
  const params = useView({
    componentName: "AirbnbRating",
    props: {
      count: {
        type: PropTypes.Number,
        value: 5,
      },
      defaultRating: {
        type: PropTypes.Number,
        value: 1,
      },
      reviews: {
        type: PropTypes.Array,
        value: `["Terrible", "Bad", "Okay", "Good", "Great"]`,
      },

      onFinishRating: {
        type: PropTypes.Function,
        value: `() => console.log("onFinishRating()")`,
      },

      showRating: {
        type: PropTypes.Boolean,
        value: true,
      },
    },
    scope: {
      AirbnbRating,
    },
    imports: {
      "react-native-elements": {
        named: ["AirbnbRating"],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default AirbnbRatingPlayground;
