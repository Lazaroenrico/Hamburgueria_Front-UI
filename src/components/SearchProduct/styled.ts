import styled, { css } from "styled-components";


export const Search = styled.div`
${() => css`
 width: 173px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 10px;
`}
`
export const SearchInput = styled.input`
${() => css`
 background: #2d303e;
 width: 120px;
 height: 38px;
 color: #ffffff;
 font-size: 14px;
 :focus {
      outline: none;
`}
`