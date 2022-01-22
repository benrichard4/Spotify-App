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

export const ArtistTitle = styled.h2`
  width: 100%;
  min-height: 30px;
  font-size: 1.5em;
  margin-top: 10px;
  white-space: wrap;
`;

export const AlbumP = styled.h3`
  font-size: 15px;
  color: grey;
`;

export const TitlesDiv = styled.div`
  width: 80%;
  max-width: 1200px;
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
