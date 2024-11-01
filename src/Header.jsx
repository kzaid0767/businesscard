import mebearded from './assets/mebearded.png'

export default function Header(){
    return(
        <div className='headerDiv'>
            <img className='mainImg justwidth' src={mebearded} alt="image of Kassim Zaid" />
        </div>
    )
}