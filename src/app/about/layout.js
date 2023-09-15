
export const generateMetadata = ()=>{
    return {
        title:'About generateMetadata',
        description:'About meta data  Description',
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