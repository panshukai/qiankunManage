export const Fetch = async (actionType, args = {}, timeout) => {
    return new Promise((resolve, reject) => {
        let data = {
            paras: {
                AppID: "ManageService",
                MethodName: actionType,
                Parameters: JSON.stringify(args),
                Revision: 1,
            }
        }
        axios({
            url: '/WebHandler.ashx',
            method: 'post',
            data: data,
            timeout: timeout || 0,
        }).then(res => {
            resolve(res);
        }).catch(rej => {
            let obj = {
                message: '网络异常，请稍后重试'
            }
            resolve(obj);
        })
    })
}