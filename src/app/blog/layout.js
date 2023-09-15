

export const generateMetadata = ()=>{
    return {
        title:'Blog Meta Data With Ranjit',
    }
};

const layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default layout;