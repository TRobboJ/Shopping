import Link from 'next/link'
import React from 'react'
import styles from './ProductSidebar.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu, filterQuery, clearFilters } from '../../store/filterSlice'
import {FaRegWindowClose} from 'react-icons/fa'

export default function ProductSidebar() {
  const dispatch = useDispatch()
  const { menuIsOpen, query } = useSelector(state=>state.filter)
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
  
  function filterQueryHandler(event) {
    const query = event.target.value
    dispatch(filterQuery(query))
  }

function clearAllFiltersHandler() {
  dispatch(clearFilters())
}

  return (
    
    <div className={styles.sidebar}>
      <div className={styles.search_content}>
      {sidebarCloseIcon}
      
      
      
        <div class={styles.header}><label>Search</label></div>
        <div class={styles.content}>
          <div className={styles.query_input}>
            <input type='text' placeholder='Search titles...' onChange={filterQueryHandler}/>
            </div>
        </div>
        <div class={styles.header}><label>Categories</label></div>
        <div class={styles.content}>
          
        </div>
        <div class={styles.header}><label>Price</label></div>
        <div class={styles.content}>
        <div className={styles.price_input}>
          <input type='number' placeholder='$' name='min' maxlength='6' />
          <span>~</span>
          <input type='number' placeholder='$' name='max' maxlength='6' />
          </div>
        </div>
        <div class={styles.header}><label>Reset</label></div>
        <div class={styles.content}>
        <div className={styles.reset}>
          <input type='reset' value='Reset'/>
          </div>
        </div>


        
      </div>
      
    </div>
    
  )
}
