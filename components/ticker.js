import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";

function Ticker() {
  return (
    <footer className='fixed -bottom-8 left-0 w-full h-max'>
<TickerTape isTransparent='true'></TickerTape>
</footer>
  )
}

export default Ticker