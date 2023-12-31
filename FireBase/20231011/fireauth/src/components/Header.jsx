import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout"
import { Link, useLocation } from "react-router-dom";
import logoSm from "../images/당장복습헤_logo @4x.png";
import iconLogout from "../images/icon/icon-logout.svg"

function Header ({ isMenuOpen, setIsMenuOpen }) {

    const { logout } = useLogout();
    const { user } = useAuthContext();
    const location = useLocation();
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header>
            <div className="container">
                <div className="left-header">
                    <button type="button" id="hamburger" className={`menu-btn ${isMenuOpen ? 'opened' : ''}`} onClick={handleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    
                    <h1>
                        <p className="a11y-hidden">당장복습헤_logo</p>
                        <Link href="./">
                            <img src={logoSm} alt="당장복습헤 로고" className="logo-sm" />
                        </Link>
                    </h1>
                </div>
                
                <div className="info">
                    {/* 유저정보가 없는 상태(null) 즉, 로그아웃 상태라면 */}
                    {!user && (
                        <>
                            {location.pathname !== '/signup' ?
                                <>
                                    <Link to="/login" className={"btn-join"}>로그인</Link>
                                    <Link to="/join" className={"btn-join"}>회원가입</Link>
                                </>
                                : <Link to="/login" className={"btn-join"}>로그인</Link>
                            }
                        </>
                    )}

                    {/* 유저정보가 있는 즉, 로그인 상태라면 */}
                    {user && (
                        <>
                            <div className="welcome-text">
                                <p className="welcome">환영합니다.&nbsp;</p>
                                <p className="mark">홍길동님</p>
                            </div>
                    
                            <Link to="/login" className="logout" onClick={logout}>
                                <img src={iconLogout} alt="icon-logout" className="icon-logout" />
                                <p className="text-logout">로그아웃</p>
                            </Link>
                        </>
                    )}
                </div>
            </div>

        </header>
    )
}
export default Header
