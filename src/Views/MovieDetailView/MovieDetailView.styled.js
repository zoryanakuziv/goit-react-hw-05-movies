import styled from "@emotion/styled";

export const Button = styled.button`
  display: inline-block;
  width: 100px;
  height: 32px;
  border: 1px solid #3f51b5;
  color: #3f51b5;
  background-position: center;
  border-radius: 5px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const MovieCard = styled.div`
  display: flex;
  border-bottom: 1px solid #3f51b5;
  margin-top: 10px;
  padding-bottom: 15px;
`;

export const MovieInfo = styled.div`
  padding-left: 20px;
`;
export const Genres = styled.ul`
  display: flex;
  padding-top: 10px;
`;
export const Genre = styled.li`
  list-style: none;
  margin-right: 10px;
  padding: 5px;
  background-color: #9199f2;
`;
export const LinkStyled = styled.li`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 16px;
`;
