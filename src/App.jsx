import './App.css';

import { Registration, Map, CountDown } from './components';

function App() {

  return (
    <>
      <section className='min-h-screen bg-[#0B1531] text-center flex flex-col justify-center items-center'>
        <h1 className='text-[50px] font-black blue-text-gradient'>
          Interactive React-Pop-Ups
        </h1>

        <div className='flex flex-wrap justify-center items-center gap-4'>
          <Registration />
          <Map />
          <CountDown />
        </div>
      </section>
    </>
  )
}

export default App
