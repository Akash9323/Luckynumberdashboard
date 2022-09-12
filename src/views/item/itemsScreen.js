/* eslint-disable prettier/prettier */


/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  // CCol,
  CFormInput,
  CPagination,
  CPaginationItem,
  // CProgress,
  // CRow,
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
   cilTrash,
    cilPen,
     //cilEye,
     cilEyedropper,
     } from '@coreui/icons'
import { itemsData } from './item.service'

const ItemsScreen = ({
  setCurrentScreen,
  onClickAddItemsBtn,
  editItems,
  setEditItems,
  onClickViewBtn,
 onClickEditBtn,
//  onClickDeleteBtn,
}) => {
  const [searchedText, setSearchedText] = useState('')
  const [searchData, setSearchData] = useState([])
  //const pageCount= Math.ceil(itemsData.length/10);
  //console.log('props', props)
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Items Details
          <CButton
            style={{ marginLeft: '12px' }}
            color="primary"
            onClick={() => {
              console.log('click add')
               //setCurrentScreen(1)
               onClickAddItemsBtn();
            }}
          >
            Add Items
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CFormInput
            type="search"
            placeholder="Search items by itemsname or price"
            style={{ marginBottom: '16px' }}
            onChange={(e) => {
              setSearchedText(e.target.value)
              const filteredData = itemsData.filter(
                (i) =>
                  i.items_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                  i.items_email.toLowerCase().includes(e.target.value.toLowerCase()),
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
                <CTableHeaderCell className="text-center">Description</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Price</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Qty</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Category</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Purchase Type</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {(searchedText !== '' ? searchData : itemsData).map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell className="text-center">
                    <CAvatar size="md" src="../../assets/images/avatars/1.jpg">
                      {item.items_name.split(' ')[0][0]}
                    </CAvatar>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{item.items_description}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="small text-center">{item.items_price}</div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <div>{item.items_qty}</div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <div>{item.items_category}</div>
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
              onClickEditBtn(item);
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
    </>
  )
}

export default ItemsScreen

ItemsScreen.propTypes = {
  setCurrentScreen:PropTypes.any,
  onClickAddItemsBtn:PropTypes.any,
  editItems:PropTypes.object,
  setEditItems:PropTypes.any,
  onClickViewBtn:PropTypes.any,
  onClickEditBtn:PropTypes.any,
  onClickDeleteBtn:PropTypes.any,
}



// import React from 'react'

// const itemsScreen = () => {
//   return (
//     <div>
//     <h1>itemsScreen</h1>
//     </div>
//   )
// }

// export default itemsScreen