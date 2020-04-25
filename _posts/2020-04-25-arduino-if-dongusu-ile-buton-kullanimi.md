---
layout: post
title:  "Arduino IF Döngüsü İle Buton Kullanımı"
date:   2020-04-25 07:33:20 +0300
description: "Arduino IF Döngüsü İle Buton Kullanımı" # Add post description (optional)
img: 2020-04-25-arduino-if-dongusu-ile-buton-kullanimi-0.jpg # Add image post (optional)
tags: [Elektronik, Mikrodenetleyici, Arduino, Yazılım]
author: emrearda # Add name author (optional)
---
Merhaba Makerlar,

Biliyorsunuz ki geçen [yazımızda](http://yilmazalaca.com/arduino-ile-led-acip-kapatma/) Arduino ile Led Açıp Kapatma İşlemi yapmıştık. Bugün if döngüsü, digitalRead ve seri haberleşme ekranı nedir? Nasıl çalışır?  Konularını işleyip ardından konuyla alakalı projemizi gerçekleştireceğiz. If döngüsünden başlayıp ilerlemeye başlayalım.

# If döngüsü 

If dögüsünde olan amacımız eğer {…} durumu gerçekleşirse {…} işlemini yap mantığı ile çalışır(… ile belirtilmiş yerlere olmasını istediğimiz koşul ve işlemler yazılır).  Bunları yazdıktan sonra “else” deyip if ifadesinin olmaması durumunda gerçekleşmesini istediğimiz ifadeleri yazarız. Yani;

```
if(şartı koşulan durum gerçekleşirse)
{
Yapılması istenen işlemler
}
else(if durumu gerçekleşmezse)
{
	if in gerçekleşmemesi durumunda yapılması istenen işlemler
}
```

# digitalRead

“digitalRead” fonksiyonu söylenen ifadeyi okuyup bir değişkene kaydedilmesi için kullanılır. Okuma işlemi yapılır. INPUT ile pinMode ayarlanmış olan ifadeler digitalRead fonksiyonu kullanılabilir. 
```
butondurum= digitalRead(buton);
```

# Seri Haberleşme

![resim1]({{site.baseurl}}/assets/img/2020-04-25-arduino-if-dongusu-ile-buton-kullanimi-1.png)
 
Büyüteç sembolüne tıkladığımız zaman seri ekran açılır. Peki nedir seri ekran(seri haberleşme)?  İlerleyen zamanlarda onlarca satır kod yazacağız bu yüzden hangi işlemin gerçekleşip, hangi işlemin gerçekleşmediğini ve hata aldığımız, sorunu olan yer neresi doğrudan anlayabilmemiz için işimizi büyük ölçüde kolaylaştırmaya yarayacak bir penceredir.  Seri haberleşme için kodlarımızı aşağıdaki kodlar ile yazarız.
```
void setup ()
{
	Serial.begin(9600); //Seri haberleşme başlatıldı
}
void loop()
{
	Serial.println(“Merhaba Dünya”);// Seri haberleşme penceresinde merhaba dünya yazıldı
}
```
Bu haftaki yazımızda öğreneceğimiz isi adet devre elemanı var. Buzzer isimli minik ancak güçlü bir şekilde ses çıkartan bir elektronik devre elemanıdır. + ve – pinleri bulunduğu için devreye entegrasyonu fazlaca kolaydır.
 
 
![resim2]({{site.baseurl}}/assets/img/2020-04-25-arduino-if-dongusu-ile-buton-kullanimi-2.png)
 
Buzzer haricinde buton isimli minik bir aç-kapa işleci gören devre elemanımız vardır. Kendi içinde switch, toggle, yatay sürgülü olarak da çeşitleri mevcuttur.
Gelelim bu haftaki projemizi yapmaya. Yapılacak olan projede amacımız, eğer butona basıldıysa buzzer ve ledi çalıştırıp seri ekrana çalıştıklarını yazdır. Eğer butona basılmıyor ise buzzer ve ledi çalıştırmayıp seri ekrana çalışmadıklarını yazdır.
Proje için gerekli malzemeler:

* Arduino
* Breadboard
* Buzzer
* Led
* Buton
* 2 adet 220Ω direnç
* Jumper kablolar

![resim3]({{site.baseurl}}/assets/img/2020-04-25-arduino-if-dongusu-ile-buton-kullanimi-3.png)
 
Buzzer – ucu(kısa bacak)→ Breadboard gnd(mavi hat)

Buzzer + ucu(uzun bacak) →Arduino 4 nolu dijital pin

Led – ucu(kısa bacak) → Direnç ile breadboard gnd

Led + ucu(uzun bacak) → Arduino 3 nolu dijital pin

Buton (devre şemasında 4 bacaklı buton kullanıldı) devrede görüldüğü gibi uçlarından bir tanesi breadboard + hattına diğer uc ise hem direnç ile breadboard gnd hattına hemde arduino 2 nolu dijital pine

Arduino 5v → breadboard güç hattı(kırmızı hat)

Arduino gnd→ breadboard gnd

```
//yilmazalaca.com
//Emre Arda İLÇİGEN
int buzzer = 6;
int led = 3;
int buton = 5;
int buton_son_hal;

 void setup() 
 {
  Serial.begin(9600);
  pinMode(buzzer,OUTPUT);
  pinMode(led,OUTPUT);
  pinMode(buton, INPUT);
 }

 void loop()
{
  buton_son_hal=digitalRead(buton);
  if(buton_son_hal==HIGH)
  {
   digitalWrite(led,HIGH);
   digitalWrite(buzzer,HIGH);
   Serial.println("led ve buzzer açıldı");
   delay(50);

   
  }
  else
  {
   digitalWrite(led,LOW);
   digitalWrite(buzzer,LOW);
   Serial.println("led ve buzzer kapalı");
   delay(50);
  } 
}
```
Kodları arduino kartımızda yükledikten sonra sağ üstte bulunan büyüteç sembolüne tıklayıp. Seri haberleşme ekranından butona bas, butondan elini çek işlemlerini yapabiliriz. Bu sayede sadece butona basıldığı zaman bu işlevler yapılmış olur.
Her hafta daha taze içerikler ile burada bulunacağım. Soru ve önerileriniz için aşağıda bulunan hesaplarımdan iletişime geçebilirsiniz. 
