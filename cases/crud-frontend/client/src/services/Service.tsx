export default abstract class Service {

    public apiUrl = 'http://localhost:9004'

    protected get(path: string, resolve: any, reject: any): any {
        return fetch(`${this.apiUrl}${path}`)
                .then(response=> {
                    if (response.status !== 200) throw { status: response.status }
                    resolve(response.json())
                })
                .catch(err=> {
                    reject(this.getErrorMessage(err.status))
                })
    }

    protected post(path: string, body: any): any {
        body.status = 200
        return Promise.resolve({ json: ()=> body })
    }

    protected delete(path: string, body: any): any {
        return Promise.resolve({ json: ()=> {
                return { 
                    status: 200
                } 
            }
        })
    }

    protected put(path: string, body: any): any {
        body.status = 200
        return Promise.resolve({ json: ()=> body })
    }

    public getErrorMessage(statusCode: number) {
        switch(statusCode) {
            case 404: return 'Not found'
            default: return 'Error'
        }
    }
}