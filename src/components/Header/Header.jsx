// import { Router } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';

// import { BrowserRouter as  Switch, Route, Link} from "react-router-dom";


export default function Header() {
  return (
    <header className="header">
      <div className="containerHeader">

       <div className="logoImgHeader">  
              <div className="logo">
                <img src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" alt="" />
              </div>

            <div className="linksWords">
              <Link to='/' className="headerHrefOne">HOME</Link>
              <Link to='/about' className="headerHrefTwo">ABOUT</Link>
              <Link to='/sign' className="headerHrefThree">SIGN UP</Link>
              <Link to='#' className="headerHrefFour">TEAMS</Link>
              <Link to='#' className="headerHrefFive">APP</Link>
              {/* <link rel="stylesheet" href="" /> */}
            </div>

            <div className="headerImgs">
              <img className="sirch" src="http://cdn.onlinewebfonts.com/svg/img_128701.png" alt="" />
              <img className="like" src="https://cdn-icons-png.flaticon.com/512/2/2267.png" alt="" />
              <img className="basket" src="https://cdn-icons-png.flaticon.com/512/1374/1374128.png" alt="" />
            </div> 
        </div>
        
      </div>

     <div className="titleNBA"><a>JERSAY NIKE & NBA COLLABORATION</a></div>
     <div className="hrOne"></div>

     {/* <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/" component={About} />
         <Route exact path="/" component={Sign} />
       </Switch>
     </Router> */}
    </header>
  )
}

