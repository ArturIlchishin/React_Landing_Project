import church from '../Images/Prefectures/Image (1).png'
import stairs from '../Images/Prefectures/Image (2).png'


export const Prefectures = () => {
    return (
        <div className={'prefectures'}>
            <div className={'prefectures__wrapper'}>
                <div className={'prefectures__grid'}>
                    <div className={'prefectures__column-pic'}>
                        <img src={church} alt={'Tottori'} className={'prefectures__img'}/>
                    </div>
                    <div className={'prefectures__info'}>
                        <h3 className={'prefectures__column-title'}>Prefecture in Focus: Tottori</h3>
                        <p className={'prefectures__column-description'}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door.
                        </p>
                        <a href={'#!'} className={'prefectures__link'}>VIEW MORE</a>
                    </div>
                </div>

                <div className={'prefectures__grid'}>
                    <div className={'prefectures__info'}>
                        <h3 className={'prefectures__column-title'}>Featured Neighborhood: Kyoto’s Arashiyama</h3>
                        <p className={'prefectures__column-description'}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door.
                        </p>
                        <a href={'#!'} className={'prefectures__link'}>VIEW MORE</a>
                    </div>
                    <div className={'prefectures__column-pic'}>
                        <img src={stairs} alt={'Tottori'} className={'prefectures__img second'}/>
                    </div>
                </div>

            </div>
        </div>
    )
}


// <div className={'prefectures__grid'}>
//     <div className={'prefectures__column'}>
//         <h3 className={'prefectures__column-title'}>Featured Neighborhood: Kyoto’s Arashiyama</h3>
//         <p className={'prefectures__column-description'}>Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door.
//         </p>
//         <a href={'#!'} className={'prefectures__link'}>VIEW MORE</a>
//         <div className={'prefectures__column-pic'}>
//             <img src={stairs} alt={'Tottori'} className={'prefectures__img second'}/>
//         </div>
//     </div>
// </div>