import React, { use, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import { get } from 'http';

interface Props {}

function CompanyPage({}: Props) {
    let {ticker} = useParams();
    const [company, setCompany] = React.useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            console.log("result from company profile API:");
            console.log(result);
            setCompany(result?.data[0]);
        }
        getProfileInit();
    }, []);

    return (
        <>
            {company ? (
                <div>{company.companyName}</div>
            ) : (<div>Company not found!</div>)}
        </>
    )
}

export default CompanyPage;