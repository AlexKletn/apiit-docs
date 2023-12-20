import host from "@/api/host.ts";
import type {ApiDoc} from "@/components/TypeDoc/api-docs.types.ts";

const getDocs = host.createEndpoint<never, ApiDoc>('get', '/docs.json')

export default getDocs
