import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ipl from "./pages/Ipl.js";
import Home from "./pages/Home.js";
import Cricket from "./pages/Cricket.js";
import Football from "./pages/Football.js";
import Tennis from "./pages/Tennis.js";
import TermUse from "./pages/content/TermUse.js";
import PrivacyPolicy from "./pages/content/PrivacyPolicy.js";
import CricketSchedule from "./pages/CricketSchedule.js";
import LiveCricketSchedule from "./pages/LiveCricketSchedule.js";
import Login from "./pages/Login.js";
import Iplschedule from "./pages/Iplschedule.js";
import Iplresult from "./pages/Iplresult.js";
import Pointable from "./pages/Pointable.js";
import Orangecap from "./pages/Orangecap.js";
import Purplecap from "./pages/Purplecap.js";
import Iplnews from "./pages/Iplnews.js";
import Stats from "./pages/Stats.js";
import Teamsquade from "./pages/Teamsquade.js";
import Videos from "./pages/Videos.js";
import Livescore from "./pages/Livescore.js";
import MatchLiveScore from "./pages/MatchLiveScore.js";
import Newsletter from "./pages/Newsletter.js";
import FootballSchedule from "./pages/FootballSchedule.js";
import Epl from "./pages/Epl.js";
import FootballDetailPage from "./pages/FootballDetailPage.js";
import FootballNews from "./pages/FootballNews.js";
import NationLeague from "./pages/NationLeague.js";
import News from "./pages/News.js";
import CleanSheet from "./pages/CleanSheet.js";
import Result from "./pages/Result.js";
import Plf from "./pages/Plf.js";
import Standing from "./pages/Standing.js";
import TopScore from "./pages/TopScore.js";
import TennisSchedule from "./pages/TennisSchedule.js";
import TennisSingle from "./pages/TennisSingle.js";
import CricketNews from "./pages/CricketNews.js";
import SocialNews from "./pages/SocialNews.js";
import Find from "./pages/Find.js";
import UserLogin from "./pages/UserLogin.js";
import Dashboard from "./pages/Dashboard.js";
import PrivateRoute from "./components/routes/PrivateRoute.js";
import AdminRoute from "./components/routes/AdminRoute.js";
import AdminDashboard from "./pages/admin/AdminDashboard.js";
import Userlist from "./pages/admin/Userlist.js";
import Category from "./pages/admin/Category.js";
import AddCategory from "./pages/admin/AddCategory.js";
import AddNewsLetter from "./pages/admin/AddNewsLetter.js";
import NewsletterList from "./pages/admin/NewsletterList.js";
import UpdateNewsletter from "./pages/admin/UpdateNewsletter.js";


function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route>
                  <Route index element={<Home />} />
                  <Route path="/dashboard" element={<PrivateRoute />}>
                     <Route path="" element={<Dashboard />} />
                  </Route>

                  <Route element={<PrivateRoute />}>

                  </Route>
                  <Route path="cricket" element={<Cricket />} />
                  <Route path="ipl" element={<Ipl />} />
                  <Route path="football" element={<Football />} />

                  <Route path="tennis" element={<Tennis />} />
                  <Route path="terms-of-use" element={<TermUse />} />
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="cricket-schedule" element={<CricketSchedule />} />
                  <Route path="live-cricket-score" element={<LiveCricketSchedule />} />
                  <Route path="login" element={<Login />} />
                  <Route path="ipl-schedule" element={<Iplschedule />} />
                  <Route path="ipl-result" element={<Iplresult />} />
                  <Route path="points-table" element={<Pointable />} />
                  <Route path="orange-cap" element={<Orangecap />} />
                  <Route path="ipl-purple-cap" element={<Purplecap />} />
                  <Route path="ipl-news" element={<Iplnews />} />
                  <Route path="stats" element={<Stats />} />
                  <Route path="teams-and-squads" element={<Teamsquade />} />
                  <Route path="videos" element={<Videos />} />
                  <Route path="live-score" element={<Livescore />} />
                  <Route path="matches-live-score" element={<MatchLiveScore />} />
                  <Route path="newsletters" element={<Newsletter />} />
                  <Route path="football-schedule" element={<FootballSchedule />} />
                  <Route path="epl" element={<Epl />} />
                  <Route path="football-detail-pages" element={<FootballDetailPage />} />
                  <Route path="football-details-news" element={<FootballNews />} />
                  <Route path="nations-league" element={<NationLeague />} />
                  <Route path="news" element={<News />} />
                  <Route path="clean-sheets" element={<CleanSheet />} />
                  <Route path="result" element={<Result />} />
                  <Route path="plf" element={<Plf />} />
                  <Route path="standings" element={<Standing />} />
                  <Route path="top-scorers" element={<TopScore />} />
                  <Route path="tennis-schedule" element={<TennisSchedule />} />
                  <Route path="tennis-single-page" element={<TennisSingle />} />
                  <Route path="cricket-news-breaking" element={<CricketNews />} />
                  <Route path="social-all-news" element={<SocialNews />} />
                  <Route path="find" element={<Find />} />
                  <Route path="n_login" element={<UserLogin />} />
               </Route>

               {/* Admin Route */}
               <Route path="/admin" element={<AdminRoute />}>
                  <Route path="home" element={<AdminDashboard />} />
                  <Route path="user-list" element={<Userlist />} />
                  <Route path="category" element={<Category />} />
                  <Route path="add-category" element={<AddCategory />} />
                  <Route path="add-newsletter" element={<AddNewsLetter />} />
                  <Route path="newsletter" element={<NewsletterList />} />
                  <Route path="edit-newsletter/:slug" element={<UpdateNewsletter />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
