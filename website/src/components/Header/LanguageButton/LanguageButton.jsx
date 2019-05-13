import React from 'react';
import './LanguageButton.css';

const LanguageButton = (props) => {
  return (
    <a
      className='language-button'
      title={props.text.languageSwitcherTitle}
      onClick={props.openLanguageSwitcher}
    >{props.text.languageHint}
    <div className="separator" />
      <svg width='22' height='20'>
        <path
          id='language-icon'
          fill='#FFF'
          fill-rule='evenodd'
          d='M11.87 13.07l-2.54-2.51.03-.03A17.52 17.52 0 0 0 13.07 4H16V2H9V0H7v2H0v2h11.17C10.5 5.92 9.44 7.75 8 9.35 7.07 8.32 6.3 7.19 5.69 6h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L3 17l5-5 3.11 3.11.76-2.04zM17.5 8h-2L11 20h2l1.12-3h4.75L20 20h2L17.5 8zm-2.62 7l1.62-4.33L18.12 15h-3.24z'
        />
      </svg>
    </a>
  );
};

export default LanguageButton;
