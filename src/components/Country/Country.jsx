import './style2.css'
const Country = ({country}) => {
    const {name,flags}=country
    return (
        <div className='container2'>
            <h4>{name?.common}</h4>
            <div className='img-width'>
            <img className='img-width' src={flags?.png} alt="" />
            </div>
        </div>
    );
};

export default Country;