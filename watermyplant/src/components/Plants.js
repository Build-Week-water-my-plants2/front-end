import React from 'react';
import styled from 'styled-components';

// #49fcd4 is the background color
const PlantStyle = styled.div `
    background-color: #49fcd4;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    margin-left: 12.5%;
    width: 75%;
    

    &:hover {
        background: #000000;
        color: #f8f8ff;
    }
`

const Header = styled.h1`
    font-family: 'Roboto Slab', serif;
`


const ButtonStyling = styled.button`
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
    padding: 1rem;
    background-color: #d2b48c;
    border-radius: 2rem;
    display: flex;
    
`