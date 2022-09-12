/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import PropTypes, { any } from 'prop-types'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    //CFormSelect,
    CRow,
  } from '@coreui/react'
  import React from 'react'
  import {
    cilArrowThickLeft,
  } from '@coreui/icons'
  import CIcon from '@coreui/icons-react'
  const PlayerForm = (
   { onClickBack,
    onSubmit,
    onUpdate,
    onChangePlayerName,
    onChangePlayerAddress,
    onChangePlayerRefferedby,
    //onChangePassword,
    //onChangeRole,
    onOpenEditPlayer,
    playerName,
    playerAddress,
    playerRefferedby,
    //password,
    //role,
    editPlayer,}
  ) => {
     useEffect(() => {
      if (editPlayer.isEditing) {
        onOpenEditPlayer();
       }
     }, [editPlayer?.isEditing]);
  
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
            onClick={()=>onClickBack()}
          />
          {editPlayer.isEditing ? 'Edit Player' : 'Add Player'}
        </CCardHeader>
        <CCardBody>
          <CRow xs={{ gutterY: 2 }}>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Player Name</CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Name"
                  required
                  value={playerName}
                  onChange={onChangePlayerName}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Player Address</CFormLabel>
                <CFormInput
                  type="number"
                  size="lg"
                  placeholder="Address"
                  required
                  value={playerAddress}
                  onChange={onChangePlayerAddress}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1"> Player refferedby </CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Referredby"
                  required
                  value={playerRefferedby}
                  onChange={onChangePlayerRefferedby}
                />
              </CForm>
            </CCol>
            {/* <CCol sm={12} md={6}>
              <label className="mb-2" >Role</label>
              <CFormSelect size="lg" className="mb-3" required value={role} onChange={onChangeRole}>
                <option>Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </CFormSelect>
            </CCol> */}
          </CRow>
          <hr />
          <CButton onClick={editPlayer.isEditing ? onUpdate : onSubmit}>Submit</CButton>
        </CCardBody>
      </CCard>
    )
  }
  
  export default PlayerForm

  PlayerForm.propTypes = {
    // onOpenEditUser:PropTypes.any,
    // onChange:PropTypes.any,
    onClickBack:PropTypes.any,
    onSubmit:PropTypes.any,
    onUpdate:PropTypes.any,
    onDiscard:PropTypes.any,
    onChangePlayerName:PropTypes.any,
    onChangePlayerAddress:PropTypes.any,
    onChangePlayerRefferedby:PropTypes.any,
    //onChangePassword,
    //onChangeRole:PropTypes.any,
    onOpenEditPlayer:PropTypes.any,
    playerName:PropTypes.any,
    playerAddress:PropTypes.any,
    // mobileNo:PropTypes.any,
    //password,
    role:PropTypes.any,
    editPlayer:any,
  }
 