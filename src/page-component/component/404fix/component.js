import './style.css'

export default function Notfound() {

  function userHref(path) {
    window.open(path, '_blank')
  }

  return (
    <>
      <ol>
        <li>Copy content of <span className='important'>404.html</span> in <span className='href' onClick={() => userHref('https://github.com/rafgraph/spa-github-pages/blob/gh-pages/404.html')}>spa-github-pages</span>.</li>
        <li>Create <span className='important'>404.html</span> in /public/ on your project, then paste.</li>
        <li>Change the <span className='important'>pathSegmentsToKeep</span> value to 1.</li>
        <li>Copy <span className='important'>script (SCRPT ONLY)</span> of <span className='important'>index.html</span> in <span className='href' onClick={() => userHref('https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html')}>spa-github-pages</span>.</li>
        <li>Paste the script to <span className='important'>/public/index.html</span> in your project.</li>
        <li>In <span className='important'>App.js</span>, add <span className='important'>basename="/project_name"</span> in Router tag.</li>
      </ol>
    </>
  )
}