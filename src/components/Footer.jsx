import React from 'react'
import Icons from './footerComponents/Icons';
import Texts from './footerComponents/Texts';
import data from '../data/footer.json';


function Footer() {
  return (
    <div>
        <Icons />
        <Texts data={data}/>
    </div>
  )
}

export default Footer