import { styled } from 'styled-components';

export const TransactionHistoryTable = styled.table`
  background-color: #e0e0e0;
  width: 100%;
  margin-top: 20px;
  th {
    width: 33%;
    color: white;
    background-color: #178989;
    font-size: 25px;
    padding: 10px;
  }
  tbody tr:nth-child(2n) {
    background-color: #eee;
  }
`;

export const TransactionBodyRow = styled.tr`
  background-color: white;

  td {
    color: grey;
    font-size: 22px;
    text-align: center;
    padding: 10px 0;
  }
`;
