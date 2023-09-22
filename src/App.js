import React from 'react';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Detail from './components/Detail';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/list-detail" element={<Detail />} />
          {/* <Route path="/list-detail/:index" element={<Detail />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;






// import React from 'react'
// import Navbar from './components/Navbar'
// import Todo from './components/Todo'
// import Detail from './components/Detail'
// import { Provider } from 'react-redux';
// import store , {persistor} from './store';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// function App() {
//   return (
//     <Provider store={store}>
//   <PersistGate  persistor={persistor}>
//       <BrowserRouter>
//      <Navbar />
//       <Routes>
//         <Route path='/' element={<Todo />}/>
//         <Route path='/list-detail' element={<Detail />}/>
//       </Routes>
//     </BrowserRouter>
//     </PersistGate>
//     </Provider>
    
//   )
// }

// export default App