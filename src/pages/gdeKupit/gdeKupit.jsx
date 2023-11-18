import React from "react"
import "./style.scss"
const PageGdeKupit = () => {
    return (
        <div className="main">
            <div className = "logo_novosti">
                <h3 className = "logo_logo"></h3>
            </div>
            <article>
                <div className = "spisok_card">
                    <div className="cardgp">
                        <a href="https://5ka.ru/" className="a_spisok">
                            <img src="../../../images/logo/5ka.jpg" alt="" className = "img_gp" />
                        </a>
                    </div>
                    <div className="cardgp">
                        <a href="https://magnit.ru/" className="a_spisok">
                            <img src="../../../images/logo/magnit.jpg" alt="" className = "img_gp" />
                        </a>
                    </div>
                    <div className="cardgp">
                        <a href="https://www.auchan.ru/" className="a_spisok">
                            <img src="../../../images/logo/ashan.png" alt="" className = "img_gp" />
                        </a>
                    </div>
                    <div className="cardgp">
                        <a href="https://lenta.com/" className="a_spisok">
                            <img src="../../../images/logo/lenta.jpg" alt="" className = "img_gp" />
                        </a>
                    </div>
                </div>
            
            
                <div className = "spisok_card">
                    <div className="cardgp">
                        <a href="https://www.ozon.ru/" className="a_spisok">
                            <img src="../../../images/logo/ozon.jpeg" alt="" className = "img_gp" />
                        </a>
                    </div>
                    <div className="cardgp">
                        <a href="https://fix-price.com/" className="a_spisok">
                            <img src="../../../images/logo/fixprice.png" alt="" className = "img_gp" />
                        </a>
                    </div>
                    <div className="cardgp">
                        <a href="https://www.metro-cc.ru/" className="a_spisok">
                            <img src="../../../images/logo/metro.png" alt="" className = "img_gp" />
                        </a>
                    </div>
                    <div className="cardgp">
                        <a href="https://sbermarket.ru/" className="a_spisok">
                            <img src="../../../images/logo/sber.png" alt="" className = "img_gp" />
                        </a>
                    </div>
                </div>
            </article>

        </div>
    )
}
export default PageGdeKupit



