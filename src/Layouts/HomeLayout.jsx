import React from 'react'
import Header from '../Component/HeaderComponent/Header'
import HomeSlider from '../Component/HomeComponent/HomeSlider'
import HomeBanner from '../Component/HomeComponent/HomeBanner'
import HomeListItem from '../Component/HomeComponent/HomeListItem'
import HomeTopSeller from '../Component/HomeComponent/HomeTopSeller'
import HomeComingSoon from '../Component/HomeComponent/HomeComingSoon'
import HomeNewFeeds from '../Component/HomeComponent/HomeNewFeeds'
import HomeContact from '../Component/HomeComponent/HomeContact'
import Footer from '../Component/Footer/Footer'
import SideAction from '../Component/SideAction/SideAction'
import HomeListItemSeller from '../Component/HomeComponent/HomeListItemSeller'
import { ThemeProvider } from '@material-ui/core/styles'
const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
}
function HomeLayout(props) {
  return (
    <ThemeProvider theme={theme}>
      <SideAction />
      <Header />
      <HomeSlider />
      <HomeBanner />
      <HomeListItem row={2} title="Brand New Products" />
      <HomeTopSeller />
      <HomeListItemSeller row={1} title="Best Sell Products" />
      <HomeComingSoon />
      <HomeNewFeeds />
      <HomeContact />
      <Footer checkimg={false} />
    </ThemeProvider>
  )
}

export default HomeLayout
