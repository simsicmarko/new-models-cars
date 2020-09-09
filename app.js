const offer = [
    {
      id: 1,
      name: "Alfa Romeo Stelvio",
      category: "SUV",
      price: 41.435,
      img: "./images/alfaromeo.jpg",
      description: `Like its Giulia sedan sibling, the Stelvio gets an updated 8.8-inch infotainment screen with touchscreen functionality and a 7.0-inch 
      digital instrument cluster. But unlike the Giulia, the crossover also adds a few new visual touches on the outside, including things like body-colored fender flares and 
      side sills on the Sport model, as well as a new rear fascia treatment. The same six-cylinder engine remains, producing 280 horsepower. `,
      country: "Italy",
    },
    {
      id: 2,
      name: "Audi A5",
      category: "limousine",
      price: 43.895,
      img: "./images/audia5.jpg",
      description: `Both the Audi A5 Sportback and its sportier S5 sibling get makeovers for the 2020 model year. On the exterior, the A5 and S5 get revised honeycomb 
      grilles and updated bumpers, while the cabin receives a new 10.1-inch touchscreen, the latest iteration of Audi’s MMI interface. But power stays the same; 
      the A5 uses a turbocharged 2.0-liter four-cylinder good for 248 horsepower, while the S5 uses the same turbocharged 2.9-liter V6 good for 349 hp. `,
      country: "Germany",
    },
    {
      id: 3,
      name: "Audi SQ7",
      category: "SUV",
      price: 67.555,
      img: "./images/audiSQ7.jpg",
      description: `Audi’s high-powered SQ7 family mover is coming to the U.S. this year. Complete with a twin-turbocharged 4.0-liter V8, the tantalizing three-row packs
       500 horsepower and can hit 60 miles per hour in 4.3 seconds. No official pricing for the U.S. was given yet, but we expect the SQ7 to start at around $53,000. 
       The coupe-UV is also coming to the U.S. this year.`,
      country: "Germany",
    },
    {
      id: 4,
      name: "BMW M2 CS",
      category: "coupe",
      price: '85.000',
      img: "./images/bmwM2CS.jpg",
      description: `Joining the 2 Series Gran Coupe, the BMW M2 CS goes on sale this year with a starting price of a whopping $85,000. 
      But you do get a lot of bang for those bucks. The M2 CS makes 444 horsepower via a turbocharged inline-six-cylinder engine, 
      meaning it can sprint to 60 miles per hour in 3.8 seconds and on to a top speed of 174 mph. `,
      country: "Germany",
    },
    {
      id: 5,
      name: "Bentley Flying Spur",
      category: "limousine",
      price: '214.600',
      img: "./images/bentley.jpg",
      description: `The 2020 Flying Spur is a brand-new Bentley built from the ground up, now powered by a twin-turbocharged 6.0-liter W12 
      producing 626 horsepower and 664 pound-feet of torque. With that additional oomph, the Flying Spur can sprint to 62 miles per 
      hour in just 3.8 seconds and all the way on to a top speed of 207 mph. But all that power doesn’t come cheap; the 2020 Flying 
      Spur starts at $214,600, and special models are even pricier.`,
      country: "United Kingdom",
    },
    {
      id: 6,
      name: "Ferrari Roma",
      category: "coupe",
      price: '220.000',
      img: "./images/ferrariroma.jpg",
      description: `The Ferrari Roma is the brand's first fully new model, built from the ground up, to debut in a few years. And it's stunning. 
      Bearing both the name of the country's capital city and new design cues exclusive to the coupe, the Ferrari Roma uses a 
      twin-turbocharged 3.9-liter V8 that makes 612 horsepower. The new Ferrari Roma goes on sale this summer, and should start at around $220,000.`,
      country: "Italy",
    },
    {
      id: 7,
      name: "Honda CR-V",
      category: "SUV",
      price: '25.050',
      img: "./images/hondacrv.png",
      description: `The best-selling Honda CR-V has a new look (and a new trim level) for 2020. Darker chrome headlights, a revised front fascia, and a new Hybrid 
      variant graces the compact crossover's lineup for 2020. The former pure gas-powered model, with its same turbocharged 1.5-liter four-cylinder engine 
      producing 190 horsepower, costs $25,050 to start. The hybrid motor with 212 hp doesn't have an official price yet, but should start at around $28,000. `,
      country: "Japan",
    },
    {
      id: 8,
      name: "McLaren GT",
      category: "coupe",
      price: '210.000',
      img: "./images/mclarengt.jpg",
      description: `McLaren introduced the GT to change the grand tourer segment. Not only does it offer a bit of practicality, but it also provides "true supercar" 
      performance with a powerful new twin-turbocharged 4.0-liter V8 making 620 horsepower. It can hit 62 miles per hour in just 3.2 seconds. 
      But performance is only one part of the equation.  `,
      country: "United Kingdom",
    },
    {
      id: 9,
      name: "Hyundai Sonata",
      category: "limousine",
      price: '23.600',
      img: "./images/hyundaisonata.jpg",
      description: `The Hyundai Sonata has hot looks, a host of new engines, and already, a handful of award nominations for the 2020 model year. Here in the States, 
      the Sonata comes standard with a naturally aspirated 2.5-liter engine, good for 191 horsepower, or offers an optional turbocharged 1.6 that produces 180 horsepower.
      The base Hyundai Sonata starts at $23,600, but the sedan comes with a handful of options that hike the price.`,
      country: "South Korea",
    },
    {
      id: 10,
      name: "Volkswagen Passat",
      category: "limousine",
      price: '22.995',
      img: "./images/vwpassat.jpg",
      description: `Volkswagen didn’t do much to update the Passat for 2020. Instead, the company kept changes to a minimum – LED headlights and taillights, a new grille, and a 
      slightly sloped roofline. Seventeen-inch alloys are standard with 18- and 19-inch units available. Volkswagen also dropped the V6 engine, leaving the same 2.0-liter 
      four-cylinder from the previous year, making 174 horsepower. But torque is up from 184 pound-feet to 207 lb-ft.`,
      country: "Germany",
    },
    {
      id: 11,
      name: "Ford Escape",
      category: "SUV",
      price: '24.885',
      img: "./images/fordescape.jpg",
      description: `The Ford Escape is all-new for the 2020 model year. The base model comes powered by a turbocharged 2.0-liter inline-four producing 250 horsepower, 
      while the Hybrid uses a 2.5-liter inline-four and two electric motors to produce 198 hp. The 2020 Escape is on sale now and starts at $24,885.`,
      country: "USA",
    },
    
  ];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');
const myButton = document.getElementById("myBtn");

// load cars on page
  window.addEventListener('DOMContentLoaded', function(){
      displayAllCars(offer);
      displayCategories();
  });

  function displayAllCars(cars){
    let displayCar = cars.map(function(item){
        return `<article class="car-item">
          <img src=${item.img} class="photo" alt=${item.name} />        
              <div class="item-info">
          <text-top>
            <h4>${item.name}</h4>
            <h4 class="price">$ ${item.price}</h4>
          </text-top>
            <p class="item-text">${item.description}</p>
          <text-bottom>
            <h5 class="country">Country: ${item.country}</h5>
        </text-bottom>
        </div>
      </article>`;
    });
    displayCar = displayCar.join('');
    sectionCenter.innerHTML = displayCar;
  }

  function displayCategories() {
    const categories = offer.reduce(
        function(values, item){
          if(!values.includes(item.category)){
              values.push(item.category);
          }
          return values;
    }, ['All']);
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" 
                type="button" 
                data-id=${category}>
                ${category}
                </button>`;
        }).join('');
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn');

  // filter cars
  filterBtns.forEach(function(btn){
      btn.addEventListener('click', function(e){
       const category = e.currentTarget.dataset.id; 
       const carCategory = offer.filter(function(carItem){
         if(carItem.category === category){
         return carItem;
     }
    });
     if(category === 'All'){
         displayAllCars(offer)
     }
     else{
         displayAllCars(carCategory);
     }
  });
  }); 
  };

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};

function topFunction() {
  document.documentElement.scrollTop = 0;
};
