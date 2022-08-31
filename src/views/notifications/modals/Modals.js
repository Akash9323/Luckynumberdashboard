/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CPopover,
  CRow,
  CTooltip,
} from '@coreui/react'
 //import { DocsExample } from 'src/components'

// const LiveDemo = () => {
//   const [visible, setVisible] = useState(false)
//   return (
//     <>
//       <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
//       <CModal visible={visible} onClose={() => setVisible(false)}>
//         <CModalHeader>
//           <CModalTitle>Modal title</CModalTitle>
//         </CModalHeader>
//         <CModalBody>Woohoo, you&#39;re reading this text in a modal!</CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//           <CButton color="primary">Save changes</CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   )
// }

// const ScrollingLongContent2 = () => {
//   const [visible, setVisible] = useState(false)
//   return (
//     <>
//       <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
//       <CModal scrollable visible={visible} onClose={() => setVisible(false)}>
//         <CModalHeader>
//           <CModalTitle>Modal title</CModalTitle>
//         </CModalHeader>
      
     
//       </CModal>
//     </>
//   )
// }





// const TooltipsPopovers = () => {
//   const [visible, setVisible] = useState(false)
//   return (
//     <>
//       <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
//       {/* <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
//         <CModalHeader>
//           <CModalTitle>Modal title</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <h5>Popover in a modal</h5>
//           <p>
//             This
//             <CPopover title="Popover title" content="Popover body content is set in this property.">
//               <CButton>button</CButton>
//             </CPopover>{' '}
//             triggers a popover on click.
//           </p>
//           <hr />
//           <h5>Tooltips in a modal</h5>
//           <p>
//             <CTooltip content="Tooltip">
//               <CLink>This link</CLink>
//             </CTooltip>{' '}
//             and
//             <CTooltip content="Tooltip">
//               <CLink>that link</CLink>
//             </CTooltip>{' '}
//             have tooltips on hover.
//           </p>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//           <CButton color="primary">Save changes</CButton>
//         </CModalFooter>
//       </CModal> */}
//     </>
//   )
// }

// const OptionalSizes = () => {
//   const [visibleXL, setVisibleXL] = useState(false)
//   const [visibleLg, setVisibleLg] = useState(false)
//   const [visibleSm, setVisibleSm] = useState(false)
//   return (
//     <>
//       <CButton onClick={() => setVisibleXL(!visibleXL)}>Extra large modal</CButton>
//       <CButton onClick={() => setVisibleLg(!visibleLg)}>Large modal</CButton>
//       <CButton onClick={() => setVisibleSm(!visibleSm)}>Small large modal</CButton>
//       <CModal size="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
//         <CModalHeader>
//           <CModalTitle>Extra large modal</CModalTitle>
//         </CModalHeader>
//         <CModalBody>...</CModalBody>
//       </CModal>
//       <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
//         <CModalHeader>
//           <CModalTitle>Large modal</CModalTitle>
//         </CModalHeader>
//         <CModalBody>...</CModalBody>
//       </CModal>
//       <CModal size="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
//         <CModalHeader>
//           <CModalTitle>Small modal</CModalTitle>
//         </CModalHeader>
//         <CModalBody>...</CModalBody>
//       </CModal>
//     </>
//   )
// }

// const FullscreenModal = () => {
//   const [visible, setVisible] = useState(false)
//   const [visibleSm, setVisibleSm] = useState(false)
//   const [visibleMd, setVisibleMd] = useState(false)
//   const [visibleLg, setVisibleLg] = useState(false)
//   const [visibleXL, setVisibleXL] = useState(false)
//   const [visibleXXL, setVisibleXXL] = useState(false)

//   return (
//     <>
//       <CButton onClick={() => setVisible(!visible)}>Full screen</CButton>
//       <CButton onClick={() => setVisibleSm(!visibleSm)}>Full screen below sm</CButton>
//       <CButton onClick={() => setVisibleMd(!visibleMd)}>Full screen below md</CButton>
//       <CButton onClick={() => setVisibleLg(!visibleLg)}>Full screen below lg</CButton>
//       <CButton onClick={() => setVisibleXL(!visibleXL)}>Full screen below xl</CButton>
//       <CButton onClick={() => setVisibleXXL(!visibleXXL)}>Full screen below xxl</CButton>
//       <CModal fullscreen visible={visible} onClose={() => setVisible(false)}>
//         <CModalHeader>
//           <CModalTitle>Full screen</CModalTitle>
//         </CModalHeader>
//         <CModalBody>...</CModalBody>
//       </CModal>
//       <CModal fullscreen="sm" visible={visibleSm} onClose={() => setVisibleSm(false)}>
//         <CModalHeader>
//           <CModalTitle>Full screen below sm</CModalTitle>
//         </CModalHeader>
//         <CModalBody>...</CModalBody>
//       </CModal>
//       <CModal fullscreen="md" visible={visibleMd} onClose={() => setVisibleMd(false)}>
//         <CModalHeader>
//           <CModalTitle>Full screen below md</CModalTitle>
//         </CModalHeader>
//         <CModalBody>...</CModalBody>
//       </CModal>
//       <CModal fullscreen="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
//         <CModalHeader>
//           <CModalTitle>Full screen below lg</CModalTitle>
//         </CModalHeader>
//         <CModalBody>...</CModalBody>
//       </CModal>
//       <CModal fullscreen="xl" visible={visibleXL} onClose={() => setVisibleXL(false)}>
//         <CModalHeader>
//           <CModalTitle>Full screen below xl</CModalTitle>
//         </CModalHeader>
//         <CModalBody>...</CModalBody>
//       </CModal>
//       <CModal fullscreen="xxl" visible={visibleXXL} onClose={() => setVisibleXXL(false)}>
//         <CModalHeader>
//           <CModalTitle>Full screen below xxl</CModalTitle>
//         </CModalHeader>
//         <CModalBody>...</CModalBody>
//       </CModal>
//     </>
//   )
// }

const Modals = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          
          <CCardBody>
            {/* <DocsExample href="components/modal"> */}
              <CModal
                className="show d-block position-static"
                backdrop={false}
                keyboard={false}
                portal={false}
                visible
              >
                <CModalHeader>
                  <CModalTitle>Prime Minister of India ?</CModalTitle>
                </CModalHeader>
                <CModalBody>Choose The Correct Option</CModalBody>
                <CModalFooter>
                  <CButton color="secondary">A.Yogi Adityanath</CButton>
                  <CButton color="primary">B.Narendra Modi</CButton>
                  <CButton color="secondary">C.Rahul Gandhi</CButton>
                  <CButton color="primary">D.Naveen Pattnaik</CButton>
                </CModalFooter>
              </CModal>
            {/* </DocsExample> */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Modals;
