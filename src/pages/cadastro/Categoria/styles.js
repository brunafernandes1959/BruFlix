import styled from 'styled-components';

export const Name = styled.td`
    font-size: 22px;
    font-weight: bold;

    @media (max-width: 800px){
        font-size: 16px;
    }
`;

export const Description = styled.td`
    color: var(--grayMedium);
    font-style: italic;
    text-align: left;
`;

export const Color = styled.td`
    div{
        align-items: center;
        border-radius: 50%;
        display: inline-flex;
        height: 16px;
        justify-content: center;
        margin: 0;
        padding: 0;
        width: 16px;
    }
`;

export const Loading = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
`;
