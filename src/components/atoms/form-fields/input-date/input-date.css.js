import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

export const Container = styled.label`
  box-sizing: border-box;
  border: 1px solid #b5b5b5;
  position: relative;
  width: 198px;
  display: flex;
  margin-bottom: 12px;
  ${props =>
    props.disabled &&
    `
    pointer-events: none;
    opacity: 0.5;
  `}
  &:hover {
    border-color: #707070;
    > span {
      border-color: #707070;
    }
  }

  .react-datepicker {
    border: none;
    border-radius: 0;
    font-family: inherit;
  }
  .react-datepicker-popper[data-placement^='bottom'] {
    margin: 1px 0px 0px -1px;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker__header {
    padding-top: 0;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    background: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.white};
    font-size: 16px;
    font-weight: normal;
    line-height: 1.8;
    height: 28px;
    box-shadow: 1px 0 0px 0px ${props => props.theme.colors.gray};
  }
  .react-datepicker__day-names {
    margin-bottom: -1px;
  }
  .react-datepicker__day-name {
    background-color: #d9d9d9;
    color: white;
    font-size: 0;
    line-height: 2.3;

    &::first-letter {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 0;
    margin: -1px -1px 0 0;
  }
  .react-datepicker__day--weekend {
    background-color: #f4f4f4;
  }
  .react-datepicker__day--today {
    color: black;
  }
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__day--selected {
    background-color: ${props => props.theme.colors.black};
    border: 1px solid ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    border-radius: 0;
    position: relative;
    z-index: 2;
  }
  .react-datepicker__day--outside-month {
    color: #e3e3e3;
  }
  .react-datepicker__navigation {
    top: 1px;
    width: 26px;
    height: 26px;
    border: none;

    &:after {
      content: '';
      border: 5px solid transparent;
      left: 11px;
      position: absolute;
      top: 8px;
    }
  }
  .react-datepicker__navigation--previous {
    left: 1px;

    &:after {
      border-right-color: white;
      left: 6px;
    }
    &:hover:after {
      border-right-color: black;
    }
  }
  .react-datepicker__navigation--next {
    right: 1px;
    &:after {
      border-left-color: white;
    }
    &:hover:after {
      border-left-color: black;
    }
  }
`;

export const DatePicker = styled(ReactDatePicker)`
  padding: 12px 20px 11px;
  background: white;
  border-radius: 0;
  box-sizing: border-box;
  border: none;
  font-family: inherit;
  font-size: 16px;
  outline: none;
  letter-spacing: 0.8pt;
  width: 100%;

  &::placeholder {
    color: #b5b5b5;
  }
`;

export const ButtonIcon = styled.span`
  background-image: url(${props => props.theme.icons.calendar});
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  background-size: 50%;
  border-radius: 0;
  border: none;
  border-left: 1px solid #b5b5b5;
  cursor: pointer;
  outline: none;
  flex: 0 0 48px;
`;
