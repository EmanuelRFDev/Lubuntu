class TerminalView{constructor($history,$input,indicator={username:"Emanuel-Reyes",servername:"em",}){this.$history=$history;this.$input=$input;this.indicatorTerminal=`
    <div class="indicator">
      <span class="username">${indicator.username}</span>
      <span class="at-symbol">@</span>
      <span class="hostname">${indicator.servername}</span>
      <span class="colon">:</span>
      <span class="current-directory">~</span>
      <span class="prompt-symbol">$</span>
    </div>
    `}
render(){const $divContainer=document.createElement('div');$divContainer.classList.add('line');$divContainer.innerHTML=this.indicatorTerminal;const $inputFormElement=document.createElement('input');$inputFormElement.name="text";$inputFormElement.autocapitalize="off";$inputFormElement.autocomplete="off";$inputFormElement.autofocus="true";$divContainer.appendChild($inputFormElement);this.$input.appendChild($divContainer)}
addToHistory(textCommand){const $divContainer=document.createElement('div');$divContainer.classList.add('line');$divContainer.innerHTML=this.indicatorTerminal;const $spanCommand=document.createElement('span');$spanCommand.textContent=textCommand;$divContainer.appendChild($spanCommand);this.$history.append($divContainer);this.moveScrollToBottom()}
addToOutput(res){const $divContainer=document.createElement('div');$divContainer.classList.add('line');const $spanCommand=document.createElement('span');$spanCommand.textContent=res;$divContainer.appendChild($spanCommand);this.$history.append($divContainer);this.moveScrollToBottom()}
addToOutputWithHTMLString(htmlString){if(htmlString.trim()==="")return;const $divContainer=document.createElement('div');$divContainer.classList.add('line');$divContainer.innerHTML=htmlString;this.$history.append($divContainer);this.moveScrollToBottom()}
clearTerminal(){this.$history.innerHTML='';this.render()}
moveScrollToBottom(){this.$history.parentElement.scrollTop=this.$history.scrollHeight}}
const $terminal=document.querySelector('#terminal')
const $history=$terminal.querySelector('.history')
const $input=$terminal.querySelector('.input')
const terminalView=new TerminalView($history,$input,{username:"Dev",servername:"EmanuelReyes"})
terminalView.render()
const commandInterpreter=new CommandInterpreter()
$terminal.addEventListener('submit',(event)=>{event.preventDefault();const formData=new FormData(event.target);const text=formData.get('text');const[textCommand,...args]=text.trim().split(' ');terminalView.addToHistory(text);const res=commandInterpreter.executeCommand(textCommand,args);if(textCommand==="clear"){terminalView.clearTerminal()}else if(res){terminalView.addToOutputWithHTMLString(res)}
event.target.reset()});let historyIndex=null
let inputSaved=null
$terminal.addEventListener('keyup',(event)=>{const $inputText=$terminal.querySelector('input')
let history=commandInterpreter.getHistory()
if(event.key!=="ArrowUp"&&event.key!=="ArrowDown"){historyIndex=history.length
inputSaved=$inputText.value
return}
if(event.key==="ArrowUp")
historyIndex=Math.max(historyIndex-1,0)
if(event.key==="ArrowDown")
historyIndex=Math.min(historyIndex+1,history.length)
if(historyIndex===history.length){$inputText.value=inputSaved}else{$inputText.value=history[historyIndex]}})
$terminal.addEventListener('click',()=>{const $inputText=$terminal.querySelector('input')
$inputText.focus()})