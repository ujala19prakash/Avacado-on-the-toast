import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterByCategory } from '../redux/ads/adsSlice'
import './style.css'

const Categories = () => {
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()

  const handleCategories = (category) => {
    setCategory(category)

    if (!category) {
      return
    }

    dispatch(filterByCategory(category))
  }

  return (
    <ul className="navlink1">
      <ul class="menu cf">
<li><a href="" onClick={() => handleCategories('Electronics')}>Electronics</a></li>
<li><a href="" onClick={() => handleCategories('Sports-item')}>Sports-item</a>  </li>
<li><a href="" onClick={() => handleCategories('Books')}>Books</a></li>
<li><a href="" onClick={() => handleCategories('Stationary')}>Stationary</a></li>
<li><a href="" onClick={() => handleCategories('Cycles')}>Cycles</a></li>
<li><a href="" onClick={() => handleCategories('Electricals')}>Electricals</a></li>
<li><a href="" onClick={() => handleCategories('Clothings')}>Clothings</a></li>
<li><a href="" onClick={() => handleCategories('Bed-items')}>Bed-items</a></li>
</ul>
    </ul>
  )
}

export default Categories
