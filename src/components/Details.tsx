export interface DetailProps{
    header:string,
    title?:string,
}
const Details = ({header,title}:DetailProps) => {
    return (
            <div className='flex items-center justify-center text-5xl font-medium text-black/78 mt-[60px]'  style={{ fontFamily: 'Vanitas' }}>
            <h1 className='text-color'>{header}</h1>
            <p>{title}</p>
        </div>
    );
}

export default Details;
