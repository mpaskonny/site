import React from "react"
import "./style.scss"

const  PageMax = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/spisok/max.png" alt="" className="img_site" />
                </div>
                <div className="info">
                    <div className = "tovar">
                        <h2 className="h2_name">LAY'S® MAXX</h2>
                        <h3 className="h3_tovar">LAY'S® MAXX — самые рифленые чипсы бренда LAY'S®. Они идеально подходят для тех, кто живет активной жизнью в мегаполисе. Разыгрался аппетит? LAY'S® MAXX выручит из такой ситуации и станет необходимым перекусом!</h3>
                        <h3 className="h3_tovar1">Вкусы:</h3>
                        <div className="spisok_card">
                            <div className="cardt">
                                <a className="a_spisok">
                                    <img src='../../../images/spisok/max_pizza.png' alt="" className="imgt"></img>
                                </a>
                            </div> 
                            <div className="cardt">
                                <a className="a_spisok">
                                <img src='../../../images/spisok/max_krilo.png' alt="" className="imgt"></img>
                                </a>
                            </div> 
                            <div className="cardt">
                                <a className="a_spisok">
                                <img src='../../../images/spisok/max_grib.png' alt="" className="imgt"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PageMax



