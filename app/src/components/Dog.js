import React, { useEffect } from 'react' //import React and useEffect
import { connect } from 'react-redux' //import connect
import { getDog } from '../actions' //import getDog
import styled from 'styled-components' //import styled

const StyledDog =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div  {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2%;
    }

    button {
        background-color: hotpink;
        color: white;
        border-radius: 5%;
        curor: pointer;

        :hover {
            opacity: 50%;
        }
    }
    `

const DogImage = styled.img`
    height: 700px;
    width: 600px;
    border-radius: 5%;
`

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
        return <h2>Fetching dog for ya!</h2>;
      }
    
    
    return (
        <StyledDog>
            <div>
                <h2>Don't you just love this dog?</h2>
                <DogImage src={dog} />
            </div>
            <button onClick={handleClick}>Get a new dog to love</button>
        </StyledDog>
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