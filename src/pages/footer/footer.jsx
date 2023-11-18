import React from "react"
import "./style.scss"
const PageFooter = () => {
    return (
        <div className="mainFooter">
            <footer>
                <div className = "text_footer">
                    <div>
                        <p className="ppp_footer">Телефон горячей линии: 8 (800) 500 77 37</p>
                        <p className="ppp_footer">Звонки по России бесплатно.</p>
                    </div>
                    <div className = "networks_footer">
                        <a href="https://www.youtube.com/@Lays/videos"><img src="images/icons/yt.png" alt="" class="img_nav" /></a>
                        <a href="https://vk.com/lays_russia"><img src="images/icons/вк.png" alt="" class="img_nav" /></a>
                    </div>
                </div>
                <p className = "prava">© 2023 «ПепсиКо Холдингс». Все права защищены.</p>
            </footer>
        </div>
    )
}
export default PageFooter



