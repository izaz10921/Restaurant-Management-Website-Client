import { Helmet } from 'react-helmet';
/* eslint-disable react/prop-types */
const PageTitle = ({title}) => {
    return (
        
            <Helmet><title>{title}</title></Helmet>
        
    );
};

export default PageTitle;