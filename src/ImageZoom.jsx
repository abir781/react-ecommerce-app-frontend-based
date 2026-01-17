import React from "react";
import ReactImageMagnify from "react-image-magnify";

const ImageZoom = ({src}) => {
  return (
    <div style={{ width: "500px" }} className="w-full h-full object-contain">
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Product image",
            isFluidWidth: true,
            src: src,
          },
          largeImage: {
            src: src,
            width: 1200,
            height: 1200,
          },
          enlargedImageContainerDimensions: {
            width: "150%",
            height: "100%",
          },
        }}
      />
    </div>
  );
};

export default ImageZoom;