/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Tables = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable bordered borderColor="primary">
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">0</CTableHeaderCell>
                  <CTableDataCell>4</CTableDataCell>
                  <CTableDataCell>5</CTableDataCell>
                  <CTableDataCell>6</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>7</CTableDataCell>
                  <CTableDataCell>8</CTableDataCell>
                  <CTableDataCell>9</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>10</CTableDataCell>
                  <CTableDataCell>11</CTableDataCell>
                  <CTableDataCell>12</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">3</CTableHeaderCell>
                  <CTableDataCell>13</CTableDataCell>
                  <CTableDataCell>14</CTableDataCell>
                  <CTableDataCell>15</CTableDataCell>
                </CTableRow>
                
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
