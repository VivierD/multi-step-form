import {useRef} from 'react'
import './SubForm.css'

export default function Allergies(props) {
    const preventFunct = e => {
        e.preventDefault();

        const styleData = {
            allergies : []
        }

        allCheckboxes.current.forEach(checkbox => {
            if(checkbox.checked){
                styleData.allergies.push(checkbox.value)
            }
        })

        props.modifyIndex(5, styleData)
    }
    
    const allCheckboxes = useRef([])

    const addCheck = el => {
        if(el && !allCheckboxes.current.includes(el)){
            allCheckboxes.current.push(el)
        }
    }

    const handleReturn = () => {
        props.modifyIndex(3)
    }
    
  return (
    <form
    className='checkbox-form'
    onSubmit={preventFunct}>
        <p>Quelles sont tes cuisines préférées ?</p>
        <span>Coix multiples !</span>

        <label htmlFor='milk'>
            Lait
        </label>
        <input ref={addCheck} type="checkbox" id='milk' value="milk"/>

        <label htmlFor='pollen'>
            Pollen
        </label>
        <input ref={addCheck} type="checkbox" id='pollen' value="pollen"/>

        <label htmlFor='nuts'>
            Noix
        </label>
        <input ref={addCheck} type="checkbox" id='nuts' value="nuts"/>

        <label htmlFor='eggs'>
            Oeufs
        </label>
        <input ref={addCheck} type="checkbox" id='eggs' value="eggs"/>

        <label htmlFor='sellfish'>
            Fruits de mer
        </label>
        <input ref={addCheck} type="checkbox" id='sellfish' value="sellfish"/>


        <div className='container-nav-btns'>
            <button onClick={handleReturn} type="button" className="prev">
                Précédent
            </button>
            <button>Valider</button>
        </div>
    </form>
  )
}
