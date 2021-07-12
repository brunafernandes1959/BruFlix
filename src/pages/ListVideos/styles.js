import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        align-items: center;
        display: flex;
        font-size: 18px;
        text-decoration: none;
        transition: all .3s;

        &:hover,
        &:focus{
            color: var(--purpleDark);
            text-decoration: underline;
        }

        svg{
            margin-right: 4px;
        }
    }
`;

export const Table = styled.table`
    background-color: var(--gray);
    border: 1px solid var(--grayMedium);
    border-radius: 8px;
    margin: 0 auto 32px;
    padding: 16px;
    width: 100%;

    td{
        padding: 9px;
    }

    img{
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
`;

export const Image = styled.td`
    width: 330px;
`;

export const Title = styled.td`
    text-align: center;
    font-size: 24px;
    font-style: italic;

    @media (max-width: 800px){
        font-size: 16px;
    }
`;

export const Edit = styled(Link)`
    font-size: 24px;

    svg{
        color: var(--primary);
    }
`;

export const ButtonDelete = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
    height: 40px;
    outline: none;
    padding: 0;
    width: 40px;

    svg{
        align-items: center;
        color: red;
        display: flex;
        justify-content:center;
    }
`;
