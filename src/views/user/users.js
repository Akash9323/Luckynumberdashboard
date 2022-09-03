/* eslint-disable prettier/prettier */
import React from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilPeople,
  cilWallet,
  cilPen,
  //cidPen
  cibCodepen,
  // cilBasket
  //cilEye,
  //cilPen
  // cilEye
  //cilEye,
  //cilDelete,
} from '@coreui/icons'
import { userData } from './user.service'

const Users = () => {
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>User Details</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Phone Number</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Email Id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Role</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {userData.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src="../../assets/images/avatars/1.jpg">
                          {item.user_name.split(' ')[0][0]}
                        </CAvatar>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user_name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-center">{item.user_number}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user_email}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.role_name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>
                          <CIcon
                            style={{
                              height: '20px',
                              width: '20px',
                              color: 'black',
                              cursor: 'pointer',
                            }}
                            icon={cilWallet}
                            customClassName="nav-icon"
                          />
                          <CIcon
                            style={{
                              height: '20px',
                              width: '20px',
                              margin: '0 12px',
                              color: 'blue',
                              cursor: 'pointer',
                            }}
                            icon={cilWallet}
                            customClassName="nav-icon"
                          />
                          <CIcon
                            style={{
                              height: '20px',
                              width: '20px',
                              color: 'red',
                              cursor: 'pointer',
                            }}
                            icon={cilWallet}
                            customClassName="nav-icon"
                          />
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Users
