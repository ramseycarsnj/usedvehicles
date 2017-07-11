$(document).ready(function() {
    var e = [];
    function s(e, s, a, i, r, t, c, n, l, m, o, u) {
        this.stock = e;
        this.car = s;
        this.trim = a;
        this.carColor = i;
        this.specialPrice = r;
        this.img = t;
        this.url = c;
        this.emailLink = "mailto:rwood@ramseysubaru.net";
        this.trans = o;
        this.mpg = l;
        this.doors = m;
        this.engine = n;
        this.mileage = u;
    }
    function a(e) {
        $("#testUl").append('<ul><li class="center sectionTitle">' + e.car + '</li><li><img src="' + e.img + '" class="vehicleImage" /></li><li class="center">Mileage<span class="pricing">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;' + e.mileage + '</span></li><li class="center">Price<span class="pricing">&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;' + e.specialPrice + '</span></li><li><div class="imageContainer"><div class="imageArea"><img src="http://joethemovie.com/images/engineIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Engine</span><br/>' + e.engine + '</div><div class="imageArea"><img src="http://joethemovie.com/images/gearIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Transmission</span><br/>' + e.trans + '</div><div class="imageArea"><img src="http://joethemovie.com/images/gaugeIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">MPG</span><br/>' + e.mpg + '</div><div class="imageArea"><img src="http://joethemovie.com/images/carFrontIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Exterior Color</span><br/>' + e.carColor + '</div><div class="imageArea"><img src="http://joethemovie.com/images/carSideIcon.svg" class="iconSizing"/></div><div class="imageInfo"><span class="sectionTitle">Doors</span><br/>' + e.doors + '</div></div></li><li class="sectionTitle pricingSpacing">Trim</li><li">' + e.trim + '</li><li class="sectionTitle sectionSpacing">Color</li><li>' + e.carColor + '</li><li class="sectionTitle sectionSpacing">Stock Number</li><li>' + e.stock + '</li><li class="sectionSpacing"><a href="' + e.url + '" class="emailLink">Request Info</a></li></ul>');
    }
    e[0] = new s("SUH2208A", "2015 Ram<br> 1500 Tradesman", "Tradesman", "Black<br><br>", "24,900", "https://pictures.dealer.com/r/ramseysubaruramseysoa/0635/f79fccf09b3cb90133528eb74c231bdcx.jpg", "http://www.ramseysubaru.net/used/Ram/2015-Ram-1500-ramsey-nj-3a22be310a0e0ae85b8927d0f854f208.htm?searchDepth=1:1", "5.7L V-8 Cyl", "16 city/23 hwy", "2", "8-Speed Auto 4x4<br>", "13,270");
    e[1] = new s("SUH2078A", "2015 Subaru<br> XV Crosstrek 2.0i Limited", "2.0i Limited", "Crystal White Pearl", "22,220", "https://pictures.dealer.com/r/ramseysubaruramseysoa/1206/c7935396511acc8281f39eed5d9012c3x.jpg", "http://www.ramseysubaru.net/used/Subaru/2015-Subaru-XV+Crosstrek-ramsey-nj-3a22bff00a0e0ae85b8927d03c6ea5e2.htm?searchDepth=1:1", "2.0L H-4 Cyl", "26 city/34 hwy", "5", "CVT Automatic AWD", "27,393");
    e[2] = new s("SUU2915", "2014 Subaru<br> Legacy 2.5i Limited", "2.5i Limited", "Twilight Blue Metallic", "16,986", "https://pictures.dealer.com/r/ramseysubaruramseysoa/0047/a7960dbd58a82666ac2b51f7f19d6751x.jpg", "http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-Legacy-ramsey-nj-7e4049150a0e0ae83e103148170ed50e.htm?searchDepth=1:1", "2.5L H-4 Cyl", "24 city/32 hwy", "4", "CVT Automatic AWD", "31,615");
    e[3] = new s("SUH2380A", "2015 Subaru<br> Forester 2.5i Premium", "2.5i Premium", "Dark Gray Metallic<br>", "19,777", "https://pictures.dealer.com/r/ramseysubaruramseysoa/0951/92f1190d35689fc5dffb18fc90122647x.jpg", "http://www.ramseysubaru.net/certified/Subaru/2015-Subaru-Forester-ramsey-nj-8b56c5690a0e0ae83e1031487799c398.htm?searchDepth=1:1", "2.5L H-4 Cyl", "24 city/32 hwy", "4", "CVT Automatic AWD", "27,842");
    e[4] = new s("SUH2168A", "2012 Honda<br> CR-V EX-L", "EX-L", "Crystal Black Pearl", "15,986", "https://pictures.dealer.com/r/ramseysubaruramseysoa/1057/e571d3118866c05547b78bc10e5d9ef8x.jpg", "http://www.ramseysubaru.net/used/Honda/2012-Honda-CR-V-ramsey-nj-93852b440a0e0ae83e10314843a86f43.htm?searchDepth=1:1", "2.4L H-4 Cyl", "22 city/30 hwy", "4", "5-spd Automatic AWD", "40,708");
    e[5] = new s("SUH1887A", "2014 Subaru<br> XV Crosstrek 2.0i Premium", "2.0i Premium", "Tangerine Orange Pearl", "16,986", "https://pictures.dealer.com/r/ramseysubaruramseysoa/0457/446b37317e67fda5f4b978124ed14b0fx.jpg", "http://www.ramseysubaru.net/certified/Subaru/2014-Subaru-XV+Crosstrek-ramsey-nj-93852aa10a0e0ae83e1031487f07a548.htm?searchDepth=1:1", "2.0L H-4 Cyl", "25 city/35 hwy", "4", "CVT Automatic AWD", "34,072 ");
    e[6] = new s("SUH2220A", "2013 Mercedes-Benz<br> M-Class ML350", "ML350", "Black<br><br>", "26,288", "https://pictures.dealer.com/r/ramseysubaruramseysoa/1376/690a06285b87d43466bfea7fa3178ff2x.jpg", "http://www.ramseysubaru.net/used/Mercedes-Benz/2013-Mercedes-Benz-M-Class-ramsey-nj-93852af00a0e0ae83e10314848fe5451.htm?searchDepth=1:1", "3.5L V6Cyl", "18 city/23 hwy", "4", "7-spd Automatic 4x4", "49,024 ");
    for (var i = 0; i < e.length; i++) {
        a(e[i]);
    }
});