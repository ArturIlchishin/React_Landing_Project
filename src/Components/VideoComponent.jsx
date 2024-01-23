export const VideoComponent = () => {
    return (
        <div className={'videos'}>
            <div className={'videos__wrapper'}>
                <div className={'videos__item'}></div>

                <iframe className={'videos__elem'} src="https://www.youtube.com/embed/ehTuatSx5Wc?si=u6sthRM4XFk0qzYT"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                {/*<iframe className={'videos__elem'} src="https://www.youtube.com/embed/jfKfPfyJRdk?si=ULKThK-cJELL3sXa"*/}
                {/*        title="YouTube video player" frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                {/*        allowFullScreen></iframe>*/}

            </div>
        </div>
    )
}