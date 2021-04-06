import React from "react";
import TextSlice from "./slices/TextSlice";
import ImageSlice from "./slices/ImageSlice";

const SliceZone = ({ slices }) => {
  const sliceComponents = {
    post_text: TextSlice,
    full_width_image: ImageSlice,
  };
  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />;
    }
    return null;
  });
};

export default SliceZone;