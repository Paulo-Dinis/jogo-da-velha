var  batata = 1
var fim = false;


function selectcasa(casa, bola, x){

    let y = document.getElementById(x)
    let o = document.getElementById(bola)
    let c = document.getElementById(casa) 
    let playx = document.getElementById('playx')
    let playo = document.getElementById('playo')
    
    if(fim == false){
        if(y.style.display == '' && o.style.display == ''){
            if(batata == 1){
                y.style.display = 'block'
                c.value = 1
                playo.style.display = 'block'
                playx.style.display = ''
                batata = 2
            }else if(batata ==2){
                o.style.display = 'block'
                c.value = 2
                playx.style.display = 'block'
                playo.style.display = ''
                batata =1
            } 
        } 
    }  
endgame() 
}

function endgame(){
    var c1 = Number(document.getElementById('casa1').value)
    var c2 = Number(document.getElementById('casa2').value)
    var c3 = Number(document.getElementById('casa3').value)
    var c4 = Number(document.getElementById('casa4').value)
    var c5 = Number(document.getElementById('casa5').value)
    var c6 = Number(document.getElementById('casa6').value)
    var c7 = Number(document.getElementById('casa7').value)
    var c8 = Number(document.getElementById('casa8').value)
    var c9 = Number(document.getElementById('casa9').value)

    var ehc = document.getElementById('endgamehorizon')
    var ehm = document.getElementById('endgamehorizon2')
    var ehb = document.getElementById('endgamehorizon3')
    var evm1 = document.getElementById('endgamevert') 
    var evm2 = document.getElementById('endgamevert2')
    var evm3 = document.getElementById('endgamevert3')
    var egd1 = document.getElementById('endgamediag')
    var egd2 = document.getElementById('endgamediag2')
    var win = document.getElementById('win')
    let playx = document.getElementById('playx')
    let playo = document.getElementById('playo')
    let res = document.getElementById('reset')
    
    

    var somacima = c1 + c2 + c3
    var somameio = c4 + c5 + c6
    var somabaixo = c7 + c8 + c9
    
    var somavert1 = c1 + c4 + c7
    var somavert2 = c2 + c5 + c8
    var somavert3 = c3 + c6 + c9

    var diag1 = c1 + c5 + c9
    var diag2 = c3 + c5 + c7
    var velha = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9

    let winx = document.getElementById('playx')
    let wino = document.getElementById('playo')

    if(somacima == 6 || somacima == 3){
        ehc.style.display = 'block'
        win.style.display = 'block'
        res.style.display = 'block'
        fim = true
        
        if(somacima == 3){
            playx.style.display = 'block'
            playo.style.display = ''
            res.style.display = 'block'
        }
        if(somacima == 6){
            playo.style.display = 'block'
            playx.style.display = ''
        }
    }
    if(somameio == 6 || somameio == 3){
        ehm.style.display = 'block'
        win.style.display = 'block'
        res.style.display = 'block'
        if(somameio == 3){
            playx.style.display = 'block'
            playo.style.display = ''
        }
        if(somameio == 6){
            playo.style.display = 'block'
            playx.style.display = ''
        }
    }
    if(somabaixo == 6 || somabaixo == 3){
        ehb.style.display = 'block'
        win.style.display = 'block'
        res.style.display = 'block'
        if(somabaixo == 3){
            playx.style.display = 'block'
            playo.style.display = ''
        }
        if(somabaixo == 6){
            playo.style.display = 'block'
            playx.style.display = ''
        }
    }

    if(somavert1 == 6 || somavert1 == 3){
        evm1.style.display = 'block'
        win.style.display = 'block'
        res.style.display = 'block'
        if(somavert1 == 3){
            playx.style.display = 'block'
            playo.style.display = ''
        }
        if(somavert1 == 6){
            playo.style.display = 'block'
            playx.style.display = ''
        }
    }

    if(somavert2 == 6 || somavert2 == 3){
        evm2.style.display = 'block'
        win.style.display = 'block'
        res.style.display = 'block'
        if(somavert2 == 3){
            playx.style.display = 'block'
            playo.style.display = ''
        }
        if(somavert2 == 6){
            playo.style.display = 'block'
            playx.style.display = ''
        }
    }

    if(somavert3 == 6 || somavert3 == 3){
        evm3.style.display = 'block'
        win.style.display = 'block'
        res.style.display = 'block'
        if(somavert3 == 3){
            playx.style.display = 'block'
            playo.style.display = ''
        }
        if(somavert3 == 6){
            playo.style.display = 'block'
            playx.style.display = ''
        }
    }

    if(diag1 == 6 || diag1 == 3){
        egd1.style.display = 'block'
        win.style.display = 'block'
        res.style.display = 'block'
        if(diag1 == 3){
            playx.style.display = 'block'
            playo.style.display = ''
        }
        if(diag1 == 6){
            playo.style.display = 'block'
            playx.style.display = ''
        }
    }

    if(diag2 == 6 || diag2 == 3){
        egd2.style.display = 'block'
        win.style.display = 'block'
        res.style.display = 'block'
        if(diag2 == 3){
            playx.style.display = 'block'
            playo.style.display = ''
        }
        if(diag2 == 6){
            playo.style.display = 'block'
            playx.style.display = ''
        }    
    }   
    if(velha == 13){
        res.style.display = 'block'
    }
}


