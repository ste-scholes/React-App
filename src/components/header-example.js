import { buildQueries } from '@testing-library/react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            {/* inline style */}
            <h1 style={{color: 'red'}}>{title}</h1> 
            {/* style as variable */}
            <p style={pstyle}>Hellow world</p>
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


// CSS style variable
const pstyle = {
    color: 'blue',
    backgroundColor: 'black',
}