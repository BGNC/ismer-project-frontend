# Barkod-Scanner

## Proje Açıklaması
Bu proje, kullanıcıların barkod verilerini yönetmelerini sağlayan bir uygulamadır. Uygulama, kullanıcı girişi, barkod okuma, kaydetme, güncelleme ve silme işlemleri gibi temel işlevleri içermektedir.

## Özellikler

### Kullanıcı Girişi
- Kullanıcı adı ve şifre ile giriş yapma.
- Hatalı girişlerde kullanıcıya `React Toastify` ile hata mesajı gösterilir.
- Başarılı giriş sonrasında kullanıcı, `Dashboard`'a yönlendirilir.

### Dashboard
- **Barkod Okutucu**: 
  - Barkodlar, bir `rich text editor` kullanılarak okunur.
  - Okunan barkod, veri tabanına kaydedilir.
  - Barkod alanı boş bırakıldığında veya önceden kaydedilmiş bir barkod girildiğinde kullanıcıya uyarı verilir.
  
- **Veri Görüntüleme**: 
  - Veritabanında önceden oluşturulan barkod verileri listelenir.
  - Kullanıcı, `React Icons` kullanarak barkodları güncelleme (`faedit`) veya silme (`fatrash`) işlemlerini gerçekleştirebilir.
  
- **Silme İşlemi**: 
  - Silme işleminden önce kullanıcıdan onay alınır ("Emin misiniz?").
  
- **Güncelleme İşlemi**: 
  - Kullanıcı, güncellemek istediği barkod için yeni bir değer girmesi için bir `prompt` açılır.

## Kullanım
1. Uygulamayı çalıştırın.
2. Kullanıcı adı ve şifrenizi girerek giriş yapın.
3. Dashboard üzerinde barkod okutma işlemini gerçekleştirin.
4. Gerekirse mevcut barkodları güncelleyebilir veya silebilirsiniz.
