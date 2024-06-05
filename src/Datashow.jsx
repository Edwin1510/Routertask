const DataShow = ({ image, title }) => {
    return (
        <>
            <div className="item">
                <img src={image} />
                <h4>{title}</h4>
            </div>
        </>
    )
}

export default DataShow
