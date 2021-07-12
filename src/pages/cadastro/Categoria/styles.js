import styled from 'styled-components';
import { Link } from 'react-router-dom';



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
`

const Th = styled.th`
  text-align: center !important;
`

const Td = styled.td`
  text-align: center !important;
  .btn-delete {
    background: var(--danger);
    width: 80px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
  .btn-edit {
    background: var(--backEnd);
    width: 80px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
`

const ButtonCategory = styled.div`
  .btn-salvar {
    background: var(--primary);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
  .btn-limpar {
    background: var(--blackLighter);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
`

const Table = styled.table`
  border: 1px solid #2a7ae4;
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
  thead tr th {
    padding: 15px;
    border: 1px solid #2a7ae4;
  }
  thead {
    border-bottom: 1px solid #2a7ae4;
  }
  td,
  th {
    text-align: left;
    padding: 10px;
  }
`