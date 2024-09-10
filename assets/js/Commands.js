class CommandInterpreter{constructor(){this.commands=new Map()
this.commandHistory=[]
this.commands.set("help",()=>{console.log('test');return `Commandos "neofetch" "date" "uname" "dev" "echo" "pwd" "whoami" "history"`})
this.commands.set("neofetch",()=>{return `
        <pre>
          <span style="color: #33aadd;">                 
            -mddhhhhhhhhhddmss              Dev@EmanuelReyes
        ./mdhhhhhhhhhhhhhhhhhhhhhh.         ------------ 
      :mdhhhhhhhhhhhhhhhhhhhhhhhhhhhm       OS: Lubuntu 22.04.4 LTS x86_64
    :ymhhhhhhhhhhhhhhhyyyyyyhhhhhhhhhy:     Host: X5EA 6.0    
   odhyyyhhhhhhhhhy+- ''' ./syhhhhhhhho     Kernel: 6.8.0-40-genex
  hhy..:oyhhhhhhhy  :osso/..:/++oosyyyh     Uptime: 100 hrs 
 dhhs   .-/syhhhhs shhhhhhyyyyyyyyyyyyhs    Packages: 2562 (dpkg), 128 (snap)
:hhhy  yso/:+syhy/yhhhhhshhhhhhhhhhhhhh:    Shell: bash 5.1.16 
hhhhho. +hhhys++oyyyhhhhh-yhhhhhhhhhhhhhs   Resolution: 1366x768 
hhhhhhs- /syhhhhyssyyhhhh:-yhhhhhhhhhhhhh   DE: LXQt 0.17.1 
hhhhhhs  :/+ossyyhyyhhhhs -yhhhhhhhhhhhh    WM: Openbox 
hhhhhhy/ syyyssyyyyhhhhhh: :yhhhhhhhhhhs    Theme: Arc-Dark [GTK2], Adwaita-dark [GTK3] 
:hhhhhhyo:-/osyhhhhhhhhhhho  ohhhhhhhhhh:   Icons: ePapirus [GTK2/3] 
 sdhhhhhhhyyssyyhhhhhhhhhhh+  +hhhhhhhhs    Terminal: Alacraty 
 shhhhhhhhhhhhhhhhhhhhhhy+ .yhhhhhhhh       Terminal Font: Ubuntu Mono 12 
  +sdhhhhhhhhhhhhhhhhhyo/. /yhhhhhhhd       CPU: AMD A4-5100 APU (4) @ 2.550GHz 
    :shhhhhhhhhh+---...:+yyhhhhhhh:         GPU: AMD ATI Radeon HD 8330 
     :mdhhhhhh/.syssyyyyhhhhhhhd:           Memory: 3375MiB / 16396MiB 
        +smdhhh+shhhhhhhhhhhhdm
           sNmdddhhhhhhhddm-           
        </pre>
      `});this.commands.set("echo",(args)=>{return args.join(' ')})
this.commands.set("whoami",()=>{return"EmanuelReyes"})
this.commands.set("pwd",()=>{return"/home/EmanuelReyes"})
this.commands.set("history",()=>{return this.getHistory().map((command,index)=>`${index + 1} ${command}`).join('<br>')})
this.commands.set("date",()=>{return new Date().toString()});this.commands.set("uname",()=>{return"Linux EmanuelReyes-PC 5.8.0-59-genex"});this.commands.set("dev",()=>{const devs=["Un gran programador conlleva aun gran código","Quien no tenga miedo hacer un DELEATE sin WHERE FROM que no nazca","Si la vida te da codigo haz un proyecto","Que las buenas practicas te acompañen, siempre","No hay lugar como el 127.0.0.1. / println","Un bug no es un error, es una característica no documentada.","No hay bug que por refactorización no venga.",];return devs[Math.floor(Math.random()*devs.length)]});this.commands.set("clear",()=>{return""})}
executeCommand(commandName,args){if(!commandName)return
this.addToHistory(commandName,args)
const commandFunction=this.commands.get(commandName)
if(commandFunction){return commandFunction(args)}else{return `Command not found: ${commandName}`}}
addToHistory(commandName,args){if(args)this.commandHistory.push(`${commandName} ${args.join(' ')}`)
else this.commandHistory.push(commandName)}
getHistory(){return this.commandHistory}}