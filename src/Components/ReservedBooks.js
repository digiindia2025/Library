import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>    Aman</td>
                    <td>Rich Dad Poor Dad</td>
                    <td>12/1/2025</td>
                </tr>
                <tr>
                    <td>Nancy</td>
                    <td>The Subtle Art</td>
                    <td>20/1/2025</td>
                </tr>
                <tr>
                    <td>Tanishq</td>
                    <td>Wings Of Fire</td>
                    <td>25/1/2025</td>
                </tr>
                <tr>
                    <td>Akhil</td>
                    <td>The Secret</td>
                    <td>28/1/2025</td>
                </tr>
                <tr>
                    <td>Surya</td>
                    <td>Bad Guys</td>
                    <td>2/2/2025</td>
                </tr>
                <tr>
                    <td>Dinesh</td>
                    <td>Giovanni Rovelli</td>
                    <td>10/2/2025</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
