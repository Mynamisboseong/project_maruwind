import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './icon_brand.css';

function BrandExample() {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    const location = useLocation();

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

    const showAuthButton = location.pathname !== '/admin/login';

    return (
        <Navbar className="bg-body-tertiary">
            <Container fluid className="p-0 d-flex justify-content-between">
                <div className="d-flex align-items-center icon-container">
                    <Navbar.Brand
                        href="http://localhost:3000/"
                        className="me-3"
                    >
                        <img
                            src="/home.png"
                            width="24"
                            height="24"
                            className="d-inline-block align-top"
                            alt="Home"
                        />
                    </Navbar.Brand>

                    <Navbar.Brand
                        href="https://www.instagram.com"
                        target="_blank"
                        className="me-3"
                    >
                        <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/color/48/instagram-new--v1.png"
                            className="d-inline-block align-top"
                            alt="Instagram"
                        />
                    </Navbar.Brand>

                    <Navbar.Brand
                        href="https://www.facebook.com"
                        target="_blank"
                        className="me-3"
                    >
                        <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/color/48/facebook-new.png"
                            className="d-inline-block align-top"
                            alt="Facebook"
                        />
                    </Navbar.Brand>

                    <Navbar.Brand
                        href="https://www.youtube.com"
                        target="_blank"
                    >
                        <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/color/48/youtube-play.png"
                            className="d-inline-block align-top"
                            alt="YouTube"
                        />
                    </Navbar.Brand>
                </div>
                
                {showAuthButton && (
                    <div className="d-flex align-items-center">
                        {user ? (
                            <div className="d-flex flex-column align-items-end">
                                <Navbar.Brand className="admin-welcome-text">
                                    관리자님 환영합니다
                                </Navbar.Brand>
                                <button 
                                    onClick={handleLogout} 
                                    className="admin-nav-logout-btn"
                                >
                                    로그아웃
                                </button>
                            </div>
                        ) : (
                            <Navbar.Brand 
                                href="/admin/login" 
                                className="admin-nav-login-btn"
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
