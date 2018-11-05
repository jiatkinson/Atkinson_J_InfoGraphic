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
      australia = document.querySelectorAll('.sort_australia'),
      click_na = document.querySelector('#main_na'),
      click_eu = document.querySelector('#main_europe'),
      click_af = document.querySelector('#main_africa'),
      click_as = document.querySelector('#main_asia'),
      click_sa = document.querySelector('#main_sa'),
      click_au = document.querySelector('#main_australia');
    // destructure the database info and grab just what we need
    // const { continent_id, continent_name, country_name } = data
    // take the database data and put it on the page

    countryAry.forEach(country => country.classList.remove('red'));
    click_na.querySelector('#circle').style.fill = "#018FD3";
    click_eu.querySelector('#circle').style.fill = "#018FD3";
    click_af.querySelector('#circle').style.fill = "#018FD3";
    click_as.querySelector('#circle').style.fill = "#018FD3";
    click_sa.querySelector('#circle').style.fill = "#018FD3";
    click_au.querySelector('#circle').style.fill = "#018FD3";

  data.forEach(item => {

    if(item.continent_id == 1){// north america
      northAmerica.forEach(na => na.classList.add('red'));
      click_na.querySelector('#circle').style.fill = "red";
    }else if(item.continent_id == 2){//europe
      europe.forEach(eu => eu.classList.add('red'));
      click_eu.querySelector('#circle').style.fill = "red";
    } else if (item.continent_id == 3){//africa
      africa.forEach(af => af.classList.add('red'));
      click_af.querySelector('#circle').style.fill = "red";
    } else if (item.continent_id == 4){//asia
      asia.forEach(as => as.classList.add('red'));
      click_as.querySelector('#circle').style.fill = "red";
    } else if (item.continent_id == 5){//south america
      southAmerica.forEach(sa => sa.classList.add('red'));
      click_sa.querySelector('#circle').style.fill = "red";
    } else if (item.continent_id == 6){//australia
      australia.forEach(au => au.classList.add('red'));
      click_au.querySelector('#circle').style.fill = "red";
    } else {
      console.log('this is not a real continent');
    }
    });
    
};


function changeColour(){
  this.querySelector('#circle').style.fill = "red";


}


continentAry.forEach(cont => cont.addEventListener('click', fetchData));

 })();
