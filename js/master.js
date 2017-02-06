$(document).ready(function(){

  var vehicleArray = [];

  function Vehicle(
    stock,
    car,
    trim,
    carColor,
    specialPrice,
    img,
    url,
    engine,
    mpg,
    doors,
    trans,
    mileage
    ){
    this.stock = stock;
    this.car = car;
    this.trim = trim;
    this.carColor = carColor;
    this.specialPrice = specialPrice;
    this.img = img;
    this.url = url;
    this.emailLink = 'mailto:rwood@ramseysubaru.net';
    this.trans = trans;
    this.mpg = mpg;
    this.doors = doors;
    this.engine = engine;
    this.mileage = mileage;
  };

  function listing(thisCar){
    $('#testUl').append(
      '<ul><li class="center sectionTitle">' +

      thisCar.car + '</li><li><img src="'+

      thisCar.img + '" class="vehicleImage" /></li><li class="center">Mileage<span class="pricing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;'+

      thisCar.mileage + '</span></li><li class="center">Price<span class="pricing">&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;'+

      thisCar.specialPrice + '</span></li><li><div class="imageContainer"><div class="imageArea"><img src="http://joethemovie.com/images/engineIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Engine</span><br/>' + thisCar.engine + '</div><div class="imageArea"><img src="http://joethemovie.com/images/gearIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Transmission</span><br/>' + thisCar.trans + '</div><div class="imageArea"><img src="http://joethemovie.com/images/gaugeIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">MPG</span><br/>' + thisCar.mpg + '</div><div class="imageArea"><img src="http://joethemovie.com/images/carFrontIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Exterior Color</span><br/>' + thisCar.carColor + '</div><div class="imageArea"><img src="http://joethemovie.com/images/carSideIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Doors</span><br/>' + thisCar.doors + '</div></div></li><li class="sectionTitle pricingSpacing">Trim</li><li">'+

      thisCar.trim + '</li><li class="sectionTitle sectionSpacing">Color</li><li>'+

      thisCar.carColor + '</li><li class="sectionTitle sectionSpacing">Stock Number</li><li>'+

      thisCar.stock + '</li><li class="sectionSpacing"><a href="' +

      thisCar.emailLink + '?subject=I am interested in ' +

      thisCar.stock + '" class="emailLink">Request Info</a></li></ul>'
    );
}



vehicleArray[0] = new Vehicle(
  'SUH0191A',
  '2012 Volkswagen Tiguan SE',
  'SE',
  'Pepper Gray',
  '$15,387',
  'https://images.dealer.com/autodata/us/large_stockphoto-color/2012/USC20VWS032A0/U5U5.jpg',
  'http://www.ramseysubaru.net/new/Volkswagen/2012-Volkswagen-Tiguan-ramsey-nj-71c11d590a0e0ae77948e5c88e86f839.htm?searchDepth=1:1',
  '2.0L i-4 Cyl AWD',
  '21 city/27 hwy',
  '4',
  'Automatic with Tiptronic',
  '39,546');
vehicleArray[1] = new Vehicle(
  'SUH0662A',
  '2015 Nissan Altima 2.5 SL',
  '2.5 SL',
  'Cayenne Red',
  '$17,845',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0135/8a97104e7a4333165d2cdd8b7c4571cbx.jpg',
  'http://www.ramseysubaru.net/new/Nissan/2015-Nissan-Altima-ramsey-nj-a5648dd70a0e0a6b19ca8adca293b7cf.htm?searchDepth=1:1',
  '2.5L I-4 Cyl',
  'mpg',
  '4',
  'CVT with XTRONIC',
  '18,889');
vehicleArray[2] = new Vehicle(
  'SUH0716A',
  '2014 BMW 428i xDrive',
  'xDrive',
  'Alpine White',
  '$31,500',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0345/0615d8caf6574aac3523697d22cfbd62x.jpg',
  'http://www.ramseysubaru.net/new/BMW/2014-BMW-428i+xDrive-ramsey-nj-022008890a0e0a6b0cf40ddb23f0f07d.htm?searchDepth=1:1',
  '2.0L I-4 Cyl',
  '22 city/33 hwy',
  '4',
  '8-Speed Automatic',
  '38,447');
vehicleArray[3] = new Vehicle(
  'SUH0694A',
  '2016 Subaru WRX',
  'Base',
  'Crystal Black Silica',
  '$25,212',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1466/c7c8ea3c348001dfbd1f61a22adf9fadx.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2016-Subaru-WRX-ramsey-nj-2b68e8660a0e0ae75af8e08474a90fc1.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '20 city/27 hwy',
  '4',
  '6 Speed Manual',
  '7,621');
vehicleArray[3] = new Vehicle(
  'SUG0239A',
  '2008 Toyota RAV4 Limited',
  'Limited',
  'Black',
  '$11,700',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1775/2e49fc8ab5f9d51c58ec5498d9d196b9x.jpg',
  'http://www.ramseysubaru.net/new/Toyota/2008-Toyota-RAV4-ramsey-nj-a23fcaaf0a0e0ae8307c0e3512c0a657.htm?searchDepth=1:1',
  '3.5L V-6 Cyl',
  '19 city/26 hwy',
  '4',
  '5-speed Automatic',
  '64,644');
vehicleArray[3] = new Vehicle(
  'SUH0870A',
  '2013 Toyota Camry LE',
  'LE',
  'Classic Silver',
  '$10,987',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1792/d65ae1fdee423d0effa1bb2bbf2abb89x.jpg',
  'http://www.ramseysubaru.net/new/Toyota/2013-Toyota-Camry-ramsey-nj-59e3da570a0e0ae75af8e084f0a0345a.htm?searchDepth=1:1',
  '2.5L I-4 Cyl',
  '25 city/35 hwy',
  '4',
  '6-speed Automatic FWD',
  '42,675');



for (var i = 0; i < vehicleArray.length; i++) {
  listing(vehicleArray[i]);
}


});
