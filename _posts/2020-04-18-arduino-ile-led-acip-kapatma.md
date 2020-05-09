---
layout: post
title:  "Arduino ile led açıp kapatma"
date:   2020-04-18 13:33:20 +0300
description: Arduino PWM pinleri # Add post description (optional)
img: 2020-04-18-arduino-ile-led-acip-kapatma-0.jpg # Add image post (optional)
tags: [Elektronik, Mikrodenetleyici, Arduino, Yazılım]
author: emrearda # Add name author (optional)
---
Merhaba Makerlar,

Biliyorsunuzki geçenki [yazımızda](https://yilmazalaca.com/arduino-dunyasina-giris/) Arduino'ya giriş yapmıştık. Bu hafta ledler ile karaşimşek projesi gerçekleştereceğiz. Ancak bu projeyi gerçekleştirmek için tabiki bilmemiz gereken yazılımsal ve elektronik bilgiler var. Gelin öncelikle proje için gerekli olan yazılımsal ardından da elektronik kısımları ele alıp, hemen sonrasında projenin yapımına geçelim. 

Yazılımsal olarak ;

Bilmemiz gereken kavramların başında void setup ve void loop geliyor. Peki nedir bunlar? Arduino IDE’yi açtığınız zaman karşınıza çıkan bu iki terimden ilki olan void setup bizim gerekli olan atamaları yaptığımız yerdir. Yapılması gereken işi arduino devreye iletiyor ise çıkış işlemi (OUTPUT), sensör veya butondan gelen bilgi arduino ya iletiliyor ise giriş işlemi(INPUT) yapılır. Giriş ve çıkış işlemleri ve bunlardan başka olan temel ayarları void setup bölümüne yazarız. (Not: Void setup a yazılan kod sadece bir kere çalıştırılır.) Sıradaki kavramımız olan void loop ise asıl kodlarımızı yazdığımız ve sonsuz döngü ile devam eden bölümdür. Void loop kısmında yapılmasını istediğimiz işleri koda dökmemiz gerekir. Bunu da pine güç ver veya güç verme şeklinde yaparız. Örneğin void loop bölümüne arduino nun 8. Pinine güç vermek istediğimizi koda dökmek için void loop a “digitalWrite(8, HIGH);” şeklinde ifade ederiz. Eğer 8. Pinden olan gücü kesmek istersek “digitalWrite(8, LOW);” şeklinde yazabiliriz. Peki aç, bekle, kapat, bekle işlemleri için ne yazmamız lazım?

```
digitalWrite(8, HIGH);
delay(200);
digitalWrite(8, LOW);
delay(200);
```

Şeklinde ifade ederek gerekli kodlarımızı yazabiliriz. Son öğrenmemiz gereken kavramımız ise “int”. Arduino ile yaptığımız projelerde pin numaralarını aklımızda tutmamız yerine pin numaralarına isim vererek işlerimizi kolaylaştırabiliriz. Bunun için gerekli olan kodu void setup ın üstünde boş bir yere yazabiliriz. Örneğin 7. pinde buzzer 6. pinde de led olduğunu arduino ya iletmek için;

```
int led=6;
int buzzer=7;
```

Şeklinde göstererek artık 6 ve 7. pinleri led ve buzzer isimleri ile kullanabilmemizi mümkün hale getirmiş olduk.

Yazılımsal olarak bu kadar bilgi şimdilik bize yeterli. Sırada elektronik anlamda öğrenmemiz gerekenler var.

Elektronik olarak;

Led, direnç ve breadboard kavramlarını öğrenmemiz gerekli. Şimdi bu kavramları tanıyalım.  

![resim1]({{site.baseurl}}/assets/img/2020-04-18-arduino-ile-led-acip-kapatma-1.jpg)

Yanda görmüş olduğunuz devre elemanı leddir. Fark ettiyseniz ledin bacaklarından bir tanesi uzun, diğeri ise kısadır. Uzun olan bacak “+” kısa olan bacak ise” –“ olarak isimlendirilir. Ancak arduino nun dijital pinlerinden gelen 5v ledi patlatabilir. Bu yüzden ledin patlamaması için ledin “-” bacağına direnç bağlarız. Ohm kanunundan (V=I*R)  direncin bağlanması ile ledin patlamasının önüne geçilecektir. Sıradaki tanımamız gereken devre elemanımız ise direnç.

![resim2]({{site.baseurl}}/assets/img/2020-04-18-arduino-ile-led-acip-kapatma-2.jpg)

Dirençlerin “+” ve “-“ si bulunmaz.  Akımı azaltarak devre elemanlarının korunmasını sağlar. Her renk ledin çalışma gerilimi farklı olduğu için uygun değerde olan direnç değerini kullanmak daha doğrudur. Ama çoğunlukla bunu görmezden geliriz ve ledlerimizin yanmaması için “-“ bacaklarına 220Ω direnç bağlarız.

![resim3]({{site.baseurl}}/assets/img/2020-04-18-arduino-ile-led-acip-kapatma-3.jpg)

Sıradaki kavramımız ise breadboard. Aşağıdaki resimde gördüğünüz gibi breadboard in delikli bir yapısı vardır(soldaki dış görünüş, sağdaki iç yapısı). Solda bulunan resmin sağ ve solundan aşağı doğru inen kırmızı ve mavi hatları görebilirsiniz. Bu mavi ve kırmızı hatlarda delikler birbirine seridir. Yani sol kırmızı sütünda bulunan deliklerden birine 5volt gerilim verirseniz tüm sol  kırmızı sütündaki deliklere 5volt iletilmiş olur. Ancak bundan sağda bulunan 
kırmızı sütün ve mavi sütün etkilenmez bunu sağda bulunan şeklide rahatlıkla görebilirsiniz. İçte bulunan deliklerde ise paralellik durumu söz konudur. Peki nasıl işler derseniz sağda bulunan şekilde kalın çizgiler ile ifade edilmiş satırda herhangi bir delikten 5volt gönderirseniz, deliğin bulunduğu kalın çizgi üzerinde diğer deliklerden de 5volt gerilim gözlenir. Buna paralellik denir. Kırmızı ve mavi hat ise breadboard a voltaj girişi için veya devre elemanlarının beslenmesini sağlamak  için kullanılır. Zaman içerisinde daha çok kullandıkça mantığını daha iyi anlayacağınız bir kavramdır. 

Bütün bu kavramları öğrendiğimize göre şimdi projemizi gerçekleştirebiliriz. Proje yapımı için gerekli olan malzemeler:

•	Arduino
•	Breadboard
•	9 adet led
•	9 adet 220Ω direnç
•	Jumper kablo

Öncelikle aşağıda bulunan devreyi kendi breadboard ve arduino kartınız ile kurunuz. Bağlantılar şu şekildedir:

Arduino digital pin 2→ soldan 9. ledin + bacağı
Arduino digital pin 3→ soldan 8. ledin + bacağı
Arduino digital pin 4→ soldan 7. ledin + bacağı
Arduino digital pin 5→ soldan 6. ledin + bacağı
Arduino digital pin 6→ soldan 5. ledin + bacağı
Arduino digital pin 7→ soldan 4. ledin + bacağı
Arduino digital pin 8→ soldan 3. ledin + bacağı
Arduino digital pin 9→ soldan 2. ledin + bacağı
Arduino digital pin 10→ soldan 1. ledin + bacağı

Şimdi ise her ledin – bacağını breadboard ın mavi hattına bağlıyoruz. Arduino nun GND sini ise breadboardda dirençlerin takılı olduğu mavi hatta  bağlıyoruz.

![resim4]({{site.baseurl}}/assets/img/2020-04-18-arduino-ile-led-acip-kapatma-4.jpg) 

Sırada yapılması gereken ise aşağıda bulunan kodu bilgisayarınızda kopyalayıp, IDE e yapıştırıp, kodu arduino ya yüklemek.

```
//http://yilmazalaca.com/arduino-dunyasina-giris/
//Emre Arda İLÇİGEN
//Öncelikle ledlerimizin bağlı olduğu pin numaralarını belirtmemiz gerekli
//Sırayla ledlerin bağlı olduğu pin numaralarını yazıyoruz. 

int led1=2;
int led2=3;
int led3=4;
int led4=5;
int led5=6;
int led6=7;
int led7=8;
int led8=9;
int led9=10;

void setup() 
{
  //Bu projede amacımız arduinonun ledlere iş yaptırması olduğu için arduinodan çıkış yaptırılacak(yani OUTPUT)
  //Sırayla görevli olan pinlermize OUTPUT atıyoruz
  //Önce hepsini açalım 
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
  pinMode(led5, OUTPUT);
  pinMode(led6, OUTPUT);
  pinMode(led7, OUTPUT);
  pinMode(led8, OUTPUT);
  pinMode(led9, OUTPUT);

}

void loop() 
{
  //Şimdi ledlere sırayla güç verip, gücü çekip çeşitli animasyonlar yapacağız
  
  digitalWrite(led1, HIGH);
  delay(35);
  digitalWrite(led2, HIGH);
  delay(35);
  digitalWrite(led3, HIGH);
  delay(35);
  digitalWrite(led4, HIGH);
  delay(35);
  digitalWrite(led5, HIGH);
  delay(35);
  digitalWrite(led6, HIGH);
  delay(35);
  digitalWrite(led7, HIGH);
  delay(35);
  digitalWrite(led8, HIGH);
  delay(35);
  digitalWrite(led9, HIGH);
  delay(35);
  
  //Şimdi ise hepsini söndürelim
  
  digitalWrite(led9, LOW);
  delay(35);
  digitalWrite(led8, LOW);
  delay(35);
  digitalWrite(led7, LOW);
  delay(35);
  digitalWrite(led6, LOW);
  delay(35);
  digitalWrite(led5, LOW);
  delay(35);
  digitalWrite(led4, LOW);
  delay(35);
  digitalWrite(led3, LOW);
  delay(35);
  digitalWrite(led2, LOW);
  delay(35);
  digitalWrite(led1, LOW);
  delay(35);
  
  //işlemi tekrarlayalım

   //Şimdi ledlere sırayla güç verip, gücü çekip çeşitli animasyonlar yapacağız
  
  digitalWrite(led1, HIGH);
  delay(35);
  digitalWrite(led2, HIGH);
  delay(35);
  digitalWrite(led3, HIGH);
  delay(35);
  digitalWrite(led4, HIGH);
  delay(35);
  digitalWrite(led5, HIGH);
  delay(35);
  digitalWrite(led6, HIGH);
  delay(35);
  digitalWrite(led7, HIGH);
  delay(35);
  digitalWrite(led8, HIGH);
  delay(35);
  digitalWrite(led9, HIGH);
  delay(35);
  
  //Şimdi ise hepsini söndürelim
  
  digitalWrite(led9, LOW);
  delay(35);
  digitalWrite(led8, LOW);
  delay(35);
  digitalWrite(led7, LOW);
  delay(35);
  digitalWrite(led6, LOW);
  delay(35);
  digitalWrite(led5, LOW);
  delay(35);
  digitalWrite(led4, LOW);
  delay(35);
  digitalWrite(led3, LOW);
  delay(35);
  digitalWrite(led2, LOW);
  delay(35);
  digitalWrite(led1, LOW);
  delay(35);
  
  //işlemi tekrarlayalım

   //Şimdi ledlere sırayla güç verip, gücü çekip çeşitli animasyonlar yapacağız
  
  digitalWrite(led1, HIGH);
  delay(35);
  digitalWrite(led2, HIGH);
  delay(35);
  digitalWrite(led3, HIGH);
  delay(35);
  digitalWrite(led4, HIGH);
  delay(35);
  digitalWrite(led5, HIGH);
  delay(35);
  digitalWrite(led6, HIGH);
  delay(35);
  digitalWrite(led7, HIGH);
  delay(35);
  digitalWrite(led8, HIGH);
  delay(35);
  digitalWrite(led9, HIGH);
  delay(35);
  
  //Şimdi ise hepsini söndürelim
  
  digitalWrite(led9, LOW);
  delay(35);
  digitalWrite(led8, LOW);
  delay(35);
  digitalWrite(led7, LOW);
  delay(35);
  digitalWrite(led6, LOW);
  delay(35);
  digitalWrite(led5, LOW);
  delay(35);
  digitalWrite(led4, LOW);
  delay(35);
  digitalWrite(led3, LOW);
  delay(35);
  digitalWrite(led2, LOW);
  delay(35);
  digitalWrite(led1, LOW);
  delay(35);
  
  //işlemi tekrarlayalı
  //Şimdi ledlere sırayla güç verip, gücü çekip çeşitli animasyonlar yapacağız
  
  digitalWrite(led1, HIGH);
  delay(35);
  digitalWrite(led2, HIGH);
  delay(35);
  digitalWrite(led3, HIGH);
  delay(35);
  digitalWrite(led4, HIGH);
  delay(35);
  digitalWrite(led5, HIGH);
  delay(35);
  digitalWrite(led6, HIGH);
  delay(35);
  digitalWrite(led7, HIGH);
  delay(35);
  digitalWrite(led8, HIGH);
  delay(35);
  digitalWrite(led9, HIGH);
  delay(35);
  
  //Şimdi ise hepsini söndürelim
  
  digitalWrite(led9, LOW);
  delay(35);
  digitalWrite(led8, LOW);
  delay(35);
  digitalWrite(led7, LOW);
  delay(35);
  digitalWrite(led6, LOW);
  delay(35);
  digitalWrite(led5, LOW);
  delay(35);
  digitalWrite(led4, LOW);
  delay(35);
  digitalWrite(led3, LOW);
  delay(35);
  digitalWrite(led2, LOW);
  delay(35);
  digitalWrite(led1, LOW);
  delay(35);

  //Şimdi hoş bir gitgel gösterisi yapalım

  delay(1000);
  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  delay(500);
  digitalWrite(led1, LOW);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  delay(500);
  digitalWrite(led2, LOW);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  delay(500);
  digitalWrite(led3, LOW);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  delay(500);
  digitalWrite(led4, LOW);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, HIGH);
  delay(500);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, LOW);
  delay(500);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, LOW);
  delay(500);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, LOW);
  delay(500);
  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, LOW);
  delay(500);
    digitalWrite(led1, LOW);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  delay(500);
  digitalWrite(led2, LOW);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  delay(500);
  digitalWrite(led3, LOW);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  delay(500);
  digitalWrite(led4, LOW);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, HIGH);
  delay(500);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, LOW);
  delay(500);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, LOW);
  delay(500);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, LOW);
  delay(500);
  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, LOW);
  delay(500);
    digitalWrite(led1, LOW);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  delay(500);
  digitalWrite(led2, LOW);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  delay(500);
  digitalWrite(led3, LOW);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  delay(500);
  digitalWrite(led4, LOW);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, HIGH);
  delay(500);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, LOW);
  delay(500);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, LOW);
  delay(500);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, LOW);
  delay(500);
  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, LOW);
  delay(500);

  //Şimdide son animasyona geçiyoruz

  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(led3, LOW);
  digitalWrite(led4, LOW);
  digitalWrite(led5, LOW);
  delay(500);
  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, HIGH);
  delay(50);
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(led3, LOW);
  digitalWrite(led4, LOW);
  digitalWrite(led5, LOW);
  digitalWrite(led6, LOW);
  digitalWrite(led7, LOW);
  digitalWrite(led8, LOW);
  digitalWrite(led9, LOW);
  delay(50);
    digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, HIGH);
  delay(50);
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(led3, LOW);
  digitalWrite(led4, LOW);
  digitalWrite(led5, LOW);
  digitalWrite(led6, LOW);
  digitalWrite(led7, LOW);
  digitalWrite(led8, LOW);
  digitalWrite(led9, LOW);
  delay(50);
    digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, HIGH);
  delay(50);
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(led3, LOW);
  digitalWrite(led4, LOW);
  digitalWrite(led5, LOW);
  digitalWrite(led6, LOW);
  digitalWrite(led7, LOW);
  digitalWrite(led8, LOW);
  digitalWrite(led9, LOW);
  delay(50);
    digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, HIGH);
  delay(50);
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(led3, LOW);
  digitalWrite(led4, LOW);
  digitalWrite(led5, LOW);
  digitalWrite(led6, LOW);
  digitalWrite(led7, LOW);
  digitalWrite(led8, LOW);
  digitalWrite(led9, LOW);
  delay(50);
    digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  digitalWrite(led4, HIGH);
  digitalWrite(led5, HIGH);
  digitalWrite(led6, HIGH);
  digitalWrite(led7, HIGH);
  digitalWrite(led8, HIGH);
  digitalWrite(led9, HIGH);
  delay(100);
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(led3, LOW);
  digitalWrite(led4, LOW);
  digitalWrite(led5, LOW);
  digitalWrite(led6, LOW);
  digitalWrite(led7, LOW);
  digitalWrite(led8, LOW);
  digitalWrite(led9, LOW);
  delay(100);

  //Daha fazla içerik için http://yilmazalaca.com/

}
```

Her hafta yeni içerikler ile yeni projeler yapılıyor olacak. Soru ve önerileriniz için aşağıda bulunan hesaplarımdan ulaşabilirsiniz.