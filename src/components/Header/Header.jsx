import './Header.css';




export default function Header() {
  return (
    <header className="header">
      <div className="containerHeader">

       <div className="logoImgHeader">  
              <div className="logo">
                <img src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" alt="" />
              </div>

            <div className="linksWords">
              <a href='#' className="headerHrefOne">MAN</a>
              <a href='#' className="headerHrefTwo">WOMEN</a>
              <a href='#' className="headerHrefThree">JERSEY</a>
              <a href='#' className="headerHrefFour">TEAMS</a>
              <a href='#' className="headerHrefFive">APP</a>
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
    </header>
  )
}

