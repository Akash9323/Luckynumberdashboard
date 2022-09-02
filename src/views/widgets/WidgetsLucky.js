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
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DocsExample } from 'src/components'

import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'

const WidgetsLucky = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <CCard className="mb-4">
      <CCardBody>
        <CRow>
          <CCol sm={6} md={2}>
            <CWidgetStatsC
              icon={<CIcon icon={cilPeople} height={36} />}
              value="7500"
              title="Orders"
              progress={{ color: 'info', value: 75 }}
              className="mb-4"
            />
          </CCol>
          <CCol sm={6} md={2}>
            <CWidgetStatsC
              icon={<CIcon icon={cilUserFollow} height={36} />}
              value="385"
              title="New Orders"
              progress={{ color: 'success', value: 75 }}
              className="mb-4"
            />
          </CCol>
          <CCol sm={6} md={2}>
            <CWidgetStatsC
              icon={<CIcon icon={cilBasket} height={36} />}
              value="1238"
              title="Products sold"
              progress={{ color: 'warning', value: 75 }}
              className="mb-4"
            />
          </CCol>
          <CCol sm={6} md={2}>
            <CWidgetStatsC
              icon={<CIcon icon={cilChartPie} height={36} />}
              value="28%"
              title="Product Quantity"
              progress={{ color: 'primary', value: 75 }}
              className="mb-4"
            />
          </CCol>
          <CCol sm={6} md={2}>
            <CWidgetStatsC
              icon={<CIcon icon={cilSpeedometer} height={36} />}
              value="5234"
              title="Item Category"
              progress={{ color: 'danger', value: 75 }}
              className="mb-4"
            />
          </CCol>
          {/* <CCol sm={6} md={2}>
              <CWidgetStatsC
                icon={<CIcon icon={cilSpeech} height={36} />}
                value="972"
                title=""
                progress={{ color: 'info', value: 75 }}
                className="mb-4"
              />
            </CCol> */}
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default WidgetsLucky
