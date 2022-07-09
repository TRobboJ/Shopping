import React from 'react'
import ProductList from '../products/ProductList'
import ProductSidebar from '../products/ProductSidebar'
import styles from './StoreView.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu } from '../../store/filterSlice'
import {TbLayoutSidebarLeftExpand} from 'react-icons/tb'

export default function StoreView() {
  const dispatch = useDispatch()
  const {menuIsOpen} = useSelector(state=>state.filter)
  const iconSize = `40px`

  function toggleFilter() {
      if (menuIsOpen) {
      dispatch(closeMenu())
      }
      if (!menuIsOpen) {
      dispatch(openMenu())
      }
  }

  const sidebarIcon = (
    <div>
    <div className={styles.sidebar_icon}>
      <TbLayoutSidebarLeftExpand size={iconSize} onClick={toggleFilter}/>
    </div>
    </div>
    )

  return (
    <div className={styles.store_view}>
        {menuIsOpen && <ProductSidebar />}
        {!menuIsOpen && sidebarIcon}
        <ProductList />
    </div>
  )
}
