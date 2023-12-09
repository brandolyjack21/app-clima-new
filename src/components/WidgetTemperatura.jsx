import React from 'react'

function WidgetTemperatura() {
  return (
    <section className='widgetTemperatura'>
      <ul className='widgetTemperatura-container-data'>
        <li className='data-temperatura-list data-temperatura-list-number'>31</li>
        <li className='data-temperatura-list data-temperatura-list-numbers'>Nublado 33º<span style={{ color:'#ffffffc7' }}>/</span>24º</li>
        <li className='data-temperatura-list data-temperatura-list-ciudad'>ICA 17</li>
      </ul>
    </section>
  )
}

export default WidgetTemperatura
