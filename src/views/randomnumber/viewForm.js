/* eslint-disable prettier/prettier */

import React from 'react'
import {  cilArrowThickLeft } from '@coreui/icons'
import {
    CCard,
    CCardHeader,
    //CIcon,
    CCardBody,

} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import PropTypes from 'prop-types'
const ViewNumber = ({onClickBack,editNumber}) => {
  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CIcon
          style={{
            height: '20px',
            width: '20px',
            margin: '0 12px',
            color: 'blue',
            cursor: 'pointer',
          }}
          icon={cilArrowThickLeft}
          onClick={onClickBack}
          //customClassName="nav-icon"
        />
        Number Details
      </CCardHeader>
      <CCardBody>
       <div>{editNumber.editItem.number_name}</div>
       <div>{editNumber.editItem.number_start}</div>
       <div>{editNumber.editItem.number_end}</div>
       {/* <div>{editItems.editItem.items_qty}</div>
       <div>{editItems.editItem.items_category}</div>
       <div>{editItems.editItem.items_purchasetype}</div> */}
      </CCardBody>
    </CCard>
  )
}

export default ViewNumber

ViewNumber.propTypes = {
  onClickBack:PropTypes.any,
  editNumber:PropTypes.object,
}
