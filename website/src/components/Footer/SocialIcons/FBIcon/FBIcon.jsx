import React from 'react';
import './FBIcon.css';

const FBIcon = (props) => {
  return (
    <a href='https://www.facebook.com/mobilelookfree'>
      <svg width='40px' height='36px' viewBox='0 0 245 453' version='1.1'>
        <title>{props.title}</title>
        <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
          <g id='fb-icon' fill='#FFFFFF'>
            <path
              d='M235.774019,0.0942542368 L177.00966,0 C110.989917,0 68.3250592,43.7575294 68.3250592,111.483911 L68.3250592,162.885459 L9.24012392,162.885459 C4.13448402,162.885459 0,167.02322 0,172.127087 L0,246.602072 C0,251.705939 4.13919837,255.838988 9.24012392,255.838988 L68.3250592,255.838988 L68.3250592,443.763085 C68.3250592,448.866952 72.4595432,453 77.5651831,453 L154.654217,453 C159.759857,453 163.894341,448.862239 163.894341,443.763085 L163.894341,255.838988 L232.97841,255.838988 C238.08405,255.838988 242.218534,251.705939 242.218534,246.602072 L242.24682,172.127087 C242.24682,169.676477 241.27095,167.329547 239.540784,165.595269 C237.810618,163.860991 235.453443,162.885459 233.001982,162.885459 L163.894341,162.885459 L163.894341,119.311726 C163.894341,98.3684342 168.886836,87.7365563 196.178202,87.7365563 L235.76459,87.7224182 C240.865516,87.7224182 245,83.5846572 245,78.4855029 L245,9.33116944 C245,4.23672794 240.87023,0.10367966 235.774019,0.0942542368 Z'
              id='Path'
            />
          </g>
        </g>
      </svg>
    </a>
  );
};

export default FBIcon;
