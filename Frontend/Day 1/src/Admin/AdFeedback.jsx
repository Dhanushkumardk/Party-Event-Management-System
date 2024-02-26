import React from 'react'
import { AdminNavbar } from './AdminNavbar'

export default function AdFeedback() {
  return (
    <>
    <AdminNavbar/>
    <div className='mainx'>

        <div className='shadow bg-white'>
          <table className='data-table'>
            <thead>
              <tr>
                <th>
                  Feedback ID
                </th>
                <th>
                  Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Comments
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            </table>
            </div>
            </div>
    </>
  )
}
