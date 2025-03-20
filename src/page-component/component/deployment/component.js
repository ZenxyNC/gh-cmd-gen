import { useState } from 'react'
import './style.css'

export default function Deployment() {
  const [ghName, setGhName] = useState('zentech');
  const [repoName, setRepoName] = useState('ZenProject');
  const [comments, setComments] = useState('First deploy.')

  function copyCode(code) {
    const textToCopy = code;

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
        alert("Copied!");
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };

    handleCopy()
  }

  return (
    <>
      <input type='text' placeholder='GitHub username' onInput={(ev) => setGhName(ev.target.value)} /><br/>
      <input type='text' placeholder='Repository name' onInput={(ev) => setRepoName(ev.target.value)} /><br/>
      <textarea placeholder='Comments' onInput={(ev) => setComments(ev.target.value)}/>
      <ol>
        <li>Create the repository in GitHub</li>
        <li style={{ margin: '0px 0px 5px 0px' }}>Enter the following commands (click to copy).</li><br/>
        <div className='cmdline' style={{ margin: '-20px 5px 5px 5px' }} onClick={(ev) => {copyCode("git init")}}>git init</div>

        <div className='cmdline' onClick={(ev) => copyCode(`git commit -m "${comments}"`)}>git commit -m "{comments}"</div>

        <div className='cmdline' onClick={(ev) => {copyCode("git branch -M main")}}>git branch -M main</div>

        <div className='cmdline' onClick={(ev) => {copyCode(`git remote add origin git@github.com:${ghName}/${repoName}.git`)}}>git remote add origin git@github.com:{ghName}/{repoName}.git</div>

        <div className='cmdline' onClick={(ev) => {copyCode("git push -u origin main")}}>git push -u origin main</div>

        <div className='cmdline' onClick={(ev) => {copyCode("npm install gh-pages --save-dev")}}>npm install gh-pages --save-dev</div>


        <li style={{ margin: '20px 0px 5px 0px' }}>Add the following properties in <span className='important'>package.json</span>.</li><br/>
        <div className='properties' style={{ margin: '-20px 5px 5px 5px' }} onClick={(ev) => {copyCode(`"homepage": "https://${ghName}.github.io/${repoName}/",`)}}>"homepage": "https://{ghName}.github.io/{repoName}/",</div>

        <div className='properties' onClick={(ev) => {copyCode(`"predeploy": "npm run build",`)}}>"predeploy": "npm run build",</div>

        <div className='properties' onClick={(ev) => {copyCode(`"deploy": "gh-pages -d build",`)}}>"deploy": "gh-pages -d build",</div>


        <li style={{ margin: '20px 0px 5px 0px' }}>Enter the following commands (click to copy).</li><br/>
        <div className='cmdline' style={{ margin: '-20px 5px 5px 5px' }} onClick={(ev) => {copyCode(`git add .`)}}>git add .</div>

        <div className='cmdline' onClick={(ev) => {copyCode(`git commit -m "${comments}"`)}}>git commit -m "{comments}"</div>

        <div className='cmdline' onClick={(ev) => {copyCode(`git push`)}}>git push</div>

        <div className='cmdline' onClick={(ev) => {copyCode(`npm run deploy`)}}>npm run deploy</div>
      </ol>
    </>
  )
}

