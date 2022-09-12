/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
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
  CButton,
  CFormInput,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilWallet, cilPen, cilTrash } from '@coreui/icons'
import { playerData } from './player.service'

const PlayersScreen = ({
  setCurrentScreen,
  onClickAddPlayerBtn,
  editPlayer,
  setEditPlayer,
  onClickViewBtn,
  onClickEditBtn,
}) => {
  const [searchedText, setSearchedText] = useState('')
  const [searchData, setSearchData] = useState([])
  //const pageCount= Math.ceil(userData.length/10);
  //console.log('props', props)

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              Player Details
              <CButton
                style={{ marginLeft: '12px' }}
                color="primary"
                onClick={() => {
                  console.log('click add')
                  //setCurrentScreen(1)
                  onClickAddPlayerBtn()
                }}
              >
                Add Player
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CFormInput
                type="search"
                placeholder="Search user by name or email"
                style={{ marginBottom: '16px' }}
                onChange={(e) => {
                  setSearchedText(e.target.value)
                  const filteredData = playerData.filter(
                    (i) =>
                      i.player_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                      i.player_address.toLowerCase().includes(e.target.value.toLowerCase()),
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
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Address</CTableHeaderCell>
                    {/* <CTableHeaderCell className="text-center">user Id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Wallet Id</CTableHeaderCell> */}
                    <CTableHeaderCell className="text-center">Referred By</CTableHeaderCell>
                    {/* <CTableHeaderCell className="text-center">Gameplayer</CTableHeaderCell> */}
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {(searchedText !== '' ? searchData : playerData).map((item, index) => (
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
                      {/* <CTableDataCell className="text-center">
                        <div>{item.user_id}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.wallet_id}</div>
                      </CTableDataCell> */}
                      <CTableDataCell className="text-center">
                        <div>{item.referred_by}</div>
                      </CTableDataCell>
                      {/* <CTableDataCell className="text-center">
                        <div>{item.gameplayer}</div>
                      </CTableDataCell> */}
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
              <CPagination
                align="end"
                aria-label="Page navigation example"
                style={{ marginTop: '16px' }}
              >
                <CPaginationItem aria-label="Previous" disabled>
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                {/* <CPaginationItem active>1</CPaginationItem>
            <CPaginationItem>2</CPaginationItem>
            <CPaginationItem>3</CPaginationItem> */}
                {Array(1)
                  .fill(0)
                  .map((i, index) => (
                    <CPaginationItem key={index}>{index + 1}</CPaginationItem>
                  ))}
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default PlayersScreen

PlayersScreen.propTypes = {
  setCurrentScreen: PropTypes.any,
  onClickAddPlayerBtn: PropTypes.any,
  editPlayer: PropTypes.object,
  setEditPlayer: PropTypes.any,
  onClickViewBtn: PropTypes.any,
  onClickEditBtn: PropTypes.any,
  onClickDeleteBtn: PropTypes.any,
}
