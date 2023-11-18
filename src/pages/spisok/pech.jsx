import React from "react"
import "./style.scss"

const PagePech = () => {
    return (
        <div className="main">
            
            <article className="cartochka_tovara">
                <div>
                    <img src= "images/spisok/pech.png" alt="" className="img_site" />
                </div>
                <div className="info">
                    <div className = "tovar">
                        <h2 className="h2_name">LAY'S® ИЗ ПЕЧИ</h2>
                        <h3 className="h3_tovar">LAY'S® «Из печи» приготовлены путем запекания, а не обжаривания, поэтому в них на 50% меньше жира*. Запекание придает чипсам аппетитный хруст, а специи и натуральные травы делают вкус незабываемым. Все для того, чтобы вы могли наслаждаться любимыми вкусами ещё чаще!</h3>
                        <h3 className="h3_tovar1">Вкусы:</h3>
                        <div className="spisok_card">
                            <div className="cardt">
                                <a className="a_spisok">
                                    <img src='../../../images/spisok/pech_hamon.png' alt="" className="imgt"></img>
                                </a>
                            </div> 
                            <div className="cardt">
                                <a className="a_spisok">
                                <img src='../../../images/spisok/pech_lis.png' alt="" className="imgt"></img>
                                </a>
                            </div> 
                            <div className="cardt">
                                <a className="a_spisok">
                                <img src='../../../images/spisok/pech_sir.png' alt="" className="imgt"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PagePech



