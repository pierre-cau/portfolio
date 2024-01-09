

        
        $('h1').hide().fadeIn(2000);
        $('.links').hide().fadeIn(750);
        $('h2').css('opacity', '0');
        $('.paraCo').css('opacity', '0');
        $('#projets').css('opacity', '0');
        $('.projet1,.projet2,.projet3').css('opacity', '0');

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    console.log(scroll);
    if(scroll < 500){
        $(".link-acc").css({"transform": 'scale(1.5)', "transition": "1s"});
    }
    else{
        $(".link-acc").css({"transform": 'scale(1)', "transition": "1s"});
    }
    if(scroll > 500 && scroll < 1450){
        $(".link-con").css({"transform": 'scale(1.5)', "transition": "1s"});
    }
    else{
        $(".link-con").css({"transform": 'scale(1)', "transition": "1s"});
    }
    if(scroll > 1450 && scroll < 2500){
        $(".link-pro").css({"transform": 'scale(1.5)', "transition": "1s"});
    }
    else{
        $(".link-pro").css({"transform": 'scale(1)', "transition": "1s"});
    }
    if(scroll > 2500 && scroll < 5000){
        $(".link-exp").css({"transform": 'scale(1.5)', "transition": "1s"});
    }
    else{
        $(".link-exp").css({"transform": 'scale(1)', "transition": "1s"});
    }
    if(scroll > 150 ){
        // $(".snowflake").fadeTo("slow", 0.65);
        $(".snowflake").css({"fontSize": '60px', "transition": "1s"});
        if(scroll < 400 && window.matchMedia("(min-width: 1100px)").matches){
            $('h1').css('padding-top',(scroll/11)+'%');
            $('h1').css('font-size',(scroll+50)+'%');
        }
        else{
            $('h1').fadeOut(2000);
        }
    }
    else{
        $(".snowflake").css({"fontSize": '20px', "transition": "1s"});

        $('h1').fadeIn(2000);
    }
    if(scroll > 500 && scroll < 1450){
        $('h2').css({'opacity': '1','transition': '1s'})
        $('.paraCo,.CV-picture').css({'opacity': '1','transition': '3s'})

    }else{
        $('h2').css({'opacity': '0','transition': '1s'})
        $('.paraCo,.CV-picture').css({'opacity': '0','transition': '2s'})
    }
    if(scroll > 1250 && scroll < 2500){
        $('#projets').css({'opacity': '1','transition': '1.5s'})
    }else{
        $('#projets').css({'opacity': '0','transition': '1s'})
    }
    if(scroll > 2600 && scroll < 5000){
        $('#windows').css({'opacity': '1','transition': '1.5s'})
    }else{
        $('#windows').css({'opacity': '0','transition': '1s'})
    }
    if(scroll > 1250){
        $(".snowflakes").fadeOut(1500);
    }else{
        $(".snowflakes").fadeIn();
    }
})
var projet = 0
$('.btn-projets').click(function(){
    projet++
    if(projet == 1){
        $('.projet1').css({'opacity': '1','transition': '1.5s'})
        $('.btn-projets').text("Cliquez encore pour afficher d'autres projets !")
    }else{
        $('.projet1').css({'opacity': '0','transition': '1.5s'})
    }
    if(projet == 2){
        $('.projet2').css({'opacity': '1','transition': '1.5s'})
        $('.btn-projets').text("Cliquez encore pour afficher d'autres projets !")
    }else{
        $('.projet2').css({'opacity': '0','transition': '1.5s'})
    }
    if(projet == 3){
        $('.projet3').css({'opacity': '1','transition': '1.5s'})
        $('.btn-projets').text("Cliquez encore pour afficher tous les projets !")

    }else{
        $('.projet3').css({'opacity': '0','transition': '1.5s'})
    }
    if(projet == 4){
        $('.projet1,.projet2,.projet3').css({'opacity': '1','transition': '1.5s'})
        $('.btn-projets').text("Cliquez pour masquer les projets !")
    }else{

    }
    if(projet >= 5){
        projet = 0
        $('.btn-projets').text("Cliquez pour afficher les projets !")
    }
})
if (window.matchMedia("(max-width: 768px)").matches) {
    // $(h1).css({'padding-top': '60%'})
  } else {
    /* L'affichage est inférieur à 600px de large */
  }

