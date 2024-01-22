export const SubmitForm = () => {
    return (
        <section className={'intro'}>
            <div className={'wrapper'}>
                <h1 className={'intro__title'}>
                    Discover Amazing places in Japan
                </h1>
                <p className={'intro__subtitle'}>
                    Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this if i had the energy but under the bed, for attack the child, open the door.
                </p>
                <form className={'search-form'}>
                    <fieldset className={'search-form__wrap'}>
                        <p className={'search-form__info'}>
                            <input name={'do'} type={'text'} className={'search-form__field'} placeholder={'What would you like to do?'}/>
                            <input name={'go'} type={'text'} className={'search-form__field'} placeholder={'Where would you like to go?'}/>
                            <button type={'submit'} className={'search-form__submit'}>SEARCH</button>
                        </p>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}