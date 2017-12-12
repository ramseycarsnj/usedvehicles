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
  'SUU2939',
  '2014 Subaru<br> Forester 2.5i Touring',
  '2.5i Touring',
  'Ice Silver Metallic<br><br>',
  '$19,763',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0516/a546ceb9fd9c8d339f900d6158497663x.jpg?impolicy=resize&w=650',
  'https://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Forester-ramsey-nj-cc1acd160a0e0adf53250b5d7bc07e2f.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '24 city/32 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '47,277');

vehicleArray[1] = new Vehicle(
  'SUU3038',
  '2017 Subaru<br> Legacy 2.5i',
  '2.5i',
  'Ice Silver Metallic<br><br>',
  '$25,230',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1796/a28696d580843f7da5206ce4e6615bf4x.jpg?impolicy=resize&w=650',
  'https://www.ramseysubaru.net/certified/Subaru/2017-Subaru-Legacy-ramsey-nj-c3163b220a0e0a6b40690100b9cfdebd.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '25 city/34 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '4,916');
vehicleArray[2] = new Vehicle(
  'SUU3085',
  '2017 Subaru<br> Legacy 2.5i',
  '2.5i',
  'Crystal Black Silica<br><br>',
  '$24,780',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1898/3bc5832cd3bf1abd63d7e800c62692cbx.jpg?impolicy=resize&w=650',
  'https://www.ramseysubaru.net/certified/Subaru/2017-Subaru-Legacy-ramsey-nj-5d1534d20a0e0ae7682674b86a42d818.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '25 city/34 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '5,419');
vehicleArray[3] = new Vehicle(
  'SUU3087',
  '2017 Subaru<br> Legacy 2.5i Limited',
  '2.5i Limited',
  'Crystal Black Silica<br><br>',
  '$25,869',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1838/9251cb10ab2eb55a69278812dd78ab89x.jpg?impolicy=resize&w=650',
  'https://www.ramseysubaru.net/certified/Subaru/2017-Subaru-Legacy-ramsey-nj-5d1534ab0a0e0ae7682674b8a3ec39b9.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '25 city/34 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '3,015');
vehicleArray[3] = new Vehicle(
  'SUU3100',
  '2017 Subaru<br> Legacy 2.5i Limited',
  '2.5i Limited',
  'Crystal Black Silica<br><br>',
  '$24,883',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1473/16909045b16abf6611c020f142629cd0x.jpg?impolicy=resize&w=650',
  'https://www.ramseysubaru.net/certified/Subaru/2017-Subaru-Legacy-ramsey-nj-ab0e383d0a0e0ae867dfbbaf1527be8b.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '25 city/34 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '4,719');
vehicleArray[4] = new Vehicle(
  'SUU3102',
  '2017 Subaru<br> Impreza 2.0i Limited',
  '2.0i Limited',
  'Crystal Black Silica<br><br>',
  '$23,744',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0197/6de252dce56f8a69117df49b7e272308x.jpg?impolicy=resize&w=650',
  'https://www.ramseysubaru.net/certified/Subaru/2017-Subaru-Impreza-ramsey-nj-ab0e378a0a0e0ae867dfbbaf5338edff.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '28 city/37 hwy',
  '5dr hatch',
  'Lineartronic CVT AWD<br>',
  '2,944');
vehicleArray[5] = new Vehicle(
  'SUU3114',
  '2017 Subaru<br> Legacy 2.5i Limited',
  '2.5i Limited',
  'Crystal Black Silica<br><br>',
  '$26,400',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0319/4c3a4008b8374bf770b2e2c80abbbb9ex.jpg?impolicy=resize&w=650',
  'https://www.ramseysubaru.net/certified/Subaru/2017-Subaru-Legacy-ramsey-nj-4e107a9d0a0e0ae7394f696307b55617.htm?searchDepth=1:1',
  '2.5L H-4 Cyl',
  '25 city/34 hwy',
  '4',
  'Lineartronic CVT AWD<br>',
  '2,079');
vehicleArray[6] = new Vehicle(
  'SUU3113',
  '2017 Subaru<br> Impreza 2.0i Limited',
  '2.0i Limited',
  'Island Blue Pearl<br><br>',
  '$27,618',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/1251/d92adafbdde1b88ba238e0dcaabdbdffx.jpg?impolicy=resize&w=650',
  'https://www.ramseysubaru.net/certified/Subaru/2017-Subaru-Impreza-ramsey-nj-edcf8ccd0a0e0adf5dc318966bc05774.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '28 city/37 hwy',
  '5dr hatch',
  'Lineartronic CVT AWD<br>',
  '4,069');
vehicleArray[7] = new Vehicle(
  'SUJ0288A',
  '2017 Subaru<br> Impreza 2.0i Sport',
  '2.0i Sport',
  'Venetian Red Pearl<br><br>',
  '$19,420',
  'https://pictures.dealer.com/r/ramseysubaruramseysoa/0552/4a6691b1ab350b5ce5fe946ac2dd9a21x.jpg?impolicy=resize&w=650',
  'https://www.ramseysubaru.net/certified/Subaru/2016-Subaru-Impreza-ramsey-nj-3d30fd0c0a0e0ae85da976696dc2c9ef.htm?searchDepth=1:1',
  '2.0L H-4 Cyl',
  '28 city/37 hwy',
  '5dr hatch',
  'Lineartronic CVT AWD<br>',
  '24,954');


for (var i = 0; i < vehicleArray.length; i++) {
  listing(vehicleArray[i]);
}


});
