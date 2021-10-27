import { useState } from 'react'
import api from '../../services/api'

import iconSun from '../../assets/icon-sun.svg'
import iconSearch from '../../assets/icon-search.svg'
import iconCompany from '../../assets/icon-company.svg'
import iconLocation from '../../assets/icon-location.svg'
import iconMoon from '../../assets/icon-moon.svg'
import iconTwitter from '../../assets/icon-twitter.svg'
import iconWebsite from '../../assets/icon-website.svg'

import avatar from '../../assets/profile.png'

import * as S from './styles'

export function Dashboard({ handleThemeChange, theme }) {
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState({});
  const [inputError, setInputError] = useState(false);

  async function handleAddRepositories(event) {
    event.preventDefault()

    if (!user) {
      setInputError(true);
    }

    try {
      const response = await api.get(`users/${user}`)
      const { data } = response
      setUserData(data)
      setInputError(false);
    } catch {
      setInputError(true);
    }
  }

  function dateFormat(date) {
    const [year, month, day] = date.substring(0, 10).split('-')
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const mesCorreto = months[Number(month - 1)]

    return `${day} ${mesCorreto} ${year}`
  }

  return (
    <>
      <S.Container>
        <S.Content>
          <S.Header>
            <h1>devfinder</h1>
            <div className="app-theme">
              <button type="button" onClick={handleThemeChange}>
                <span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
                <img src={theme === 'dark' ? iconSun : iconMoon} alt="light-theme" />
              </button>
            </div>
          </S.Header>
          <S.Form onSubmit={handleAddRepositories}>
            <div className="user-input">
              <img src={iconSearch} alt="search" />
              <input
                type="text"
                name="user"
                placeholder="Search GitHub username…"
                value={user}
                onChange={event => setUser(event.target.value)}
              />
            </div>
            <div>
              {inputError && <span>No results</span>}
              <button
                type="submit"
              >
                Search
              </button>
            </div>
          </S.Form>
          <S.UserData>
            <img src={userData.avatar_url ? userData.avatar_url : avatar} alt="avatar" />
            <S.UserInfo>
              <div className="user-main-info">
                <div className="user-name">
                  <h2>{userData.name ? userData.name : 'The Octocat'}</h2>
                  <span>@octocat</span>
                </div>
                <p>{userData.created_at ? `Joined ${dateFormat(userData.created_at)}` : 'Joined 25 Jan 2011'}</p>
              </div>
              <div className="user-bio">
                <p>{userData.bio ? userData.bio : 'This profile has no bio'}</p>
              </div>
              <S.GithubData>
                <div className="github-info">
                  <div className="repos">
                    <p>Repos</p>
                    <h3>{userData.public_repos ? userData.public_repos : 8}</h3>
                  </div>
                  <div className="followers">
                    <p>Followers</p>
                    <h3>{userData.followers ? userData.followers : 3938}</h3>
                  </div>
                  <div className="following">
                    <p>Following</p>
                    <h3>{userData.following ? userData.following : 9}</h3>
                  </div>
                </div>
                <div className="user-social">
                  <div>
                    <div className="social">
                      <img className="svg" src={iconLocation} alt="location" />
                      <p>{userData.location ? userData.location : 'San Francisco'}</p>
                    </div>
                    <div className="social">
                      <img src={iconWebsite} alt="website" />
                      <p>{userData.blog ? userData.blog : 'https://github.blog'}</p>
                    </div>
                  </div>
                  <div className='second-column'>
                    <div className="social">
                      <img src={iconTwitter} alt="twitter" />
                      <p>{userData.twitter_username ? userData.twitter_username : 'Not Available'}</p>
                    </div>
                    <div className="social">
                      <img src={iconCompany} alt="company" />
                      <p>{userData.company ? userData.company : '@github'}</p>
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