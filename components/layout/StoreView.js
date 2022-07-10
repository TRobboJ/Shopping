import React from 'react'
import ProductList from '../products/ProductList'
import ProductSidebar from '../products/ProductSidebar'
import styles from './StoreView.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu } from '../../store/filterSlice'
import {TbLayoutSidebarLeftExpand} from 'react-icons/tb'

export default function StoreView(props) {
  const dispatch = useDispatch()
  const {menuIsOpen, query} = useSelector(state=>state.filter)
  const iconSize = `30px`

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

  const topBarInfo = (
    <p className={styles.queries}>{query.length > 0 ? `Showing results for "${query}"` : `Showing all results`}</p>

  ) 


  return (
    <>
    <div className={styles.topbar}>{topBarInfo}</div>
    <div className={styles.store_view}>
        {menuIsOpen && <ProductSidebar productData={props.productData}/>}
        {!menuIsOpen && sidebarIcon}
        <ProductList  productData={props.productData}/>
    </div>
    </>
  )
}
