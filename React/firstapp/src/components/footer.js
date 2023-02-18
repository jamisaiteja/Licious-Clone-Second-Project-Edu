import React from 'react';

const Footer = (props) =>{
    const {year} = props;
    return(
        <>
            <hr/>
            <center>
                <h1>&copy;{year} Jami</h1>
            </center>
        </>
    )
}

export default Footer;