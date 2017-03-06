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
  'SUH0939A',
  '2013 Subaru Outback 2.5i',
  '2.5i',
  'Venetian Red Pearl',
  '17,988',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1103/26e230448e7406f1bcb5d74f7479132ax.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2013-Subaru-Outback-ramsey-nj-7dfa1dae0a0e0ae8294096d1b96a1c7a.htm?searchDepth=1:1',
  '2.5l H-4 Cyl',
  '21 city/28 hwy',
  '4',
  'CVT Automatic AWD',
  '44,165');

vehicleArray[1] = new Vehicle(
  'SUU2766',
  '2014 Subaru Outback 2.5i',
  '2.5i',
  'Venetian Red',
  '19,899',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0185/5c86068704c648d410cf990885eecbf8x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Outback-ramsey-nj-b1753b420a0e0ae8294096d190122f11.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '22 city/29 hwy',
  '4',
  'CVT Automatic AWD',
  '42,285');
vehicleArray[2] = new Vehicle(
  'SUH0771A',
  '2014 Mazda Mazda6 i',
  'i Base',
  'White Pearl',
  '15,988',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0625/66bdeaec7b8e9be2edec283e3aa4b5b0x.jpg',
  'http://www.ramseysubaru.net/used/Mazda/2014-Mazda-Mazda6-ramsey-nj-0e22e3ff0a0e0a171812578a8fdaf867.htm?searchDepth=1:1',
  '2.5L I-4 Cyl',
  '26 city/38 hwy',
  '4',
  '6-spd Automatic FWD',
  '36,715');
vehicleArray[3] = new Vehicle(

  'SUH1230A',
  '2014 Hyundai Tucson Limited',
  'Limited',
  'Diamond Silver',
  '15,988',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0755/5f2ec5609afe9ace7e4e962746c4723fx.jpg',
  'http://www.ramseysubaru.net/used/Hyundai/2014-Hyundai-Tucson-ramsey-nj-234649420a0e0ae8779b2f8bc5ad1c2e.htm?searchDepth=1:1',
  '2.4l H-4 Cyl',
  '20 city/25 hwy',
  '4',
  '6-spd Automatic AWD',
  '32,547');
vehicleArray[4] = new Vehicle(
  'SUH1277A',
  '2012 LEXUS IS 250',
  '250',
  'Starfire Pearl',
  '19,420',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0280/ab8595693323852c6605767bd0f34edbx.jpg',
  'http://www.ramseysubaru.net/used/LEXUS/2012-LEXUS-IS+250-ramsey-nj-4c047a3d0a0e0adf3e0eb2a5e0dbe3a2.htm?searchDepth=1:1',
  '2.5l V-6 Crl',
  '20 city/27 hwy',
  '4',
  '6-spd AWD',
  '37,670');

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
