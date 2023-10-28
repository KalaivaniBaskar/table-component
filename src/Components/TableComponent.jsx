import React from 'react'

const TableComponent = ({data}) => { 
    const headings = Object.keys(data[0])
  return (
    <div className='overflow-auto p-4 box-border bg-gray-400 rounded-lg w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 2xl:w-5/12 mx-auto' >
        <table className='w-full bg-gray-50'>
            <thead className='bg-teal-200'>
                <tr>
                   { 
                   headings.map( (col_name, idx) => (
                   <th className='uppercase text-sm p-2 text-left border-b-2 border-slate-400' 
                   key={idx}>
                    {col_name}
                    </th>)
                   )}
                </tr>
            </thead>
            <tbody>
               {
                data.map ( (row, row_idx) => (
                <tr key={row_idx} 
                className='cursor-pointer hover:bg-white hover:text-blue-700 hover:font-semibold'>
                {
                    headings.map((col_name, col_idx) => (
                        <td key={`${row_idx}-${col_idx}`} 
                        className='p-2 text-sm text-left border-b-2 border-slate-400 '>
                            {row[col_name]}
                        </td>
                    ))
                }
                </tr>
                )
               )}
            </tbody>
        </table>
    </div>
  )
}

export default TableComponent