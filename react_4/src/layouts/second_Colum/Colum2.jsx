import React from "react";
import './Colum2.css'
import { Subimg } from "../../Components/Subimg/Subimg";
import { Projects} from "../../Components/spaceproject/spaceprojects";

export const Colum2 = () => {
    return(
        <div className="colum2">
            <div className="text">
                <Subimg content='PROFILE' />
                <p>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta
                    manera para permitir la presentación de elementos gráficos en documentos, sin
                    necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir
                    los diseños y la forma del contenido antes de que el contenido se haya creado, dando
                    al diseño y al proceso de producción más libertad El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta
                    manera para permitir la presentación de elementos gráficos en documentos, sin
                    necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir
                    los diseños y la forma del contenido antes de que el contenido se haya creado, dando
                    al diseño y al proceso de producción más libertad.</p>
                <Subimg content='PROJECTS' />
                <div className="ProjectsPace">
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam."/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam."/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam."/>
                <Projects title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sunt quod, amet impedit culpa deserunt esse sint cumque saepe. Minima eum veritatis aliquam suscipit quasi facilis repudiandae obcaecati exercitationem quibusdam."/>
                
                </div>
                <Subimg content="REFERENCES"/>
            </div>
        </div>
    )
}