import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Sam' };
  return (
      <section className='home'>
          <div className='home-content'>
              <header className='home-header'>
                  <HeaderBox
                      type="greeting"
                      title="Welcome"
                      user={loggedIn?.firstName || 'Guest'}
                      subtext="Access and manage your account and translations efficiently. "
                  />
                  <TotalBalanceBox
                      accounts={[]}
                      totalBanks={1}
                      totalCurrentBalance={1250.35}
                  />
                      RECENT TRANSACTIONS
              </header>
          </div>
          <RightSidebar />
      </section>
  )
}

export default Home