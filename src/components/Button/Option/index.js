import styled from 'styled-components';
import Button from '..';

const ButtonOption = styled(Button)`
  border: 1px solid;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.contextBg};
`;

export default ButtonOption;
