/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
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
  cilEyedropper,
  cilPen,
  cilPeople,
  cilTrash,
  cilWallet,
  //cidPen

  // cilBasket
  //cilPen
  // cilEye
  //cilEye,
  //cilDelete,
} from '@coreui/icons'
import { gameData } from './game.service'

const GameScreen = ({
  setCurrentScreen,
  onClickAddGameBtn,
  editGame,
  setEditGame,
  onClickViewBtn,
  onClickEditBtn,
  // onClickDeleteBtn,
}) => {
  const [searchedText, setSearchedText] = useState('')
  const [searchData, setSearchData] = useState([])
  //
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              Game Page
              <CButton
                style={{ marginLeft: '12px' }}
                color="primary"
                onClick={() => {
                  console.log('click add')
                  //setCurrentScreen(1)
                  onClickAddGameBtn()
                }}
              >
                Add Items
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CFormInput
                type="search"
                placeholder="Search games by gamename or date"
                style={{ marginBottom: '16px' }}
                onChange={(e) => {
                  setSearchedText(e.target.value)
                  const filteredData = gameData.filter(
                    (i) =>
                      i.game_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                      i.game_date.toLowerCase().includes(e.target.value.toLowerCase()),
                  )
                  setSearchData(filteredData)
                }}
              />
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
                            icon={cilEyedropper}
                            customClassName="nav-icon"
                            onClick={() => onClickViewBtn(item)}
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
                            onClick={() => {
                              console.log('clicked')
                              onClickEditBtn(item)
                            }}
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

export default GameScreen

GameScreen.propTypes = {
  setCurrentScreen: PropTypes.any,
  onClickAddGameBtn: PropTypes.any,
  editGame: PropTypes.any,
  setEditGame: PropTypes.any,
  onClickViewBtn: PropTypes.any,
  onClickEditBtn: PropTypes.any,
  // :PropTypes.any,
  // :PropTypes.any,
}
