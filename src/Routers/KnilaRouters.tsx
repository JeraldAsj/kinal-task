import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navigation} from '../Layout'
import {Customers,Products,ContactUs,AboutUs, NotFound, AddCustomer,} from '../Pages'
type Props = {}

const KnilaRouters = (props: Props) => {
  return (
    <Router>
    <div>
      {/* <Navigation /> */}
<Routes>
        <Route path="/"   Component={Customers} />
        <Route path="/products" Component={Products} />
        <Route path="/contactus" Component={ContactUs} />
        <Route path="/aboutus" Component={AboutUs} />
        <Route path="/addcustomer" Component={AddCustomer} />
        <Route path="/*" Component={NotFound} />
        {/* Add more routes as needed */}
        </Routes>
    </div>
  </Router>

  )
}

export default KnilaRouters