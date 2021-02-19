import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }
    
    return (
        <header className='header'>
           
            <h1>{title}</h1> 
            < Button color='green' text='Add' onClick={onClick} />

        </header>
    )
}


Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header


// CSS style variable in js
// const pstyle = {
//     color: 'blue',
//     backgroundColor: 'black',
// }