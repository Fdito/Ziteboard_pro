window.addEventListener('DOMcontentloaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

setInterval(() => {
    localStorage.setItem('licenses',generatelicense());
    localStorage.setItem('made/with','false');
    localStorage.setItem('option/display/penpanel','true');
    localStorage.setItem('option/display/eraser','true');
    localStorage.setItem('option/display/insert','true');
    localStorage.setItem('option/display/select','true');
    localStorage.setItem('option/display/pen','true');
    localStorage.setItem('option/display/insert','true');
    localStorage.setItem('option/display/sticky','true');
    localStorage.setItem('option/display/redo','true');
    localStorage.setItem('option/display/undo','true');
    document.getElementById('zbmath').style.top = '0px'
    document.getElementById('zbmath').style.right = '256px'
    document.getElementById('zbsticky').style.top = '0px'
    document.getElementById('zbsticky').style.right = '320px'
    document.getElementById('zbinserticon').style.top = '0px'
    document.getElementById('zbinserticon').style.right = '384px'
    document.getElementById('zberasericon').style.top = '0px'
    document.getElementById('zberasericon').style.right = '448px'
    document.getElementById('zbpenicon').style.top = '0px'
    document.getElementById('zbpenicon').style.right = '512px';

}, 1)


setTimeout(() => {
    document.querySelector("#zitelayerBoardAlert > div > div.zitebody > div:nth-child(6) > label:nth-child(3) > input[type=radio]").disabled = false
    document.querySelector("#zitelayerBoardAlert > div > div.zitebody > div:nth-child(6) > label:nth-child(3) > input[type=radio]").style.opacity = 1
    document.querySelector("#zitelayerBoardAlert > div > div.zitebody > div:nth-child(6) > label:nth-child(3) > span.radiocircle").style.opacity = 1
    document.querySelector("#zitelayerBoardAlert > div > div.zitebody > div:nth-child(6) > label:nth-child(3) > span:nth-child(3)").style.opacity = 1
    document.querySelector("#zitelayerBurgerMenu > div > div.burgerbody > div:nth-child(12)").display = 'none';
    document.querySelector("#zitelayerImport > div > div.zitebody > div:nth-child(13)").display = 'none';
    document.querySelector("#zitelayerBurgerMenu > div > div.burgerbody > div:nth-child(9)").addEventListener('click', removee)
}, 50);

function removee(){
    document.querySelector("#zbradio4 > span").remove()
}

function generatelicense(){
    var email = JSON.parse(localStorage.getItem('me/profile')).email
    var name = JSON.parse(localStorage.getItem('me/profile')).name
    var license = btoa('{"zb/pro":{"name":"' + name + '","email":"' + email + '","expiry":' + Math.floor(Math.random()*9999999999999+100000000000) + '}}')
    return license
}