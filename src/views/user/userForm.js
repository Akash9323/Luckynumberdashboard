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
    CFormSelect,
    CRow,
  } from '@coreui/react'
  import React from 'react'
  import {
    cilArrowThickLeft,
  } from '@coreui/icons'
  import CIcon from '@coreui/icons-react'
  const UserForm = (
   { onClickBack,
    onSubmit,
    onUpdate,
    onChangeUserName,
    onChangeEmail,
    onChangeMobileNo,
    //onChangePassword,
    onChangeRole,
    onOpenEditUser,
    userName,
    email,
    mobileNo,
    //password,
    role,
    editUser,}
  ) => {
     useEffect(() => {
      if (editUser.isEditing) {
        onOpenEditUser();
       }
     }, [editUser?.isEditing]);
  
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
          {editUser.isEditing ? 'Edit User' : 'Add User'}
        </CCardHeader>
        <CCardBody>
          <CRow xs={{ gutterY: 2 }}>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">User Name</CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Name"
                  required
                  value={userName}
                  onChange={onChangeUserName}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">User MobileNo</CFormLabel>
                <CFormInput
                  type="number"
                  size="lg"
                  placeholder="Mobile No."
                  required
                  value={mobileNo}
                  onChange={onChangeMobileNo}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1"> User Email </CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={onChangeEmail}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <label className="mb-2" >Role</label>
              <CFormSelect size="lg" className="mb-3" required value={role} onChange={onChangeRole}>
                <option>Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </CFormSelect>
            </CCol>
          </CRow>
          <hr />
          <CButton onClick={editUser.isEditing ? onUpdate : onSubmit}>Submit</CButton>
        </CCardBody>
      </CCard>
    )
  }
  
  export default UserForm

  UserForm.propTypes = {
    // onOpenEditUser:PropTypes.any,
    // onChange:PropTypes.any,
    onClickBack:PropTypes.any,
    onSubmit:PropTypes.any,
    onUpdate:PropTypes.any,
    onDiscard:PropTypes.any,
    onChangeUserName:PropTypes.any,
    onChangeEmail:PropTypes.any,
    onChangeMobileNo:PropTypes.any,
    //onChangePassword,
    onChangeRole:PropTypes.any,
    onOpenEditUser:PropTypes.any,
    userName:PropTypes.any,
    email:PropTypes.any,
    mobileNo:PropTypes.any,
    //password,
    role:PropTypes.any,
    editUser:any,
  }
 