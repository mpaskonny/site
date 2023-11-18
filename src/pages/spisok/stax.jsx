import React from "react"
import "./style.scss"

const  PageStax = () => {
    return (
        <div className="main">
            
        <article className="cartochka_tovara">
            <div>
                <img src= "images/spisok/stax.png" alt="" className="img_site" />
            </div>
            <div className="info">
                <div className = "tovar">
                    <h2 className="h2_name">LAY'S® STAX</h2>
                    <h3 className="h3_tovar">Чипсы LAY'S® STAX — это хрустящие чипсы идеальной формы от первой до последней чипсины. Теперь стали еще вкуснее с улучшенной рецептурой. Обжаренные до золотистого цвета, с любимыми в России вкусами, эти чипсы созданы для особенных моментов, когда хочется расслабиться и побаловать себя или своих близких.</h3>
                    <h3 className="h3_tovar1">Вкусы:</h3>
                    <div className="spisok_card">
                        <div className="cardt">
                            <a className="a_spisok">
                                <img src='../../../images/spisok/stax_papr.png' alt="" className="imgt"></img>
                            </a>
                        </div> 
                        <div className="cardt">
                            <a className="a_spisok">
                            <img src='../../../images/spisok/stax_sil.png' alt="" className="imgt"></img>
                            </a>
                        </div> 
                        <div className="cardt">
                            <a className="a_spisok">
                            <img src='../../../images/spisok/stax_rebro.png' alt="" className="imgt"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
    )
}
export default PageStax



