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
  'SUU2705',
  '2014 Subaru Impreza 2.5i',
  '2.5i with Heated Front Seats + Remote Keyless Entry',
  'Carbide Grey',
  '$15,914',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0717/feb6087b3045b0a0c3c8d513a89ccf9ax.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Legacy-ramsey-nj-33553b220a0e0a17689cb50d089dd7b1.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '24 city/32 hwy',
  '4',
  'Automatic CVT',
  '42,376');
vehicleArray[1] = new Vehicle(
  'SUU2731',
  '2014 Subaru Legacy 2.5i',
  '2.5i with Remote Keyless entry + Bluetooth',
  'Ice Silver',
  '$14,990',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1913/e4454f5a23fa69c600be586c2955f387x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Legacy-ramsey-nj-0ae622c70a0e0ae8595b246c9377c4b7.htm?searchDepth=1:1',
  '2.5L H-4 Cyl AWD',
  '21 city/29 hwy',
  '4',
  'Automatic CVT',
  '43,928');
vehicleArray[2] = new Vehicle(
  'SUH0482A',
  '2011 Toyota RAV4 Sport',
  'Sport with Alloy Wheels',
  'Black',
  '$13,499',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1813/347fc7654e5cbe24c486a03ff156e337x.jpg',
  'http://www.ramseysubaru.net/new/Toyota/2011-Toyota-RAV4-ramsey-nj-33e552310a0e0adf43fd01e9e2cf0dc1.htm?searchDepth=1:1',
  '2.5L I-4 Cyl',
  '21 city/27 hwy',
  '4',
  '4-Speed Automatic 4WD',
  '58,584');
vehicleArray[3] = new Vehicle(
  'SUH0430A',
  '2015 Subaru Forester 2.5i Limited',
  '2.5i Limited with Remote Keyless Entry',
  'Crystal Black',
  '$22,993',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1689/fbf5c41105bc259f16f6b7b41ccf2b9ex.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2015-Subaru-Forester-ramsey-nj-33e552980a0e0adf43fd01e902ed4107.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '24 city/32 hwy',
  '4',
  'Automatic CVT',
  '40,107');
vehicleArray[4] = new Vehicle(
  'SUH0318A',
  '2013 Subaru Legacy 2.5i',
  '2.5i with Bluetooth Connectivity',
  'Crystal Black',
  '$10,998',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1031/3ac84948f067a44ee314bc3e5b9e7edbx.jpg',
  'http://www.ramseysubaru.net/new/Subaru/2013-Subaru-Legacy-ramsey-nj-580e14a20a0e0ae717548d639ea4d281.htm?searchDepth=1:1',
  '2,5L H-4 Cyl CVT AWD',
  '21 city/28 hwy',
  '4',
  'Automatic CVT',
  '82,849');
vehicleArray[5] = new Vehicle(
  'SUG2552A',
  '2015 Subaru Forester 2.5i Premium',
  '2.5i Premium with Remote Keyless Entry',
  'Venetian Red',
  '$20,979',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0469/8a2c573a28392e5c260e0b56dd9853c7x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2015-Subaru-Forester-ramsey-nj-71e2bc380a0e0a173bd765f28a0b21ca.htm?searchDepth=1:1',
  '2.5L H-4 Cyl AWD',
  '24 city/32 hwy',
  '4',
  'Automatic CVT',
  '32,612');
vehicleArray[6] = new Vehicle(
  'SUU2747',
  '2014 Subaru Forester 2.5i Premium',
  '2.5i Premium with All Weather Package',
  'Venetian Red',
  '$18,998',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1692/deb897e4e71c7586163f504e967cddb3x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Forester-ramsey-nj-9b8b990f0a0e0adf4ae7cb910b7256ea.htm?searchDepth=1:1',
  '2.5L H-4 Cyl AWD',
  '24 city/32 hwy',
  '4',
  'Automatic CVT',
  '32,207');


for (var i = 0; i < vehicleArray.length; i++) {
  listing(vehicleArray[i]);
}


});
