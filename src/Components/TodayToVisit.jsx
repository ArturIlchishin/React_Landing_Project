import one from '../Images/Today/1.png';
import two from '../Images/Today/2.png';
import three from '../Images/Today/3.png';
import four from '../Images/Today/4.png';
import five from '../Images/Today/5.png';
import six from '../Images/Today/6.png';

export const TodayToVisit = () => {
    return (
        <div className={'today'}>
            <div className={'today__wrapper'}>
                <h3 className={'today__title'}>
                    Today top places to visit
                </h3>

                {/*TOP 3 ITEMS*/}

                <div className={'today__grid'}>
                    <div className={'today__column'}>
                        <div className={'today__image'}>
                            <img src={one} alt={'Nagoya'} className={'today__pic'}/>
                            <div className={'today__image-text'}>
                                <h3 className={'today__image-text-title'}>NAGOYA</h3>
                            </div>
                        </div>
                        <p className={'today_desc'}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href={'#!'} className={'today__link'}>SEE MORE</a>
                    </div>
                    <div className={'today__column'}>
                        <div className={'today__image'}>
                            <img src={two} alt={'NIIGATA'} className={'today__pic'}/>
                            <div className={'today__image-text'}>
                                <h3 className={'today__image-text-title'}>NIIGATA</h3>
                            </div>
                        </div>
                        <p className={'today_desc'}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                            <a href={'#!'} className={'today__link'}>SEE MORE</a>
                    </div>
                    <div className={'today__column'}>
                        <div className={'today__image'}>
                            <img src={three} alt={'Osaka'} className={'today__pic'}/>
                            <div className={'today__image-text'}>
                                <h3 className={'today__image-text-title'}>OSAKA</h3>
                            </div>
                        </div>
                        <p className={'today_desc'}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href={'#!'} className={'today__link'}>SEE MORE</a>
                    </div>
                </div>

                {/*BOTTOM 3 ITEMS*/}

                <div className={'today__grid'}>
                    <div className={'today__column'}>
                        <div className={'today__image'}>
                            <img src={four} alt={'SAITAMA'} className={'today__pic'}/>
                            <div className={'today__image-text'}>
                                <h3 className={'today__image-text-title'}>SAITAMA</h3>
                            </div>
                        </div>
                        <p className={'today_desc'}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href={'#!'} className={'today__link'}>SEE MORE</a>
                    </div>
                    <div className={'today__column'}>
                        <div className={'today__image'}>
                            <img src={five} alt={'UENO'} className={'today__pic'}/>
                            <div className={'today__image-text'}>
                                <h3 className={'today__image-text-title'}>UENO</h3>
                            </div>
                        </div>
                        <p className={'today_desc'}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href={'#!'} className={'today__link'}>SEE MORE</a>
                    </div>
                    <div className={'today__column'}>
                        <div className={'today__image'}>
                            <img src={six} alt={'SHIBUYA'} className={'today__pic'}/>
                            <div className={'today__image-text'}>
                                <h3 className={'today__image-text-title'}>SHIBUYA</h3>
                            </div>
                        </div>
                        <p className={'today_desc'}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.
                        </p>
                        <a href={'#!'} className={'today__link'}>SEE MORE</a>
                    </div>
                </div>

            </div>
        </div>
    )
}