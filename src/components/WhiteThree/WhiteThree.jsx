import './WhiteThree.css'

export default function WhiteThree ({
    numberStr,
    imgLine,
    jordan,
    david,
    john,
    line,

})

{
    return(
        <div className='WhiteThreeContainer'>
            <div className='numberStr'>  {numberStr} {}</div>
            <div>{line}</div>
            <img className='lineYear' src={imgLine} alt="" />
            <div>{line}</div>
            <img className='nameOne' src={jordan} alt="" />
            <div>{line}</div>
            <img className='nameTwo' src={david} alt="" />
            <div>{line}</div>
            <img className='nameThree' src={john} alt="" />
            <div className='MarginLine'>{line}</div>
        </div>
    )
}