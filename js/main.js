(() => {
    var c = new CountUp("counter1",0,64);

    c.start();

    var c = new CountUp("counter2",0,169);

    c.start();

    var c = new CountUp("counter3",0,3031768);

    c.start();

const graph = document.querySelector('.section3');

var waypoint = new Waypoint({
    element: document.querySelector('.section3'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      graph.classList.add('js-section3-animate');
      
    },
    offset: 600
  });



 })();