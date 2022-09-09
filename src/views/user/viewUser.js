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
const ViewUser = ({onClickBack,editUser}) => {
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
        User Details
      </CCardHeader>
      <CCardBody>
       <div>{editUser.editItem.user_name}</div>
       <div>{editUser.editItem.user_email}</div>
       <div>{editUser.editItem.user_number}</div>
       <div>{editUser.editItem.role_name}</div>
      </CCardBody>
    </CCard>
  )
}

export default ViewUser

ViewUser.propTypes = {
  onClickBack:PropTypes.any,
  editUser:PropTypes.object,
}
