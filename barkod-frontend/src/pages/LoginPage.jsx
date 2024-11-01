
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true'); 
      toast.success('Giriş başarılı!'); 
      navigate('/dashboard');
    } else {
      toast.error('Hatalı kullanıcı adı veya şifre!'); 
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px',outline:"none"  }}>
      <h2>Giriş Yap</h2>
      <input
        type="text"
        placeholder="Kullanıcı Adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px' }}
      />
      <br />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px',outline:"none" }}
      />
      <br />
      <button onClick={handleLogin} style={{ padding: '10px 20px' }}>
        Giriş Yap
      </button>
 
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
