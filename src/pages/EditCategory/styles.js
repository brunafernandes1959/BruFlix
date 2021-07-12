import styled from 'styled-components';

const Container = styled.div`
    background-color: var(--gray);
    border-radius: 8px;
    margin: 0 auto 16px;
    padding: 16px;
    width: 50%;
    border: 2px solid var(--primary);
    
    >div{
        display: flex;
        justify-content: space-between;
    }

    svg{
        display: inline-block;
        font-size: 30px;
    }

    @media (max-width: 800px){
        width: 100%;
    }
`;

export default Container;
