import React from 'react';

const SectionDivider = ({ fromColor, toColor, height = 'h-20 md:h-28' }) => (
  <div
    className={`w-full ${height}`}
    style={{
      background: `linear-gradient(to bottom, ${fromColor} 0%, ${toColor} 100%)`,
    }}
    aria-hidden='true'
  />
);

export default SectionDivider;
