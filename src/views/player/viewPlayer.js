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
const ViewPlayer = ({onClickBack,editPlayer}) => {
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
        Player Details
      </CCardHeader>
      <CCardBody>
       <div>{editPlayer.editItem.player_name}</div>
       <div>{editPlayer.editItem.player_address}</div>
       <div>{editPlayer.editItem.player_refferedby}</div>
       {/* <div>{editPlayer.editItem.role_name}</div> */}
      </CCardBody>
    </CCard>
  )
}

export default ViewPlayer

ViewPlayer.propTypes = {
  onClickBack:PropTypes.any,
  editPlayer:PropTypes.object,
}
