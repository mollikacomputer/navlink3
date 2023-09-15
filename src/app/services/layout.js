export const generateMetadata = () =>{
    return{
        title:'Service || Ranjit',
        description:'Generate meta data with services description',
    }
}

const layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default layout;