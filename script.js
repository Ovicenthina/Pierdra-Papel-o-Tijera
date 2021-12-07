

$( document ).ready(function() {
    var maxCount = 0;
    var totalCount = 0;
    var ptn_pc = 0;
    var ptn_ply = 0;
    var options = [ {
        "img": "img/tijera.svg",
        "text": "tijera",
        "value": 0
    },{
        "img": "img/piedra.svg",
        "text": "piedra",
        "value": 1
    },{
        "img": "img/papel.svg",
        "text": "papel",
        "value": 2
    }]


    $('#reset').click(function(reset){
        $('#container1').css('display','block')
        $('#container2').css('display','none')
        $('#count').val('')
        maxCount= 0;
        totalCount= 0;
        ptn_pc= 0;
        ptn_ply= 0;
    })

    $('#play').click(function(){
        maxCount = parseInt($('#count').val())
        $('#container1').css('display', 'none')
        $('#container2').css('display', 'block')

    })

    $('#tijera').click(function(){
        $('#usuario_img').attr('src', options[0]["img"])
        let result = showResult(0, Math.floor(Math.random()*3))
        calculateResult(result)
    })

    $('#piedra').click(function(){ 
        $('#usuario_img').attr('src', options[1]["img"])
        let result = showResult(1, Math.floor(Math.random()*3))
        calculateResult(result)
    })
    
    
    $('#papel').click(function(){
        $('#usuario_img').attr('src', options[2]["img"])
        
        let result = showResult(2, Math.floor(Math.random()*3))
        calculateResult(result)
    })


    function calculateResult(result){
        totalCount += 1
        if(totalCount === maxCount){
            $('.btnOpt').attr('disabled','true')
            $('#totalPlayed').html('Llegaste al maximo definido')            
        }else{
            $('#totalPlayed').html(totalCount)            
        }
        switch (result) {
            case 1:
                ptn_ply += 1
                $("#texto").html("Felicitaciones eres un ganador!!")
                break;
            case 0:
                $("#texto").html("Wow! Ha sido un empate!!")
                break;
            case -1:
                ptn_pc += 1
                $("#texto").html("Oh no has perdido, suerte a la proxima!")
                break;
            default:
                break;
        }

        $('#ptn_ply').html(ptn_ply)
        $('#ptn_pc').html(ptn_pc)
        
    }

    
      

    function showResult(player,pc){
        switch (options[pc]["value"]) {
            case 0:
                $('#maquina_img').attr('src', 'img/tijera.svg')
                break;
            case 1:
                $('#maquina_img').attr('src', 'img/piedra.svg')
                break;
            case 2:
                $('#maquina_img').attr('src', 'img/papel.svg')
                break;
        }
        if(player === options[pc]["value"]){
            return 0;
        }else if (player === 1 ){ 
            if( options[pc]["value"] === 2) return -1;
            if( options[pc]["value"] === 0) return 1;
        }else if( player === 2 ){ 
            if( options[pc]["value"] === 0) return -1;
            if( options[pc]["value"] === 1) return 1;
        }else if( player === 0 ){ 
            if( options[pc]["value"] === 1) return -1;
            if( options[pc]["value"] === 2) return 1;             
        }
    }


});

       
    switch (mensaje) {
        case ptn_pc < ptn_ply:
              $("#mensaje").html("Felicitaciones esta vez has sido el Rey de Piedra, Papel o Tijera!!")  
            
            break;
        case ptn_pc === ptn_ply:
            $("#mensaje").html("Parece que sera un empate!! ¿Quieres la revancha?")
            break;
        case ptn_pc > ptn_ply:
      
            $("#mensaje").html("Has perdido!! ¿Jugamos nuevamente?")
            break;
        default:
            break;
    }
    



$("#play").click(function () {

    var audioEtiqueta = document.querySelector("audio");
    audioEtiqueta.setAttribute("src", "audio/musica.ogg");

});