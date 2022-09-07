/* eslint-disable prettier/prettier */
import React from 'react'
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
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
  cilPeople,
  cilWallet,
  cilPen,
  //cidPen
  //cibCodepen,
  cilTrash,
  // cilBasket
  //cilPen
  // cilEye
  //cilEye,
  //cilDelete,
} from '@coreui/icons'
import { playerData } from './player.service'

const Players = () => {
  //

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Player Details</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Address</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">user Id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Wallet Id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Referred By</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Gameplayer</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {playerData.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src="../../assets/images/avatars/1.jpg">
                          {item.player_name.split(' ')[0][0]}
                        </CAvatar>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.player_name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-center">{item.player_address}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user_id}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.wallet_id}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.referred_by}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.gameplayer}</div>
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
                            icon={cilPen}
                            customClassName="nav-icon"
                          />
                          <CIcon
                            style={{
                              height: '20px',
                              width: '20px',
                              color: 'red',
                              cursor: 'pointer',
                            }}
                            icon={cilTrash}
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

export default Players
