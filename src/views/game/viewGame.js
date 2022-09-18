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
const ViewGame = ({onClickBack,editGame}) => {
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
        Game Details
      </CCardHeader>
      <CCardBody>
       <div>{editGame.editItem.game_name}</div>
       <div>{editGame.editItem.game_date}</div>
       <div>{editGame.editItem.game_time}</div>
       <div>{editGame.editItem.game_details}</div>
      </CCardBody>
    </CCard>
  )
}

export default ViewGame

ViewGame.propTypes = {
  onClickBack:PropTypes.any,
  editGame:PropTypes.object,
}
