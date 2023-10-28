import './App.css'
import TableComponent from './Components/TableComponent'
import { tableData } from './data/tableData'

function App() {

  return (
    <div className='App text-center p-1'>
     <h1 className="border-box py-4 text-xl font-semibold">
      Sample Table
    </h1> 
    {tableData.length > 0 ?
    <TableComponent data={tableData} /> 
    : 
    <p className='taxt-sm text-zinc-800'>No data found</p>
    }
    </div>
  )
}

export default App
