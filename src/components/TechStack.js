import React from 'react';
import techStack from '../assets/imgExport';

import './TechStack.css';

function TechStack() {
  const { logoAxios, logoCss, logoJavascript, logoHtml, logoRedux, logoReact, logoReactRouter } = techStack;

  return (
    <div className='techstack-container'>
      <div className='img-container'>
        <img src={logoReact} alt='logoReact' className='logoReact' />
        <p className='tech-stack-text'>React</p>
      </div>
      <div className='img-container'>
        <img src={logoHtml} alt='logoHtml' className='logoHtml' />
        <p className='tech-stack-text'>HTML</p>
      </div>
      <div className='img-container'>
        <img src={logoCss} alt='logoCss' className='logoCss' />
        <p className='tech-stack-text'>CSS</p>
      </div>
      <div className='img-container'>
        <img src={logoJavascript} alt='logoJavascript' className='logoJavascript' />
        <p className='tech-stack-text'>JavaScript</p>
      </div>
      <div className='img-container'>
        <img src={logoRedux} alt='logoRedux' className='logoRedux' />
      </div>
      <div className='img-container'>
        <img src={logoReactRouter} alt='logoReactRouter' className='logoReactRouter' />
      </div>
      <div className='img-container'>
        {' '}
        <img src={logoAxios} alt='logoAxios' className='logoAxios' />
        <p className='tech-stack-text'>Axios</p>
      </div>
    </div>
  );
}

export default TechStack;
