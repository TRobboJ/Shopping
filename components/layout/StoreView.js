import React from 'react'
import ProductList from '../products/ProductList'
import ProductSidebar from '../products/ProductSidebar'
import styles from './StoreView.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu } from '../../store/filterSlice'
import {TbLayoutSidebarLeftExpand} from 'react-icons/tb'
import Loading from '../UI/Loading'

export default function StoreView(props) {
  const dispatch = useDispatch()
  const {menuIsOpen, query, minPrice, maxPrice, ratingQuery} = useSelector(state=>state.filter)
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

  const topBarInfo = getTopBarInfo(props.productData, query, minPrice, maxPrice, ratingQuery)
  

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


function getTopBarInfo(productArray, searchQuery, minPrice, maxPrice, ratingQuery) {
  if (!productArray) {return `Error collecting products`}
  let output = []
  //This is the default value to be returned to the topbar
  const noFilters = `Showing all results (${productArray.length} products)`

  let filtersExist = false
  let filterOutput = []
  let concatFilterOutput

  //First I wanted to check if any filters are being applied
  if (searchQuery.length > 0 || minPrice > 0 || maxPrice !== Math.Infinity || ratingQuery > 0) {

    filtersExist = true

    //Check each filter individually and if they are being appplied push them to the filterOutput array
    if (searchQuery.length > 0) {filterOutput.push(`'${searchQuery}'`)}

    //In the case that both a minPrice AND a maxPrice filter are being set, I wanted to render them together ex. $1 ~ $100
    if (minPrice > 0 && maxPrice > 0) {filterOutput.push(`$${minPrice} ~ $${maxPrice}`)}
    //If only minPrice or maxPrice filters are applied than I opted to use < and > 
    else {
        if (minPrice > 0) {filterOutput.push(`>$${minPrice}`)}
        if (maxPrice > 0) {filterOutput.push(`<$${maxPrice}`)}
      }
    if (ratingQuery > 0) {filterOutput.push(`>★${ratingQuery}`)}
  }
  //In the case that more than one filter is being applied I wanted to concat that array with commas, and use 'and' for the final filter
  if (filterOutput.length > 1) {concatFilterOutput = `${filterOutput.slice(0, -1).join(', ')} and ${filterOutput.slice(-1)}`}
  if (filterOutput.length === 1) {concatFilterOutput = filterOutput}
  

  output.push(<p className={styles.queries}>{filtersExist ? `Showing results for ${concatFilterOutput}.` : noFilters}</p>)

  return output
}