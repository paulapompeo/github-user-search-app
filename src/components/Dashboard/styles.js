import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const Content = styled.div`
  width: 730px;
  margin-top: 144px;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
  }

  .app-theme {
    display: flex;
    align-items: center;

    span {
      font-weight: 700;
      font-size: 13px;
      line-height: 20px;
      margin-right: 16px;
      letter-spacing: 2.5px
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-blue);
  margin-top: 36px;
  width: 730px;
  height: 69px;
  border-radius: 15px;

  .user-input {
    display: flex;
    height: 25px;

    img {
      width: 24px;
      height: 24px;
      margin-left: 32px;
      margin-right: 24px;
    }

    input {
      background: var(--dark-blue);
      border: 0;
      color: var(--white);
      font-size: 18px;
      line-height: 25px;
      font-family: 'Space Mono', monospace;
      font-weight: 400;
      width: 254px;
      height: 25px;

      /* -webkit-text-fill-color: var(--white) !important; */
      /* transition: background-color 5000s ease-in-out 0s; */

      &::placeholder {
        color: var(--white);
        font-size: 18px;
        line-height: 25px;
        font-family: 'Space Mono', monospace;
        font-weight: 400;
      }
    }
  }

  button {
    background-color: var(--blue);
    color: var(--white);
    border: 0;
    border-radius: 10px;
    width: 106px;
    height: 50px;
    margin-right: 10px;

    font-family: 'Space Mono', monospace;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
`
export const UserData = styled.div`
  margin-top: 24px;
  background-color: var(--dark-blue);
  width: 730px;
  height: 419px;
  border-radius: 15px;
  display: flex;
  padding: 48px;

  > img {
    width: 117px;
    height: 117px;
    border-radius: 50%;
  }
`
export const UserInfo = styled.div`
  margin-left: 37px;
  width: 480px;

  .user-main-info {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */ //conferir altura da indo de Joined

    > p {
    font-size: 15px;
    line-height: 22px;
    margin-top: 4px;
    }
  }

  .user-name {
    margin-top: -4px;

    h2 {
      font-weight: 700;
      font-family: 'Space Mono', monospace;
      font-size: 26px;
      line-height: 39px;
    }

    span {
      color: var(--blue);
      font-size: 16px;
      line-height: 24px;
    }
  }

  .user-bio {
    margin-top: 20px;
    width: 480px;
    height: 25px;

    p {
      margin-top: 4px;
      font-size: 15px;
      line-height: 25px;
      mix-blend-mode: normal;
      opacity: 0.75;
    }
  }
 
`
export const GithubData = styled.div`
  margin-top: 32px;

  .github-info {
    background-color: var(--dark);
    width: 480px;
    height: 85px;
    border-radius: 10px;
    padding-top: 15px;
    
    display: flex;

    p {
      font-size: 13px;
      line-height: 19px;
    }

    h3 {
      font-weight: 700;
      font-size: 22px;
      line-height: 33px;
    }
  }

  .repos {
    margin-left: 32px;
  }

  .followers {
    margin-left: 99px;
  }

  .following {
    margin-left: 82px;
  }

  .user-social {
    display: flex;
    height: 63px;
    margin-top: 37px; 
  }

  .second-column {
    margin-left: 62px;
  }

  .social {
    display: flex;
    margin-bottom: 20px;

    .svg {
      fill: red;
    }

    img {
      height: 20px;
      margin-right: 16px;
    }

    p {
      font-size: 15px;
      line-height: 22px;
    }
  }
`