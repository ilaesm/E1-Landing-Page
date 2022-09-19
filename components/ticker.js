import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";

function Ticker() {
  return (
    <div className='fixed bottom-0'>
<TickerTape isTransparent='true'></TickerTape>
</div>
  )
}

export default Ticker