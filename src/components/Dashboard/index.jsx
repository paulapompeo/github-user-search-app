import { useState } from 'react'
import api from '../../services/api'

import iconSun from '../../assets/icon-sun.svg'
import iconSearch from '../../assets/icon-search.svg'
import iconCompany from '../../assets/icon-company.svg'
import iconLocation from '../../assets/icon-location.svg'
// import iconMoon from '../../assets/icon-moon.svg'
import iconTwitter from '../../assets/icon-twitter.svg'
import iconWebsite from '../../assets/icon-website.svg'

import avatar from '../../assets/profile.png'

import * as S from './styles'

export function Dashboard() {

  // const [user, setUser] = useState('octocat');
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState({});
  const [inputError, setInputError] = useState('');

  console.log({ inputError })
  console.log({ userData })

  console.log(userData.name)


  async function handleAddRepositories(event) {
    event.preventDefault()

    if (!user) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }
    try {
      const response = await api.get(`users/${user}`)
      const { data } = response

      setUserData(data)
      setUser(''); //para limpar o input
      setInputError('');
    } catch {
      setInputError('Erro na busca por esse usario'); // todo: change errors
    }
  }

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
            <button
              type="submit"
              // onClick={() => validateEmail(email)}
            >
              Search
            </button>
          </S.Form>
          <S.UserData>
            <img src={userData.avatar_url ? userData.avatar_url : avatar} alt="avatar" />
            <S.UserInfo>
              <div className="user-main-info">
                <div className="user-name">
                  <h2>{userData.name ? userData.name : 'The Octocat'}</h2>
                  <span>@octocat</span>
                </div>
                {/* TODO: fazer função para horário */}
                <p>{userData.created_at ? `Joined ${userData.created_at}` : 'Joined 25 Jan 2011'}</p> 
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

// TODO: o perfil octocat realmente existe, então após submeter as alterações do front para p
// front-end mentor, alterar para 'Not Available' as infos de social.