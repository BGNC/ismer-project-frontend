import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
import BarkodController from '../api/BarkodController';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  const [barcodeData, setBarcodeData] = useState(''); 
  const [barkodList, setBarkodList] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchResult, setSearchResult] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/');
    } else {
      fetchBarkodlar();
    }
  }, [navigate]);



  const fetchBarkodlar = async () => {
    setLoading(true); 
    try {
      const data = await BarkodController.getAllBarkod(); 
      console.log(data);
      setBarkodList(data.payload); 
    } catch (error) {
      console.error('Barkodları alırken hata:', error);
      toast.error('Barkodları yüklerken hata oluştu!', { position: "top-right" });
    } finally {
      setLoading(false); 
    }
  };

  const handleSaveBarcode = async () => {
    if (barcodeData) {
      
      try {
        await BarkodController.saveBarkod(barcodeData); 
        fetchBarkodlar(); 
        setBarcodeData('');
        toast.success('Barkod başarıyla kaydedildi!', { position: "top-right" });
      } catch (error) {
        toast.error('Barkod kaydedilirken hata oluştu!', { position: "top-right" });
      }
    } else {
      toast.error('Barkod numarası boş olamaz!', { position: "top-right" });
    }
  };

  const handleSearch = () => {
    const result = barkodList.find(barkod => barkod.barkodNo === searchTerm);
    if (result) {
      setSearchResult(result);
    } else {
      setSearchResult(null);
      toast.error('Barkod bulunamadı!', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleDeleteBarcode = async (barkodNo) => {
    if (window.confirm('Bu barkodu silmek istediğinize emin misiniz?')) {
      setLoading(true);
      try {
        await BarkodController.deleteBarkod(barkodNo); 
        fetchBarkodlar(); 
        toast.success('Barkod başarıyla silindi!', { position: "top-right" });
      } catch (error) {
        console.error('Barkod silme hatası:', error);
        toast.error('Barkod silinirken hata oluştu!', { position: "top-right" });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleUpdateBarcode = async (id) => {
    const newBarcodeNo = prompt('Yeni Barkod Numarasını Girin:');
    if (newBarcodeNo) {
      setLoading(true);
      try {
        await BarkodController.updateBarkod(id, { barkodNo: newBarcodeNo }); 
        fetchBarkodlar(); 
        toast.success('Barkod başarıyla güncellendi!', { position: "top-right" });
      } catch (error) {
        console.error('Barkod güncelleme hatası:', error);
        toast.error('Barkod güncellenirken hata oluştu!', { position: "top-right" });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div style={{ padding: '20px',  textAlign: 'center' }}>
      <h2>Barkod Okutucu Sistemine Hoş Geldiniz</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <textarea 
        value={barcodeData} 
        onChange={(e) => setBarcodeData(e.target.value)} 
        placeholder="Barkod numarasını girin"
        style={{ width: '300px', height: '100px',resize:"none",borderRadius:"2px",outline:"none" }} 
      />
 
      <button 
        onClick={handleSaveBarcode} 
        style={{ padding: '10px 20px', marginTop: '10px' }} 
        disabled={loading}
      >
        {loading ? 'Kaydediliyor...' : 'Barkodu Kaydet'}
      </button>
      </div>

      <div style={{ marginTop: '20px', outline: "none" }}>
        <input
          type="text"
          placeholder="Barkod No ile Ara"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', marginRight: '10px',outline:"none" }}
        />
        <button onClick={handleSearch} style={{ padding: '10px 20px' }}>
          Ara
        </button>
      </div>

      <p>Girilen Barkodlar:</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Barkod No</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Oluşturulma Zamanı</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Güncelle</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sil</th>
          </tr>
        </thead>
        <tbody>
          {barkodList.length > 0 ? (
            barkodList.map((barkod) => (
              <tr key={barkod.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{barkod.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{barkod.barkodNo}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {new Date(barkod.createTime).toLocaleString()}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <FaEdit onClick={() => handleUpdateBarcode(barkod.barkodNo)} style={{ cursor: 'pointer' }} />
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <FaTrash onClick={() => handleDeleteBarcode(barkod.barkodNo)} style={{ cursor: 'pointer' }} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '8px' }}>
                Barkod bulunamadı.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {searchResult && (
        <div style={{ marginTop: '20px' }}>
          <h3>Arama Sonucu:</h3>
          <div>
            <p>Barkod No: {searchResult.barkodNo}</p>
            <p>Oluşturulma Zamanı: {new Date(searchResult.createTime).toLocaleString()}</p>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Dashboard;
