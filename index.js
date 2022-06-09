const getRandomEmoji = () => {
    
    const emojis = ['😀','😃','😄','😁','😆','😅']
    return emojis[~~(Math.random() * emojis.length)]

} 


function myFnc() {
    let x = Math.random() * 100 ;
    let y = Math.round(x) ;
    document.getElementById("age").innerHTML = y  + getRandomEmoji() ;
}