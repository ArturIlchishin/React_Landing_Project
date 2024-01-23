import odigo from '../Images/odigo-logo.png'

export const FooterComponent = () => {
    return (
        <footer className={'footer'}>
            <div className={'footer__grid'}>
                <div className={'footer__image'}>
                    <img src={odigo} alt={'Odigo'} className={'footer__pic'}/>
                </div>

                <div className={'footer__columns'}>
                    <div className={'footer__column'}>
                        <a href={'#!'} className={'footer__link'}>Company</a>
                        <a href={'#!'} className={'footer__link'}>About</a>
                        <a href={'#!'} className={'footer__link'}>Team</a>
                        <a href={'#!'} className={'footer__link'}>Careers</a>
                        <a href={'#!'} className={'footer__link'}>Privacy Policy</a>
                    </div>
                    <div className={'footer__column'}>
                        <a href={'#!'} className={'footer__link'} a href={'#!'} className={'footer__link'}>Locations</a>
                        <a href={'#!'} className={'footer__link'}>Tokyo</a>
                        <a href={'#!'} className={'footer__link'}>Kyoto</a>
                        <a href={'#!'} className={'footer__link'}>Osaka</a>
                        <a href={'#!'} className={'footer__link'}>Hokkaido</a>
                    </div>
                    <div className={'footer__column'}>
                        <a href={'#!'} className={'footer__link'}>Social Media</a>
                        <a href={'#!'} className={'footer__link'}>Facebook</a>
                        <a href={'#!'} className={'footer__link'}>Twitter</a>
                        <a href={'#!'} className={'footer__link'}>Instagram</a>
                        <a href={'#!'} className={'footer__link'}>YouTube</a>
                    </div>
                </div>




            </div>
        </footer>
    )
}