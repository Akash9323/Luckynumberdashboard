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
   // CFormSelect,
    CRow,
  } from '@coreui/react'
  import React from 'react'
  import {
    cilArrowThickLeft,
  } from '@coreui/icons'
  import CIcon from '@coreui/icons-react'
  const NumberForm = (
   { onClickBack,
    onSubmit,
    onUpdate,
    onChangeNumberName,
    onChangeStart,
    onChangeEnd,
    numberName,
    start,
    End,
   
    editNumber,}
  ) => {
    //  useEffect(() => {
    //   if (editItems.isEditing) {
    //     onOpenEditItems();
    //    }
    //  }, [editItems?.isEditing]);
  
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
          {editNumber.isEditing ? 'Edit Number' : 'Add Number'}
        </CCardHeader>
        <CCardBody>
          <CRow xs={{ gutterY: 2 }}>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Number Name</CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Name"
                  required
                  value={numberName}
                  onChange={onChangeNumberName}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Number Start</CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Description"
                  required
                  value={start}
                  onChange={onChangeStart}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Number End</CFormLabel>
                <CFormInput
                  type="number"
                  size="lg"
                  placeholder="Price"
                  required
                  value={End}
                  onChange={onChangeEnd}
                />
              </CForm>
            </CCol>
          
          </CRow>
          <hr />
          <CButton onClick={editNumber.isEditing ? onUpdate : onSubmit}>Submit</CButton>
        </CCardBody>
      </CCard>
    )
  }
  
  export default NumberForm

  NumberForm.propTypes = {
    // onOpenEditUser:PropTypes.any,
    // onChange:PropTypes.any,
    onClickBack:PropTypes.any,
    onSubmit:PropTypes.any,
    onUpdate:PropTypes.any,
    onDiscard:PropTypes.any,
    onChangeNumberName:PropTypes.any,
    onChangeStart:PropTypes.any,
    onChangeEnd:PropTypes.any,
    onOpenEditNumber:PropTypes.any,
    numberName:PropTypes.any,
    start:PropTypes.any,
    End:PropTypes.any,
    editNumber:any,
  }
 