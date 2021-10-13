import iconSun from '../../assets/icon-sun.svg'
import iconSearch from '../../assets/icon-search.svg'
import iconCompany from '../../assets/icon-company.svg'
import iconLocation from '../../assets/icon-location.svg'
import iconMoon from '../../assets/icon-moon.svg'
import iconTwitter from '../../assets/icon-twitter.svg'
import iconWebsite from '../../assets/icon-website.svg'

import avatar from '../../assets/profile.png'

import * as S from './styles'

export function Dashboard() {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Header>
            <h1>devfinder</h1>
            <div className="app-theme">
              <span>LIGHT</span>
              <img src={iconSun} alt="light-theme" />
            </div>
          </S.Header>
          <S.Form>
            <div className="user-input">
              <img src={iconSearch} alt="search" />
              <input
                type="text"
                name="user"
                placeholder="Search GitHub username…"
              // value={user}
              // onChange={event => setEmail(event.target.value)}
              />
            </div>
            <button
              type="button"
            // onClick={() => validateEmail(email)}
            >
              Search
            </button>
          </S.Form>
          <S.UserData>
            <img src={avatar} alt="avatar" />
            <S.UserInfo>
              <div className="user-main-info">
                <div className="user-name">
                  <h2>The Octocat</h2>
                  <span>@octocat</span>
                </div>
                <p>Joined 25 Jan 2011</p>
              </div>
              <div className="user-bio">
              <p>This profile has no bio</p>
              </div>
              <S.GithubData>
                <div className="github-info">
                  <div className="repos">
                    <p>Repos</p>
                    <h3>8</h3>
                  </div>
                  <div className="followers">
                    <p>Followers</p>
                    <h3>3938</h3>
                  </div>
                  <div className="following">
                    <p>Following</p>
                    <h3>9</h3>
                  </div>
                </div>
                <div className="user-social">
                  <div>
                    <div className="social">
                      <img src={iconLocation} alt="location" />
                      <p>San Francisco</p>
                    </div>
                    <div className="social">
                      <img src={iconWebsite} alt="website" />
                      <p>https://github.blog</p>
                    </div>
                  </div>
                  <div className='second-column'>
                    <div className="social">
                      <img src={iconTwitter} alt="twitter" />
                      <p>Not Available</p>
                    </div>
                    <div className="social">
                      <img src={iconCompany} alt="company" />
                      <p>@github</p>
                    </div>
                  </div>
                </div>
              </S.GithubData>
            </S.UserInfo>
          </S.UserData>
        </S.Content>
      </S.Container>
    </>
  )
}

