---
layout: post
title:  "C++ OpenCV Resim Boyutunu Ölçeklendirme resize() Fonksiyonu"
date:   2020-04-20 07:33:20 +0300
description: "OpenCV Resim Boyutunu Ölçeklendirme resize() Fonksiyonu" # Add post description (optional)
img: 2020-04-20-opencv-resim-boyutunu-olceklendirme-resize-fonksiyonu-0.jpg # Add image post (optional)
tags: [C++, Yazılım, OpenCV]
author: # Add name author (optional)
---
Herkese merhaba,

Bugün sizlere herhangi bir resim üzerinde ya da video üzerinde ölçeklendirme yapacağız.Bildiğiniz gibi bütün resimlerin satır ve sütunlardan oluşan bir matris olduğunu [söylemiştik](https://yilmazalaca.com/opencv-resim-acma-islemi/).Bu matris içerisinde belirli sayılar atanmış  piksel dediğimiz dijital görüntüdeki küçük tanecikler bulunmaktadır.Bizde yazılım ile bugün o pikselleri nasıl boyutlandırabileceğimizi resize() fonksiyonu ile öğreneceğiz.Yazılıma geçelim.
1. Kütüphanelerimizi tanıtalım
```cpp
	#include "opencv2/highgui/highgui.hpp"
	#include "opencv2/imgproc/imgproc.hpp"
	#include "opencv2/core/core.hpp"
	#include<Windows.h> //Bu kütüphane mesaj kutusu oluşturmak için.
```
2. Matrisimizi oluşturup içerisine ölçeklendireceğimiz resmi okutalım.
```cpp
	Mat resim = imread("res.jpg");
```
3. resize() fonksiyonunu kullanalım
```cpp
	resize(resim, resim, Size(300, 300));
	//resize(Mat giris,Mat cikis,Size(yukseklik,genislik);
	//Yukarıda giriş ve çıkışı aynı matris içerisinde gerçekleştirdik.
```
4. Şimdi diğer derslerden farklı olarak eğer matrsimizin içerisinde okuttuğumuz değer yoksa yani imread() fonksiyonundaki resmimizi matris değişkenine başarılı bir şekilde atamamış isek bize hata mesajı döndürmesini isteyelim.
```cpp
	if (resim.empty()) 
	//yukarıdaki if komutunda eğer resim değişkeni boş ise 'if'in içine gir' diye belirtiyoruz.
	{
		MessageBox(0, "Resim bulunamadı", "Windows", MB_OKCANCEL);
		return -1;
	}
	//Girmesi sonucunda ekrana mesaj kutusu ile "Resim bulunamadı"yazdıracak.
``` 

![resim1]({{site.baseurl}}/assets/img/2020-04-20-opencv-resim-boyutunu-olceklendirme-resize-fonksiyonu-1.jpg)

5.Resmimizi orijinal boyutundan küçük ve büyük olacak şekilde resize() fonksiyonu ile ayarlayıp, ekranda gösteriyoruz.
```cpp
	imshow("Resmin Orijinal Boyutu 300x300", resim);
	resize(resim, resim, Size(200, 200));
	imshow("Resmin Küçük Hali 200x200", resim);
	resize(resim, resim, Size(400, 400));
	imshow("Resmin Büyük Hali 400x400", resim);
	waitKey(0);
	return 0;
```

### Ve çıktımız aşağıdaki şekilde olacak.
![resim2]({{site.baseurl}}/assets/img/2020-04-20-opencv-resim-boyutunu-olceklendirme-resize-fonksiyonu-2.jpg)

Bugünlükte bu kadar iyi çalışmalar dilerim.

