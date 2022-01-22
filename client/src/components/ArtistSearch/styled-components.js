import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  padding: 0;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  height: calc(100% - 80px);
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  z-index: 100;
  border-bottom: 1px solid lightgray;
  box-shadow: 0 4px 2px -2px lightgray;
`;

export const SearchandButtonWrapper = styled.div`
  border: 1px solid lightgrey;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  height: 30px;
  padding: 10px;
  margin: 5px;
  width: 70vw;
  max-width: 300px;
  border-radius: 15px;
  border: none;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`;
export const DeleteButton = styled.button`
  border: none;
  padding: 0;
  border-radius: 10px;
  background-color: white;
  color: lightgrey;
  min-height: 30px;
  width: 30px;
  margin: 5px;
  cursor: pointer;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  align-items: center;
  justify-content: flex-start;
  height: calc(100% - 80px);
  width: 100%;
  overflow-y: auto;
`;

export const Results = styled.div`
  width: 90%;
  max-width: 1200px;
  padding-top: 10px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
`;
