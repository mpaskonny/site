import React from "react"
import "./style.scss"

const PageRifl = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/spisok/rifl.png" alt="" className="img_site" />
                </div>
                <div className="info">
                    <div className = "tovar">
                        <h2 className="h2_name">LAY'S® РИФЛЕНЫЕ</h2>
                        <h3 className="h3_tovar">LAY'S® Рифленые — чипсы, каждая пачка<br/>которых изготовлена из отборного картофеля<br/>и соответствует самым высоким стандартам<br/>качества. Рифленая текстура золотистой отборной картошки, нежный и насыщенныйвкус — вот, что нужно в моменты<br/>истинного наслаждения!</h3>
                        <h3 className="h3_tovar1">Вкусы:</h3>
                        <div className="spisok_card">
                            <div className="cardt">
                                <a className="a_spisok">
                                    <img src='../../../images/spisok/rifl_losos.png' alt="" className="imgt"></img>
                                </a>
                            </div> 
                            <div className="cardt">
                                <a className="a_spisok">
                                <img src='../../../images/spisok/rifl_sil.png' alt="" className="imgt"></img>
                                </a>
                            </div> 
                            <div className="cardt">
                                <a className="a_spisok">
                                <img src='../../../images/spisok/rifl_papr.png' alt="" className="imgt"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PageRifl



