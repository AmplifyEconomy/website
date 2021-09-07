import { FC } from 'react';
import styled from 'styled-components';

export const CheckboxContainer = styled.a`
    display: flex;
    align-items: center;
    width: 50%;
    height: 40px;
    padding: 0 30px;
    cursor: pointer;

    &:hover {
        div.cb {
            background: rgba(185, 177, 254, 0.5);
        }
    }

    div.cb {
        border: 3px solid #B9B1FE;
        margin: 0 15px 0 0;
        width: 20px;
        height: 20px;

        &.active {
            background: #B9B1FE;
        }
    }

    &.disabled {
    opacity: 0.25;
    }
`;

export interface CheckboxI {
    label: string;
    active: boolean;
    disabled?: boolean;
    onClick?: any;
}

export const Checkbox: FC<CheckboxI> = ({ label, active, disabled, onClick }) => {
    return(
        <CheckboxContainer className={disabled ? 'disabled' : ''} onClick={onClick}>
            <div className={`cb ${active ? 'active' : ''}`}></div>
            {label}
        </CheckboxContainer>
    )
}