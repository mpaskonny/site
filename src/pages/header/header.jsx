import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
  setIsMenuOpen(!isMenuOpen)
  }



  return (
    <div className="headerHeader">
      <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
        <div>
          <Link to="/" onClick={handleMenuToggle}>Продукты</Link>
        </div>
        <div>
          <Link to="/gdeKupit" onClick={handleMenuToggle}>Где купить</Link>
        </div>
        <div>
          <Link to="/obrSv" onClick={handleMenuToggle}>Обратная связь</Link>
        </div>
        <div>
          <Link to="/oNas" onClick={handleMenuToggle}>О нас</Link>
        </div>
      </div>
      <div className="header__icons">
        <div className={`header__burger-menu ${isMenuOpen ? 'visible' : ''}`}
          onClick={handleMenuToggle}>
          <div> 
            <img src="images/icons/box.png" alt="burger" className='burger'/>
          </div>
        </div>
      </div>
      <div>
      <img src="../../../images/logo/layslogo.png" alt="" className = "logotip" />
      </div>
    </div>
)
}
export default PageHeader