import "./style.css"
const Developer = ({name,age,country}) =>{
    return(
        <section className='dev-container'>
            <h2>Dev: {name}</h2>
            <h2>País: {country}</h2>
            <h2>Idade: {age}</h2>
        </section>
    )
}
export default Developer