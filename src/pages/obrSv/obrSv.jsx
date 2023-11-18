import React from "react"
import "./style.scss"


const PageObrSv = () => {
    return (
        <div className="main">
            <article className="kontakty_map">
                
                <div className = "abzac_spisok">
                    <div id="inline">
                        <h2 className="abzac">Свяжитесь с нами</h2>
                        <form id="contact" action="#" method='post' name='contact'>
                        <input id="name" class="txt" name="name" type="name" placeholder="Ваше имя"></input>
                        <input id="phone" class="txt" name="phone" type="phone" placeholder="Ваш телефон"></input>
                        <input id="email" class="txt" name="email" type="email" placeholder="Ваш e-mail"></input>
                        <textarea id="msg" class="txtarea" name="msg" placeholder="Ваше сообщение:"></textarea><button id="send">Отправить</button></form>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PageObrSv



