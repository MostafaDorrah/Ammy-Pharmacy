import { Close } from '@mui/icons-material'
import {React, useState} from 'react'

function Announce() {

    const [announceStyle, setAnnounceStyle] = useState('bg-[#62B6B7] font-bold text-white flex items-center justify-center')
    const handleClose = () => {
        setAnnounceStyle('hidden')
    }
  return (
      <div className={announceStyle}>
        <h2> Hurry up it's 40% off now</h2>
        <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce