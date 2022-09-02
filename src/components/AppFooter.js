/* eslint-disable prettier/prettier */

import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
       
        <span className="ms-1">&copy; 2022 Lucky Numbers.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://luckynumberstv.co.uk" target="_blank" rel="noopener noreferrer">
        Luckynumberstv.co.uk
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
