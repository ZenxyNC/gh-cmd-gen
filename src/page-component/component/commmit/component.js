import { useState } from "react"


export default function Commit() {
  const [comments, setComments] = useState("A new deploy.");

  function copyCode(code) {
    const textToCopy = code;

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
        alert('Copied!')
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };

    handleCopy()
  }

  return (
    <>
      <textarea placeholder='Comments' onInput={(ev) => setComments(ev.target.value)}/>
      <ol>
        <li style={{ margin: '20px 0px 5px 0px' }}>Enter the following commands (click to copy).</li><br/>
        <div className='cmdline' style={{ margin: '-20px 5px 5px 5px' }} onClick={(ev) => {copyCode(`git add .`)}}>git add .</div>

        <div className='cmdline' onClick={(ev) => {copyCode(`git commit -m "${comments}`)}}>git commit -m "{comments}"</div>

        <div className='cmdline' onClick={(ev) => {copyCode(`git push origin main`)}}>git push origin main</div>

        <div className='cmdline' onClick={(ev) => {copyCode(`npm run deploy`)}}>npm run deploy</div>
      </ol>
    </>
  )
}