import './BlackBlock.css';
export default function BlackBlock({
    title,
    coloredTitle,
    subTitleTwo,
    subTitle,
    products,
    imageLogoNba,

}){
    return(
        <section className="black_container">
            <h1 className='h1BlackTitle'>Jersay {title}</h1>
            <hr />
            <h2 className='h1BlackTitleColor'>{coloredTitle}</h2>
            <hr />
            <h2 className='h1BlackSubTitle'>{subTitle}</h2>
            <hr />
            <h2 className='h1BlackSubTitleTwo'>{subTitleTwo}</h2>
           
           

            <div className='products'>
                {products.map(item => {
                    return(
                        <div className='products-card'>
                            <div className='imageBackgraund'><img className='imagePosition' width={308} height={372} src={item.image} alt="" /></div>
                            <div className='products-card__name'>{item.name}</div>
                            <div className='products-card__description'>{item.description}</div>
                            <div className='products-card__price'>{item.price}</div>
                        </div>
                    )
                })}
                
            </div>

            <div className='logoImageClass'><img src={imageLogoNba} alt={imageLogoNba} /></div>

        </section>
    )
}