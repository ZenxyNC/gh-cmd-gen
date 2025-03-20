import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './page-component/home'

export default function() {


  return(
    <Router basename="/gh-cmd-gen">
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/gh-cmd-gen/" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}