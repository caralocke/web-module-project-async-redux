import React, { useEffect } from 'react' //import React and useEffect
import { connect } from 'react-redux' //import connect
import { getDog } from '../actions' //import getDog
import styled from 'styled-components' //import styled


const Dog = (props) => {
    console.log('Dog props', props)
    const {dog, isFetching, error} = props
    console.log('dog', dog)
    useEffect(()=>{
        props.getDog()
    },[])

    const handleClick = () => {
        props.getDog()
    }

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching person for ya!</h2>;
      }
    
    
    return (
        <div className='dog'>
            <div>
                <h2>Here's your dog!</h2>
                <img src={dog} />
            </div>
            <button onClick={handleClick}>Get new dog</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        dog: state.dog,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getDog})(Dog)