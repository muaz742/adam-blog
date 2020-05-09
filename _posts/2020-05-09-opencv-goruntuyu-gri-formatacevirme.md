---
layout: post
title:  "OpenCV Görüntüyü Gri Formata Çevirme"
date:   2020-05-09 07:33:20 +0300
description: "OpenCV Görüntüyü Gri Formata Çevirme" # Add post description (optional)
img: 2020-05-09-opencv-goruntuyu-gri-formatacevirme-0.jpg # Add image post (optional)
tags: [C++, Yazılım, OpenCV]
author: # Add name author (optional)
---
Herkese merhaba,
Bildiğiniz gibi geçenki [dersimizde][onceki-yazi] OpenCV resize() fonksiyonu ile resim ya da videoyu ölçeklendirmeyi
öğrenmiştik. Bugün ise herhangi bir formattaki resmi gri renge dönüştürmeyi yazılım ile yapacağız.
Resimlerimiz RGB dediğimiz red, green ve blue (kırmızı, yeşil ve mavi) renklerinden oluşmaktadır.

![resim1]({{site.baseurl}}/assets/img/2020-05-09-opencv-goruntuyu-gri-formatacevirme-1.jpg)

Bizde bugün hazır fonksiyon olan cvtColor fonksiyonu ile görüntüyü BGR formatından (Aslında
bilgisayardaki görüntüler böyledir.) gri formata dönüştürmeyi göreceğiz. Haydi yazılıma geçelim.
1. Kütüphanemizi tanıtalım
```cpp
#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/core/core.hpp"
#include<iostream>
```
2.Matrisimizi oluşturup, içerisine görüntüsünü değiştireceğimiz resmi atıyoruz.
```cpp
using namespace std;
using namespace cv;
Mat img = imread("res.jpg");
```
3. Görüntümüzü dönüştürmek için cvtColor() fonksiyonunu kullanalım.
```cpp
int main()
{
Mat img = imread("res.jpg");

imshow("ORJİNAL GÖRÜNTÜ", img);//Orijinal görüntümüzü çıktı alıyoruz.
cvtColor(img, img, COLOR_BGR2GRAY);
//cvtColor(Mat giris,Mat cikis,DONUŞTURUCU KODU);
//Dönüştürdüğümüz görüntüyü aşağıda yeniden çıktı alıyoruz.
imshow("DEĞİŞEN GÖRÜNTÜ", img);

waitKey(0);
}
```
4. Ve derleyip çalıştırdığımızda görüntü aşağıdaki gibi olacaktır.

![resim1]({{site.baseurl}}/assets/img/2020-05-09-opencv-goruntuyu-gri-formatacevirme-2.jpg)

[onceki-yazi]: https://yilmazalaca.com/opencv-resim-boyutunu-olceklendirme-resize-fonksiyonu/