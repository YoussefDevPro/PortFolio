document.getElementById('input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const inputText = event.target.value.trim();
        const output = document.getElementById('output');
        
        // Add a newline before the input command to start it on a new line
        output.innerHTML += `\n> ${inputText}\n`; 
        
        if (inputText === 'neofetch') {
            output.innerHTML += `
Troll Face OS v1.0

⠀⠀⠀⠀⠀⢀⣤⠖⠒⠒⠒⢒⡒⠒⠒⠒⠒⠒⠲⠦⠤⢤⣤⣄⣀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⠟⠀⢀⠠⣐⢭⡐⠂⠬⠭⡁⠐⠒⠀⠀⣀⣒⣒⠐⠈⠙⢦⠀⠀⠀
⠀⠀⠀⣰⠏⠀⠐⠡⠪⠂⣁⣀⣀⣀⡀⠰⠀⠀⠀⢨⠂⠀⠀⠈⢢⠀⠀⢹⠀⠀
⠀⣠⣾⠿⠤⣤⡀⠤⡢⡾⠿⠿⠿⣬⣉⣷⠀⠀⢀⣨⣶⣾⡿⠿⠆⠤⠤⠌⡳⣄
⣰⢫⢁⡾⠋⢹⡙⠓⠦⠤⠴⠛⠀⠀⠈⠁⠀⠀⠀⢹⡀⠀⢠⣄⣤⢶⠲⠍⡎⣾
⢿⠸⠸⡇⠶⢿⡙⠳⢦⣄⣀⠐⠒⠚⣞⢛⣀⡀⠀⠀⢹⣶⢄⡀⠀⣸⡄⠠⣃⣿
⠈⢷⣕⠋⠀⠘⢿⡶⣤⣧⡉⠙⠓⣶⠿⣬⣀⣀⣐⡶⠋⣀⣀⣬⢾⢻⣿⠀⣼⠃
⠀⠀⠙⣦⠀⠀⠈⠳⣄⡟⠛⠿⣶⣯⣤⣀⣀⣏⣉⣙⣏⣉⣸⣧⣼⣾⣿⠀⡇⠀
⠀⠀⠀⠘⢧⡀⠀⠀⠈⠳⣄⡀⣸⠃⠉⠙⢻⠻⠿⢿⡿⢿⡿⢿⢿⣿⡟⠀⣧⠀
⠀⠀⠀⠀⠀⠙⢦⣐⠤⣒⠄⣉⠓⠶⠤⣤⣼⣀⣀⣼⣀⣼⣥⠿⠾⠛⠁⠀⢿⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠦⣭⣐⠉⠴⢂⡤⠀⠐⠀⠒⠒⢀⡀⠀⠄⠁⡠⠀⢸⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⢤⣀⣀⠉⠁⠀⠀⠀⠒⠒⠒⠉⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠲⠦⠤⠤⠤⠤⠴⠞⠋⠀⠀⠀

the most advanced trolix distro ever created in the world
            `;
        } else if (inputText === 'grizzy') {
            const img = document.createElement('img');
            img.src = 'static/gizzy.png'; // Replace with your image URL
            img.style.width = '300px';
            img.style.marginTop = '10px';
            output.appendChild(img); // Append the image without removing the previous content
        } else if (inputText === 'kabir') {
            const sound = document.getElementById('kabir-sound');
            sound.play();
            output.innerHTML += '\nKabir sound playing...';
        } else if (inputText === 'real neofetch') {
            output.innerHTML += `
⡀⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⣀⣀⠀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⡀⠀⠀⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣛⣿⣿⣷⣿⣿⣯⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣏⠉⣿⠉⢹⠟⢉⠉⢻⣿⠉⢻⠋⠙⡏⣿⠋⢻⡏⠉⣿⠉⣉⣻⠀
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣻⡀⠈⢀⣿⠀⢸⠀⠀⣿⠀⢸⠀⠰⣿⣿⠀⢸⠁⢀⡟⠀⢹⣿⠀
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡿⠿⠿⢿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⣼⣿⠀⢸⡀⠀⣏⠀⢸⠀⠀⣿⣿⡄⠘⠀⢸⡇⠀⢰⣾⠀
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⠋⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠈⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣀⣿⣿⣆⡈⢁⣰⣿⣄⠘⢀⣼⣿⣿⣇⣀⣀⣼⣧⣀⣈⣹⡇
⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⣿⣿⣿⣿⣿⣿⠟⠿⢿⣿⠿⠛⠛⠻⠿⠿⠻⠛⠉⠉⠉⠀
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣧⣄⠀⠀⠀⠀⠀⠀⣴⠶⡶⠿⣿⣿⠿⠿⢿⡿⠿⠿⣿⠿⢿⡿⢿⡿⠀⠀⠀⠀⠀⠀⠀
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣿⠀⠀⢨⣭⣽⣿⡇⠀⢠⣾⣿⣿⣷⣆⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⣿⠀⢱⡆⠈⣿⠀⢴⣾⡇⠀⣶⣿⠀⠘⡇⠀⡇⠀⠀⠀⠀⠀⠀⠀
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⠉⠛⠀⠀⠀⠀⠉⠁⠀⠀⠘⡏⠉⠉⠛⠋⠀⣠⣼⣿⠀⠀⠀⠀⠀⠀⣿⠀⢨⡁⠺⣿⠀⣈⣹⡇⠀⣉⣿⠀⡀⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⢹⡄⠀⠀⠀⠀⣿⣿⡿⠀⠀⠀⠀⠀⠀⣿⠀⠸⠇⠀⣿⠀⠹⢿⡇⠀⠿⢿⠀⢸⡀⠀⡇⠀⠀⠀⠀⠀⠀⠀
⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢷⣄⡀⠀⢠⡾⠋⠀⠛⢶⣶⣾⡇⠀⣠⠄⢰⣿⠟⠀⠀⠀⠀⠀⠀⠀⠻⢶⣶⡶⠚⠓⠶⠶⠾⠷⠶⠶⠾⠶⠾⠳⠾⠟⠀⠀⠀⠀⠀⠀⠀
⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣹⡷⣠⠏⠙⢷⣶⠲⠶⠶⣷⣶⡿⠋⢀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣹⣧⡀⢀⠀⠀⣀⣀⣀⡀⢀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⣫⣽⠃⠀⠀⠀⠉⠉⠙⠛⠋⠀⠀⢀⣾⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠉⢉⡉⠻⡏⠉⣿⠟⢉⡉⠙⣿⠉⢹⡏⢉⡿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠛⠁⠀⣼⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⡏⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠸⠇⣰⡇⠀⣿⠀⢸⣧⣀⣿⠀⠈⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⠏⠀⠀⠀⢸⣿⣿⡀⠀⠀⠰⣦⣄⡀⣀⣤⡾⣿⣿⣧⠀⠻⢦⣄⡀⠀⠀⠀⠀⠀⣿⠀⢸⠀⠈⡇⠀⣿⠀⢸⡟⠛⣿⠀⢠⠀⢹⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⠁⠀⠀⠀⠀⣾⣿⣿⣷⣄⡀⠀⠙⠿⣿⣏⣽⣿⣿⣿⣿⠄⢸⣧⠈⠙⠶⣤⣀⠀⠀⣿⣀⣸⣄⣠⣷⣀⣿⣦⣀⣁⣠⣿⣀⣸⣧⣀⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⠀⠀⠹⣆⠀⠀⠀⠉⠳⣦⡀⠉⠉⠙⠻⣿⠉⠁⠀⠉⠉⠀⠀⠈⠉⠀⠉⠹⠇⠀⠀⠀⠀⠀⠀
⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⢿⡆⠀⠀⠀⠀⠻⣿⠓⠒⠲⢦⣹⠷⠒⠲⣶⡖⠒⣶⣶⠒⢶⣾⠗⠒⠲⡶⠒⡖⠶⣄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⡞⣿⠀⠀⠀⠀⠀⢹⠀⢹⡀⢈⡏⠀⣿⠀⢸⡇⠀⣿⡟⠀⢸⣿⠀⢸⣶⡇⠀⢳⠀⢸
⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⢀⣰⠃⢹⡆⠀⠀⠀⠀⢸⠀⢠⠀⠛⡇⠀⣿⠀⢸⡇⠀⣿⡇⠀⢸⣿⠀⢠⣬⡇⠀⢸⠀⢸
⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⠋⠉⠀⠺⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠶⠞⠋⠀⠀⠀⢿⠀⠀⠀⠀⣸⠀⢸⠀⢰⣧⠀⠛⠀⣸⡇⠀⠛⣧⠀⠘⢻⠀⠘⠛⡇⠀⠚⠀⢸
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠆⠀⠀⠀⠿⠓⠛⠓⠛⠉⠙⠒⠚⠉⠛⣛⡚⠛⠛⠛⠛⠛⠓⡚⠛⠛⠓⠛⠉
            `;
        } else if (inputText === 'ls') {
            output.innerHTML += `
Desktop  Documents  Downloads  Music  Pictures  Public  Videos
            `;
        } else if (inputText === 'pwd') {
            output.innerHTML += `
/home/user
            `;
        } else if (inputText === 'cat /etc/os-release') {
            output.innerHTML += `
NAME="Troll Face OS"
VERSION="1.0"
ID=trollface
PRETTY_NAME="Troll Face OS v1.0"
            `;
        } else if (inputText === 'man ls') {
            output.innerHTML += `
LS(1)                   User Commands                   LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List information about the FILEs (the current directory by default).
       ...
            `;
        } else if (inputText === 'date') {
            const date = new Date().toLocaleString();
            output.innerHTML += `\n${date}`;
        } else if (inputText === 'echo hello') {
            output.innerHTML += `\nHello, user! 👋`;
        } else if (inputText === 'sudo') {
            output.innerHTML += `\nSudo command requires superuser privileges. Try running as root.`;
        } else if (inputText === 'clear') {
            output.innerHTML = ''; // Clears the terminal output
        } else if (inputText === 'uptime') {
            const uptime = Math.floor(Math.random() * 1000); // Fake uptime for fun
            output.innerHTML += `\nUptime: ${uptime} days`;
        } else if (inputText === 'shutdown') {
            output.innerHTML += `\nShutting down... 😴`;
        } else if (inputText === 'help') {
            output.innerHTML += `
Available Commands:
- neofetch      Show system info (Troll Face OS)
- grizzy        Display an image of Grizzy
- kabir         Play a sound
- rickroll      Rickroll with YouTube video
- ls            List directory contents
- pwd           Show current directory path
- cat /etc/os-release  Show OS details
- man ls        Manual for 'ls' command
- date          Show current date and time
- echo hello    Greet the user
- sudo          Display a message about sudo privileges
- clear         Clear the terminal output
- uptime        Show fake system uptime
- shutdown      Simulate shutting down the system
            `;
        } else {
            output.innerHTML += `\nCommand not found: ${inputText}`;
        }

        // Clear the input field after each command
        event.target.value = '';
        
        // Scroll to the bottom to show the latest output
        output.scrollTop = output.scrollHeight;
    }
});
