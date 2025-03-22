import './home.css';
import '../resource/font/importFont.css'
import { useState } from 'react';

import Notfound from './component/404fix/component';
import Deployment from './component/deployment/component';
import Commit from './component/commit/component';

import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';

export default function Home() {
  const [generatorType, setGeneratorType] = useState('404fix');
  const [open, setOpen] = useState(false)


  function handleGeneratorChange(ev) {
    setGeneratorType(ev.target.value);

  }
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
        open={open}
        autoHideDuration={2000}
        message="Copied!"
        onClose={() => setOpen(false)}
        slots={{ transition: Slide }}
      />
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
          {generatorType === 'deployment' ? <Deployment userCopied={() => setOpen(!open)}/> : ''}
          {generatorType === 'commit' ? <Commit userCopied={() => setOpen(!open)} /> : ''}
        </div>
      </div>
    </>
  )
}