(() => {
    
    var c = new CountUp("counter1",0,64);

    c.start();

    var c = new CountUp("counter2",0,169);

    c.start();

    var c = new CountUp("counter3",0,3031768);

    c.start();

const graph = document.querySelector('.section3'),
continentAry = document.querySelectorAll('.continent');
      

var waypoint = new Waypoint({
    element: document.querySelector('.section3'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      graph.classList.add('js-section3-animate');
      
    },
    offset: 600
  });


  function fetchData() {
    console.log(this);
    fetch(`./includes/connect.php?continentID=${this.dataset.num}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        parseCountryData(data);
    })
    .catch(function(error) {
        console.error(error);
    });
}

function parseCountryData(data) {
  console.log(data);
  const countryAry = document.querySelectorAll('.countryName'),
      northAmerica = document.querySelectorAll('.sort_na'),
      southAmerica = document.querySelectorAll('.sort_sa'),
      europe = document.querySelectorAll('.sort_europe'),
      asia = document.querySelectorAll('.sort_asia'),
      africa = document.querySelectorAll('.sort_africa'),
      australia = document.querySelectorAll('.sort_australia');
    // destructure the database info and grab just what we need
    // const { continent_id, continent_name, country_name } = data
    // take the database data and put it on the page

    countryAry.forEach(country => country.classList.remove('red'));

  data.forEach(item => {

    if(item.continent_id == 1){// north america
      northAmerica.forEach(na => na.classList.add('red'));
    }else if(item.continent_id == 2){//europe
      europe.forEach(eu => eu.classList.add('red'));
    } else if (item.continent_id == 3){//africa
      africa.forEach(af => af.classList.add('red'));
    } else if (item.continent_id == 4){//asia
      asia.forEach(as => as.classList.add('red'));
    } else if (item.continent_id == 5){//south america
      southAmerica.forEach(sa => sa.classList.add('red'));
    } else if (item.continent_id == 6){//australia
      australia.forEach(au => au.classList.add('red'));
    } else {
      console.log('this is not a real continent');
    }
    });

    
    
    
};



continentAry.forEach(cont => cont.addEventListener('click', fetchData));


 })();
