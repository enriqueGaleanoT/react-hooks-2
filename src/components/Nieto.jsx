import { useContext } from "react"
import { MiContexto } from "../App";
export default function Nieto(){
    const context = useContext(MiContexto);
    return(
        <div>
            <h1>Soy el nieto y quiero el contexto {context}</h1>
        </div>
    )
}