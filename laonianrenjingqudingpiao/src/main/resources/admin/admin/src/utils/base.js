const base = {
    get() {
        return {
            url : "http://localhost:8080/laonianrenjingqudingpiao/",
            name: "laonianrenjingqudingpiao",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/laonianrenjingqudingpiao/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "景区订票系统"
        } 
    }
}
export default base
