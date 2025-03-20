import './home.css';
import '../resource/font/importFont.css'
import { useState } from 'react';

import Notfound from './component/404fix/component';
import Deployment from './component/deployment/component';
import Commit from './component/commmit/component';

export default function Home() {
  const [generatorType, setGeneratorType] = useState('404fix')


  function handleGeneratorChange(ev) {
    setGeneratorType(ev.target.value);

  }
  return (
    <>
      <div id='title'>
        <span style={{ fontSize: '1.5rem' }}>GitHub</span><br/>
        <span style={{ fontSize: '3rem' }}>Command Generator</span>
      </div>
      <div className='maindiv' id='mainDiv-display'>
        <select id="type-selection" value={generatorType} onChange={handleGeneratorChange}>
          <option value='404fix'>404 Fix</option>
          <option value='deployment'>Deployment</option>
          <option value='commit'>Commit</option>
        </select>

        <div id='generatorRender'>
          {generatorType === '404fix' ? <Notfound /> : ''}
          {generatorType === 'deployment' ? <Deployment /> : ''}
          {generatorType === 'commit' ? <Commit /> : ''}
        </div>
      </div>
    </>
  )
}