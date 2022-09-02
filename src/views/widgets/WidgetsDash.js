/* eslint-disable prettier/prettier */

import React from 'react'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CLink,
  CRow,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsE,
  CWidgetStatsF,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilArrowRight,
  cilBasket,
  cilBell,
  cilChartPie,
  cilMoon,
  cilLaptop,
  cilPeople,
  cilSettings,
  cilSpeech,
  cilSpeedometer,
  cilUser,
  cilUserFollow,
} from '@coreui/icons'
//import { CChartBar, CChartLine } from '@coreui/react-chartjs'

// import WidgetsBrand from './WidgetsBrand'
// import WidgetsDropdown from './WidgetsDropdown'

const WidgetsDash = () => {
  return (
    <CCard className="mb-4">
      <CCardBody>
        <CRow>
          <CCol xs={12} sm={6} lg={3}>
            <CWidgetStatsB
              className="mb-4"
              color="success"
              inverse
              value="10000"
              title="Total Players"
              progress={{ value: 45.9 }}
              text="Last 365 Days"
            />
          </CCol>
          <CCol xs={12} sm={6} lg={3}>
            <CWidgetStatsB
              className="mb-4"
              color="info"
              inverse
              value="7500"
              title="total Winners"
              progress={{ value: 55.9 }}
              text="Last 365 Days"
            />
          </CCol>
          <CCol xs={12} sm={6} lg={3}>
            <CWidgetStatsB
              className="mb-4"
              color="warning"
              inverse
              value="15000"
              title="Total Games"
              progress={{ value: 89.9 }}
              text="Last 365 Days"
            />
          </CCol>
          <CCol xs={12} sm={6} lg={3}>
            <CWidgetStatsB
              className="mb-4"
              color="primary"
              inverse
              value="30000"
              title="Coins Spend"
              progress={{ value: 65.9 }}
              text="Last 365 Days"
            />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default WidgetsDash
