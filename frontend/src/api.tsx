
import axios, {isAxiosError} from 'axios';
import { CompanySearch } from './company';

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    }

    catch (error) {
        if (isAxiosError(error)) {
            console.log('Axios error message: ', error.message);
            return error.message;
        }
        else {
            console.log('Unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}