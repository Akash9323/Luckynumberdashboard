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
  //cidPen
  
  // cilBasket
  //cilPen
  // cilEye
  //cilEye,
  //cilDelete,
} from '@coreui/icons'
import { gameData } from './game.service'


const Game = () => {
  //

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Game Page</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Game Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Game Date</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Game Time</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Game Details</CTableHeaderCell>
                   
                    
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                 <CTableBody>
                  {gameData.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src="../../assets/images/avatars/1.jpg">
                          {item.game_name.split(' ')[0][0]}
                        </CAvatar>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.game_name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-center">{item.game_date}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.game_time}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.game_details_id}</div>
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

export default Game
