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
  const GameForm = (
   { onClickBack,
    onSubmit,
    onUpdate,
    onChangeGameName,
    onChangeDate,
    onChangeTime,
    onChangeDetails,
  
    gameName,
    date,
    Time,
    Details,
   
    editGame,}
  ) => {
    //  useEffect(() => {
    //   if (editGame.isEditing) {
    //     onOpenEditGame();
    //    }
    //  }, [editGame?.isEditing]);
  
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
          {editGame.isEditing ? 'Edit Game' : 'Add Game'}
        </CCardHeader>
        <CCardBody>
          <CRow xs={{ gutterY: 3 }}>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Game Name</CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Name"
                  required
                  value={gameName}
                  onChange={onChangeGameName}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Game Date</CFormLabel>
                <CFormInput
                  type="number"
                  size="lg"
                  placeholder="Date"
                  required
                  value={Date}
                  onChange={onChangeDate}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Game Time</CFormLabel>
                <CFormInput
                  type="number"
                  size="lg"
                  placeholder="Time"
                  required
                  value={Time}
                  onChange={onChangeTime}
                />
              </CForm>
              </CCol>
              <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Game Details</CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Details"
                  required
                  value={Details}
                  onChange={onChangeDetails}
                />
              </CForm>
              </CCol>
              <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Winning No</CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Winning No"
                  required
                  value={Details}
                  onChange={onChangeDetails}
                />
              </CForm>
              </CCol>
              <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Winning Ratio</CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Winning Ratio"
                  required
                  value={Details}
                  onChange={onChangeDetails}
                />
              </CForm>
              </CCol>
           
          
          </CRow>
          <hr />
          <div style={{display:'flex',justifyContent:'flex-end'}}>
          <CButton onClick={editGame.isEditing ? onUpdate : onSubmit}>Submit</CButton>
          </div>
        </CCardBody>
      </CCard>
    )
  }
  
  export default GameForm

  GameForm.propTypes = {
    // onOpenEditUser:PropTypes.any,
    // onChange:PropTypes.any,
    onClickBack:PropTypes.any,
    onSubmit:PropTypes.any,
    onUpdate:PropTypes.any,
    onDiscard:PropTypes.any,
    onChangeGameName:PropTypes.any,
    onChangeDate:PropTypes.any,
    onChangeTime:PropTypes.any,
    onChangeDetails:PropTypes.any,
    onOpenEditGame:PropTypes.any,
    gameName:PropTypes.any,
    date:PropTypes.any,
    Time:PropTypes.any,
    Details:PropTypes.any,
    editGame:any,
  }
 