import {serve} from 'bun';

serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === '/'){
            return new Response('Hello pk bol raha hu!!', {status: 200})
        } else if(url.pathname === '/tea'){
            return new Response('chai piye ga kya!!', {status: 200})
        }else{
            return new Response('file nai mil rhai bidu!!', {status: 404})
        }
    },
    port: 3000,
    host:'127.0.0.1'
})