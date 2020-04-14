---
layout: post
title:  "C++ OPENCV VİDEO AÇMA İŞLEMİ"
date:   2020-04-14 13:32:20 +0300
description: OpenCV Video Açma İşlemi # Add post description (optional)
img: 2020-04-14-opencv-video-acma-0.jpg # Add image post (optional)
tags: [C++, Yazılım, OpenCV]
author: # Add name author (optional)
---
Herkese merhaba,

Biliyorsunuzki geçenki [yazımızda](http://yilmazalaca.com/opencv-resim-acma-islemi/) OpenCV ile bir resmi açmıştık. Bu işlem OpenCV kütüphanesinde herkes için ilk adım olarak değerlendirilmektedir. Yazımıza geçmeden önce bir noktaya değinmenin faydalı olacağını düşünüyorum. Bu nokta aslında artık bir zorunluluk haline gelen İngilizce'dir. Hem Türkçe kaynakların yetersizliği hem de yazılımcılar için bir sürü İngilizce kaynağın olmasıdır. Şimdi dersimize devam edelim.
İlk olarak size bir soru sormakla başlayacağım. Video nedir? Video, birbiri ardına çekilen resimlerin biraraya getirilmiş halidir. Örneğin, 12000 resmi art arda çekerseniz yaklaşık olarak 7.5 dakikalık bir video elde etmiş olursunuz. Aslında tamda bu noktada değinmek istediğim bir husus var. Döngüler. C++ ta bildiğiniz gibi döngü diyince aklımıza for ve while döngüsü gelir.Belirli değerler gireriz ve bir girdiğimiz değer kadar otomatik olarak kendini tekrar eder. Bu kadar kısa bilgilerden sonra dilerseniz video açma projemizin kodlarını yazmaya başlayalım.
1. Kütüphanelerimizi tanıtıyoruz
```cpp
	#include "opencv2/highgui/highgui.hpp"
	#include "opencv2/imgproc/imgproc.hpp"
	#include "opencv2/core/core.hpp"
	using namespace cv; // bunu unutmayalım :)
```
2. Penceremizi oluşturuyoruz
```cpp
	namedWindow("PENCERE ADIMIZ", WINDOW_AUTOSIZE);
	// WINDOW_AUTOSIZE Yazmamızın nedeni videoyu orijinal boyutlarında görmek istediğimiz için
```
3. Videomuzu okuyoruz
```cpp
	VideoCapture degisken_adi("video.uzantisi");
	// VideoCapture OpenCV'de oluşturulmuş bir komuttur.
```
4. Sonsuz bir döngü oluşturuyoruz. Oluşturmamızın nedeni yukarıdada bahsettiğimiz gibi videolar art arda çekilmiş görüntülerden oluşturulmaktadır. Bütün videolar bu yöntemle oluşturulur.
```cpp
	while (true)
	{
		Mat atanan; //burada yeni bir matris oluşturduk
		degisken_adi >> atanan; //oluşturduğumu matrisin içerisine videomuzu atadık.
		imshow("PENCERE ADIMIZ", atanan);//ekranda gösterdik
		if (waitKey(30) == 32) break; 
//Yukarıdaki if komutunda eğer klavyeden 'SPACE' tuşuna basılırsa döngüden çık diye bilgi veriyoruz
	}
```
5. Gerekli yerleri düzenleyip derleyip,çalıştırdığınız zaman uygulamamız çalışacaktır. İYİ ÇALIŞMALAR.
