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
  'SUU2687',
  '2013 Subaru Legacy 2.5i',
  '2.5i',
  'Ice Silver',
  '$13,356',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1491/ee6a14a9f8b037e54940189f5dcfcc25x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2013-Subaru-Legacy-ramsey-nj-e55419980a0e0adf4c02a6bc82a46b67.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '21 city/ 28 hwy',
  4,
  '6 Speed Manual',
  '61,268');
vehicleArray[1] = new Vehicle(
  'SUU2686',
  '2014 Subaru Legacy 2.5i',
  '2.5i',
  'Satin White',
  '$15,772',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1465/ec899be7985a9dca1c150c84102b60f2x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Legacy-ramsey-nj-e554192f0a0e0adf4c02a6bcb468cb96.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '21 city,29 hwy',
  '4',
  '6 Speed Manual',
  '37,490');
vehicleArray[2] = new Vehicle(
  'SUU2704',
  '2013 Subaru Outback 2.5i',
  '2.5i',
  'Deep Indigo',
  '$19,378',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0069/9ea2f5e4d7283dca0d2990afe79fc316x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2013-Subaru-Outback-ramsey-nj-33553ae60a0e0a17689cb50d00131cc1.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '21 city/28 hwy',
  4,
  'Automatic CVT',
  '23,299');
vehicleArray[3] = new Vehicle(
  'SUU2705',
  '2014 Subaru Impreza 2.5i',
  '2.5i',
  'Carbide Grey',
  '$17,896',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0807/a9a784ad4900ffe34a98560c1e688e89x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Legacy-ramsey-nj-33553b220a0e0a17689cb50d089dd7b1.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '24 city/32 hwy',
  '4',
  'Automatic CVT',
  '42,376');
vehicleArray[4] = new Vehicle(
  'SUG2401A',
  '2015 Subaru Crosstrek 2.0i',
  '2,0i',
  'Khaki',
  '$18,684',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1524/23dd64cfc3af9e204f3c45001c65b788x.jpg',
  'http://www.ramseysubaru.net/used/Subaru/2015-Subaru-XV+Crosstrek-ramsey-nj-997522e00a0e0a177eab2318d1dbe2bc.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '26 city/ 34 hwy',
  '4',
  'Automatic CVT',
  '38,952');
vehicleArray[5] = new Vehicle(
  'SUH0306A',
  '2015 Subaru Legacy 2.5i Limited',
  '2.5i Limited',
  'Blue',
  '$18,992',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1800/7b168da0475dfef4c0cfe82c73124c27x.jpg',
  'http://www.ramseysubaru.net/used/Subaru/2015-Subaru-Legacy-ramsey-nj-a3cfde0e0a0e0a177eab2318b691f035.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '26 city/ 36 hwy',
  4,
  'Automatic CVT',
  '36,931');


for (var i = 0; i < vehicleArray.length; i++) {
  listing(vehicleArray[i]);
}


});
