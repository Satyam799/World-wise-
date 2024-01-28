import { useNavigate } from "react-router-dom"

export function BackButton() {
    const navigation=useNavigate()
    
    return (
        <button type="back" onClick={(e)=>{
            e.preventDefault()
            navigation(-1)
        }}>
            &larr; Back
        </button>
    )
}

