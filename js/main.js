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


//  (() => {

//   function fetchData() {
//       fetch(`./includes/connect.php?countryName=${this.id}`)
//       .then(res => res.json())
//       .then(data => {
//           console.log(data);
//           parseCountryData(data[0]);
//       })
//       .catch(function(error) {
//           console.error(error);
//       });
//   }

//   function parseCountryData(country) {
//       // destructure the database info and grab just what we need
//       const { countryName } = country
//       // take the database data and put it on the page
//       document.querySelector(".countryName").textContent = countryName;
//   };

//   // fetchData();
// })();