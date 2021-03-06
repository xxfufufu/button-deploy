import React from 'react'
import Button from './Button'
import './styles.scss'

function App() {
  return (
    <>
    <div className='ok'>
      <div className='map one'>
        <code>{`<Button />`}</code>
        <Button></Button>
      </div>
      <div className='map two'>
        <code>{`<Button variant='outline' />`}</code>
        <Button variant='outline'></Button>
      </div>
      <div className='map three'>
        <code>{`<Button variant='text />`}</code>
        <Button variant='text' />
      </div>
      <div className='map four'>
        <code>{`<Button disabledShadow />`}</code>
        <Button disabledShadow></Button>
      </div>
      <div className='map five'>
        <code>{`<Button disabled />`}</code>
        <Button disabled></Button>
      </div>
      <div className='map six'>
        <code>{`<Button startIcon='local_grocery_store' />`}</code>
        <Button startIcon='local_grocery_store'></Button>
      </div>
      <div className='map seven'>
        <code>{`<Button startIcon='local_grocery_store' />`}</code>
        <Button endIcon='local_grocery_store'></Button>
      </div>
      <div className='map eight'>
        <code>{`<Button size='sm' />`}</code>
        <Button size='sm'></Button>
      </div>
      <div className='map nine'>
        <code>{`<Button size='md' />`}</code>
        <Button size='md'></Button>
      </div>
      <div className='map ten'>
        <code>{`<Button size='lg' />`}</code>
        <Button size='lg'></Button>
      </div>
      <div className='map ichi'>
        <code>{`<Button color='default' />`}</code>
        <Button color='default'></Button>
      </div>
      <div className='map ni'>
        <code>{`<Button color='primary' />`}</code>
        <Button color='primary'></Button>
      </div>
      <div className='map san'>
        <code>{`<Button color='secondary' />`}</code>
        <Button color='secondary'></Button>
      </div>
      <div className='map yon'>
        <code>{`<Button color='danger' />`}</code>
        <Button color='danger'></Button>
      </div>
    </div>
    </>
    );
}

export default App;
