import logoNbaNike from '../../Image/bugiTwo.png';
import logoNbaNikeBlack from '../../Image/bugi.png';
import whiteBackground from '../../Image/Pict.png';
import whiteTwoImg from '../../Image/bgWhite.png';
import whiteSlider from '../../Image/Slider.png';
import whiteDavid from '../../Image/david.png';
import whiteJohn from '../../Image/john.png';
import whiteJordan from '../../Image/jordan.png';

import WhiteBlock from '../../WhiteBlock/WhiteBlock';
import BlackBlock from '../../BlackBlock/BlackBlock';
import BlackBlockTitle from '../../BlackBlock/BlackBlockTitle';
import WhiteThree from '../../WhiteThree/WhiteThree';
import WhiteTwo from '../../WhiteTwo/WhiteTwo';
import Line from '../../Line/Line';

function App() {

const bestSellerProducts = [
    {
      name: 'LeBron James Lakers City Edition', 
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/884b3cb9-1716-45d3-a7ba-289fae30a14d/%D0%B4%D0%B6%D0%B5%D1%80%D1%81%D0%B8-%D0%BD%D0%B1%D0%B0-swingman-lakers-icon-edition-2020-hhgqSg.png',
      description: 'Nike NBA Swingman Jersey',
      price: '$290',
    },
    {
      name: 'LeBron James Lakers City Edition', 
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/884b3cb9-1716-45d3-a7ba-289fae30a14d/%D0%B4%D0%B6%D0%B5%D1%80%D1%81%D0%B8-%D0%BD%D0%B1%D0%B0-swingman-lakers-icon-edition-2020-hhgqSg.png',
      description: 'Nike NBA Swingman Jersey',
      price: '$290',
    },
  ]

return (
  <div className="App">

<WhiteBlock
        title="JERSAY "
        imageLogo={logoNbaNikeBlack}
        titleEnd="NBA"
        descriptionTitleWhite="whichever nba team your suport, get your jersey here today."
        bagroundImg={whiteBackground}
      />

      <BlackBlock 
          title="bestsellers" 
          coloredTitle={
              <BlackBlockTitle
                firstText="BESTSELLER"
                firstColor= "red"
              />
           }
         subTitle="collection"
         products={bestSellerProducts}
         subTitleTwo="The jerseys of the best nba players of the regular seasons."
         imageLogoNba={logoNbaNike } 
      />

     <BlackBlockTitle
        preText="Hall of fame"
        preTextColor="black"
        line={<Line colorHr="black"/>}
        firstText="BAsketball" 
        firstColor="red"
        secondText="Hall of fame"
        secondColor="black"
        subText="The naismith memorial basketball hall of fame is home to more than. Four nundred iductees and more than 40 000 square feet of basketball history."
        subTextColor="black"
    />
     <WhiteThree
        numberStr='2005  2006  2007  2008  2009  2010  2011  2012'
        imgLine={whiteSlider}
        jordan={whiteJordan}
        david={whiteDavid}
        john={whiteJohn}
        line={<Line colorHr="black"/>}
    />

      <BlackBlock 
          title="1992 team usa" 
          coloredTitle={
              <BlackBlockTitle
                firstText="1992 team usa"
                firstColor= "red"
              />
           }
         subTitle="Authentic edition"
         products={bestSellerProducts}
         subTitleTwo="Jerseys of the united sates man’s olympics basketball team, which represented the us of a in the 1992 summer olympics in barcelona."
      />

      <WhiteTwo
          line={<Line colorHr="black"/>}
          preTitle="The application"
          titleOne="The nike"
          titleTwo="App"
          subTitle="Here you can find many interesting and useful from nike. Download the application from nike."
          imageBg={whiteTwoImg}
          podTitleOne="Nike Traning Club"
          podTitleTwo="Home workouts & fitness plans"
      />     

    </div>
  );
}

export default App;
