import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  /*border: none;
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.contrastTextPrimary};
  background-color: ${({ theme }) => theme.colors.primaryDisable};

  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 20px;*/

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.primaryDisable};
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
