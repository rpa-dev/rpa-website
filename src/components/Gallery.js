import Img from 'gatsby-image';
import { chunk, sum } from 'lodash';
import React from 'react';
import { Box } from 'rebass';
import isEmpty from 'lodash/isEmpty';

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints }) => {
  const aspectRatios = images.map(image => image.aspectRatio);

  // For each breakpoint, calculate the aspect ratio sum of each row's images
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      // Split images into groups of the given size
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        // Sum aspect ratios of images in the given row
        sum(rowAspectRatios),
      ),
  );
  
  return (
    <div>
      {images.map((image, i) => (isEmpty(image) ? null :
        <Box
          key={image.src}
          title={image.caption}
          width={rowAspectRatioSumsByBreakpoints.map(
            // Return a value for each breakpoint
            (rowAspectRatioSums, j) => {
              // Find out which row the image is in and get its aspect ratio sum
              const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
              const rowAspectRatioSum = rowAspectRatioSums[rowIndex];

              return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`;
            },
          )}
          css={{ display: 'inline-block', padding: '2px 4px 0' }}
        > 
          <Img fluid={image}/>
        </Box>  
      ))}
    </div>
  );
};

export default Gallery;