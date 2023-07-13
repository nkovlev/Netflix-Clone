import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import SignIn from './Pages/Register/SignIn';
import Header from './Components/Header';
import Register from './Pages/Register/Register';
import Main from './Pages/Main/MainPage';
import AccountInfo from './Components/AccountInfo';
import { ClipLoader } from 'react-spinners';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AccountLeave from './Components/AccountLeave';

function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <ClipLoader color="red" loading={loading} size={50} />
        </div>
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/accinfo" element={<AccountInfo/>}/>
            <Route path="/accleave" element={<AccountLeave/>}/>
            {authenticated ? (
              <Route path="/main" element={<Main />} />
            ) : (
              <Route path="/main" element={<Navigate to="/" replace />} />
            )}
            <Route path="*" element={<h1>Error</h1>} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
