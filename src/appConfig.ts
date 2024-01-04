export default () => ({
    appConfig: process.env.NODE_ENV === 'dev' ? 'haha' : 'heihei',
})