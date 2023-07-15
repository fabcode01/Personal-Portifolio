
//ScrollReveal().reveal('#title, #info, .desc, .blue, .red',{delay: 500});
//ScrollReveal().reveal('#email',{delay: 1500});
//ScrollReveal().reveal('#contact',{delay: 2000});



document.querySelector('.github').addEventListener('click',function(){
    window.open('https://github.com/fabcode01', '_blank')
})

document.getElementById('copyBtn').addEventListener('click', function(){
    copy()
})


function copy(){
    

    navigator.clipboard.writeText('fabricio2silva8@gmail.com')
    document.getElementById('alertCopy').style.display = 'block'
    
        var interval = setInterval(function(){
        document.getElementById('alertCopy').style.display = 'none'
        clearInterval(interval)
    }, 2000)
    


}


function revealProjects(){
    
    if(document.getElementById('arrowRotate').style.transform == 'rotate(135deg)'){
        document.getElementById('arrowRotate').style.transform = 'rotate(365deg)'
        document.getElementById('TabProjects').style.display = 'none'
        document.getElementById('arrowRotate').style.color = 'red'
    } else {

    document.getElementById('arrowRotate').style.transform = 'rotate(135deg)'
    document.getElementById('arrowRotate').style.color = 'rgb(70, 70, 247)'
    document.getElementById('TabProjects').style.display = 'block'
}
   
}





document.getElementById('p1').addEventListener('mouseenter', function(){

    setTimeout(function(){
        document.querySelector('.btnAct').style.display = 'block'
    }, 100)
    
})

document.getElementById('p1').addEventListener('mouseleave', function(){
    setTimeout(function(){
        document.querySelector('.btnAct').style.display = 'none'
    }, 100)
})


document.getElementById('p2').addEventListener('mouseenter', function(){

    setTimeout(function(){
        document.querySelector('.btnAct2').style.display = 'block'
    }, 100)
    
})

document.getElementById('p2').addEventListener('mouseleave', function(){
    setTimeout(function(){
        document.querySelector('.btnAct2').style.display = 'none'
    }, 100)
})



document.getElementById('p3').addEventListener('mouseenter', function(){

    setTimeout(function(){
        document.querySelector('.btnAct3').style.display = 'block'
    }, 100)
    
})

document.getElementById('p3').addEventListener('mouseleave', function(){
    setTimeout(function(){
        document.querySelector('.btnAct3').style.display = 'none'
    }, 100)
})



function goTo(external_Link){
    window.open(external_Link, '_blank')
}
