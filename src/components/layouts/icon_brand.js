import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useLocation } from 'react-router-dom';  // 추가
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './icon_brand.css';

function BrandExample() {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    const location = useLocation();  // 현재 경로 확인을 위해 추가

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('로그아웃 오류:', error);
        }
    };

    // 로그인 페이지에서는 로그인/로그아웃 버튼을 숨김
    const showAuthButton = location.pathname !== '/admin/login';

    return (
        <Navbar className="bg-body-tertiary">
            <Container fluid className="p-0 d-flex justify-content-between">
                <div className="d-flex align-items-center icon-container">
                    {/* 기존 로고들... */}
                </div>
                
                {showAuthButton && (
                    <div className="d-flex align-items-center">
                        {user ? (
                            <div className="d-flex flex-column align-items-end">
                                <Navbar.Brand className="login-info">
                                    관리자님 환영합니다
                                </Navbar.Brand>
                                <button 
                                    onClick={handleLogout} 
                                    className="logout-button"
                                >
                                    로그아웃
                                </button>
                            </div>
                        ) : (
                            <Navbar.Brand 
                                href="/admin/login" 
                                className="login-button"
                            >
                                관리자로그인
                            </Navbar.Brand>
                        )}
                    </div>
                )}
            </Container>
        </Navbar>
    );
}

export default BrandExample;
