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
const ViewItems = ({onClickBack,editItems}) => {
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
        Item Details
      </CCardHeader>
      <CCardBody>
       <div>{editItems.editItem.items_name}</div>
       <div>{editItems.editItem.items_description}</div>
       <div>{editItems.editItem.items_price}</div>
       <div>{editItems.editItem.items_qty}</div>
       <div>{editItems.editItem.items_category}</div>
       <div>{editItems.editItem.items_purchasetype}</div>
      </CCardBody>
    </CCard>
  )
}

export default ViewItems

ViewItems.propTypes = {
  onClickBack:PropTypes.any,
  editItems:PropTypes.object,
}
