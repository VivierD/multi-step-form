import {useState} from 'react'
import './MultiForm.css'
import Indicator from './Indicator/Indicator'
import CardBegin from './Infos/CardBegin'
import CardEnd from './Infos/CardEnd'
import DietForm from './SubForms/DietForm'
import FoodStyle from './SubForms/FoodStyle'
import Allergies from './SubForms/Allergies'
import HateLove from './SubForms/HateLove'
import { Card } from '@mui/material'

export default function Multiform() {

    const[index, setIndex] = useState(1)
    const [formData, setFormData] = useState({
        dietForm: "",
        foodStyle: [],
        allergies: [],
        prefs: {}
    })

    const modifyIndex = (index, data) => {
        setIndex(index)
        
        if(data){
            const newData = {...formData}
            const firstPropNewData = Object.keys(data)[0]

            newData[firstPropNewData] = data[firstPropNewData]

            setFormData(newData)
        }
    }



  return (
    <div className='container-multiform'>
        <Indicator index={index} />

        {index === 1 ? <CardBegin modifyIndex = {modifyIndex}/>
        : index === 2 ? <DietForm modifyIndex = {modifyIndex} />
        : index === 3 ? <FoodStyle modifyIndex = {modifyIndex} />
        : index === 4 ? <Allergies modifyIndex = {modifyIndex} />
        : index === 5 ? <HateLove modifyIndex = {modifyIndex} />
        : index === 6 ? <CardEnd modifyIndex = {modifyIndex} />
        : ""}

    </div>
  )
}
