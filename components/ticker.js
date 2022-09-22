import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";

function Ticker() {
  return (
    <footer className='fixed bottom-0 left-0 w-full h-13'>
<TickerTape isTransparent='true'></TickerTape>
</footer>
  )
}

export default Ticker