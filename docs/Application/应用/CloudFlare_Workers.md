# Workers

## 例子

### [Pixiv图片](https://pixiv.cat/)

```javascript
addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  url.hostname = "i.pximg.net";

  let request = new Request(url, event.request);
  event.respondWith(
    fetch(request, {
      headers: {
        'Referer': 'https://www.pixiv.net/',
        'User-Agent': 'Cloudflare Workers'
      }
    })
  );
});

addEventListener(
  'fetch', event => {
    let url = new URL(event.request.url);
    url.host = 'raw.githubusercontent.com';
    url.pathname = 'Cat9528/xiaojj-cl1/master/'
     + Math.ceil(Math.random()*1000) + '.jpg';
    let request = new Request(url, event.request);
    event.respondWith(
      fetch(request)
    )
  }
)
```

### Google

```javascript
// List of domains bind to your WorkersProxy.
const domain_list = ['https://g.lhcdn.com/', 'https://google.hx.workers.dev/']

// Website you intended to retrieve for users.
const upstream = 'https://www.google.com/'

// Website you intended to retrieve for users using mobile devices.
const upstream_mobile = 'https://www.google.com/'

// Countries and regions where you wish to suspend your service.
const blocked_region = ['KP', 'SY', 'PK', 'CU']

// IP addresses which you wish to block from using your service.
const blocked_ip_address = ['0.0.0.0', '10.0.0.0']

addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
})

async function fetchAndApply(request) {

    const region = request.headers.get('cf-ipcountry').toUpperCase();
    const ip_address = request.headers.get('cf-connecting-ip');
    const user_agent = request.headers.get('user-agent');
    let response = null;
    let url = request.url;

    if (await device_status(user_agent)){
        upstream_domain = upstream
    } else {
        upstream_domain = upstream_mobile
    }

    for(let domain of domain_list) {
        url = url.replace(domain, upstream_domain)
    };

    if (blocked_region.includes(region)) {
        response = new Response('Access denied: WorkersProxy is not available in your region yet.', {
            status: 403
        });
    } else if(blocked_ip_address.includes(ip_address)){
        response = new Response('Access denied: Your IP address is blocked by WorkersProxy.', {
            status: 403
        });
    } else{
        let method = request.method;
        let headers = request.headers;
        response = fetch(url, {
            method: method,
            headers: headers
        })
    }
    return response;
}

async function device_status (userAgentInfo) {
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
```

### Wiki

```javascript
addEventListener('fetch', event => {
  event.respondWith(proxyRequest(event.request))
  
})

// https://www.recaled.com/16
// https://github.com/Dandelionss/CloudFlare-Workers/blob/master/wiki.js

/**
 * Respond to the request
 * @param {Request} request
 */
async function proxyRequest(request) {

    var rawUrl, prefix, targetUrl, newUrl;

    rawUrl = new URL(request.url);
    prefix = rawUrl.protocol+"//"+rawUrl.host+"/";

    if (rawUrl.href.startsWith(prefix)) {

        targetUrl = rawUrl.href.replace(new RegExp('^' + prefix), '');
        try{
            if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
                newUrl = new URL(rawUrl.protocol + '//' + targetUrl);
            } else {
                newUrl = new URL(targetUrl);
            }
                
        }catch(e){
            return new Response('Bad Request', { status: 400, statusText: 'Bad Request' }); 
        }

        if (newUrl && newUrl.host.indexOf("wikipedia.org") == -1){
            targetUrl = (isPC(request.headers.get('user-agent')) ? "zh.wikipedia.org/":"zh.m.wikipedia.org/") 
                + targetUrl;   
        }
               
        if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
            targetUrl = rawUrl.protocol + '//' + targetUrl;
        }

        console.log( targetUrl, newUrl ? newUrl.host : "0" );

        return await fetch(targetUrl);

    }

    return new Response('Bad Request', { status: 400, statusText: 'Bad Request' });
}

function isPC (userAgentInfo) {
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
```



## Reference

- [储存一些CloudFlare Workers脚本](https://github.com/Dandelionss/CloudFlare-Workers)   Effervescence uid:32895
- [jsproxy](https://github.com/EtherDream/jsproxy)
- [CF-Worker-Dir](https://github.com/sleepwood/CF-Worker-Dir/)
- [Workers-Proxy](https://github.com/Siujoeng-Lau/Workers-Proxy)

