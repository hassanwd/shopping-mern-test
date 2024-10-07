import React, {useState, useEffect} from 'react'
import './App.css'
import List from './list'
import Item1 from './item1'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './navbar'



const App = () => {
  
  const [Array] = useState([
    {
      id: "0",
      title: "Branded Huddy",
      price: "749.00",
      inStock: true,
      src: "http://assets.stickpng.com/thumbs/58e38cea204d556bbd97b160.png",
      desc: "Men’s shirts have been around for a long time; however, until the 18th century, men’s shirts were only worn under outerwear. The fact that they are seen as underclothing explains why it is considered a faux pas for a man to take off his suit jacket uninvited. In 1871 Brown.",
    },
    {
      id: "1",
      title: "Dress Shirt",
      inStock: true,
      price: "749.00",
      src: "https://i.pinimg.com/originals/f3/0e/8b/f30e8b236fff35e4e71e4428d808324c.png",
      desc: "Men’s shirts have been around for a long time; however, until the 18th century, men’s shirts were only worn under outerwear. The fact that they are seen as underclothing explains why it is considered a faux pas for a man to take off his suit jacket uninvited. In 1871 Brown.",
    },
    {
      id: "2",
      title: "Pajamas Set in Polestar",
      inStock: true,
      price: "749.00",
      src: "https://www.polestargarments.com/wp-content/uploads/2020/11/Pajamas-3.png",
      desc: "Men’s shirts have been around for a long time; however, until the 18th century, men’s shirts were only worn under outerwear. The fact that they are seen as underclothing explains why it is considered a faux pas for a man to take off his suit jacket uninvited. In 1871 Brown.",
    },
    {
      id: "3",
      title: "Danim Jacjet",
      inStock: false,
      price: "749.00",
      src: "https://freepikpsd.com/file/2020/01/Denim-Jacket-Free-PNG-Image.png",
      desc: "Men’s shirts have been around for a long time; however, until the 18th century, men’s shirts were only worn under outerwear. The fact that they are seen as underclothing explains why it is considered a faux pas for a man to take off his suit jacket uninvited. In 1871 Brown.",
    },
    {
      id: "4",
      title: "T-Shirt",
      inStock: true,
      price: "749.00",
      src: "https://purepng.com/public/uploads/large/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839zoswy.png",
      desc: "Men’s shirts have been around for a long time; however, until the 18th century, men’s shirts were only worn under outerwear. The fact that they are seen as underclothing explains why it is considered a faux pas for a man to take off his suit jacket uninvited. In 1871 Brown.",
    },
    {
      id: "5",
      title: "Suit",
      inStock: true,
      price: "749.00",
      src: "https://pngimg.com/uploads/suit/suit_PNG93204.png",
      desc: "Men’s shirts have been around for a long time; however, until the 18th century, men’s shirts were only worn under outerwear. The fact that they are seen as underclothing explains why it is considered a faux pas for a man to take off his suit jacket uninvited. In 1871 Brown.",
    },
    {
      id: "6",
      title: "Shoes",
      inStock: false,
      price: "749.00",
      src: "https://www.freeiconspng.com/thumbs/shoes-png/green-running-shoes-png-24.png",
      desc: "Men’s shirts have been around for a long time; however, until the 18th century, men’s shirts were only worn under outerwear. The fact that they are seen as underclothing explains why it is considered a faux pas for a man to take off his suit jacket uninvited. In 1871 Brown.",
    },
    {
      id: "7",
      title: "Watch",
      inStock: true,
      price: "749.00",
      src: "https://www.freepnglogos.com/uploads/watch-png/download-rolex-watch-transparent-png-image-pngimg-32.png",
      desc: "Men’s shirts have been around for a long time; however, until the 18th century, men’s shirts were only worn under outerwear. The fact that they are seen as underclothing explains why it is considered a faux pas for a man to take off his suit jacket uninvited. In 1871 Brown.",
    },
  ])

  const [action, setAction] = useState(true);
  let Data = localStorage.getItem('cartData')?JSON.parse(localStorage.getItem('cartData')):[]
  const [value, setValue] = useState(Data)
  const [value1, setValue1] = useState()

  const [itemObj, setItemObj] = useState([])

    const handleCart = (e) =>{
      const slideBar = document.querySelector(".sidebar");
        if(action){
          slideBar.style.right = "0"
          setAction(false)
        }
        else{
          slideBar.style.right = "-400px"
          setAction(true)
        }
    }

    useEffect(() => {
      localStorage.setItem('cartData', JSON.stringify(value))
    }, [value])

    const handleSet = (e) => {
      let imageSrc = itemObj.src
      let heading = itemObj.title
      let price = itemObj.price * value1
      let obj = {
        src: imageSrc,
        heading: heading,
        price: price,
        quantity: value1,
      }
      setValue([...value, obj])
    }

    const handleValue = (e) => {
      setValue1(e.target.value)
    }

    const handleClick = (e) => {
      console.log(e.target.id, "EEEE.target");
      const newObj = Array.find((ele) => {
        return  ele.id === e.target.id
      })
      setItemObj(newObj)
      console.log(itemObj, "itemObj");      
    }
 


  return(
    <>
      <Navbar handleCart={handleCart} value={value}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List array={Array} handleClick={handleClick} />}></Route>
          <Route path='/item1' element={<Item1 value1={value1} itemObj={itemObj} handleValue={handleValue} handleSet={handleSet} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App