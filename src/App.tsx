import React from 'react';
import './App.css';
import Button from './components/Button';
import MenuDemo from './demos/menu-demo'
function App() {

  return (
    <div className="App">
      <MenuDemo></MenuDemo>
      {/* button的demo演示 */}
      <Button
        size='lg'
        btnType='primary'
        disabled 
      >primary</Button>
        <Button
        size='sm'
        btnType='danger'
      >danger</Button>
      <Button
        size='sm'
        btnType='default'
      >default</Button>
      <Button
       onClick={(e)=>{e.preventDefault();alert(123)}}
      >default</Button>
      <Button
        size='lg'
        btnType='link'
        href='https://zh-hans.reactjs.org/docs/create-a-new-react-app.html'
      >default link</Button>
      <div>22</div>
    </div>
  );
}

export default App;
