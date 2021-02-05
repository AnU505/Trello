import React from 'react'

function SignupWith({source, trough}) {
    return (
        <div className="signupwithcontainer" style={{
            display: 'flex',
            justifyContent: 'space-between'
        }} >
            <img className="signupwithicon" src={source}/>
            <p>Sign Up with {trough}</p>
        </div>
    )
}

export default SignupWith
