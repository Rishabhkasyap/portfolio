// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  // Destructure position and size with default values
<<<<<<< HEAD
  const { top, left } = position
  const { width, height } = size 
=======
  const { top, left } = position;
  const { width, height } = size;
>>>>>>> 120b535 (re design portfolio)

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
<<<<<<< HEAD
        className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"
=======
        className="h-full w-full animate-blob rounded-full bg-gold opacity-[0.15] blur-3xl motion-reduce:animate-none"
>>>>>>> 120b535 (re design portfolio)
      ></div>
    </div>
  );
};

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

<<<<<<< HEAD
export default BlurBlob;
=======
export default BlurBlob;
>>>>>>> 120b535 (re design portfolio)
