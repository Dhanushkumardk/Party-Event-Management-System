import React from 'react'
import { AdminNavbar } from './AdminNavbar'

export default function AdDashboard() {
  return (
    <>
    <AdminNavbar/>
    <div className='mainx'>
        
        <div className='shadow bg-white'>
          <table className='data-table'>
            <thead>
              <tr>
              <th>
                  Booking Id
                </th>
                <th>
                  Name
                </th>
                <th>
                  Date
                </th>
                <th>
                  Event Type
                </th>
                <th>
                  Head Count
                </th>
                <th>
                  action
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  )
}
