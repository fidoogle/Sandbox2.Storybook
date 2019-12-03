import React from 'react';
import styled, { css } from 'styled-components'

const Button = styled.button`
    /*Text styles*/
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #0078AE;

    /*Container styles*/
    min-width: 99px;
    min-height: 44px;
    background: transparent;
    border-radius: 22px;
    
    ${props => css`
        opacity: ${props.disabled?0.5:1}
    `}

    ${props => props.primary && css`
        background: linear-gradient(180deg, #5691C8 0%, #0078AE 100%);
        color: white;
        
    `}

    ${props => props.secondary && css`
        background: linear-gradient(180deg, #6D9F43 0%, #279A2C 100%);
        color: white;
    `}
`;

export default Button;
