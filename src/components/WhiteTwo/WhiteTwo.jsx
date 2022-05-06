import './WhiteTwo.css';

export default function WhiteTwo({
    preTitle,
    titleOne,
    titleTwo,
    subTitle,
    imageBg,
    podTitleOne,
    podTitleTwo,
    line
}){
    return(
        <section className='WhiteTwo_container'>
            <div className='titleUnionTwo'>
                <h3 className='whiteTwoTitle'>{preTitle}</h3>
                <div>{line}</div>
                <h1 className='whiteTwoTitleOne'>{titleOne}</h1>
                <div>{line}</div>
                <h1 className='whiteTwoTitleTwo'>{titleTwo}</h1>
                <div>{line}</div>
                <h3 className='whiteTwoTitleSub'>{subTitle}</h3>
           </div>
                <img className='bgImage' src={imageBg} alt="" />
           <div className='SubTitleUnion'>
                <h3 className='whiteTwoTitlePod1'>{podTitleOne}</h3>
                <h3 className='whiteTwoTitlePod2'>{podTitleTwo}</h3>
           </div>

        </section>
        )
    }