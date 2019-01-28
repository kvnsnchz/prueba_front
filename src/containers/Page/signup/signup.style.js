import styled from 'styled-components';
import WithDirection from '../../../settings/withDirection';
import { palette } from "styled-theme";
import { paleta } from "../../../settings/index";

const SignupStyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 15px;
    align-items: center;
    .title {
        margin-bottom: 30px;
        color: rgba(0, 0, 0, 0.65);
    }

    .isoSignUpForm {
      width: 100%;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;

      .isoInputWrapper {
        margin-bottom: 10px;

        &:last-of-type {
          margin-bottom: 0;
        }

        input {
          &::-webkit-input-placeholder {
            color: ${palette("grayscale", 0)};
          }

          &:-moz-placeholder {
            color: ${palette("grayscale", 0)};
          }

          &::-moz-placeholder {
            color: ${palette("grayscale", 0)};
          }
          &:-ms-input-placeholder {
            color: ${palette("grayscale", 0)};
          }
        }
      }

      .isoOtherLogin {
        display: none;
        padding-top: 20px;

        > a {
          display: flex;
          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;
          }
        }

        button {
          width: 100%;
          height: 42px;
          border: 0;
          font-weight: 500;

          &.btnFacebook {
            background-color: #3b5998;

            &:hover {
              background-color: darken(#3b5998, 5%);
            }
          }

          &.btnGooglePlus {
            background-color: #dd4b39;
            margin-top: 15px;

            &:hover {
              background-color: darken(#dd4b39, 5%);
            }
          }

          &.btnAuthZero {
            background-color: #e14615;
            margin-top: 15px;

            &:hover {
              background-color: darken(#e14615, 5%);
            }
          }

          &.btnFirebase {
            background-color: ${palette("color", 5)};
            margin-top: 15px;

            &:hover {
              background-color: ${palette("color", 6)};
            }
          }
        }
      }

      .isoForgotPass, .isoSignUp {
        font-size: 12px;
        color: ${palette("primary", 0)};
        margin-bottom: 10px;
        text-decoration: underline;

        &:hover {
          color: ${palette("primary", 0)};
        }
      }

      button {
        font-weight: 500;
      }
    }
  
    #btnSignUp {
        width: 100%;
        border: 0;
        background-color: ${paleta.orange};
        margin-top: 10px;
        
        &:hover {
        background-color: ${paleta.orange2};
        }
    }

    .faltaFechaWrapper {
        p {
            color: #f5222d;
            margin-bottom: 0px;
        }
    }

    .falta {
      .ant-input {
        border: 1px solid #f5222d;
      }
    }

    .ant-calendar-picker{
      width: 100%;
    }

    .ant-form-item {
      margin-bottom: 0px;
    }

`;

export default WithDirection(SignupStyleWrapper);