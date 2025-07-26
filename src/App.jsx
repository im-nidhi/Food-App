

// import React from 'react'
// import Index from './Components/Index'
// // import img from './Components/Images/foodie.webp'

// const App = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//       <Index name='nidhi' description="......" />
//     </div>
//   )
// }

// export default App
// 


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Div from './Components/Div'; 
import Signout from './components/Signout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/div" element={<Div />} />
      </Routes>
      <Signout />
    </Router>
  );
}

export default App;
