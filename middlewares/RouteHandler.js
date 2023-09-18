class Router {
    constructor() {
        this.routes = [];
    }

    get(url, func) {
        this.routes.push({ method: 'GET', url, handler: func });
    }

    post(url, func) {
        this.routes.push({ method: 'POST', url, handler: func });
    }

    delete(url, func) {
        this.routes.push({ method: 'DELETE', url, handler: func });
    }

    put(url, func) {
        this.routes.push({ method: 'PUT', url, handler: func });
    }

    request(req, res) {
        const method = req.method;
        const url = req.url;

        for (const route of this.routes) {
            const routeRegex = new RegExp(`^${route.url.replace(/:[^\s/]+/g, '([\\w-]+)')}$`);
            const matches = url.match(routeRegex);

            if (matches && route.method === method) {
                const params = {};
                const paramNames = route.url.match(/:[^\s/]+/g) || [];
                paramNames.forEach((paramName, index) => {
                    params[paramName.slice(1)] = matches[index + 1];
                });

                return route.handler(req, res, params.id);
            }
        }

        const resp = {
            success: false,
            error: 'Invalid Route',
        };
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(resp));
    }
}

module.exports = Router;
