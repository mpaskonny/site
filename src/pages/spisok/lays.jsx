import React from "react"
import "./style.scss"

const  PageLays = () => {
    return (
        <div className="main">
            
        <article className="cartochka_tovara">
            <div>
                <img src= "images/spisok/def.png" alt="" className="img_site" />
            </div>
            <div className="info">
                <div className = "tovar">
                    <h2 className="h2_name">LAY'S®</h2>
                    <h3 className="h3_tovar">LAY'S® — чипсы, каждая пачка которых изготовлена из специально отобранного картофеля и соответствует самым высоким стандартам качества. Хрустящие и легкие на вкус картофельные чипсы LAY'S® были созданы, чтобы вызвать улыбку на лице каждого человека, поэтому ими так приятно делиться с лучшими друзьями. Чипсы LAY'S®, несомненно, скрасят ваш день!</h3>
                    <h3 className="h3_tovar1">Вкусы:</h3>
                    <div className="spisok_card">
                        <div className="cardt">
                            <a className="a_spisok">
                                <img src='../../../images/spisok/def_ikra.png' alt="" className="imgt"></img>
                            </a>
                        </div> 
                        <div className="cardt">
                            <a className="a_spisok">
                            <img src='../../../images/spisok/def_pesto.png' alt="" className="imgt"></img>
                            </a>
                        </div> 
                        <div className="cardt">
                            <a className="a_spisok">
                            <img src='../../../images/spisok/def_cuc.png' alt="" className="imgt"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
    )
}
export default PageLays



