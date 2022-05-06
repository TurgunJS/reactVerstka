import './WhiteBlock.css';

export default function WhiteBlock({
    title,
    imageLogo,
    titleEnd,
    descriptionTitleWhite,
    bagroundImg
}){
    return(
        <section className='WhiteBlock_container'>
            <div className='titleUnion'>
                <h1 className='whiteTitle'>{title}</h1>
                <img className='whiteTitleImg' src={imageLogo} alt={imageLogo} />
                <h1 className='whiteTitleEnd'>{titleEnd}</h1>
           </div>
           <hr />
            <div className='flexFix'>
                    <div className='descriptionTitleWhiteDiv'> 
                        <h2 className='descriptionTitleWhite'>{descriptionTitleWhite}</h2>
                            <hr id='shortLine'/>
                    </div>
            </div>

           <br />
           <img className='whiteBlockBackground' src={bagroundImg} alt={bagroundImg} />
        </section>
    )
}