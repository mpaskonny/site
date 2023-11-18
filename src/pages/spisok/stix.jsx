import React from "react"
import "./style.scss"

const PageStix = () => {
    return (
        <div className="main">
            
        <article className="cartochka_tovara">
            <div>
                <img src= "images/spisok/stix.png" alt="" className="img_site" />
            </div>
            <div className="info">
                <div className = "tovar">
                    <h2 className="h2_name">LAY'S® STIX</h2>
                    <h3 className="h3_tovar">LAY'S® STIX имеют уникальную V-образную форму, что делает их еще более хрустящими. Мы нарезаем натуральный картофель на палочки, жарим его до хрустящей корочки и добавляем ароматные специи. В каждой пачке таится большое количество палочек — ими удобно делиться с семьей и друзьями.</h3>
                    <h3 className="h3_tovar1">Вкусы:</h3>
                    <div className="spisok_card">
                        <div className="cardt">
                            <a className="a_spisok">
                                <img src='../../../images/spisok/stix_sil.png' alt="" className="imgt"></img>
                            </a>
                        </div> 
                        <div className="cardt">
                            <a className="a_spisok">
                            <img src='../../../images/spisok/stix_K.png' alt="" className="imgt"></img>
                            </a>
                        </div> 
                        
                    </div>
                </div>
            </div>
        </article>
    </div>
    )
}
export default PageStix



