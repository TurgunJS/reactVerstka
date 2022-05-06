import './BlackBlockTitle.css';

export default function BlackBlockTitle ({
    preText,
    preTextColor,
    firstText, 
    firstColor,
    secondText,
    secondColor,
    subText,
    subTextColor,
    line,

   }){
    return(
        <div className='containerTitle'>
         
        {preText && <div style={{color: preTextColor}} className='preText'>{preText}</div>}
        <div>{line}</div>

        {firstText && <div style={{color: firstColor}} className='first'>{firstText}</div>}
        <div>{line}</div>
        
        {secondText && <div style={{color: secondColor}} className='second'>{secondText}</div>}
        <div>{line}</div>
       
        {subText && <div style={{color: subTextColor}} className='subText'>{subText}</div>}
        <div>{line}</div>
      </div>
    )
}