import { useContext } from 'react'
import { storeContext } from '../context/store'

export const useStore = () => useContext(storeContext)
