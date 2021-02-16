import firebase from "gatsby-plugin-firebase"
import React, { useState, useEffect } from "react"


const useItems = () => {
  const [items, setItems] = useState([]) 
  useEffect(() => {
    //added variable unsubscribe
    const unsubscribe = firebase
      .firestore() 
      .collection("items") 
      .onSnapshot(snapshot => {
        const listItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setItems(listItems)
        console.log({items})
      })
      //called the unsubscribe--closing connection to Firestore.
    return () => unsubscribe()
  }, [])
  return items
}

const ItemList = () => {items}
export default ItemList
