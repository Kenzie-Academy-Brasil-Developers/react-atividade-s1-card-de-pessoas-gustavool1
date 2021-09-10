import "./style.css"
const NavBar = ({item1,item2,item3}) =>{
    return(
        <ul className='navbar'>
            <li className='navbar__item'>{item1}</li>
            <li className='navbar__item'>{item2}</li>
            <li className='navbar__item'>{item3}</li>
        </ul>
    )
}

export default NavBar