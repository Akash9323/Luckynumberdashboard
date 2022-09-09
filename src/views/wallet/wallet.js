/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPen,
  cilPeople,
  cilTrash,
  cilWallet,
  //cidPen
  
  // cilBasket
  //cilPen
  // cilEye
  //cilEye,
  //cilDelete,
} from '@coreui/icons'
import { walletData } from './wallet.service'



const Wallet = () => {
  //

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Wallet Page</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Wallet Amount</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Wallet Details</CTableHeaderCell>
                    {/* <CTableHeaderCell className="text-center">Transaction Date</CTableHeaderCell> */}
                    <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                 <CTableBody>
                  {walletData.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src="../../assets/images/avatars/1.jpg">
                          {item.wallet_amount.split(' ')[0][0]}
                        </CAvatar>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.wallet_amount}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-center">{item.wallet_details}</div>
                      </CTableDataCell>
                     
                      <CTableDataCell className="text-center">
                        <div>
                          <CIcon
                            style={{
                              height: '20px',
                              width: '20px',
                              color: 'black',
                              cursor: 'pointer',
                            }}
                            icon={cilWallet}
                            customClassName="nav-icon"
                          />
                          <CIcon
                            style={{
                              height: '20px',
                              width: '20px',
                              margin: '0 12px',
                              color: 'blue',
                              cursor: 'pointer',
                            }}
                            icon={cilPen}
                            customClassName="nav-icon"
                          />
                          <CIcon
                            style={{
                              height: '20px',
                              width: '20px',
                              color: 'red',
                              cursor: 'pointer',
                            }}
                            icon={cilTrash}
                            customClassName="nav-icon"
                          />
                        </div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody> 
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default Wallet




































// import React from 'react'

// import WidgetsDropdown from '../widgets/WidgetsDropdown';

// const wallet = () => {
//   return (
//     <div>
//    <h1>Wallet Section</h1> 

//    <WidgetsDropdown />
//     </div>
//   )
// }

// export default wallet;