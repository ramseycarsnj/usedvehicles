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
  }

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

      thisCar.url + '" class="emailLink">Request Info</a></li></ul>'
    );
}




vehicleArray[0] = new Vehicle(
  'SUH2371A',
  '2015 Subaru<br> Forester 2.5i Premium',
  '2.5i Premium',
  'Dark Gray Metallic<br><br>',
  '$19,266',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0167/3e10fe91e5bf102e723aa23f10500103x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2015-Subaru-Forester-ramsey-nj-b7fe37da0a0e0a1739fb5aa3449b81e0.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '24 city/32 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '34,500');
vehicleArray[1] = new Vehicle(
  'SUU2939',
  '2014 Subaru<br> Forester 2.5i Touring',
  '2.5i Touring',
  'Ice Silver Metallic<br><br>',
  '$19,899',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0516/a546ceb9fd9c8d339f900d6158497663x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Forester-ramsey-nj-cc1acd160a0e0adf53250b5d7bc07e2f.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '16 city/23 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '47,277');

// DONE


vehicleArray[2] = new Vehicle(
  'SUU2942',
  '2015 Subaru<br> WRX STi',
  'WRX STi',
  ' WR Blue Pearl<br><br>',
  '$31,255',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1324/bc1530d260ce64bf4e163e525090d6cbx.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2015-Subaru-null-ramsey-nj-cc1acbd00a0e0adf53250b5d9cef5202.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '17 city/23 hwy',
  '4',
  'CLOSE-RATIO 6-SPEED MANUAL AWD<br>',
  '29,276');

vehicleArray[3] = new Vehicle(
  'SUU2959',
  '2017 Subaru<br> Legacy 2.5i',
  '2.5i',
  'Black<br><br>',
  '$20,850',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1615/e349d8d543c60185fb8206b5506f827dx.jpg',
  'http://www.ramseysubaru.net/used/Subaru/2017-Subaru-Legacy-ramsey-nj-d70a21f00a0e0ae80954dfcc4fd267eb.htm?searchDepth=1:1',
  '2.5L 4-Cylinder',
  '25 city/34 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '5,157');

vehicleArray[4] = new Vehicle(
  'SUU2954',
  '2017 Subaru<br> Outback 2.5i',
  '2.5i',
  'Crystal White Pearl<br><br>',
  '$24,000',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1539/6b04f60602a1185d9e88edbc48336fc1x.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2017-Subaru-Outback-ramsey-nj-d695d7d30a0e0ae80954dfccc91aa77d.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '25 city/32 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '7,002');

vehicleArray[5] = new Vehicle(
  'SUU2958',
  '2017 Subaru<br> Outback 2.5i',
  '2.5i',
  'Black<br><br>',
  '$30,640',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1193/e209a3854861c05449f8446120a163e8x.jpg',
  'http://www.ramseysubaru.net/used/Subaru/2017-Subaru-Outback-ramsey-nj-d70a203e0a0e0ae80954dfcc7ccb9b4d.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '25 city/32 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '7,672');

vehicleArray[6] = new Vehicle(
  'SUU2984',
  '2016 Subaru<br> Legacy 2.5i',
  '2.5i',
  'Venetian Red Pearl<br><br>',
  '$18,569',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1443/6a2a9f15e14c239a6250a281b69a7f1dx.jpg',
  'http://www.ramseysubaru.net/certified/Subaru/2016-Subaru-Legacy-ramsey-nj-f510e29e0a0e0adf2833deeaa97a6468.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '26 city/36 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '7,155');

vehicleArray[7] = new Vehicle(
  'SUU2988',
  '2017 Subaru<br> Outback 2.5i',
  '2.5i',
  'Black<br><br>',
  '$24,522',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1929/2d14bb92d6632c2a157895c30ce6c31bx.jpg',
  'http://www.ramseysubaru.net/used/Subaru/2017-Subaru-Outback-ramsey-nj-f510e2db0a0e0adf2833deeaf336933b.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '25 city/32 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '5,926');

vehicleArray[8] = new Vehicle(
  'SUU2986',
  '2017 Subaru<br> Outback 2.5i',
  '2.5i',
  'Crystal White Pearl  <br><br>',
  '$24,818',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1663/95c27ef3130069cea70ac435b316a0eex.jpg',
  'http://www.ramseysubaru.net/used/Subaru/2017-Subaru-Outback-ramsey-nj-f510e22c0a0e0adf2833deeaa044daf9.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '25 city/32 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '4,996');

vehicleArray[9] = new Vehicle(
  'SUU2995',
  '2016 Subaru<br> Crosstrek Hybrid',
  'Hybrid',
  'Crystal White Pearl<br><br>',
  '$22,800',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1532/600ab37f1f8d397d9d20165e6564927ex.jpg',
  'http://www.ramseysubaru.net/used/Subaru/2016-Subaru-Crosstrek-ramsey-nj-1b59ed9e0a0e0a6b440ce99f24ec5983.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '30 city/34 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '12,486');

vehicleArray[10] = new Vehicle(
  'SUU2993',
  '2016 Subaru<br> Crosstrek Hybrid',
  'Hybrid',
  'Crystal White Pearl<br><br>',
  '$22,466',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0181/efadecf6b7d0719337912ea0d6828417x.jpg',
  'http://www.ramseysubaru.net/used/Subaru/2016-Subaru-Crosstrek-ramsey-nj-193d88c00a0e0a6b77c3a33e8e35dcff.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '30 city/34 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '10,577');

vehicleArray[11] = new Vehicle(
  'SUU2992',
  '2016 Subaru<br> Crosstrek Hybrid',
  'Hybrid',
  'Jasmine Green Pearl<br><br>',
  '$22,986',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1349/fc73a295f4d86f9834ab825ae6069e72x.jpg',
  'http://www.ramseysubaru.net/used/Subaru/2016-Subaru-Crosstrek-ramsey-nj-193d88e00a0e0a6b77c3a33eb83f0a43.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '30 city/34 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '8,486');


for (var i = 0; i < vehicleArray.length; i++) {
  listing(vehicleArray[i]);
}


});
