
$('counter1').ready(function(){
    var c = new CountUp("counter1",0,64);

    c.start();

});

$('counter2').ready(function(){
    var c = new CountUp("counter2",0,169);
    
    c.start();
    
}); 

$('counter3').ready(function(){
    var c = new CountUp("counter3",0,3031768);
    
    c.start();
    
});


var $chart = $('.section3');

$chart.waypoint(function () {
    $chart.addClass('js-section3-animate');
}, { offset: '90%'});