import React from 'react';
import './DiscordBotsIcon.css';

const DiscordBotsIcon = (props) => {
  return (
    <a href='https://discordbots.org/bot/527857521520803841'>
      <svg width='50' height='36' viewBox='0 0 30 37'>
        <title>{props.title}</title>
        <g id='discord-bots-icon' fill='#FFF' fill-rule='evenodd'>
          <path d='M22.01 7.886V5.452c.97-.511 1.478-1.46 1.478-2.531C23.488 1.314 22.18 0 20.581 0c-1.598 0-2.906 1.314-2.906 2.92 0 1.071.46 1.996 1.429 2.507v2.459h-8.72V5.427a2.927 2.927 0 0 0 1.43-2.506C11.813 1.314 10.504 0 8.906 0 7.308 0 6 1.314 6 2.92a2.9 2.9 0 0 0 1.478 2.532v2.434H22.01z' />
          <path
            fill-rule='nonzero'
            d='M26.389 10c1.944 0 3.518 1.563 3.611 3.401V37l-3.611-3.86H3.519C1.574 33.14 0 31.668 0 29.737V13.401C0 11.563 1.574 10 3.519 10h22.87zM11.5 18h-3c-.825 0-1.5.675-1.5 1.5v3c0 .825.675 1.5 1.5 1.5h3c.825 0 1.5-.675 1.5-1.5v-3c0-.825-.675-1.5-1.5-1.5zm10 0h-3c-.825 0-1.5.675-1.5 1.5v3c0 .825.675 1.5 1.5 1.5h3c.825 0 1.5-.675 1.5-1.5v-3c0-.825-.675-1.5-1.5-1.5z'
          />
        </g>
      </svg>
    </a>
  );
};

export default DiscordBotsIcon;
