import React from "react"
import "./style.scss"

const PageMenuM = () => {
    return (
        <div className="main">
            <div className = "logo_main"> 
                <h3 className = "name_logo"></h3>
                <p className = "priglashenie"></p>
            </div>

            <article>
            <h2 className="textt">Продукты</h2>
            <div className = "spisok_card">
                <div className="card">
                    <a href="/lays" className="a_spisok">
                        <img src="../../../images/lyamonade/lays.png" alt="" className = "img_main" />
                    </a>
                </div>
                <div className="card">
                    <a href="/rifl" className="a_spisok">
                        <img src="../../../images/lyamonade/rifl.png" alt="" className = "img_main" />
                    </a>
                </div>
                <div className="card">
                    <a href="/pech" className="a_spisok">
                        <img src="../../../images/lyamonade/pech.png" alt="" className = "img_main" />
                    </a>
                </div>
                
            </div>
        </article>
        
        <article className="posled">

            <div className = "spisok_card">
                <div className="card">
                    <a href="/stax" className="a_spisok">
                        <img src="../../../images/lyamonade/stax.png" alt="" className = "img_main" />
                    </a>
                </div>
                <div className="card">
                    <a href="/stix" className="a_spisok">
                        <img src="../../../images/lyamonade/stix.png" alt="" className = "img_main" />
                    </a>
                </div>
                <div className="card">
                    <a href="/max" className="a_spisok">
                        <img src="../../../images/lyamonade/max.png" alt="" className = "img_main" />
                    </a>
                </div>
            </div>
        </article>

        
        </div>
    )
}
export default PageMenuM



