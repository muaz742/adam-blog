---
layout: post
title:  Arduino Dünyasına Giriş
date:   2020-04-11 13:32:20 +0300
description: Arduino dünyasına giriş # Add post description (optional)
img: 2020-04-11-arduino-dunyasina-giris-0.jpg # Add image post (optional)
tags: [Elektronik, Mikrodenetleyici, Arduino]
author: emrearda # Add name author (optional)
---
Merhaba Makerlar,

Bu blogda adım adım Arduino’nun ne olduğunu, neler yapılabileceğini, kodlama, elektronik ve mekanik açılarından ele alacağız. Önceden bir bilginiz olmasa dahi bu seri ile kendi projelerinizi üretmeye başlayabilecekseniz. Ama öncelikle gelin beraber Arduino nedir, neler yapılabilir olduğunu inceleyelim ve ilk bilgilerimizi vermeye başlayalım.

ARDUINO NEDİR?

Arduino üzerinde çeşitli komponentlerin yer aldığı, giriş-çıkış bilgileri girilebilen açık kaynaklı bir mikrodenetleyici prototipleme kartıdır. 32kb hafızası ile gelen Arduino kartının içine kendi kodlarımızı Arduino IDE üzerinden yazıp kartımıza atabilmemiz mümkündür. Şimdi Arduino’yu dış görünüşü ile ele alalım.

![resim1]({{site.baseurl}}/assets/img/2020-04-11-arduino-dunyasina-giris-1.jpg)

* Siyah dikdörtgen içerisine alınmış usb b soket girişidir. Bilgisayar ile Arduino  bağlantısını bu soket sayesinde sağlarız. 
* Pembe dikdörtgen power için jak girişidir. Bu soket ile Arduino’yu dışarıdan 12volta kadar besleyebiliriz.
* Mor ile çevrelenen dikdörtgen Arduino’nun işlemcisi olup tüm bilgilerin alınıp, işlenip, görevlendirilmiş olan pinlere data aktarımını sağlar.  
* Turuncu ile çevrelenen minik butonumuz ise Arduino’ya reset atılması için kullanılır. 
* Sarı dikdörtgen Arduino’nun power pinleridir. Peki bu pinler ne işe yarar?

I.	VIN: Bu pin Arduino’nun jak veya usb kullanmadan dışarıdan beslenebilmesini sağlar. 12v sınırı bu pin içinde geçerlidir. Asıl unutulmaması gereken şudur ki vin, usb b veya jak ile güç sağlanırken bunlardan sadece bir tanesinin kullanılması gerekir. Eğer birden fazla güç girişi kullanırsanız büyük ihtimalle Arduino kartınız yanacaktır.
II.	GND:  Aslında “ground” kelimesinin kısaltılmış halidir. Topraklama amacı ile tüm devrelerde yer alan vazgeçilmez bir pindir. Ancak Arduino ile olan elektronik devrelerde eksi(-) olarak kullanılır.
III.	5v:  Adından da belli ettiği gibi devreye 5 volt verilmesi için kullanılan pindir. Bu pin ile Arduino’ya güç verilmez, Aduino’dan dışarıya 5volt DC elektrik gönderilir.
IV.	3.3v:  Tıpkı 5v için olduğu gibi bu sefer Arduino’dan dışarıya 3.3v DC elektrik verilir.
V.	RES:  Arduino üzerinde reset butonu vardır ancak istersek dışarıdan resetleme işlemini yapabilmemiz için koulmuş bir pindir. Devrelerde pek kullanımı olmasa da bilinmesinde fayda var.

* Gelelim yeşil dikdörtgene. Sıralanmıs A0 dan A5 e kadar giden 6 adet pinin amacı, dışarıdan Arduino’ya bağlanmış sensörlerden bilgiler alıp almış olduğu bilgileri çıkış olarak kullanıcıya sunması için data giriş pinleridir.
* Sırada en keyifli kısımmı olan kırmızı dikdörtgen içerisinde yer alan pinlerdir. “digital ” olarak isimlendirilren bu pinler sayesinde Arduino’nun dışarıya çıkış yapmasını sağlarız. Yani yaptırılmasını istediğimiz kontrolleri bu pinler üzerinden sağlarız. Ancak fark ettiyseniz bazı pinler üzerinde “~” sembolü bulunmakta. Bu sembolün yer aldığı pinler “pwm” olarak isimlendirilir. Peki nedir bu pwm? Pwm pinler sayesinde yaptıracağımız işi kademe kademe ayarlayabiliriz. Örneğin pwm olmayan bir digital pin sayesinde bir ledi sadece açabiliriz veya kapatabiliriz. Ancak pwm olan bir pin sayesinde ledi minimumdan maksimuma kadar açabilmemiz mümkün. Özellikle ince ayarlar gerektiren işlerimizde bu pinleri kullanmamız proje verimliliği açısından çok önemlidir. 

İsterseniz bu kadar bilgiden sonra ilk Arduino projemizi gerçekleştirelim. 
[https://www.arduino.cc/](https://www.arduino.cc/)  üzerinden kendi bilgisayarınıza uygun olan Arduino IDE’i indiriniz. Ardından Arduino kartınızı bilgisayarınıza usb b ile bağlayıp sırayla aşağıda bulunan adımları gerçekleştiriniz.

![resim2]({{site.baseurl}}/assets/img/2020-04-11-arduino-dunyasina-giris-2.png)

Kartınızı bilgisayarınıza bağladıktan sonra öncelikle kart ismini ardından port kısmından portunuzu seciniz. 

![resim3]({{site.baseurl}}/assets/img/2020-04-11-arduino-dunyasina-giris-3.png)

Ardından sırayla dosya>örnekler>basics>blink e tıklayınız. Karşınıza gelen kodu Arduino’ya yükleyeceğiz.

![resim4]({{site.baseurl}}/assets/img/2020-04-11-arduino-dunyasina-giris-4.png)

Ok ile gösterilmiş olan butona tıkladığınızda kod kartınıza yüklenmeye başlayacaktır. Yükleme birkaç saniye içinde bittikten sonra kod artık Arduino kartınıza yüklenmiştir. 1 saniye ara ile yanıp sönen kart üzerindeki kırmızı ledi görüyor iseniz tebrikler ilk kodunuzu yüklediniz. Unutmayın her şey bir ledi açıp kapatmak ile başladı.