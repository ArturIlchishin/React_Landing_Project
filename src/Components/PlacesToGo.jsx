import first from '../Images/Places/1.png';
import second from '../Images/Places/2.png';
import third from '../Images/Places/3.png';
import fourth from '../Images/Places/4.png';
import fifth from '../Images/Places/5.png';

export const PlacesToGo = () => {
    return (
        <section className={'where-to-go'}>
            <div className={'where-to-go__wrapper'}>
                <div className={'where-to-go__top'}>
                    <h2 className={'where-to-go__top-title'}>Get inspired for your next trip</h2>
                    <a href={'#!'} className={'where-to-go__top-link'}>VIEW ALL</a>
                </div>
                <div className={'where-to-go__cards__top'}>
                    <div className={'where-to-go__card'}>
                        <a href={'#!'} className={'where-to-go__card-link'}>
                            <img src={first} alt={'Fuji'} className={'where-to-go__card-top-img'} />
                            {/*<div className={'where-to-go__card-text'}></div>*/}
                        </a>

                    </div>
                    <div className={'where-to-go__card'}>
                        <a href={'#!'} className={'where-to-go__card-link'}>
                            <img src={second} alt={'Kyoto'} className={'where-to-go__card-top-img'} />
                        </a>
                    </div>
                </div>

                <div className={'where-to-go__cards__bottom'}>
                    <div className={'where-to-go__card'}>
                        <a href={'#!'} className={'where-to-go__card-link'}>
                            <img src={third} alt={'Fuji'} className={'where-to-go__card-bottom-img'}  />
                        </a>
                    </div>
                    <div className={'where-to-go__card'}>
                        <a href={'#!'} className={'where-to-go__card-link'}>
                            <img src={fourth} alt={'Fuji'} className={'where-to-go__card-bottom-img'} />
                        </a>
                    </div>
                    <div className={'where-to-go__card'}>
                        <a href={'#!'} className={'where-to-go__card-link'}>
                            <img src={fifth} alt={'Fuji'} className={'where-to-go__card-bottom-img'} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}