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

<img width="1440" alt="Screenshot 2024-11-01 at 19 38 06" src="https://github.com/user-attachments/assets/9c64d064-3c<img width="1440" alt="Screenshot 2024-11-01 at 19 39 00" src="https://github.com/user-attachments/assets/d9400435-4f3b-4d0e-b00a-06b79ceb7c90">
6b-4b2a-9b0a-31840b5d9716">
<img width="1440" alt="Screenshot 2024-11-01 at 19 38 56" src="https://github.com/user-attachments/assets/6834b0a1-431f-4223-9a8b-cb8f7e448341">

<img width="1440" alt="Screenshot 2024-11-01 at 19 35 08" src="https://github.com/user-attachments/assets/268c496d-282c-4317-9809-8c09882d4d50">
<img width="1440" alt="Screenshot 2024-11-01 at 19 35 51" src="https://github.com/user-attachments/assets/404b1e4a-02d6-4e5e-a68f-65e835cb3c16">
<img width="1440" alt="Screenshot 2024-11-01 at 19 36 48" src="https://github.com/user-attachments/assets/da0c3193-d4f4-4dc2-a835-bc59e104b88f">
