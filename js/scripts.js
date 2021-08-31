$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-control").click(function(){
        if ($("#carousel-control").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-control").children("span").removeClass('fa-pause');
            $("#carousel-control").children("span").addClass('fa-play');
        }
        else if ($("#carousel-control").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-control").children("span").removeClass('fa-play');
            $("#carousel-control").children("span").addClass('fa-pause');                    
        }
    });
    $("#login").click(function(){
    $('#loginModal').modal('toggle');
    });
    $("#reserve").click(function(){
    $('#reserveModal').modal('toggle');
    });
});