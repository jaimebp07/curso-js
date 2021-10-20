let myHref = window.location.href;
let myPathname = window.location.pathname;
let myHostname = window.location.hostname;
let myProtocol = window.location.protocol;

let html = `Protocolo: <b>${myProtocol}</b><br>`;
html += `Hostname: <b>${myHostname}</b><br>`;
html += `Pathname: <b>${myPathname}</b><br>`;
html += `URL completa: <b>${myHref}</b><br>`;

document.write(html);