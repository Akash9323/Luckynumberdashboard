/* eslint-disable prettier/prettier */

import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { CChartDoughnut, CChartPie } from '@coreui/react-chartjs'

const Charts = () => {
  return (
    <CRow>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Country Chart</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['India', 'Singapore', 'UK', 'USA'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>State Chart</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Cambridge', 'Bradford', 'Carlisle'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}></CCol>
    </CRow>
  )
}

export default Charts
