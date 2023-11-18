import React from "react"
import "./style.scss"
const PageoNas = () => {
    return (
        <div className="main">
            <div className = "logo_oNas">
                <h3 className = "logo_logo_oNas"></h3>
            </div>
            <article className="bezoNas">
                <div className = "abzac_oNas">
                    <p className = "name_abzac">LAY'S®— это не просто чипсы!</p>
                    <p className = "name_abzac">LAY'S® — это превосходное качество продукции и забота о потребителях. Ведь для приготовления <br/>картофельных чипсов мы используем лучшие ингредиенты: российский картофель, выращенный по высоким <br/>стандартам PepsiCo, натуральные растительные масла и ароматные приправы.</p>
                    <p className = "name_abzac1"><br/><br/>Знаете ли вы, что...</p>
                    <div className="spisok_card1">
                        <div className="card1">
                            <p className="textred">Чипсы LAY'S® готовятся исключительно из натурального российского картофеля.</p>
                        </div>
                        <div className="card1">
                            <p className="textred">Для обжарки чипсов LAY'S® используются только натуральные растительные масла.</p>
                        </div>
                        <div className="card1">
                            <p className="textred">Для производства 1 кг чипсов используется 4 кг картофеля</p>
                        </div>
                    </div>
                    <div className="spisok_card1">
                        <div className="card1">
                            <p className="textred">Из 2000 сортов картофеля в мире для изготовления чипсов LAY'S® мы строго выбираем только семь.</p>
                        </div>
                        <div className="card1">
                            <p className="textred">Процесс изготовления чипсов LAY'S® занимает всего 40 минут</p>
                       </div>
                        <div className="card1">
                            <p>В разных странах можно попробовать LAY'S® с уникальными вкусами: «Массала» в Индии, «Осьминог Чили» в Азии, «Краб» и «Зеленый лук» в России.</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default PageoNas



