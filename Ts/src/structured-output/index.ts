import {z} from "zod";

const ResponseFormatterSchema = z.object({
    capital: z.string().describe("Capital of the country"),
    funFact:z.string().describe("any funfact about country")
});


export default ResponseFormatterSchema;