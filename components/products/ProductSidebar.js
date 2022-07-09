import Link from 'next/link'
import React from 'react'
import styles from './ProductSidebar.module.scss'

export default function ProductSidebar() {
  return (
    <div>
      <h2>Stuff rendered here.</h2>
      <div>
        <div></div>
        <ul>
          <li>
            <span>
              <input type="checkbox" />
              <Link href='#'>
              <label>Checkbox</label>
              </Link>
            </span>          
          </li>
          <li>
            <span>
              <input type="checkbox" />
              <Link href='#'>
              <label>Checkbox</label>
              </Link>
            </span>          
          </li>
        </ul>
      </div>

    </div>
  )
}
