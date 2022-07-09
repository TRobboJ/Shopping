import Link from 'next/link'
import React from 'react'
import styles from './ProductSidebar.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu } from '../../store/filterSlice'
import {FaRegWindowClose} from 'react-icons/fa'

export default function ProductSidebar() {
  const dispatch = useDispatch()
  const {menuIsOpen} = useSelector(state=>state.filter)
  const iconSize = `35px`

  function toggleFilter() {
      if (menuIsOpen) {
      dispatch(closeMenu())
      }
      if (!menuIsOpen) {
      dispatch(openMenu())
      }
  }

  const sidebarCloseIcon = (
    <div className={styles.sidebar_close_icon}>
      <FaRegWindowClose size={iconSize} onClick={toggleFilter}/>
    </div>
    )



  return (
    <div className={styles.sidebar}>
      {sidebarCloseIcon}
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
