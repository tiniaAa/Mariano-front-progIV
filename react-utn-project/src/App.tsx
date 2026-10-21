import { useState } from "react"
interface Lenguaje {
  id: number,
  nombre:String,
  tipado: Boolean
}

const lenguajes: Lenguaje[] = [
  { id:1, nombre:"Javascript", tipado:false},
  { id:2, nombre:"Typescript", tipado:false},
  { id:3, nombre:"Python", tipado:false},
  { id:4, nombre:"Java", tipado:true},
  { id:5, nombre:"C#", tipado:true}
]

export default function App()
{
  const[soloTipado,setsoloTipado] = useState<Boolean>(false);
  const visible = soloTipado ? lenguajes.filter((l)=>l.tipado): lenguajes;
  return (
    <>
      <label>
        <input type="checkbox" onChange={(e)=>setsoloTipado(e.target.checked)}/>{" "} solo tipado estatico
      </label>
      <ul>
        {visible.map(
        (l)=>(<li>({l.nombre})({l.id})({l.tipado ? "tipado" : "no tipado"})</li>)
        )}
      </ul>
    </>
  )
}

