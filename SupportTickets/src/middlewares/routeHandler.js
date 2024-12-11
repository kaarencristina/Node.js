import {routes} from "../routes.js"



export function routeHandler(request,response){
    const route=routes.find((route)=>{
        return route.method===request.method&&routepath===request.url
    })

    if (route){
        return route.controller(request,response)
    }
    return response.whiteHear(404).end("not found")

}