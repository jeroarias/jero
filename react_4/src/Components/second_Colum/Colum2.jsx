import React from "react";
import './Colum2.css'
import { Subimg } from "../../layouts/Subimg/Subimg";

export const Colum2 = () => {
    return(
        <div className="colum2">
            <div className="text">
                <div className="content">
                <Subimg/>
                <h1>PROFILE</h1>
                </div>
                <hr className="linegreen"/>
                <p>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta
                    manera para permitir la presentación de elementos gráficos en documentos, sin
                    necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir
                    los diseños y la forma del contenido antes de que el contenido se haya creado, dando
                    al diseño y al proceso de producción más libertad El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta
                    manera para permitir la presentación de elementos gráficos en documentos, sin
                    necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir
                    los diseños y la forma del contenido antes de que el contenido se haya creado, dando
                    al diseño y al proceso de producción más libertad.</p>
                    <div className="content">
                <Subimg/>
                <h1>PROJECTS</h1>
                </div>
                <hr className="linegreen"/>
            </div>
        </div>
    )
}