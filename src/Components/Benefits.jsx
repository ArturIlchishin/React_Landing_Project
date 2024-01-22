import Person from '../Images/person.png'
import Church from '../Images/church.png'
import Shop from '../Images/shop.png'


export const Benefits = () => {
    return (
        <section className={'benefits'}>
            <div className={'benefits__wrapper'}>
                <h2 className={'benefits__title'}>Benefits of Odigo</h2>
                <div className={'benefits__cards'}>
                    <div className={'benefits__card'}>
                        <div className={'benefits__card-pic'}>
                            <img src={Church} alt={'Church'} className={'benefits__cards-thumb'}/>
                        </div>
                        <h3 className={'benefits__cards-title'}>Welcome to Odigo!</h3>
                        <p className={'benefits__cards-description'}>
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                        </p>
                        <a href={'#!'} className={'benefits__cards-link'}>LEARN MORE</a>
                    </div>
                    <div className={'benefits__card'}>
                        <div className={'benefits__card-pic'}>
                            <img src={Person} alt={'Person'} className={'benefits__cards-thumb'}/>
                        </div>
                        <h3 className={'benefits__cards-title'}>Your Personal Japan Guide</h3>
                        <p className={'benefits__cards-description'}>
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                        </p>
                        <a href={'#!'} className={'benefits__cards-link'}>LEARN MORE</a>
                    </div>
                    <div className={'benefits__card'}>
                        <div className={'benefits__card-pic'}>
                            <img src={Shop} alt={'Shop'} className={'benefits__cards-thumb'}/>
                        </div>
                        <h3 className={'benefits__cards-title'}>Promoting Local Businesses</h3>
                        <p className={'benefits__cards-description'}>
                            Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                        </p>
                        <a href={'#!'} className={'benefits__cards-link'}>LEARN MORE</a>

                    </div>
                </div>
            </div>

        </section>
    )
}