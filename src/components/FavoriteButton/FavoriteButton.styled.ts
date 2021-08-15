import Button from '@material-ui/core/Button';
import styled from 'styled-components';

interface FloatButtonProps {
  isComplete: boolean;
}

const FloatButton = styled.div<FloatButtonProps>`
  ${
    ({ isComplete }) => {
      return !isComplete && `
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 1;
      `;
    }
  }
`;

const SizeButton = styled(Button)`
  ${
    ({ variant }) => {
      if (variant === 'contained') {
        return `
          min-width: 36px !important;
          width: 36px;
        `;
      }
    }
  }
`;

const Styled = {
  FloatButton,
  SizeButton,
};

export default Styled;