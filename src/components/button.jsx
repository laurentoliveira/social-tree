import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  text-align: center;
  padding: 16px 16px;
  margin: 8px;
  height: 49px;
  width: 326px;
  background-color: var(--rose);
  border-radius: 4px;
  border: 0.5px solid var(--md-rose);
  text-decoration: none;
  color: var(--md-brown);
  font-size: 1em;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--brown);
    transition: all 0.5s ease;
    color: var(--rose);
  }

  svg {
    margin-right: 16px;
  }
`
