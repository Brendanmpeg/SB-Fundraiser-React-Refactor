import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("Homepages/Claude", "routes/Homepage.tsx"),
    route("Style/SubCard", "routes/SubmitCardStyleGuild.tsx")
    // route("Stats", "routes/sellerStats")
] satisfies RouteConfig;
