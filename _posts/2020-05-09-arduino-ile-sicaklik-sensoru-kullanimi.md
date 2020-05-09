---
layout: post
title:  "Arduino İle Sıcaklık Sensörü Kullanımı"
date:   2020-05-09 07:32:20 +0300
description: "Arduino İle Sıcaklık Sensörü Kullanımı" # Add post description (optional)
img: 2020-05-09-arduino-ile-sicaklik-sensoru-kullanimi-0.jpg # Add image post (optional)
tags: [Elektronik, Mikrodenetleyici, Arduino, Yazılım, LM35]
author: emrearda # Add name author (optional)
---

Merhaba Makerlar,

Hatırlarsanız geçen haftaki [yazımızda][onceki-yazi] if döngüsünü işlemiştik. Bu haftaki konumuz ise sıcaklık sensörü
kullanarak seri haberleşme üzerinden gözlemleyebileceğimiz bir termometre
yapmak olacak. Projemiz hem basit hem de kullanışlı olacaktır ve istediğiniz
zaman termometre olarak kullanabileceksiniz. Gerekli yazılım ve elektronik
kısımlara geçmeden önce sayfanın altında bulunan bülten bölümüne e-posta
adresinizi girerek her hafta yayınlayacağım yeni projelerden haberdar
olabilirsiniz. İsteseniz gelin termometremiz için gerekli yazılım bilgisi ile
konumuza başlayalım.

Serimizin ilk yazısında arduino üzerinde bulunan pinleri tanıtırken analog
pinlerden bahsetmiştim. Bu projemizde analog pin kullanıp, analog pin
üzerinden okuma işlemi yapacağız. Peki neden analog pin kullanacağız? Analog
üzerinden okuma işlemini nasıl yapacağız?

Dışarıdan elde edilen veriler arduino içine gönderiliyor ise analog pinleri
kullanmamız gerekir. Genel olarak sensörlerin işlevi dışarıda bulunan verileri
alıp arduino içine yollamak olduğu için analog pinler ile giriş sağlarız. Şimdi ise
analog pinden okuma işleminin nasıl yapılacağını ele alalım. Geçen hafta dijital
pin üzerindeki durumu okuyup arduino kartımıza bilgisini gönderdiğimiz için
”digitalRead” kodu ile okuma işlemimizi yapmıştık. Analog pinlerimizde ise
“analogRead” yazarak arduinoya okuma işlemi yaptırırız.

Projede kullanacağımız LM35 sıcaklık sensörümüz (isteğe bağlı uygun kodlar
ile değiştirilerek DHT11 de kullanılabilir) dışarıdan aldığı veriler bize doğrudan
sıcaklığı vermez. Sıcaklık değerimizi elde etmek için birkaç minik işlem ile bu
durumun üstünden gelebiliriz. Arduino 10 bitlik ADC(analog digital converter)
kullanır. Mantık 0 ve 1 e dayandığı için (çalış ya da çalışma) 2 tane olasılık
bulunur. Yani 2^10=1024 tane durum bulunur. Bunlar 0 dan başlayarak 1023 e
kadar ilerler ve toplam 1024 farklı analog sinyal durumu ortaya çıkar. En yüksek
değerimiz 1023 olduğu için sensörümüzün dışarudan aldığı veriyi 1023 e
bölerek işleme koyuluruz. Arduino pin başına 5v çıkış verebildiği için
(5000mV) elde ettiğimiz değeri 5000 ile çarparız. Sensörümüz 1̊C için 10mV
çıkış verdiği için son olarak yaptığımız işlemleri 10 a bölerek celcius cinsinden
sıcaklık değerimizi almış oluruz.

Proje yapımı için gerekli olan malzemeler:
* Arduino
* LM35
* Breadboard
* Jumper kablolar

![resim1]({{site.baseurl}}/assets/img/2020-05-09-arduino-ile-sicaklik-sensoru-kullanimi-1.jpg)

LM35 sıcaklık sensörümüzün düz yüzü kendimize bakacak şekilde
breadboardumuza yerleştirdikten sonra soldan sağa sırayla 5v, A0, GND
pinlerimizi jumper kablolarımız ile birleştirmemiz yeterlidir.

```
//http://yilmazalaca.com
//Emre Arda İLÇİGEN
float celcius = 0;
int gelen_veri = 0;
void setup()
{
Serial.begin(9600); //Seri haberleşme başlatıldı
}

void loop()
{
const int lm35 = A0; //lm35 den A0 pini üzerinden bilgi alınacağı belirtildi
gelen_veri = analogRead(lm35); //lm35 değeri okunup gelen_veri adlı
değişkene kaydedildi
celcius=(5000*(gelen_veri/1023.0))/10.0;
/*Arduino 5v çıkış verdiği için milivolt cinsinden 5000e eşit olur. Sensörden
gelen veri 1023e bölünüp(10 bit) alınan değer arduinonun sağladığı voltaj ile
çarpılıp(milivolt cinsinden) elde edilen sonuç celcius cinsinden karşımıza
çıkması için 10 a bölünür. Bu sayede sağlıklı ölçüm işlemi yapılır*/
Serial.println(&quot;hava sıcaklıklığı&quot;); //Seri haberleşmeye hava sıcaklığı yazdırıldı
Serial.println(celcius); //İşlemleri yapılan hava sıcaklığı seri haberleşmeye
yazdırıldı
delay(1000);
}
```

Kodlarımızı yükleyip, sağ üstte bulunan ikona basarak seri haberleşme
üzerinden her saniye ölçüm yapan termometremizi kullanmaya başlayabiliriz.

Soru ve önerileriniz için aşağıda bulunan hesaplarımdan bana ulaşabilirsiniz.
Yeni yazılarımdan haberdar olmak için bültene kayıt olmanız yeterli. Haftaya
yeni projeler ile görüşmek üzere.

[onceki-yazi]: https://yilmazalaca.com/arduino-if-dongusu-ile-buton-kullanimi/