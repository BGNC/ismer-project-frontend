import axios from 'axios';

const API_URL = 'http://localhost:8081/barkod';

const BarkodController = {
    saveBarkod: async (barkodData) => {
        try {
            const payload = {
                barkodNo: barkodData
            };
    
            const response = await axios.post(`${API_URL}/save`, payload); // Use the payload
            return response.data; // Return the response data
        } catch (error) {
            console.error('Barkod kaydetme hatası:', barkodData); // Log the error for debugging
            throw error; // Rethrow the error for further handling if needed
        }
    },
    

  getAllBarkod: async () => {
    try {
      const response = await axios.get(`${API_URL}/all-barkod`);
      return response.data;
    } catch (error) {
      console.error('Tüm barkodları alma hatası:', error);
      throw error;
    }
  },

  getBarkodByBarkodNo: async (barkodNo) => {
    try {
      const response = await axios.get(`${API_URL}/barkod-by-barkod-no/${barkodNo}`);
      return response.data;
    } catch (error) {
      console.error('Barkod numarasına göre alma hatası:', error);
      throw error;
    }
  },

  deleteBarkod: async (barkodNo) => {
    try {
      await axios.delete(`${API_URL}/delete-barkod/${barkodNo}`);
    } catch (error) {
      console.error('Barkod silme hatası:', error);
      throw error;
    }
  },

  updateBarkod: async (barkodNo, barkodData) => {
    try {
      const response = await axios.put(`${API_URL}/update-barkod/${barkodNo}`, barkodData);
 
      return response.data;
    } catch (error) {
      console.error('Barkod güncelleme hatası:', error);
      throw error;
    }
  },
};

export default BarkodController;
