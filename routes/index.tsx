import MainPage from "../islands/MainPage.tsx";
import {FreshContext, Handlers, PageProps} from "https://deno.land/x/fresh@1.6.3/src/server/types.ts";
import {DataApi} from "../types.ts";
import Axios from "npm:axios"
import {response} from "https://esm.sh/v132/express@4.18.2/denonext/express.mjs";


const url = "https://www.arbeitnow.com/api/job-board-api"



export const handler: Handlers = {
    GET: async (_req: Request, context: FreshContext) => {
        const response: DataApi[] = await Axios
            .get<DataApi[]>(url);
        return context.render(response.data);
    },
}

const Page = (props: PageProps<DataApi>) => {
    const dataApi: DataApi[] = props.data;
    return (
        <MainPage data={dataApi}/>
    );
}

export default Page