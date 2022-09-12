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
  const ItemsForm = (
   { onClickBack,
    onSubmit,
    onUpdate,
    onChangeItemsName,
    onChangeDescription,
    onChangePrice,
    onChangeQty,
    onChangeCategory,
    onChangePurchasetype,
    itemsName,
    Description,
    Price,
   
    editItems,}
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
          {editItems.isEditing ? 'Edit Items' : 'Add Items'}
        </CCardHeader>
        <CCardBody>
          <CRow xs={{ gutterY: 2 }}>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Items Name</CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Name"
                  required
                  value={itemsName}
                  onChange={onChangeItemsName}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Items Description</CFormLabel>
                <CFormInput
                  type="text"
                  size="lg"
                  placeholder="Description"
                  required
                  value={Description}
                  onChange={onChangeDescription}
                />
              </CForm>
            </CCol>
            <CCol sm={12} md={6}>
              <CForm>
                <CFormLabel htmlFor="exampleFormControlInput1">Items Price</CFormLabel>
                <CFormInput
                  type="number"
                  size="lg"
                  placeholder="Price"
                  required
                  value={Price}
                  onChange={onChangePrice}
                />
              </CForm>
            </CCol>
          
          </CRow>
          <hr />
          <CButton onClick={editItems.isEditing ? onUpdate : onSubmit}>Submit</CButton>
        </CCardBody>
      </CCard>
    )
  }
  
  export default ItemsForm

  ItemsForm.propTypes = {
    // onOpenEditUser:PropTypes.any,
    // onChange:PropTypes.any,
    onClickBack:PropTypes.any,
    onSubmit:PropTypes.any,
    onUpdate:PropTypes.any,
    onDiscard:PropTypes.any,
    onChangeItemsName:PropTypes.any,
    onChangeDescription:PropTypes.any,
    onChangePrice:PropTypes.any,
    onChangeQty:PropTypes.any,
    onChangeCategory:PropTypes.any,
    onChangePurchasetype:PropTypes.any,
    onOpenEditItems:PropTypes.any,
    itemsName:PropTypes.any,
    description:PropTypes.any,
    Price:PropTypes.any,
    Description:PropTypes.any,
    editItems:any,
  }
 