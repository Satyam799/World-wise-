import { useSearchParams } from "react-router-dom"

export  function UseUrlposition(){
const [searchparams]=useSearchParams()
const Maplat =+searchparams.get('lat')
const Maplng =+searchparams.get('lng')
return {Maplat,Maplng}
}