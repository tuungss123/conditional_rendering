
import ShinyButton from './components/Conditional-Demo-1'
import RainOrShine from './components/Conditional-Demo-2'
import ShineOrRain from './components/Conditional-Demo-3'
import IsItRaining from './components/Conditional-Demo-4'
function App() {
  

  return (<>
    <div className='flex justify-around'>
      <div className='flex flex-col'>
        <h1 className='text-[30px]'>DEMO 1</h1>
        <ShinyButton/>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-[30px]'>DEMO 2</h1>
        <RainOrShine isRainy={true}/>
      </div>
        <div className='flex flex-col'>
        <h1 className='text-[30px]'>DEMO 3</h1>
        <ShineOrRain isRainy={false}/>
      </div>
        <div className='flex flex-col'>
        <h1 className='text-[30px]'>DEMO 4</h1>
        <IsItRaining isRainyy={true}/>
      </div>

    </div>
  </>)
}

export default App
