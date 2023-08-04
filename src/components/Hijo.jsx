import Nieto from "./Nieto"
export default function Hijo({hoodie}){
    return(
        <div>
            <h1>Soy el Hijo </h1>
            <Nieto hoodie={hoodie}></Nieto>
        </div>
    )
}