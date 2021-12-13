import React from 'react';
import './App.css';
import Button from './components/Button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
function App() {

  return (
    <div className="App">
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
      <Menu defaultIndex={0} onSelect={(idx)=>{alert(idx)}}>
        <MenuItem index={0}> 11</MenuItem>
        <MenuItem index={1}>11</MenuItem>
        <MenuItem index={2}>11</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
