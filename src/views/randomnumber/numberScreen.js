/* eslint-disable prettier/prettier */
import React, {  useState } from 'react'
import PropTypes, { any } from 'prop-types'

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
import {
  cilEyedropper,
  cilPen,
  cilPeople,
  cilTrash,
  //cilWallet,
  //cidPen
  
  // cilBasket
  //cilPen
  // cilEye
  //cilEye,
  //cilDelete,
} from '@coreui/icons'
import { numberData } from './number.service'

const NumberScreen = ({
  //  setCurrentScreen,
   onClickAddNumberBtn,
  //    editNumber,
  //   setEditNumber,
    onClickViewBtn,
  //   onClickEditBtn,
//  onClickDeleteBtn,
}) => {
  const [searchedText, setSearchedText] = useState('')
  const [searchData, setSearchData] = useState([])
  //const pageCount= Math.ceil(itemsData.length/10);
  //console.log('props', props)
  //

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
            Random Number Page
            <CButton
            style={{ marginLeft: '12px' }}
            color="primary"
            onClick={() => {
              console.log('click add')
               //setCurrentScreen(1)
               onClickAddNumberBtn();
            }}
          >
            Add Range
          </CButton>
            </CCardHeader>
            <CCardBody>

            <CFormInput
            type="search"
            placeholder="Search by numbers"
            style={{ marginBottom: '16px' }}
            onChange={(e) => {
              setSearchedText(e.target.value)
              const filteredData = numberData.filter(
                (i) =>
                  i.number_start.toLowerCase().includes(e.target.value.toLowerCase()) ||
                  i.number_end.toLowerCase().includes(e.target.value.toLowerCase()),
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
                    <CTableHeaderCell>Randomnumber start</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Randomnumber end</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                    {/* <CTableHeaderCell className="text-center">Game Details</CTableHeaderCell>  
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell> */}
                  </CTableRow>
                </CTableHead>
                 <CTableBody>
                 {(searchedText !== '' ? searchData : numberData).map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src="../../assets/images/avatars/1.jpg">
                          {item.number_name.split(' ')[0][0]}
                        </CAvatar>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.number_start}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-center">{item.number_end}</div>
                      </CTableDataCell>
                      {/* <CTableDataCell className="text-center">
                        <div>{item.game_time}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.game_details_id}</div>
                      </CTableDataCell> 
                      */}
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
                        onClick={()=>onClickViewBtn(item)}
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
              console.log('clicked');
              //onClickEditBtn(item);
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

export default NumberScreen

NumberScreen.propTypes = {
  onClickAddNumberBtn:PropTypes.any,
  onClickViewBtn:PropTypes.any,

}

