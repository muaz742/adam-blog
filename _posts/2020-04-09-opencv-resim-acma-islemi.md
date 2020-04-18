---
layout: post
title:  C++ OpenCV ile Resim Açma İşlemi Nasıl Yapılır?
date:   2020-04-09 13:33:20 +0300
description: C++ OpenCV ile Resim Açma İşlemi Nasıl Yapılır? # Add post description (optional)
img: 2020-04-09-opencv-resim-acma-islemi.jpg # Add image post (optional)
tags: [Blog, C++, OpenCV]
author: Yılmaz ALACA # Add name author (optional)
---
Hepinize merhaba,

Bugün OpenCV kütüphanesini C++ yazılım dilinde kullanarak resim açma işlemi gerçekleştireceğiz. Peki bu işlemi neden yaparız, ne işimize yarar gibi sorular sorduğunuzu duyar gibiyim. Aslında C++ öğrenirken hepimizin önce kullandığı iostream kütüphanesindeki cout ve cin komutları gibi görüntü işlerken de resim okuma ve bunu yazılım ile ekranda göstermek bizim için küçük ama yararlı bir adım olacaktır.Aşağıda belirttiğim gibi komutları kullanırsanız başarılı bir şekilde görüntüyü ekrana yazdırabilirsiniz.

1. Kütüphanelerimizi tanıtıyoruz
```cpp
	#include "opencv2/highgui/highgui.hpp"
	#include "opencv2/imgproc/imgproc.hpp"
	#include "opencv2/core/core.hpp"
```
2. Sürekli kütüphane içerisindeki fonksiyonları kullanırken cv::Mat gibi komutlar kullanmamak için cv işlemini tanıtıyoruz.
```cpp
	using namespace cv;
```
3. Kullanacağımız resmi oluşturacağımız Matrisin içerisine atıyoruz.
```cpp
	Mat degisken_adi = imread("resim_adı.uzantısı");
	/*
	resmimiz proje klasörünün içerisinde olması gerekmektedir!
	Not:Resmimiz aslında satır ve sütunlardan oluşan bir matristir. İleridede derslerimizde #değineceğimiz konulardan olacaktır çünkü eğer görüntü üzerinde değişiklik yapmak istiyorsak #matrisin içerisindeki değerlerle oynamamız gerekmektedir.
	Not: Matrisler hakkında bilgi almak için buraya tıklayarak bilgi edinebilirsiniz.
	*/
```
4. Okuduğumuz resmi ekranda çıktı olarak alıyoruz.
```cpp
	imshow("PENCERE İSMİ", degisken_adi);
```
5. Resmimizin sürekli olarak ekranda kalabilmesi için waitKey() fonksiyonunu kullanıyoruz.
```cpp
	waitKey(0); 
	// 0 yazmamızın nedeni sürekli ekranda tutmayı istememizdir. Parantezler içerisine 0 yerine #1000 yazarsak 1 saniye açık kalıp sonra görüntü kaybolacaktır.
```
6. Derleyip çalıştırdığımız zaman istediğiniz resmi ekranda gösterebilirsiniz. İyi çalışmalar.