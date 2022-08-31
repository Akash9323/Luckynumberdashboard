/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

import ReactImg from 'src/assets/images/admin.jpg'

const Cards = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CCard style={{ width: '18rem' }}>
              <CCardImage orientation="top" src={ReactImg} />
              <CCardBody>
                <CCardTitle>Admin Account</CCardTitle>
                <CCardText>Admin Have the Full Authentication To Manage all events.</CCardText>
                <CButton href="#">Edit Profile</CButton>
              </CCardBody>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards;
