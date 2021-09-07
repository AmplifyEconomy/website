import { FC } from 'react';
import styled from 'styled-components';

export const ButtonContainer = styled.a`
    background: hsla(202, 100%, 84%, 1);
    background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
    background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
    background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );

    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 50px;
    font-size: 24px;
    font-weight: 400;
    color: white;
    cursor: pointer;
    border-radius: 5px;

    text-decoration: none;

    &.disabled {
        opacity: 0.25;
    }
`;

export interface ButtonI {
    label: string;
    width: number;
    height: number;
    disabled?: boolean;
    onClick?: any;
}

export const Button: FC<ButtonI> = ({ label, disabled, onClick, width, height }) => {
    return(
        <ButtonContainer className={disabled ? 'disabled' : ''} onClick={onClick} style={{ width, height }}>
            {label}
        </ButtonContainer>
    )
}