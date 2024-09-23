function load(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hour = data.getHours()
    msg.innerHTML = `The current hour is ${hour}`
    if (hour >= 0 && hour < 12) {
    // Bom dia
        img.src= 'pexelsmanha.png'
        document.body.style.background = '#E6B698'
    } else if (hour >= 12 && hour < 18) {
        //Boa tarde
        img.src= 'pexelstarde.png'
        document.body.style.background = '#ED7709'
    }   else {
        img.src= 'pexelsnoite.png'
        document.body.style.background = '#0A3E80'
        // Boa noite!
    }

}